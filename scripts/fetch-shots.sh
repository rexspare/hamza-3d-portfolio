#!/usr/bin/env bash
# Downloads real screenshots for each project via thum.io into public/images.
# Safe to re-run; only failures need re-fetching.
set -u

OUT_DIR="public/images"
BASE="https://image.thum.io/get/noanimate/wait/12/width/1280"

mkdir -p "$OUT_DIR"

# slug|live URL
projects=(
  "swimtofly|https://play.google.com/store/apps/details?id=com.swimtofly.android"
  "nomadz|https://apps.apple.com/pk/app/nomadz/id6448633205"
  "plative|https://play.google.com/store/apps/details?id=com.Plative"
  "acheev|https://apps.apple.com/us/app/acheev-performance-app/id1636595346"
  "tasdating|https://play.google.com/store/apps/details?id=com.tasdatingkit"
  "mangia|https://apps.apple.com/us/app/mangia-rewards-dining-offers/id1659785521"
  "winelikes|https://apps.apple.com/us/app/winelikes/id1604508326"
  "pehchaan|https://play.google.com/store/apps/details?id=org.psca.pehchaanbalochistan"
  "icr|https://play.google.com/store/apps/details?id=com.itcentre"
  "roskalava|https://play.google.com/store/apps/details?id=com.roskalava.app"
  "barcelona|https://play.google.com/store/apps/details?id=com.cityguide.barcelonacityguideapp"
  "crbo|https://apps.apple.com/us/app/crbo/id1642157751"
  "quran|https://play.google.com/store/apps/details?id=com.quran_only_urdu_audio"
  "luxurian|https://apps.apple.com/pk/app/luxurian-kw/id6449488950"
  "dialed|https://play.google.com/store/apps/details?id=com.stationaryblenew"
  "tern|https://play.google.com/store/apps/details?id=com.ternrewards"
  "fmhero|https://apps.apple.com/us/app/fmhero/id1570918942"
  "planlocal|https://play.google.com/store/apps/details?id=com.EventZone"
  "glowvia|https://apps.apple.com/us/app/glowvia/id6760437185"
  "goalin|https://play.google.com/store/apps/details?id=com.magrillefoot"
  "qalbi|https://apps.apple.com/us/app/qalbi-soulmate-healing/id6758221871"
  "clearpast|https://apps.apple.com/ye/app/clearpast-ai-photo-enhancer/id6480299547"
  "1earth|https://www.1earth.site"
  "d12|https://d12-solutions.com/"
  "italianorganic|https://www.italianorganic.store/"
  "roskalava-marketplace|https://www.roskalava.net/"
  "kohinoorbazar|https://play.google.com/store/apps/details?id=com.rsdtech.kohinoorbazar"
)

fetch_one() {
  local slug="$1" url="$2" out="$OUT_DIR/$1.png"
  local tries=0
  while [ "$tries" -lt 3 ]; do
    tries=$((tries + 1))
    curl -s -L --max-time 70 -o "$out" "$BASE/$url"
    if file "$out" 2>/dev/null | grep -qi 'PNG image'; then
      local sz
      sz=$(wc -c < "$out" | tr -d ' ')
      echo "OK    $slug ($sz bytes)"
      return 0
    fi
    sleep 3
  done
  echo "FAIL  $slug -> $url"
  rm -f "$out"
  return 1
}

export -f fetch_one
export OUT_DIR BASE

printf '%s\n' "${projects[@]}" \
  | xargs -P 5 -I {} bash -c 'IFS="|" read -r s u <<< "{}"; fetch_one "$s" "$u"'

echo "---- done ----"
