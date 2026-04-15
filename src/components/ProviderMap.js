'use client';

import { useEffect, useRef, useState } from 'react';

const CITY_COORDS = {
  'San Francisco,California,United States': [37.7749, -122.4194],
  'Los Angeles,California,United States': [34.0522, -118.2437],
  'Beverly Hills,California,United States': [34.0736, -118.4004],
  'Bell Gardens,California,United States': [33.9653, -118.1514],
  'Encinitas,California,United States': [33.0369, -117.2920],
  'Costa Mesa,California,United States': [33.6412, -117.9187],
  'San Jose,California,United States': [37.3382, -121.8863],
  'Ontario,California,United States': [34.0633, -117.6509],
  'East Hollywood,California,United States': [34.0878, -118.2948],
  'San Diego,California,United States': [32.7157, -117.1611],
  'Westlake Village,California,United States': [34.1417, -118.8053],
  'New York,New York,United States': [40.7128, -74.0060],
  'Boston,Massachusetts,United States': [42.3601, -71.0589],
  'Chicago,Illinois,United States': [41.8781, -87.6298],
  'Denver,Colorado,United States': [39.7392, -104.9903],
  'Aurora,Colorado,United States': [39.7294, -104.8319],
  'Miami,Florida,United States': [25.7617, -80.1918],
  'Seattle,Washington,United States': [47.6062, -122.3321],
  'Portland,Oregon,United States': [45.5152, -122.6784],
  'Phoenix,Arizona,United States': [33.4484, -112.0740],
  'Scottsdale,Arizona,United States': [33.4942, -111.9261],
  'Dallas,Texas,United States': [32.7767, -96.7970],
  'Houston,Texas,United States': [29.7604, -95.3698],
  'San Antonio,Texas,United States': [29.4241, -98.4936],
  'Austin,Texas,United States': [30.2672, -97.7431],
  'Philadelphia,Pennsylvania,United States': [39.9526, -75.1652],
  'Pittsburgh,Pennsylvania,United States': [40.4406, -79.9959],
  'Atlanta,Georgia,United States': [33.7490, -84.3880],
  'Minneapolis,Minnesota,United States': [44.9778, -93.2650],
  'Cleveland,Ohio,United States': [41.4993, -81.6944],
  'Columbus,Ohio,United States': [39.9612, -82.9988],
  'Baltimore,Maryland,United States': [39.2904, -76.6122],
  'New Haven,Connecticut,United States': [41.3083, -72.9279],
  'Norfolk,Virginia,United States': [36.8508, -76.2859],
  'Charlottesville,Virginia,United States': [38.0293, -78.4767],
  'Richmond,Virginia,United States': [37.5407, -77.4360],
  'Nashville,Tennessee,United States': [36.1627, -86.7816],
  'Detroit,Michigan,United States': [42.3314, -83.0458],
  'Ann Arbor,Michigan,United States': [42.2808, -83.7430],
  'Indianapolis,Indiana,United States': [39.7684, -86.1581],
  'Salt Lake City,Utah,United States': [40.7608, -111.8910],
  'Raleigh,North Carolina,United States': [35.7796, -78.6382],
  'Charlotte,North Carolina,United States': [35.2271, -80.8431],
  'Chapel Hill,North Carolina,United States': [35.9132, -79.0558],
  'Milwaukee,Wisconsin,United States': [43.0389, -87.9065],
  'Madison,Wisconsin,United States': [43.0731, -89.4012],
  'Kansas City,Missouri,United States': [39.0997, -94.5786],
  'St. Louis,Missouri,United States': [38.6270, -90.1994],
  'Louisville,Kentucky,United States': [38.2527, -85.7585],
  'Jacksonville,Florida,United States': [30.3322, -81.6557],
  'Tampa,Florida,United States': [27.9506, -82.4572],
  'Orlando,Florida,United States': [28.5383, -81.3792],
  'Fort Lauderdale,Florida,United States': [26.1224, -80.1373],
  'Washington,District of Columbia,United States': [38.9072, -77.0369],
  'Montréal,Québec,Canada': [45.5017, -73.5673],
  'Toronto,Ontario,Canada': [43.6532, -79.3832],
  'Vancouver,British Columbia,Canada': [49.2827, -123.1207],
  'Ottawa,Ontario,Canada': [45.4215, -75.6972],
  'Oakville,Ontario,Canada': [43.4675, -79.6877],
  'Guadalajara,Jalisco,Mexico': [20.6597, -103.3496],
  'Zapopan,Jalisco,Mexico': [20.7215, -103.3918],
  'Mexico City,null,Mexico': [19.4326, -99.1332],
  'Tijuana,Baja California,Mexico': [32.5149, -117.0382],
  'Marbella,Málaga,Spain': [36.5099, -4.8861],
  'Barcelona,Catalonia,Spain': [41.3874, 2.1686],
  'Madrid,null,Spain': [40.4168, -3.7038],
  'London,England,United Kingdom': [51.5074, -0.1278],
  'Brighton,England,United Kingdom': [50.8225, -0.1372],
  'Brussels,null,Belgium': [50.8503, 4.3517],
  'Antwerp,Antwerp,Belgium': [51.2194, 4.4025],
  'Amsterdam,null,Netherlands': [52.3676, 4.9041],
  'Berlin,null,Germany': [52.5200, 13.4050],
  'Munich,Bavaria,Germany': [48.1351, 11.5820],
  'Düsseldorf,North Rhine-Westphalia,Germany': [51.2277, 6.7735],
  'Frankfurt,Hesse,Germany': [50.1109, 8.6821],
  'Paris,Île-de-France,France': [48.8566, 2.3522],
  'Helsinki,null,Finland': [60.1699, 24.9384],
  'Warsaw,Masovia,Poland': [52.2297, 21.0122],
  'Prague,null,Czech Republic': [50.0755, 14.4378],
  'Vienna,null,Austria': [48.2082, 16.3738],
  'Zurich,null,Switzerland': [47.3769, 8.5417],
  'Rome,Lazio,Italy': [41.9028, 12.4964],
  'Milan,Lombardy,Italy': [45.4642, 9.1900],
  'Bangkok,null,Thailand': [13.7563, 100.5018],
  'Seoul,null,South Korea': [37.5665, 126.9780],
  'Mumbai,Maharashtra,India': [19.0760, 72.8777],
  'Chennai,Tamil Nadu,India': [13.0827, 80.2707],
  'Bangalore,Karnataka,India': [12.9716, 77.5946],
  'Nagercoil,Tamil Nadu,India': [8.1833, 77.4119],
  'Taipei City,null,Taiwan': [25.0330, 121.5654],
  'Istanbul,Marmara,Turkey': [41.0082, 28.9784],
  'Ankara,Ankara,Turkey': [39.9334, 32.8597],
  'Antalya,Antalya,Turkey': [36.8969, 30.7133],
  'Buenos Aires,Buenos Aires,Argentina': [-34.6037, -58.3816],
  'Córdoba,Córdoba,Argentina': [-31.4201, -64.1888],
  'São Paulo,São Paulo,Brazil': [-23.5505, -46.6333],
  'Blumenau,Santa Catarina,Brazil': [-26.9194, -49.0661],
  'Lima,Lima,Peru': [-12.0464, -77.0428],
  'Sydney,New South Wales,Australia': [-33.8688, 151.2093],
  'Melbourne,Victoria,Australia': [-37.8136, 144.9631],
  'Brisbane,Queensland,Australia': [-27.4698, 153.0251],
  'Perth,Western Australia,Australia': [-31.9505, 115.8605],
  'Adelaide,South Australia,Australia': [-34.9285, 138.6007],
  'Auckland,North Island,New Zealand': [-36.8485, 174.7633],
  'Antelias,Matn District,Lebanon': [33.9164, 35.5944],
  'Shiraz,Fars,Iran': [29.5918, 52.5837],
  'Yerevan,null,Armenia': [40.1792, 44.4991],
  'Manila,null,Phillipines': [14.5995, 120.9842],
};

function getCoords(provider) {
  const key1 = `${provider.city},${provider.state},${provider.country}`;
  if (CITY_COORDS[key1]) return CITY_COORDS[key1];

  const key2 = `${provider.city},null,${provider.country}`;
  if (CITY_COORDS[key2]) return CITY_COORDS[key2];

  for (const [coordKey, coords] of Object.entries(CITY_COORDS)) {
    if (provider.city && coordKey.startsWith(provider.city + ',')) return coords;
  }
  return null;
}

export default function ProviderMap({ providers, onProviderClick }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (mapInstance.current) return;

    const loadMap = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current || mapInstance.current) return;

      const map = L.map(mapRef.current, {
        center: [30, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 14,
        scrollWheelZoom: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const createIcon = (count) => {
        const size = count > 10 ? 40 : count > 5 ? 34 : count > 1 ? 28 : 22;
        return L.divIcon({
          className: '',
          html: `<div style="
            width:${size}px;height:${size}px;
            background:linear-gradient(135deg,#D4537E,#378ADD);
            border:2px solid white;border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            color:white;font-size:${count > 1 ? '11px' : '0'};font-weight:600;
            font-family:Inter,sans-serif;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
            cursor:pointer;
          ">${count > 1 ? count : ''}</div>`,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      };

      const cityGroups = {};
      providers.forEach((p) => {
        const coords = getCoords(p);
        if (!coords) return;
        const key = coords.join(',');
        if (!cityGroups[key]) cityGroups[key] = { coords, providers: [] };
        cityGroups[key].providers.push(p);
      });

      Object.values(cityGroups).forEach((group) => {
        const marker = L.marker(group.coords, {
          icon: createIcon(group.providers.length),
        }).addTo(map);

        const city = group.providers[0].city || 'Unknown';
        const country = group.providers[0].country;
        const popupHtml = `
          <div style="max-height:220px;overflow-y:auto;min-width:200px;">
            <strong style="font-size:0.85rem;">${city}, ${country}</strong>
            <p style="font-size:0.72rem;color:#6B6369;margin:4px 0 8px;">
              ${group.providers.length} provider${group.providers.length !== 1 ? 's' : ''}
            </p>
            ${group.providers.map((p) => `
              <div style="padding:6px 0;border-top:1px solid #eee;">
                <div style="font-size:0.8rem;font-weight:500;">${p.name}</div>
                <div style="font-size:0.7rem;color:#9B939A;margin-top:2px;">
                  ${p.specialties.slice(0, 2).join(', ')}${p.specialties.length > 2 ? ' +' + (p.specialties.length - 2) + ' more' : ''}
                </div>
                ${p.rating ? `<div style="font-size:0.7rem;color:#D4537E;margin-top:1px;">★ ${p.rating}${p.reviewCount ? ' (' + p.reviewCount + ')' : ''}</div>` : ''}
              </div>
            `).join('')}
          </div>
        `;
        marker.bindPopup(popupHtml, { maxWidth: 300 });
      });

      mapInstance.current = map;
      setLoaded(true);
    };

    loadMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [providers, onProviderClick]);

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="w-full rounded-xl"
        style={{
          height: '480px',
          border: '0.5px solid var(--color-border)',
          background: 'var(--color-bg-tertiary)',
        }}
      />
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl"
          style={{ background: 'var(--color-bg-tertiary)' }}
        >
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Loading map...</p>
        </div>
      )}
    </div>
  );
}
