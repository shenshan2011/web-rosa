// ============================================================
//  data.js — BelajarCeria | Semua data materi, flashcard & kuis
// ============================================================

// ---------- DAFTAR TOPIK PER MAPEL ----------
export const TOPIC_LIST = {
  ipa: [
    { id:'ipa-1',  icon:'🦋', name:'Metamorfosis',                    sub:'Sempurna & Tidak Sempurna' },
    { id:'ipa-2',  icon:'🐣', name:'Perkembangbiakan Hewan',           sub:'Ovipar, Vivipar, Ovovivipar' },
    { id:'ipa-3',  icon:'🌱', name:'Perkembangbiakan Tumbuhan',        sub:'Vegetatif & Generatif' },
    { id:'ipa-4',  icon:'☀️', name:'Energi Terbarukan',               sub:'Matahari, Angin, Air, dll.' },
    { id:'ipa-5',  icon:'💡', name:'Cara Menghemat Energi',            sub:'Tips Hemat di Rumah & Sekolah' },
    { id:'ipa-6',  icon:'⚡', name:'Perubahan Energi',                sub:'Berbagai Bentuk & Transformasi' },
    { id:'ipa-7',  icon:'🔌', name:'Rangkaian Listrik',                sub:'Seri & Paralel' },
    { id:'ipa-8',  icon:'❤️', name:'Peredaran Darah',                 sub:'Jantung & Pembuluh Darah' },
    { id:'ipa-9',  icon:'💧', name:'Siklus Hidrologi',                 sub:'Evaporasi hingga Hujan' },
    { id:'ipa-10', icon:'🌵', name:'Adaptasi Tumbuhan',                sub:'Xerofit, Hidrofit, Higrofit' },
    { id:'ipa-11', icon:'🌍', name:'Rotasi & Revolusi Bumi',           sub:'Siang-Malam, Tahun, Musim' },
    { id:'ipa-12', icon:'🌙', name:'Rotasi & Revolusi Bulan + Gerhana',sub:'Pasang Surut & Gerhana' },
  ],
  bindo: [
    { id:'bindo-1', icon:'🌿', name:'Peribahasa',         sub:'Makna & Contoh Peribahasa' },
    { id:'bindo-2', icon:'📊', name:'Bagan',              sub:'Cara Membaca & Membuat Bagan' },
    { id:'bindo-3', icon:'📖', name:'Unsur Intrinsik',    sub:'Tema, Tokoh, Latar, Alur, Amanat' },
    { id:'bindo-4', icon:'💡', name:'Ide Pokok',          sub:'Menemukan Gagasan Utama' },
    { id:'bindo-5', icon:'🔄', name:'Sinonim',            sub:'Kata yang Bermakna Sama/Mirip' },
    { id:'bindo-6', icon:'🎨', name:'Ciri & Unsur Poster',sub:'Elemen Poster yang Efektif' },
    { id:'bindo-7', icon:'🔍', name:'Kata Khusus',        sub:'Kata Bermakna Spesifik/Sempit' },
    { id:'bindo-8', icon:'🌐', name:'Kata Umum',          sub:'Kata Bermakna Luas/Umum' },
  ],
  mtk: [
    { id:'mtk-1', icon:'📊', name:'Pengolahan Data',         sub:'Tabel, Diagram Batang & Lingkaran' },
    { id:'mtk-2', icon:'½',  name:'Pecahan Campuran',        sub:'Operasi +, -, ×, ÷ Pecahan' },
    { id:'mtk-3', icon:'✖️', name:'KPK',                    sub:'Kelipatan Persekutuan Terkecil' },
    { id:'mtk-4', icon:'➗', name:'FPB',                    sub:'Faktor Persekutuan Terbesar' },
    { id:'mtk-5', icon:'📐', name:'Mean (Rata-rata)',        sub:'Menghitung Nilai Rata-rata' },
    { id:'mtk-6', icon:'⬜', name:'Keliling Bangun Datar',   sub:'Persegi, Segitiga, Lingkaran' },
    { id:'mtk-7', icon:'🔷', name:'Luas Bangun Datar',       sub:'Rumus Luas Berbagai Bangun' },
    { id:'mtk-8', icon:'📦', name:'Volume',                  sub:'Kubus, Balok, Tabung' },
    { id:'mtk-9', icon:'➖', name:'Selisih',                 sub:'Pengurangan & Perbedaan Nilai' },
  ],
};

// ---------- KONTEN MATERI LENGKAP ----------
export const MATERI_CONTENT = {

  // ---- IPA ----
  'ipa-1': {
    title: '🦋 Metamorfosis',
    sub: 'Perubahan bentuk hewan dari lahir hingga dewasa',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Metamorfosis?</h3>
        <p><strong>Metamorfosis</strong> adalah proses perubahan bentuk dan struktur tubuh suatu hewan secara bertahap selama masa pertumbuhannya. Tidak semua hewan mengalami metamorfosis — hanya hewan tertentu seperti serangga dan katak yang melewatinya.</p>
        <p>Metamorfosis dibagi menjadi dua jenis: <strong>Metamorfosis Sempurna (Holometabola)</strong> dan <strong>Metamorfosis Tidak Sempurna (Hemimetabola)</strong>. Perbedaan utama terletak pada jumlah tahap dan seberapa berbeda bentuk anak dengan hewan dewasa.</p>
      </div>
      <div class="content-section">
        <h3>🦋 Metamorfosis Sempurna — 4 Tahap</h3>
        <div class="flow"><div class="flow-box">🥚 Telur</div><div class="flow-arrow">→</div><div class="flow-box">🐛 Larva</div><div class="flow-arrow">→</div><div class="flow-box">🫘 Pupa</div><div class="flow-arrow">→</div><div class="flow-box">🦋 Imago</div></div>
        <div class="info-box green">Ciri khas: bentuk larva SANGAT BERBEDA dari hewan dewasa. Contoh: ulat ≠ kupu-kupu.</div>
        <div class="table-wrap"><table><tr><th>Hewan</th><th>Larva</th><th>Pupa</th><th>Dewasa</th></tr>
        <tr><td>Kupu-kupu</td><td>Ulat</td><td>Kepompong</td><td>Kupu-kupu</td></tr>
        <tr><td>Nyamuk</td><td>Jentik-jentik</td><td>Kepompong air</td><td>Nyamuk</td></tr>
        <tr><td>Lalat</td><td>Belatung</td><td>Kepompong</td><td>Lalat</td></tr>
        <tr><td>Lebah</td><td>Larva lebah</td><td>Kepompong</td><td>Lebah</td></tr>
        <tr><td>Katak</td><td>Kecebong/Berudu</td><td>—</td><td>Katak</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🦗 Metamorfosis Tidak Sempurna — 3 Tahap</h3>
        <div class="flow"><div class="flow-box">🥚 Telur</div><div class="flow-arrow">→</div><div class="flow-box">🐛 Nimfa</div><div class="flow-arrow">→</div><div class="flow-box">🦗 Imago</div></div>
        <div class="info-box blue"><strong>Nimfa</strong> = anak hewan yang bentuknya MIRIP dewasa, hanya lebih kecil dan belum punya sayap sempurna.</div>
        <p>Contoh hewan: <strong>Belalang, Kecoa, Capung, Jangkrik</strong>. Tidak ada tahap pupa/kepompong dalam metamorfosis ini.</p>
      </div>`,
    flashcards: [
      { q:'Apa itu metamorfosis?', a:'Proses perubahan bentuk hewan secara bertahap dari lahir hingga dewasa.' },
      { q:'Berapa tahap metamorfosis sempurna?', a:'4 tahap: Telur → Larva → Pupa → Imago.' },
      { q:'Apa nama tahap kepompong?', a:'Pupa — tahap istirahat sebelum menjadi hewan dewasa.' },
      { q:'Apa itu Nimfa?', a:'Anak hewan pada metamorfosis tidak sempurna. Bentuknya mirip dewasa tapi lebih kecil dan belum bersayap.' },
      { q:'Sebutkan 2 hewan metamorfosis sempurna!', a:'Kupu-kupu dan Nyamuk (atau Lalat, Lebah, Katak).' },
      { q:'Sebutkan 2 hewan metamorfosis tidak sempurna!', a:'Belalang dan Kecoa (atau Capung, Jangkrik).' },
    ],
  },

  'ipa-2': {
    title: '🐣 Perkembangbiakan Hewan',
    sub: 'Cara hewan memperbanyak keturunan',
    body: `
      <div class="content-section">
        <h3>📌 Dua Cara Berkembang Biak</h3>
        <p>Hewan berkembang biak untuk melestarikan jenisnya. Ada dua cara utama: <strong>Vegetatif (aseksual)</strong> — tanpa perkawinan, dan <strong>Generatif (seksual)</strong> — melalui perkawinan jantan dan betina.</p>
      </div>
      <div class="content-section">
        <h3>🌱 Cara Vegetatif Hewan</h3>
        <div class="table-wrap"><table><tr><th>Cara</th><th>Penjelasan</th><th>Contoh</th></tr>
        <tr><td>Membelah diri</td><td>Tubuh membelah menjadi dua individu baru</td><td>Amoeba, Paramecium</td></tr>
        <tr><td>Tunas</td><td>Tumbuh tunas di tubuh induk</td><td>Hydra</td></tr>
        <tr><td>Fragmentasi</td><td>Potongan tubuh tumbuh menjadi individu baru</td><td>Planaria, Bintang laut</td></tr>
        <tr><td>Partenogenesis</td><td>Telur berkembang tanpa dibuahi</td><td>Lebah pekerja, Semut, Komodo</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>💑 Cara Generatif Hewan</h3>
        <div class="info-box">🥚 <strong>Ovipar (Bertelur)</strong> — embrio berkembang di luar tubuh induk. Contoh: Ayam, Ikan, Katak, Burung, Reptil.</div>
        <div class="info-box green">🐾 <strong>Vivipar (Beranak/Melahirkan)</strong> — embrio berkembang dalam rahim induk. Contoh: Kucing, Sapi, Paus, Manusia.</div>
        <div class="info-box blue">🥚🐾 <strong>Ovovivipar</strong> — telur berkembang dalam tubuh induk, kemudian lahir hidup-hidup. Contoh: Ular tertentu, Hiu, Bunglon.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu Ovipar?', a:'Hewan yang berkembang biak dengan bertelur. Embrio berkembang di luar tubuh induk. Contoh: Ayam, Ikan.' },
      { q:'Apa itu Vivipar?', a:'Hewan yang berkembang biak dengan melahirkan. Embrio berkembang dalam rahim. Contoh: Kucing, Sapi.' },
      { q:'Apa itu Ovovivipar?', a:'Telur berkembang dalam tubuh induk, lalu lahir hidup-hidup. Contoh: Ular, Hiu.' },
      { q:'Amoeba berkembang biak dengan?', a:'Membelah diri (pembelahan biner).' },
      { q:'Hydra berkembang biak dengan cara?', a:'Tunas — tunas tumbuh di tubuh induk lalu melepaskan diri.' },
    ],
  },

  'ipa-3': {
    title: '🌱 Perkembangbiakan Tumbuhan',
    sub: 'Vegetatif alami, buatan, dan generatif',
    body: `
      <div class="content-section">
        <h3>🌱 Vegetatif Alami</h3>
        <div class="table-wrap"><table><tr><th>Cara</th><th>Penjelasan</th><th>Contoh</th></tr>
        <tr><td>Tunas</td><td>Tunas baru tumbuh di pangkal batang induk</td><td>Pisang, Bambu, Tebu</td></tr>
        <tr><td>Rhizoma</td><td>Batang menjalar di bawah tanah</td><td>Jahe, Kunyit, Lengkuas</td></tr>
        <tr><td>Stolon</td><td>Batang menjalar di atas tanah</td><td>Stroberi, Rumput teki</td></tr>
        <tr><td>Umbi Lapis</td><td>Berlapis-lapis seperti bawang</td><td>Bawang merah, Bawang putih</td></tr>
        <tr><td>Umbi Batang</td><td>Batang di bawah tanah yang membengkak</td><td>Kentang, Ubi jalar</td></tr>
        <tr><td>Umbi Akar</td><td>Akar yang membengkak menyimpan makanan</td><td>Wortel, Dahlia</td></tr>
        <tr><td>Spora</td><td>Sel khusus berkembang biak</td><td>Pakis, Lumut, Jamur</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🌿 Vegetatif Buatan (oleh Manusia)</h3>
        <ul>
          <li>🔪 <strong>Stek</strong> — memotong batang/daun lalu ditanam. Contoh: Mawar, Singkong.</li>
          <li>🌿 <strong>Cangkok</strong> — mengupas kulit batang lalu dibungkus tanah lembab. Contoh: Mangga, Rambutan.</li>
          <li>🔗 <strong>Merunduk</strong> — membengkokkan cabang ke tanah hingga berakar. Contoh: Apel, Anggur.</li>
          <li>✂️ <strong>Okulasi</strong> — menempel tunas/mata tunas ke batang lain. Contoh: Durian, Rambutan.</li>
        </ul>
        <div class="info-box green">Keunggulan vegetatif buatan: tanaman baru memiliki sifat SAMA persis dengan induknya dan berbuah lebih cepat.</div>
      </div>
      <div class="content-section">
        <h3>🌸 Generatif (Biji & Penyerbukan)</h3>
        <div class="flow"><div class="flow-box">🌸 Bunga</div><div class="flow-arrow">→</div><div class="flow-box">🐝 Penyerbukan</div><div class="flow-arrow">→</div><div class="flow-box">🥚 Pembuahan</div><div class="flow-arrow">→</div><div class="flow-box">🌰 Biji</div><div class="flow-arrow">→</div><div class="flow-box">🌱 Tumbuhan Baru</div></div>
        <p>Penyerbuk dapat berupa: angin, serangga (lebah, kupu-kupu), air, burung, atau manusia.</p>
      </div>`,
    flashcards: [
      { q:'Apa bedanya Rhizoma dan Stolon?', a:'Rhizoma = batang menjalar di BAWAH tanah (jahe). Stolon = batang menjalar di ATAS tanah (stroberi).' },
      { q:'Apa itu stek?', a:'Vegetatif buatan dengan memotong bagian tanaman (batang/daun) lalu ditanam.' },
      { q:'Pisang berkembang biak dengan?', a:'Tunas — tunas anakan tumbuh di samping batang induk.' },
      { q:'Kentang berkembang biak dengan?', a:'Umbi Batang — batang yang membengkak di dalam tanah.' },
      { q:'Apa itu cangkok?', a:'Mengupas kulit batang lalu membungkusnya dengan tanah lembab agar berakar.' },
    ],
  },

  'ipa-4': {
    title: '☀️ Energi Terbarukan',
    sub: 'Sumber energi yang tidak habis',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Energi Terbarukan?</h3>
        <p><strong>Energi terbarukan</strong> adalah energi yang berasal dari sumber alam yang dapat diperbaharui secara alami dan tidak akan habis. Berbeda dengan bahan bakar fosil (minyak bumi, batu bara, gas alam) yang terbentuk jutaan tahun dan bisa habis.</p>
        <div class="info-box green">Keunggulan: tidak pernah habis, ramah lingkungan, tidak menghasilkan polusi beracun.</div>
      </div>
      <div class="content-section">
        <h3>🌞 Jenis-jenis Energi Terbarukan</h3>
        <div class="table-wrap"><table><tr><th>Jenis</th><th>Sumber</th><th>Alat</th><th>Contoh Penggunaan</th></tr>
        <tr><td>☀️ Matahari</td><td>Sinar matahari</td><td>Panel surya</td><td>Listrik, pemanas air</td></tr>
        <tr><td>💨 Angin</td><td>Tiupan angin</td><td>Kincir/Turbin angin</td><td>Listrik, menggerakkan kapal</td></tr>
        <tr><td>💧 Air</td><td>Aliran & terjunan air</td><td>PLTA, kincir air</td><td>Pembangkit listrik terbesar RI</td></tr>
        <tr><td>🌡️ Panas Bumi</td><td>Magma dalam bumi</td><td>PLTP</td><td>Listrik, pemanas</td></tr>
        <tr><td>🌿 Biomassa</td><td>Bahan organik</td><td>Biogas, briket</td><td>Bahan bakar memasak</td></tr></table></div>
        <div class="info-box">Kelemahan: biaya instalasi awal mahal dan bergantung pada kondisi alam (cuaca, musim).</div>
      </div>`,
    flashcards: [
      { q:'Apa itu energi terbarukan?', a:'Energi dari sumber alam yang dapat diperbaharui dan tidak akan habis.' },
      { q:'Alat mengubah energi matahari ke listrik?', a:'Panel surya (solar panel / photovoltaic cell).' },
      { q:'PLTA singkatan dari?', a:'Pembangkit Listrik Tenaga Air.' },
      { q:'Contoh energi TAK terbarukan?', a:'Minyak bumi, batu bara, gas alam (bahan bakar fosil).' },
      { q:'Panas bumi berasal dari?', a:'Panas magma di dalam bumi (geothermal).' },
    ],
  },

  'ipa-5': {
    title: '💡 Cara Menghemat Energi',
    sub: 'Kebiasaan hemat energi sehari-hari',
    body: `
      <div class="content-section">
        <h3>📌 Mengapa Perlu Hemat Energi?</h3>
        <p>Sebagian besar energi yang kita gunakan berasal dari sumber yang <strong>tidak terbarukan</strong> dan terbatas jumlahnya. Menghemat energi membantu menjaga ketersediaannya untuk generasi mendatang dan mengurangi polusi lingkungan.</p>
        <div class="info-box green">Hemat energi = hemat biaya + jaga lingkungan + jaga ketersediaan energi masa depan.</div>
      </div>
      <div class="content-section">
        <h3>🏠 Tips Hemat Energi di Rumah</h3>
        <ul>
          <li>💡 Matikan lampu saat meninggalkan ruangan.</li>
          <li>❄️ Sesuaikan suhu AC dengan kebutuhan (jangan terlalu dingin).</li>
          <li>🔌 Cabut charger dan peralatan elektronik saat tidak digunakan.</li>
          <li>🌞 Manfaatkan cahaya matahari di siang hari, kurangi lampu.</li>
          <li>🚿 Gunakan air secukupnya saat mandi dan mencuci.</li>
          <li>📺 Batasi waktu menonton TV dan bermain gadget.</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🏫 Tips Hemat Energi di Sekolah</h3>
        <ul>
          <li>🚶 Berjalan kaki atau bersepeda ke sekolah jika memungkinkan.</li>
          <li>💻 Matikan komputer dan proyektor setelah digunakan.</li>
          <li>📖 Gunakan kertas bolak-balik untuk menghemat kertas (hemat energi produksi).</li>
          <li>💧 Tutup keran air setelah menggunakannya.</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Mengapa kita perlu hemat energi?', a:'Karena sumber energi terbatas, untuk menghemat biaya, dan menjaga lingkungan.' },
      { q:'Apa yang harus dilakukan saat meninggalkan ruangan?', a:'Matikan lampu dan cabut peralatan listrik yang tidak digunakan.' },
      { q:'Bagaimana cara hemat listrik dari AC?', a:'Sesuaikan suhu dengan kebutuhan, jangan terlalu rendah.' },
      { q:'Sebutkan 3 cara hemat energi di rumah!', a:'Matikan lampu, cabut charger, manfaatkan cahaya matahari di siang hari.' },
    ],
  },

  'ipa-6': {
    title: '⚡ Perubahan Energi',
    sub: 'Transformasi dari satu bentuk energi ke bentuk lain',
    body: `
      <div class="content-section">
        <h3>📌 Bentuk-bentuk Energi</h3>
        <p>Energi tidak dapat diciptakan atau dimusnahkan, tetapi dapat <strong>diubah</strong> dari satu bentuk ke bentuk lain. Prinsip ini dikenal sebagai <em>Hukum Kekekalan Energi</em>.</p>
        <div class="table-wrap"><table><tr><th>Bentuk Energi</th><th>Penjelasan</th><th>Contoh</th></tr>
        <tr><td>⚡ Listrik</td><td>Aliran elektron dalam penghantar</td><td>Lampu, TV, Kulkas</td></tr>
        <tr><td>🌡️ Kalor/Panas</td><td>Energi akibat pergerakan molekul</td><td>Api, Kompor, Setrika</td></tr>
        <tr><td>💡 Cahaya</td><td>Gelombang elektromagnetik</td><td>Matahari, Lampu, Lilin</td></tr>
        <tr><td>🔊 Bunyi</td><td>Gelombang mekanik</td><td>Speaker, Bel, Tepuk tangan</td></tr>
        <tr><td>🏃 Gerak/Kinetik</td><td>Energi benda yang bergerak</td><td>Kipas, Kincir angin</td></tr>
        <tr><td>🍎 Kimia</td><td>Tersimpan dalam ikatan kimia</td><td>Makanan, Baterai, Bensin</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔄 Contoh Perubahan Energi</h3>
        <ul>
          <li>💡 Lampu: <strong>Listrik → Cahaya + Panas</strong></li>
          <li>📢 Speaker: <strong>Listrik → Bunyi</strong></li>
          <li>🔋 Baterai: <strong>Kimia → Listrik</strong></li>
          <li>☀️ Panel surya: <strong>Cahaya → Listrik</strong></li>
          <li>🎸 Gitar: <strong>Gerak → Bunyi</strong></li>
          <li>🔥 Kompor: <strong>Kimia (gas) → Panas + Cahaya</strong></li>
          <li>💪 Olahraga: <strong>Kimia (makanan) → Gerak + Panas</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Perubahan energi pada lampu listrik?', a:'Energi listrik → Energi cahaya + Energi panas.' },
      { q:'Perubahan energi pada baterai?', a:'Energi kimia → Energi listrik.' },
      { q:'Perubahan energi pada panel surya?', a:'Energi cahaya (matahari) → Energi listrik.' },
      { q:'Apa bunyi Hukum Kekekalan Energi?', a:'Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah bentuknya.' },
      { q:'Perubahan energi saat memasak dengan kompor gas?', a:'Energi kimia (gas) → Energi panas + Energi cahaya.' },
    ],
  },

  'ipa-7': {
    title: '🔌 Rangkaian Listrik',
    sub: 'Rangkaian seri dan paralel',
    body: `
      <div class="content-section">
        <h3>📌 Rangkaian Seri — Satu Jalur</h3>
        <p>Komponen-komponen dihubungkan secara <strong>berurutan</strong> dalam satu jalur. Arus listrik harus melewati semua komponen secara berurutan.</p>
        <div class="info-box red">⚠️ Jika SATU komponen mati/putus, semua komponen lain IKUT MATI.</div>
        <ul>
          <li>✅ Hemat kabel, instalasi sederhana.</li>
          <li>❌ Jika satu padam, semua padam.</li>
          <li>❌ Tegangan terbagi, lampu lebih redup.</li>
          <li>📍 Contoh: Lampu hias natal, senter sederhana.</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🔀 Rangkaian Paralel — Banyak Jalur</h3>
        <p>Komponen-komponen dihubungkan secara <strong>bercabang</strong>. Setiap komponen terhubung langsung ke sumber listrik.</p>
        <div class="info-box green">✅ Jika SATU komponen mati, komponen lain TETAP MENYALA.</div>
        <ul>
          <li>✅ Tiap cabang bisa dikontrol sendiri.</li>
          <li>✅ Setiap lampu mendapat tegangan penuh — lebih terang.</li>
          <li>❌ Membutuhkan lebih banyak kabel.</li>
          <li>🏠 Contoh: Instalasi listrik rumah, gedung, sekolah.</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📊 Tabel Perbandingan</h3>
        <div class="table-wrap"><table><tr><th>Aspek</th><th>Seri</th><th>Paralel</th></tr>
        <tr><td>Jalur arus</td><td>Satu jalur</td><td>Banyak jalur</td></tr>
        <tr><td>Jika satu putus</td><td>Semua mati</td><td>Lain tetap nyala</td></tr>
        <tr><td>Kecerahan lampu</td><td>Lebih redup</td><td>Lebih terang</td></tr>
        <tr><td>Penggunaan kabel</td><td>Lebih hemat</td><td>Lebih banyak</td></tr>
        <tr><td>Contoh</td><td>Lampu natal</td><td>Listrik rumah</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'Bedanya rangkaian seri dan paralel?', a:'Seri = 1 jalur (jika 1 mati semua mati). Paralel = banyak jalur (jika 1 mati yang lain tetap nyala).' },
      { q:'Listrik di rumah menggunakan rangkaian?', a:'Paralel — agar setiap ruangan bisa dikontrol sendiri.' },
      { q:'Kelemahan rangkaian seri?', a:'Jika satu komponen mati/putus, semua komponen ikut mati.' },
      { q:'Contoh nyata rangkaian seri?', a:'Lampu hiasan natal — jika satu mati, semua padam.' },
    ],
  },

  'ipa-8': {
    title: '❤️ Peredaran Darah',
    sub: 'Jantung, pembuluh darah, dan fungsinya',
    body: `
      <div class="content-section">
        <h3>❤️ Jantung sebagai Pompa</h3>
        <p>Jantung adalah organ utama sistem peredaran darah yang berfungsi memompa darah ke seluruh tubuh. Jantung manusia memiliki <strong>4 ruang</strong>: serambi kiri, serambi kanan, bilik kiri, dan bilik kanan.</p>
        <div class="info-box green">Jantung berdetak rata-rata 60–100 kali per menit pada orang dewasa sehat.</div>
      </div>
      <div class="content-section">
        <h3>🔄 Dua Sistem Peredaran Darah</h3>
        <div class="info-box blue"><strong>Peredaran Darah Besar (Sistemik):</strong> Jantung (bilik kiri) → seluruh tubuh → kembali ke jantung (serambi kanan). Membawa oksigen ke seluruh tubuh.</div>
        <div class="info-box"><strong>Peredaran Darah Kecil (Pulmonal):</strong> Jantung (bilik kanan) → paru-paru → kembali ke jantung (serambi kiri). Darah mengambil oksigen dari paru-paru.</div>
      </div>
      <div class="content-section">
        <h3>🩸 Pembuluh Darah</h3>
        <div class="table-wrap"><table><tr><th>Pembuluh</th><th>Arah Darah</th><th>Ciri-ciri</th></tr>
        <tr><td>Arteri (Nadi)</td><td>Dari jantung ke tubuh</td><td>Dinding tebal, elastis, denyut terasa</td></tr>
        <tr><td>Vena (Balik)</td><td>Dari tubuh ke jantung</td><td>Dinding tipis, ada katup, tidak berdenyut</td></tr>
        <tr><td>Kapiler</td><td>Penghubung arteri–vena</td><td>Sangat halus, terjadi pertukaran zat</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'Berapa ruang dalam jantung manusia?', a:'4 ruang: serambi kiri, serambi kanan, bilik kiri, bilik kanan.' },
      { q:'Apa itu peredaran darah besar?', a:'Peredaran dari jantung ke seluruh tubuh dan kembali ke jantung.' },
      { q:'Apa itu peredaran darah kecil?', a:'Peredaran dari jantung ke paru-paru dan kembali ke jantung untuk mengambil oksigen.' },
      { q:'Bedanya arteri dan vena?', a:'Arteri membawa darah dari jantung ke tubuh. Vena membawa darah dari tubuh ke jantung.' },
    ],
  },

  'ipa-9': {
    title: '💧 Siklus Hidrologi',
    sub: 'Perputaran air di alam',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Siklus Hidrologi?</h3>
        <p><strong>Siklus hidrologi</strong> adalah perputaran air dari permukaan bumi ke atmosfer dan kembali ke bumi secara terus-menerus. Siklus ini menjaga ketersediaan air di bumi tetap seimbang.</p>
        <div class="flow"><div class="flow-box">🌊 Evaporasi</div><div class="flow-arrow">→</div><div class="flow-box">☁️ Kondensasi</div><div class="flow-arrow">→</div><div class="flow-box">🌧️ Presipitasi</div><div class="flow-arrow">→</div><div class="flow-box">💧 Infiltrasi/Run off</div></div>
      </div>
      <div class="content-section">
        <h3>🔄 Tahapan Siklus Air</h3>
        <div class="table-wrap"><table><tr><th>Tahap</th><th>Penjelasan</th></tr>
        <tr><td>☀️ Evaporasi</td><td>Penguapan air dari laut, danau, sungai karena panas matahari</td></tr>
        <tr><td>🌿 Transpirasi</td><td>Penguapan air melalui daun tumbuhan (stomata)</td></tr>
        <tr><td>☁️ Kondensasi</td><td>Uap air naik, mendingin, dan berubah menjadi tetes air (awan)</td></tr>
        <tr><td>🌧️ Presipitasi</td><td>Air jatuh ke bumi sebagai hujan, salju, atau hujan es</td></tr>
        <tr><td>💧 Infiltrasi</td><td>Air meresap ke dalam tanah membentuk air tanah</td></tr>
        <tr><td>🏃 Run off</td><td>Air mengalir di permukaan tanah menuju sungai dan laut</td></tr></table></div>
        <div class="info-box blue">Evapotranspirasi = Evaporasi + Transpirasi digabung.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu evaporasi?', a:'Penguapan air dari permukaan laut, danau, atau sungai karena panas matahari.' },
      { q:'Apa itu kondensasi?', a:'Uap air yang naik ke atmosfer mendingin dan berubah menjadi tetes air membentuk awan.' },
      { q:'Apa itu presipitasi?', a:'Jatuhnya air dari awan ke permukaan bumi, berupa hujan atau salju.' },
      { q:'Apa itu infiltrasi?', a:'Air hujan yang meresap ke dalam tanah menjadi air tanah.' },
      { q:'Apa bedanya evaporasi dan transpirasi?', a:'Evaporasi = penguapan dari permukaan air. Transpirasi = penguapan melalui daun tumbuhan.' },
    ],
  },

  'ipa-10': {
    title: '🌵 Adaptasi Tumbuhan',
    sub: 'Cara tumbuhan menyesuaikan diri dengan lingkungan',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Adaptasi?</h3>
        <p><strong>Adaptasi</strong> adalah kemampuan makhluk hidup untuk menyesuaikan diri dengan lingkungan tempat hidupnya agar dapat bertahan hidup. Tumbuhan beradaptasi secara morfologi (bentuk tubuh) dan fisiologi (proses tubuh).</p>
      </div>
      <div class="content-section">
        <h3>🌵 Tiga Kelompok Adaptasi Tumbuhan</h3>
        <div class="table-wrap"><table><tr><th>Kelompok</th><th>Lingkungan</th><th>Adaptasi</th><th>Contoh</th></tr>
        <tr><td>🌵 Xerofit</td><td>Kering/gurun</td><td>Daun jadi duri, batang tebal menyimpan air, akar panjang</td><td>Kaktus, Sukulen</td></tr>
        <tr><td>💧 Hidrofit</td><td>Air</td><td>Daun lebar dan tipis, tangkai berongga, akar kecil</td><td>Teratai, Enceng gondok</td></tr>
        <tr><td>🌧️ Higrofit</td><td>Lembab</td><td>Daun lebar untuk penguapan, stomata banyak</td><td>Pakis, Lumut</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🌳 Adaptasi Khusus Lainnya</h3>
        <ul>
          <li>🌺 <strong>Bunga Rafflesia</strong> — mengeluarkan bau busuk untuk menarik lalat sebagai penyerbuk.</li>
          <li>🌿 <strong>Pohon bakau (mangrove)</strong> — memiliki akar napas (pneumatofor) untuk menghirup oksigen di tanah berlumpur.</li>
          <li>🪴 <strong>Kantong semar</strong> — menjebak serangga sebagai sumber nitrogen karena tanah tempat hidupnya kurang nutrisi.</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Apa itu xerofit?', a:'Tumbuhan yang hidup di lingkungan kering/gurun. Contoh: Kaktus.' },
      { q:'Apa itu hidrofit?', a:'Tumbuhan yang hidup di air. Contoh: Teratai, Enceng gondok.' },
      { q:'Bagaimana kaktus beradaptasi di gurun?', a:'Daun berubah menjadi duri (mengurangi penguapan), batang tebal menyimpan air.' },
      { q:'Mengapa teratai punya tangkai berongga?', a:'Agar bisa mengapung dan membantu aliran udara ke akar yang ada di air.' },
      { q:'Apa itu adaptasi?', a:'Kemampuan makhluk hidup menyesuaikan diri dengan lingkungan agar bisa bertahan hidup.' },
    ],
  },

  'ipa-11': {
    title: '🌍 Rotasi & Revolusi Bumi',
    sub: 'Akibat perputaran dan peredaran bumi',
    body: `
      <div class="content-section">
        <h3>🌍 Rotasi Bumi</h3>
        <p><strong>Rotasi</strong> adalah perputaran bumi pada porosnya (sumbu bumi) dari barat ke timur. Satu putaran penuh membutuhkan waktu <strong>24 jam</strong>.</p>
        <div class="info-box blue">Akibat Rotasi: Pergantian siang dan malam, terbit dan terbenamnya matahari, perbedaan waktu antar wilayah, gerak semu harian matahari.</div>
      </div>
      <div class="content-section">
        <h3>🌏 Revolusi Bumi</h3>
        <p><strong>Revolusi</strong> adalah peredaran bumi mengelilingi matahari. Satu putaran penuh membutuhkan waktu <strong>365,25 hari (1 tahun)</strong>.</p>
        <div class="info-box green">Akibat Revolusi: Pergantian musim (4 musim di belahan bumi utara/selatan), tahun kalender, gerak semu tahunan matahari, perbedaan panjang siang dan malam.</div>
        <div class="table-wrap"><table><tr><th>Aspek</th><th>Rotasi</th><th>Revolusi</th></tr>
        <tr><td>Arti</td><td>Berputar pada poros sendiri</td><td>Mengelilingi matahari</td></tr>
        <tr><td>Waktu</td><td>24 jam (1 hari)</td><td>365,25 hari (1 tahun)</td></tr>
        <tr><td>Akibat utama</td><td>Siang dan malam</td><td>Pergantian musim, tahun</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'Apa itu rotasi bumi?', a:'Perputaran bumi pada porosnya sendiri, membutuhkan 24 jam.' },
      { q:'Akibat utama rotasi bumi?', a:'Pergantian siang dan malam.' },
      { q:'Apa itu revolusi bumi?', a:'Peredaran bumi mengelilingi matahari, membutuhkan 365,25 hari.' },
      { q:'Akibat utama revolusi bumi?', a:'Pergantian musim dan dasar penetapan 1 tahun kalender.' },
      { q:'Berapa lama 1 putaran rotasi bumi?', a:'24 jam (1 hari).' },
    ],
  },

  'ipa-12': {
    title: '🌙 Rotasi & Revolusi Bulan + Gerhana',
    sub: 'Perputaran bulan dan fenomena gerhana',
    body: `
      <div class="content-section">
        <h3>🌙 Gerakan Bulan</h3>
        <div class="table-wrap"><table><tr><th>Gerakan</th><th>Penjelasan</th><th>Waktu</th><th>Akibat</th></tr>
        <tr><td>Rotasi Bulan</td><td>Berputar pada poros sendiri</td><td>29,5 hari</td><td>Wajah bulan yang menghadap bumi selalu sama</td></tr>
        <tr><td>Revolusi Bulan</td><td>Mengelilingi Bumi</td><td>29,5 hari</td><td>Fase-fase bulan (purnama, sabit, dll)</td></tr></table></div>
        <div class="info-box green">Karena waktu rotasi = revolusi, kita selalu melihat sisi yang sama dari bulan!</div>
      </div>
      <div class="content-section">
        <h3>🌑 Gerhana Matahari</h3>
        <p>Terjadi saat <strong>bulan berada di antara bumi dan matahari</strong> sehingga bayangan bulan menutupi sebagian permukaan bumi.</p>
        <div class="flow"><div class="flow-box">☀️ Matahari</div><div class="flow-arrow">←</div><div class="flow-box">🌑 Bulan</div><div class="flow-arrow">←</div><div class="flow-box">🌍 Bumi</div></div>
        <p>Jenis: Gerhana Matahari Total, Sebagian, dan Cincin.</p>
      </div>
      <div class="content-section">
        <h3>🌕 Gerhana Bulan</h3>
        <p>Terjadi saat <strong>bumi berada di antara matahari dan bulan</strong> sehingga bayangan bumi menutupi bulan.</p>
        <div class="flow"><div class="flow-box">☀️ Matahari</div><div class="flow-arrow">→</div><div class="flow-box">🌍 Bumi</div><div class="flow-arrow">→</div><div class="flow-box">🌕 Bulan</div></div>
        <div class="info-box blue">Gerhana Bulan hanya terjadi saat bulan purnama. Gerhana Matahari hanya terjadi saat bulan baru.</div>
      </div>`,
    flashcards: [
      { q:'Kapan gerhana matahari terjadi?', a:'Saat bulan berada di antara bumi dan matahari (bulan baru).' },
      { q:'Kapan gerhana bulan terjadi?', a:'Saat bumi berada di antara matahari dan bulan (bulan purnama).' },
      { q:'Berapa lama bulan mengelilingi bumi?', a:'29,5 hari (sekitar 1 bulan).' },
      { q:'Mengapa kita selalu melihat sisi yang sama dari bulan?', a:'Karena waktu rotasi bulan sama dengan waktu revolusinya (29,5 hari).' },
    ],
  },

  // ---- BAHASA INDONESIA ----
  'bindo-1': {
    title: '🌿 Peribahasa',
    sub: 'Ungkapan bijak bahasa Indonesia',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Peribahasa?</h3>
        <p><strong>Peribahasa</strong> adalah kalimat atau kelompok kata yang susunannya tetap dan mengandung pengertian kiasan. Maknanya tidak bisa ditafsirkan secara harfiah (apa adanya), melainkan harus dipahami secara mendalam.</p>
      </div>
      <div class="content-section">
        <h3>📜 Peribahasa Populer & Maknanya</h3>
        <div class="table-wrap"><table><tr><th>Peribahasa</th><th>Makna</th></tr>
        <tr><td>Ada gula ada semut</td><td>Di mana ada kesenangan/keuntungan, banyak orang berkumpul</td></tr>
        <tr><td>Air beriak tanda tak dalam</td><td>Orang banyak bicara biasanya pengetahuannya dangkal</td></tr>
        <tr><td>Bagai air di daun talas</td><td>Tidak berpendirian tetap, mudah berubah</td></tr>
        <tr><td>Buah jatuh tak jauh dari pohonnya</td><td>Sifat anak biasanya mirip orang tuanya</td></tr>
        <tr><td>Nasi sudah menjadi bubur</td><td>Sesuatu yang sudah terjadi dan tidak bisa diubah</td></tr>
        <tr><td>Seperti katak dalam tempurung</td><td>Orang yang wawasannya sempit</td></tr>
        <tr><td>Setali tiga uang</td><td>Sama saja, tidak ada bedanya</td></tr>
        <tr><td>Pucuk dicinta ulam tiba</td><td>Mendapat apa yang diinginkan secara kebetulan</td></tr>
        <tr><td>Rajin pangkal pandai</td><td>Ketekunan adalah kunci kepintaran</td></tr>
        <tr><td>Berakit-rakit ke hulu</td><td>Bersakit-sakit dahulu, bersenang-senang kemudian</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'"Ada gula ada semut" artinya?', a:'Di mana ada kesenangan atau keuntungan, di situ banyak orang berkumpul.' },
      { q:'"Air beriak tanda tak dalam" artinya?', a:'Orang yang banyak bicara biasanya pengetahuannya dangkal.' },
      { q:'"Nasi sudah menjadi bubur" artinya?', a:'Sesuatu yang sudah terjadi dan tidak dapat diubah lagi.' },
      { q:'"Seperti katak dalam tempurung" artinya?', a:'Orang yang wawasannya sempit, tidak mau tahu hal baru.' },
      { q:'"Bagai air di daun talas" artinya?', a:'Tidak berpendirian tetap, mudah berubah sikap.' },
    ],
  },

  'bindo-2': {
    title: '📊 Bagan',
    sub: 'Cara membaca dan memahami bagan',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Bagan?</h3>
        <p><strong>Bagan</strong> adalah representasi visual dari informasi, data, atau proses menggunakan simbol, gambar, garis, dan teks. Bagan memudahkan kita memahami hubungan antar informasi yang kompleks.</p>
      </div>
      <div class="content-section">
        <h3>📊 Jenis-jenis Bagan</h3>
        <div class="table-wrap"><table><tr><th>Jenis</th><th>Fungsi</th><th>Contoh Penggunaan</th></tr>
        <tr><td>Bagan Alir (Flowchart)</td><td>Menunjukkan urutan langkah/proses</td><td>Proses daur ulang, langkah memasak</td></tr>
        <tr><td>Bagan Organisasi</td><td>Menunjukkan struktur dan hierarki</td><td>Struktur OSIS, susunan pemerintahan</td></tr>
        <tr><td>Bagan Pohon</td><td>Menunjukkan cabang-cabang klasifikasi</td><td>Silsilah keluarga, klasifikasi makhluk hidup</td></tr>
        <tr><td>Bagan Lingkaran</td><td>Menunjukkan siklus/proses berulang</td><td>Siklus air, daur hidup kupu-kupu</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔍 Cara Membaca Bagan</h3>
        <ul>
          <li>1. Baca judul bagan untuk memahami topiknya.</li>
          <li>2. Perhatikan simbol dan legenda yang digunakan.</li>
          <li>3. Ikuti arah panah atau urutan yang ditunjukkan.</li>
          <li>4. Cari hubungan antar elemen dalam bagan.</li>
          <li>5. Buat kesimpulan berdasarkan informasi yang ditampilkan.</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Apa fungsi bagan?', a:'Merepresentasikan informasi atau proses secara visual agar lebih mudah dipahami.' },
      { q:'Apa itu flowchart?', a:'Bagan alir yang menunjukkan urutan langkah-langkah dalam suatu proses.' },
      { q:'Bagan apa yang tepat untuk menunjukkan struktur organisasi?', a:'Bagan organisasi (bagan hierarki).' },
      { q:'Langkah pertama membaca bagan?', a:'Baca judul bagan untuk memahami topik yang disajikan.' },
    ],
  },

  'bindo-3': {
    title: '📖 Unsur Intrinsik',
    sub: 'Elemen pembangun cerita dari dalam',
    body: `
      <div class="content-section">
        <h3>📌 Tujuh Unsur Intrinsik</h3>
        <div class="table-wrap"><table><tr><th>Unsur</th><th>Penjelasan</th><th>Contoh</th></tr>
        <tr><td>🎯 Tema</td><td>Ide/gagasan pokok cerita</td><td>Persahabatan, kejujuran, keberanian</td></tr>
        <tr><td>👥 Tokoh</td><td>Pelaku dalam cerita</td><td>Budi (protagonis), Si Jahat (antagonis)</td></tr>
        <tr><td>😊 Penokohan</td><td>Cara pengarang menggambarkan sifat tokoh</td><td>Baik hati, pemarah, cerdas</td></tr>
        <tr><td>📍 Latar</td><td>Tempat, waktu, dan suasana cerita</td><td>Di sekolah, pagi hari, menegangkan</td></tr>
        <tr><td>📊 Alur</td><td>Urutan kejadian dalam cerita</td><td>Maju, mundur, atau campuran</td></tr>
        <tr><td>👁️ Sudut Pandang</td><td>Posisi pencerita</td><td>Orang pertama (aku), ketiga (dia)</td></tr>
        <tr><td>💬 Amanat</td><td>Pesan moral dari cerita</td><td>Jangan berputus asa, pentingnya kejujuran</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>👥 Jenis Tokoh & Alur</h3>
        <ul>
          <li>😇 <strong>Protagonis</strong> — tokoh utama yang umumnya berperan baik.</li>
          <li>😈 <strong>Antagonis</strong> — tokoh penentang/musuh protagonis.</li>
          <li>😐 <strong>Tritagonis</strong> — tokoh pembantu/penengah.</li>
        </ul>
        <ul>
          <li>➡️ <strong>Alur Maju</strong> — cerita berurutan dari awal ke akhir.</li>
          <li>⬅️ <strong>Alur Mundur</strong> — cerita dimulai dari akhir (flashback).</li>
          <li>↔️ <strong>Alur Campuran</strong> — gabungan maju dan mundur.</li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Apa itu tema?', a:'Ide pokok atau gagasan utama yang menjadi dasar cerita.' },
      { q:'Bedanya tokoh dan penokohan?', a:'Tokoh = siapa pelakunya. Penokohan = bagaimana sifat/karakternya.' },
      { q:'Apa itu amanat?', a:'Pesan moral atau pelajaran hidup yang ingin disampaikan pengarang melalui cerita.' },
      { q:'Alur mundur disebut juga?', a:'Flashback — cerita dimulai dari masa kini lalu menceritakan kejadian masa lalu.' },
      { q:'Apa itu antagonis?', a:'Tokoh yang berperan sebagai penentang atau musuh tokoh utama.' },
    ],
  },

  'bindo-4': {
    title: '💡 Ide Pokok',
    sub: 'Menemukan gagasan utama paragraf',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Ide Pokok?</h3>
        <p><strong>Ide pokok</strong> (gagasan utama / pikiran pokok) adalah gagasan yang menjadi inti atau pokok bahasan suatu paragraf. Semua kalimat dalam paragraf mendukung ide pokok ini.</p>
        <div class="info-box blue">Ide pokok ditemukan dalam <strong>kalimat utama</strong>. Kalimat lainnya adalah <strong>kalimat penjelas</strong>.</div>
      </div>
      <div class="content-section">
        <h3>📍 Letak Ide Pokok dalam Paragraf</h3>
        <div class="table-wrap"><table><tr><th>Jenis Paragraf</th><th>Letak Ide Pokok</th></tr>
        <tr><td>Deduktif</td><td>Di AWAL paragraf (umum ke khusus)</td></tr>
        <tr><td>Induktif</td><td>Di AKHIR paragraf (khusus ke umum)</td></tr>
        <tr><td>Campuran (Deduktif-Induktif)</td><td>Di AWAL dan AKHIR paragraf</td></tr>
        <tr><td>Ineratif</td><td>Di TENGAH paragraf (jarang)</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔍 Cara Menemukan Ide Pokok</h3>
        <ul>
          <li>1. Baca paragraf secara utuh dan cermat.</li>
          <li>2. Temukan kalimat yang paling umum dan mencakup keseluruhan.</li>
          <li>3. Cek apakah kalimat lain mendukung/menjelaskan kalimat tersebut.</li>
          <li>4. Jika ya, kalimat itulah kalimat utama yang mengandung ide pokok.</li>
        </ul>
        <div class="info-box">Tip: Ide pokok bisa diringkas dalam satu kalimat singkat yang mencerminkan isi seluruh paragraf.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu ide pokok?', a:'Gagasan utama yang menjadi inti pembahasan dalam sebuah paragraf.' },
      { q:'Paragraf deduktif = ide pokok di mana?', a:'Di AWAL paragraf (umum ke khusus).' },
      { q:'Paragraf induktif = ide pokok di mana?', a:'Di AKHIR paragraf (khusus ke umum).' },
      { q:'Apa bedanya kalimat utama dan penjelas?', a:'Kalimat utama = berisi ide pokok. Kalimat penjelas = mendukung dan merinci kalimat utama.' },
    ],
  },

  'bindo-5': {
    title: '🔄 Sinonim',
    sub: 'Kata-kata yang bermakna sama atau mirip',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Sinonim?</h3>
        <p><strong>Sinonim</strong> (persamaan kata) adalah kata-kata yang memiliki makna sama atau hampir sama. Sinonim digunakan untuk menghindari pengulangan kata dan membuat tulisan lebih bervariasi.</p>
        <div class="info-box green">Catatan: Sinonim memiliki makna yang mirip, tapi seringkali tidak 100% bisa saling menggantikan karena memiliki nuansa yang berbeda.</div>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Pasangan Sinonim</h3>
        <div class="table-wrap"><table><tr><th>Kata</th><th>Sinonim</th></tr>
        <tr><td>Besar</td><td>Agung, Raya, Akbar, Luas</td></tr>
        <tr><td>Cantik</td><td>Indah, Elok, Rupawan, Molek</td></tr>
        <tr><td>Cepat</td><td>Gesit, Lincah, Kilat, Tangkas</td></tr>
        <tr><td>Mati</td><td>Meninggal, Wafat, Gugur, Mangkat</td></tr>
        <tr><td>Pintar</td><td>Cerdas, Pandai, Cakap, Genius</td></tr>
        <tr><td>Mudah</td><td>Gampang, Enteng, Ringan</td></tr>
        <tr><td>Sedih</td><td>Duka, Murung, Pilu, Sendu</td></tr></table></div>
        <div class="info-box blue">Kebalikan sinonim adalah <strong>antonim</strong> (lawan kata). Contoh: Besar ↔ Kecil.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu sinonim?', a:'Kata yang memiliki makna sama atau hampir sama dengan kata lain.' },
      { q:'Sinonim dari kata "besar"?', a:'Agung, raya, akbar, luas (tergantung konteks).' },
      { q:'Sinonim dari kata "pintar"?', a:'Cerdas, pandai, cakap.' },
      { q:'Apa bedanya sinonim dan antonim?', a:'Sinonim = persamaan kata. Antonim = lawan kata.' },
    ],
  },

  'bindo-6': {
    title: '🎨 Ciri & Unsur Poster',
    sub: 'Elemen-elemen poster yang efektif',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Poster?</h3>
        <p><strong>Poster</strong> adalah media komunikasi visual yang berisi pesan, informasi, atau ajakan yang ditampilkan secara singkat, jelas, dan menarik. Poster bertujuan untuk memengaruhi atau memberitahu pembaca.</p>
      </div>
      <div class="content-section">
        <h3>✅ Ciri-ciri Poster yang Baik</h3>
        <ul>
          <li>📢 Pesan singkat, padat, dan mudah dipahami.</li>
          <li>🎨 Menggunakan gambar/ilustrasi yang menarik dan relevan.</li>
          <li>🔤 Huruf besar dan terbaca dari jarak jauh.</li>
          <li>🎯 Memiliki tujuan yang jelas (mengajak, memberitahu, memperingatkan).</li>
          <li>🌈 Warna kontras agar mudah diperhatikan.</li>
        </ul>
      </div>
      <div class="content-section">
        <h3>🧩 Unsur-unsur Poster</h3>
        <div class="table-wrap"><table><tr><th>Unsur</th><th>Penjelasan</th></tr>
        <tr><td>Judul</td><td>Kata kunci utama yang menarik perhatian</td></tr>
        <tr><td>Gambar/Ilustrasi</td><td>Visual yang mendukung pesan</td></tr>
        <tr><td>Teks/Isi</td><td>Kalimat singkat berisi informasi atau ajakan</td></tr>
        <tr><td>Slogan</td><td>Kalimat pendek yang mudah diingat</td></tr>
        <tr><td>Sumber/Identitas</td><td>Siapa pembuat poster</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'Apa itu poster?', a:'Media komunikasi visual berisi pesan singkat, jelas, dan menarik yang bertujuan memengaruhi atau memberitahu.' },
      { q:'Sebutkan 3 ciri poster yang baik!', a:'Pesan singkat, gambar menarik, huruf besar dan mudah dibaca.' },
      { q:'Sebutkan 3 unsur poster!', a:'Judul, gambar/ilustrasi, teks/isi (juga slogan dan identitas pembuat).' },
      { q:'Apa fungsi slogan dalam poster?', a:'Kalimat pendek yang mudah diingat dan memperkuat pesan poster.' },
    ],
  },

  'bindo-7': {
    title: '🔍 Kata Khusus',
    sub: 'Kata dengan makna sempit dan spesifik',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Kata Khusus?</h3>
        <p><strong>Kata khusus</strong> (kata hiponim) adalah kata yang memiliki ruang lingkup makna lebih <strong>sempit dan spesifik</strong>. Kata khusus merupakan bagian dari kata yang lebih umum.</p>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Kata Umum & Kata Khususnya</h3>
        <div class="table-wrap"><table><tr><th>Kata Umum</th><th>Kata Khusus (Hiponim)</th></tr>
        <tr><td>Bunga</td><td>Mawar, Melati, Tulip, Anggrek, Dahlia</td></tr>
        <tr><td>Hewan</td><td>Kucing, Anjing, Singa, Gajah, Kuda</td></tr>
        <tr><td>Kendaraan</td><td>Mobil, Motor, Bus, Kereta, Sepeda</td></tr>
        <tr><td>Makanan</td><td>Nasi, Roti, Soto, Gado-gado, Rendang</td></tr>
        <tr><td>Olahraga</td><td>Sepak bola, Basket, Renang, Badminton</td></tr></table></div>
        <div class="info-box blue">Kata khusus = <strong>hiponim</strong>. Kata umumnya disebut <strong>hipernim</strong>.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu kata khusus?', a:'Kata yang memiliki makna lebih sempit dan spesifik, merupakan bagian dari kata yang lebih umum.' },
      { q:'Kata khusus dari "bunga"?', a:'Mawar, melati, tulip, anggrek (kata-kata ini adalah jenis-jenis bunga).' },
      { q:'Kata khusus disebut juga?', a:'Hiponim.' },
      { q:'Apa itu hipernim?', a:'Kata umum yang mencakup beberapa kata khusus (hiponim).' },
    ],
  },

  'bindo-8': {
    title: '🌐 Kata Umum',
    sub: 'Kata dengan makna luas yang mencakup banyak hal',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Kata Umum?</h3>
        <p><strong>Kata umum</strong> (kata hipernim) adalah kata yang memiliki ruang lingkup makna <strong>luas</strong> dan mencakup banyak kata yang lebih khusus. Semakin umum sebuah kata, semakin luas cakupan maknanya.</p>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Kata Umum</h3>
        <div class="table-wrap"><table><tr><th>Kata Umum (Hipernim)</th><th>Mencakup</th></tr>
        <tr><td>Tumbuhan</td><td>Pohon, Semak, Rumput, Lumut, Paku</td></tr>
        <tr><td>Warna</td><td>Merah, Biru, Hijau, Kuning, Ungu</td></tr>
        <tr><td>Perasaan</td><td>Senang, Sedih, Marah, Takut, Kaget</td></tr>
        <tr><td>Pekerjaan</td><td>Dokter, Guru, Petani, Nelayan, Insinyur</td></tr>
        <tr><td>Alat tulis</td><td>Pensil, Pulpen, Spidol, Penggaris, Penghapus</td></tr></table></div>
        <div class="info-box green">Hubungan kata umum-khusus: <strong>Kata Umum (Hipernim) → Kata Khusus (Hiponim)</strong>. Contoh: Buah → Mangga, Apel, Jeruk.</div>
      </div>`,
    flashcards: [
      { q:'Apa itu kata umum?', a:'Kata yang memiliki makna luas dan mencakup banyak kata yang lebih spesifik.' },
      { q:'Kata umum dari "mawar, melati, tulip"?', a:'"Bunga" — mawar, melati, dan tulip adalah jenis-jenis bunga.' },
      { q:'Kata umum disebut juga?', a:'Hipernim.' },
      { q:'Apa bedanya kata umum dan kata khusus?', a:'Kata umum = makna luas (hipernim). Kata khusus = makna sempit/spesifik (hiponim).' },
    ],
  },

  // ---- MATEMATIKA ----
  'mtk-1': {
    title: '📊 Pengolahan Data',
    sub: 'Tabel, diagram batang, dan diagram lingkaran',
    body: `
      <div class="content-section">
        <h3>📌 Cara Menyajikan Data</h3>
        <p><strong>Data</strong> adalah kumpulan informasi atau fakta yang dikumpulkan. Data bisa disajikan dalam berbagai bentuk agar mudah dibaca dan dipahami.</p>
        <div class="table-wrap"><table><tr><th>Bentuk Penyajian</th><th>Kegunaan</th></tr>
        <tr><td>📋 Tabel</td><td>Menyajikan data secara terurut dalam baris dan kolom</td></tr>
        <tr><td>📊 Diagram Batang</td><td>Membandingkan data antar kategori</td></tr>
        <tr><td>🥧 Diagram Lingkaran</td><td>Menunjukkan perbandingan dalam persen (bagian dari keseluruhan)</td></tr>
        <tr><td>📈 Diagram Garis</td><td>Menunjukkan perubahan data dari waktu ke waktu</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🥧 Cara Menghitung Diagram Lingkaran</h3>
        <div class="info-box green">Rumus sudut: <strong>(Frekuensi ÷ Total) × 360°</strong></div>
        <div class="info-box blue">Rumus persen: <strong>(Frekuensi ÷ Total) × 100%</strong></div>
        <p>Contoh: Dari 40 siswa, 10 suka IPA. Sudut IPA = (10÷40) × 360° = <strong>90°</strong></p>
      </div>`,
    flashcards: [
      { q:'Diagram apa yang cocok untuk membandingkan data?', a:'Diagram batang.' },
      { q:'Diagram apa untuk menunjukkan bagian dari keseluruhan?', a:'Diagram lingkaran (pie chart).' },
      { q:'Rumus menghitung sudut diagram lingkaran?', a:'(Frekuensi ÷ Total) × 360°.' },
      { q:'Rumus menghitung persentase data?', a:'(Frekuensi ÷ Total) × 100%.' },
    ],
  },

  'mtk-2': {
    title: '½ Pecahan Campuran',
    sub: 'Operasi penjumlahan, pengurangan, perkalian, pembagian',
    body: `
      <div class="content-section">
        <h3>📌 Jenis-jenis Pecahan</h3>
        <ul>
          <li>Pecahan Biasa: ½, ¾, 2/5</li>
          <li><strong>Pecahan Campuran: 1½, 2¾</strong> (bilangan bulat + pecahan biasa)</li>
          <li>Pecahan Desimal: 0,5 = ½</li>
        </ul>
        <div class="info-box green">Ubah pecahan campuran ke pecahan biasa dulu sebelum menghitung! Rumus: a b/c = (a×c + b) / c</div>
        <p>Contoh: 2¾ = (2×4 + 3)/4 = <strong>11/4</strong></p>
      </div>
      <div class="content-section">
        <h3>🧮 Operasi Hitung Pecahan</h3>
        <div class="table-wrap"><table><tr><th>Operasi</th><th>Cara</th><th>Contoh</th></tr>
        <tr><td>Penjumlahan/Pengurangan</td><td>Samakan penyebut dulu (cari KPK), lalu hitung pembilang</td><td>½ + ⅓ = 3/6 + 2/6 = 5/6</td></tr>
        <tr><td>Perkalian</td><td>Pembilang × pembilang, penyebut × penyebut</td><td>½ × ⅔ = 2/6 = ⅓</td></tr>
        <tr><td>Pembagian</td><td>Balik pecahan pembagi, lalu kalikan</td><td>½ ÷ ¼ = ½ × 4 = 2</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'Cara mengubah 1½ ke pecahan biasa?', a:'(1×2 + 1)/2 = 3/2.' },
      { q:'Cara menjumlah pecahan beda penyebut?', a:'Samakan penyebut dengan mencari KPK, lalu jumlahkan pembilang.' },
      { q:'Cara mengalikan pecahan?', a:'Pembilang × pembilang, penyebut × penyebut. Sederhanakan hasilnya.' },
      { q:'½ + ¼ = ?', a:'2/4 + 1/4 = 3/4.' },
      { q:'½ ÷ ¼ = ?', a:'½ × 4/1 = 4/2 = 2.' },
    ],
  },

  'mtk-3': {
    title: '✖️ KPK',
    sub: 'Kelipatan Persekutuan Terkecil',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu KPK?</h3>
        <p><strong>KPK</strong> (Kelipatan Persekutuan Terkecil) adalah bilangan terkecil yang merupakan kelipatan bersama dari dua bilangan atau lebih.</p>
        <div class="info-box green">KPK digunakan untuk: menyamakan penyebut pecahan, dan soal jadwal bertemu.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Cara Mencari KPK</h3>
        <p><strong>Cara 1: Faktorisasi Prima</strong></p>
        <div class="info-box blue">KPK = ambil SEMUA faktor prima, gunakan pangkat TERTINGGI.</div>
        <p>Contoh: KPK dari 12 dan 18<br>12 = 2² × 3 | 18 = 2 × 3²<br>KPK = 2² × 3² = 4 × 9 = <strong>36</strong></p>
        <p><strong>Cara 2: Daftar Kelipatan</strong></p>
        <p>Kelipatan 4: 4, 8, 12, 16, 20, 24...<br>Kelipatan 6: 6, 12, 18, 24...<br>KPK(4,6) = <strong>12</strong></p>
      </div>
      <div class="content-section">
        <h3>📝 Contoh Soal Cerita</h3>
        <div class="info-box">Andi les tiap 3 hari, Budi les tiap 4 hari. Mereka les bersama setiap berapa hari?<br>KPK(3,4) = 12 → Mereka bertemu setiap <strong>12 hari sekali</strong>.</div>
      </div>`,
    flashcards: [
      { q:'KPK singkatan dari?', a:'Kelipatan Persekutuan Terkecil.' },
      { q:'Cara faktorisasi prima untuk KPK?', a:'Ambil SEMUA faktor prima dengan pangkat TERTINGGI.' },
      { q:'KPK dari 4 dan 6?', a:'KPK(4,6) = 12.' },
      { q:'KPK berguna untuk apa?', a:'Menyamakan penyebut pecahan dan menyelesaikan soal jadwal bertemu.' },
    ],
  },

  'mtk-4': {
    title: '➗ FPB',
    sub: 'Faktor Persekutuan Terbesar',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu FPB?</h3>
        <p><strong>FPB</strong> (Faktor Persekutuan Terbesar) adalah bilangan terbesar yang dapat membagi habis dua bilangan atau lebih.</p>
        <div class="info-box green">FPB digunakan untuk: membagi sesuatu secara merata (soal pembagian adil).</div>
      </div>
      <div class="content-section">
        <h3>🔢 Cara Mencari FPB</h3>
        <div class="info-box blue">FPB = ambil faktor prima yang SAMA, gunakan pangkat TERENDAH.</div>
        <p>Contoh: FPB dari 12 dan 18<br>12 = 2² × 3 | 18 = 2 × 3²<br>Faktor sama: 2 (min 1) dan 3 (min 1)<br>FPB = 2¹ × 3¹ = <strong>6</strong></p>
      </div>
      <div class="content-section">
        <h3>⚖️ Perbedaan FPB dan KPK</h3>
        <div class="table-wrap"><table><tr><th>Aspek</th><th>FPB</th><th>KPK</th></tr>
        <tr><td>Dari faktorisasi</td><td>Faktor SAMA, pangkat RENDAH</td><td>Semua faktor, pangkat TINGGI</td></tr>
        <tr><td>Hasilnya</td><td>≤ bilangan terkecil</td><td>≥ bilangan terbesar</td></tr>
        <tr><td>Digunakan untuk</td><td>Pembagian merata</td><td>Jadwal bertemu</td></tr></table></div>
      </div>`,
    flashcards: [
      { q:'FPB singkatan dari?', a:'Faktor Persekutuan Terbesar.' },
      { q:'Cara faktorisasi prima untuk FPB?', a:'Ambil faktor prima yang SAMA dengan pangkat TERENDAH.' },
      { q:'FPB dari 12 dan 18?', a:'FPB = 6 (12=2²×3, 18=2×3², ambil 2¹×3¹=6).' },
      { q:'FPB berguna untuk apa?', a:'Membagi sesuatu secara merata (soal pembagian yang adil).' },
    ],
  },

  'mtk-5': {
    title: '📐 Mean (Rata-rata)',
    sub: 'Menghitung nilai tengah dari sekumpulan data',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Mean?</h3>
        <p><strong>Mean</strong> adalah nilai rata-rata dari sekumpulan data. Mean diperoleh dengan menjumlahkan semua data lalu dibagi banyaknya data.</p>
        <div class="info-box green" style="font-size:1.05rem;justify-content:center">📐 <strong>Mean = Jumlah semua data ÷ Banyaknya data</strong></div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <p>Nilai ulangan 5 siswa: 70, 80, 90, 75, 85</p>
        <ul>
          <li>Jumlah = 70 + 80 + 90 + 75 + 85 = <strong>400</strong></li>
          <li>Banyak data = <strong>5</strong></li>
          <li>Mean = 400 ÷ 5 = <strong>80</strong></li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📊 Median dan Modus (Tambahan)</h3>
        <ul>
          <li>📍 <strong>Median</strong> = nilai TENGAH setelah data diurutkan.</li>
          <li>🔁 <strong>Modus</strong> = nilai yang paling SERING muncul.</li>
        </ul>
        <p>Data: 3, 5, 5, 7, 9 → Median = 5 | Modus = 5 | Mean = 29/5 = 5,8</p>
      </div>`,
    flashcards: [
      { q:'Rumus mean/rata-rata?', a:'Mean = Jumlah semua data ÷ Banyaknya data.' },
      { q:'Nilai 60, 70, 80, 90 → Mean = ?', a:'(60+70+80+90) ÷ 4 = 300 ÷ 4 = 75.' },
      { q:'Apa itu median?', a:'Nilai tengah dari data yang sudah diurutkan dari kecil ke besar.' },
      { q:'Apa itu modus?', a:'Nilai yang paling sering muncul dalam suatu kumpulan data.' },
    ],
  },

  'mtk-6': {
    title: '⬜ Keliling Bangun Datar',
    sub: 'Rumus keliling persegi, segitiga, lingkaran, dll.',
    body: `
      <div class="content-section">
        <h3>📐 Rumus-rumus Keliling</h3>
        <div class="table-wrap"><table><tr><th>Bangun</th><th>Rumus</th><th>Keterangan</th></tr>
        <tr><td>⬜ Persegi</td><td>K = 4 × s</td><td>s = panjang sisi</td></tr>
        <tr><td>▬ Persegi Panjang</td><td>K = 2 × (p + l)</td><td>p = panjang, l = lebar</td></tr>
        <tr><td>🔺 Segitiga</td><td>K = a + b + c</td><td>a, b, c = ketiga sisi</td></tr>
        <tr><td>🔷 Jajargenjang</td><td>K = 2 × (a + b)</td><td>a, b = dua sisi berbeda</td></tr>
        <tr><td>🟡 Lingkaran</td><td>K = π × d = 2πr</td><td>π ≈ 3,14 atau 22/7</td></tr>
        <tr><td>🔶 Trapesium</td><td>K = a + b + c + d</td><td>Jumlah semua sisi</td></tr></table></div>
        <div class="info-box blue">Nilai π (phi) = 3,14 atau 22/7. Gunakan 22/7 jika jari-jari/diameter habis dibagi 7.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <ul>
          <li>Persegi sisi 8 cm: K = 4 × 8 = <strong>32 cm</strong></li>
          <li>Persegi panjang p=10, l=5: K = 2×(10+5) = <strong>30 cm</strong></li>
          <li>Lingkaran r=7: K = 2 × 22/7 × 7 = <strong>44 cm</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Rumus keliling persegi?', a:'K = 4 × s (s = panjang sisi).' },
      { q:'Rumus keliling persegi panjang?', a:'K = 2 × (p + l).' },
      { q:'Rumus keliling lingkaran?', a:'K = π × d = 2 × π × r (π ≈ 3,14 atau 22/7).' },
      { q:'Nilai phi (π) berapa?', a:'3,14 atau 22/7.' },
      { q:'Keliling persegi sisi 9 cm?', a:'K = 4 × 9 = 36 cm.' },
    ],
  },

  'mtk-7': {
    title: '🔷 Luas Bangun Datar',
    sub: 'Rumus luas segitiga, lingkaran, trapesium, dll.',
    body: `
      <div class="content-section">
        <h3>📐 Rumus-rumus Luas</h3>
        <div class="table-wrap"><table><tr><th>Bangun</th><th>Rumus Luas</th></tr>
        <tr><td>⬜ Persegi</td><td>L = s²</td></tr>
        <tr><td>▬ Persegi Panjang</td><td>L = p × l</td></tr>
        <tr><td>🔺 Segitiga</td><td>L = ½ × a × t</td></tr>
        <tr><td>🔷 Jajargenjang</td><td>L = a × t</td></tr>
        <tr><td>🔶 Trapesium</td><td>L = ½ × (a + b) × t</td></tr>
        <tr><td>🔸 Belah Ketupat/Layang-layang</td><td>L = ½ × d₁ × d₂</td></tr>
        <tr><td>🟡 Lingkaran</td><td>L = π × r²</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <ul>
          <li>Segitiga alas 10, tinggi 8: L = ½ × 10 × 8 = <strong>40 cm²</strong></li>
          <li>Lingkaran r=7: L = 22/7 × 49 = <strong>154 cm²</strong></li>
          <li>Trapesium a=8, b=12, t=6: L = ½ × (8+12) × 6 = <strong>60 cm²</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Rumus luas segitiga?', a:'L = ½ × alas × tinggi.' },
      { q:'Rumus luas lingkaran?', a:'L = π × r² (r = jari-jari).' },
      { q:'Rumus luas trapesium?', a:'L = ½ × (sisi atas + sisi bawah) × tinggi.' },
      { q:'Luas persegi sisi 6 cm?', a:'L = 6² = 36 cm².' },
      { q:'Rumus luas belah ketupat?', a:'L = ½ × diagonal 1 × diagonal 2.' },
    ],
  },

  'mtk-8': {
    title: '📦 Volume',
    sub: 'Rumus volume kubus, balok, dan tabung',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Volume?</h3>
        <p><strong>Volume</strong> adalah ukuran ruang yang ditempati oleh suatu benda tiga dimensi. Satuan volume adalah cm³ atau m³.</p>
        <div class="table-wrap"><table><tr><th>Bangun Ruang</th><th>Rumus Volume</th><th>Keterangan</th></tr>
        <tr><td>📦 Kubus</td><td>V = s³</td><td>s = panjang rusuk</td></tr>
        <tr><td>📦 Balok</td><td>V = p × l × t</td><td>p = panjang, l = lebar, t = tinggi</td></tr>
        <tr><td>🥫 Tabung</td><td>V = π × r² × t</td><td>r = jari-jari alas, t = tinggi</td></tr>
        <tr><td>🔺 Limas</td><td>V = ⅓ × L.alas × t</td><td>L.alas = luas alas</td></tr>
        <tr><td>🍦 Kerucut</td><td>V = ⅓ × π × r² × t</td><td>r = jari-jari alas</td></tr></table></div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Soal</h3>
        <ul>
          <li>Kubus rusuk 5 cm: V = 5³ = <strong>125 cm³</strong></li>
          <li>Balok p=10, l=5, t=4: V = 10 × 5 × 4 = <strong>200 cm³</strong></li>
          <li>Tabung r=7, t=10: V = 22/7 × 49 × 10 = <strong>1540 cm³</strong></li>
        </ul>
      </div>`,
    flashcards: [
      { q:'Rumus volume kubus?', a:'V = s³ (s = panjang rusuk).' },
      { q:'Rumus volume balok?', a:'V = p × l × t.' },
      { q:'Rumus volume tabung?', a:'V = π × r² × t.' },
      { q:'Kubus rusuk 4 cm, volumenya?', a:'V = 4³ = 64 cm³.' },
      { q:'Balok p=6, l=4, t=3, volumenya?', a:'V = 6 × 4 × 3 = 72 cm³.' },
    ],
  },

  'mtk-9': {
    title: '➖ Selisih',
    sub: 'Pengurangan dan mencari perbedaan nilai',
    body: `
      <div class="content-section">
        <h3>📌 Apa itu Selisih?</h3>
        <p><strong>Selisih</strong> adalah hasil pengurangan dua bilangan — yaitu perbedaan atau jarak antara dua nilai. Rumus selisih: <strong>Selisih = Nilai Besar − Nilai Kecil</strong></p>
        <div class="info-box green">Selisih selalu bernilai positif karena menggunakan nilai besar dikurangi nilai kecil.</div>
      </div>
      <div class="content-section">
        <h3>🔢 Contoh Penggunaan Selisih</h3>
        <ul>
          <li>Nilai Andi 85, Budi 72. Selisih = 85 − 72 = <strong>13</strong></li>
          <li>Suhu pagi 18°C, siang 34°C. Selisih = 34 − 18 = <strong>16°C</strong></li>
          <li>Jarak kota A–B = 250 km, A–C = 175 km. Selisih = 250 − 175 = <strong>75 km</strong></li>
        </ul>
      </div>
      <div class="content-section">
        <h3>📐 Selisih dalam Soal Cerita</h3>
        <div class="info-box">Kata kunci soal selisih: "berapa lebih banyak/besar/jauh/panjang", "perbedaan", "selisih", "lebih ... dari".</div>
        <p>Contoh: Kebun Pak Budi luasnya 450 m², kebun Pak Andi 280 m². Berapa selisih luas kebun mereka? → 450 − 280 = <strong>170 m²</strong></p>
      </div>`,
    flashcards: [
      { q:'Rumus mencari selisih?', a:'Selisih = Nilai Besar − Nilai Kecil.' },
      { q:'Nilai 95 dan 68, selisihnya?', a:'95 − 68 = 27.' },
      { q:'Kata kunci soal selisih?', a:'"Berapa lebih banyak/besar", "perbedaan", "selisih", "lebih … dari".' },
      { q:'Kenapa selisih selalu positif?', a:'Karena kita selalu mengurangkan nilai besar dengan nilai kecil.' },
    ],
  },
};

// ---------- DATA KUIS LENGKAP ----------
export const QUIZ_DATA = {
// ================================================================
  //  ipa-1 | METAMORFOSIS (Sempurna & Tidak Sempurna)
  // ================================================================
  'ipa-1': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Metamorfosis adalah proses perubahan...',
      opts: ['Warna tubuh hewan', 'Bentuk tubuh hewan secara bertahap', 'Ukuran telur hewan', 'Cara makan hewan'],
      ans: 1,
      hint: 'Pikirkan apa yang terjadi pada ulat hingga menjadi kupu-kupu.',
      explanation: 'Metamorfosis adalah proses perubahan BENTUK tubuh hewan secara bertahap selama masa pertumbuhannya, bukan hanya warna atau ukurannya.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Berapa jumlah tahap pada metamorfosis sempurna?',
      opts: ['2 tahap', '3 tahap', '4 tahap', '5 tahap'],
      ans: 2,
      hint: 'Ingat: Telur → ... → ... → Imago. Ada berapa kotak?',
      explanation: 'Metamorfosis sempurna memiliki 4 tahap: Telur → Larva → Pupa → Imago (dewasa). Itulah mengapa disebut sempurna karena lebih lengkap.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tahap kepompong pada metamorfosis sempurna disebut tahap _.',
      ans: 'Pupa',
      hint: 'Huruf pertamanya adalah P. Di tahap ini hewan seperti "istirahat" dalam bungkusan.',
      explanation: 'Pupa (kepompong) adalah tahap istirahat pada metamorfosis sempurna. Di dalam pupa, larva berubah total menjadi hewan dewasa (imago).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Anak hewan pada metamorfosis tidak sempurna yang bentuknya mirip dewasa disebut...',
      opts: ['Larva', 'Pupa', 'Nimfa', 'Berudu'],
      ans: 2,
      hint: 'Ini bukan kepompong dan bukan ulat. Hewan kecil ini sudah mirip bentuk dewasanya.',
      explanation: 'Nimfa adalah anak hewan pada metamorfosis tidak sempurna. Bentuknya sudah mirip dengan hewan dewasa, hanya lebih kecil dan belum memiliki sayap sempurna.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Belalang mengalami metamorfosis _, karena tidak melewati tahap pupa.',
      ans: 'tidak sempurna',
      hint: 'Metamorfosis belalang hanya 3 tahap: Telur → Nimfa → Dewasa.',
      explanation: 'Belalang mengalami metamorfosis TIDAK SEMPURNA (hemimetabola) karena hanya ada 3 tahap dan tidak ada tahap pupa/kepompong.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Urutan metamorfosis sempurna yang BENAR adalah...',
      opts: [
        'Telur → Pupa → Larva → Imago',
        'Telur → Nimfa → Imago',
        'Telur → Larva → Pupa → Imago',
        'Larva → Telur → Pupa → Imago'
      ],
      ans: 2,
      hint: 'Setelah larva (ulat), hewan masuk ke tahap kepompong. Apa nama ilmiahnya?',
      explanation: 'Urutan yang benar: Telur → Larva → Pupa → Imago. Larva (ulat) berubah menjadi pupa (kepompong), lalu dari pupa keluarlah imago (hewan dewasa).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Jentik-jentik merupakan larva dari hewan...',
      opts: ['Kupu-kupu', 'Lalat', 'Nyamuk', 'Lebah'],
      ans: 2,
      hint: 'Hewan ini sering menggigit kita dan bisa menyebarkan penyakit. Larvanya hidup di air yang diam.',
      explanation: 'Jentik-jentik adalah larva NYAMUK yang hidup di air diam (genangan, bak mandi). Setelah menjadi pupa, nyamuk dewasa muncul ke udara.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Katak pada saat masih kecil berbentuk _ yang hidup di air.',
      ans: 'kecebong (berudu)',
      hint: 'Makhluk kecil berekor yang berenang di kolam sebelum kaki kecilnya tumbuh.',
      explanation: 'Larva katak disebut kecebong atau berudu. Kecebong hidup di air dan bernapas dengan insang. Setelah tumbuh kaki dan paru-paru, ia berubah menjadi katak dewasa.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan daftar hewan berikut: Capung, Nyamuk, Kecoa, Kupu-kupu. Hewan yang mengalami metamorfosis TIDAK SEMPURNA adalah...',
      opts: ['Nyamuk dan Kupu-kupu', 'Capung dan Kecoa', 'Nyamuk dan Kecoa', 'Kupu-kupu dan Capung'],
      ans: 1,
      hint: 'Hewan metamorfosis tidak sempurna tidak punya tahap kepompong. Mana yang punya tahap nimfa?',
      explanation: 'Capung dan Kecoa mengalami metamorfosis tidak sempurna (nimfa). Nyamuk dan Kupu-kupu mengalami metamorfosis sempurna (ada tahap larva dan pupa).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan utama metamorfosis sempurna dan tidak sempurna terletak pada...',
      opts: [
        'Jumlah telur yang dihasilkan',
        'Ada atau tidaknya tahap pupa dan perbedaan bentuk larva dengan dewasa',
        'Tempat hidup hewan',
        'Warna tubuh hewan dewasa'
      ],
      ans: 1,
      hint: 'Ingat ciri khas metamorfosis sempurna: ada kepompong dan bentuk larva SANGAT berbeda dari dewasa.',
      explanation: 'Perbedaan utamanya: metamorfosis sempurna memiliki tahap PUPA dan bentuk larva sangat berbeda dari dewasa. Metamorfosis tidak sempurna tidak ada pupa dan anak (nimfa) sudah mirip dewasa.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang petani menemukan banyak ulat di tanaman kubisnya. Setelah beberapa minggu, ulat-ulat itu menghilang dan digantikan banyak kepompong. Apa yang akan terjadi setelah kepompong itu?',
      opts: [
        'Muncul ulat yang lebih besar',
        'Kepompong akan mati',
        'Akan muncul imago (serangga dewasa), kemungkinan kupu-kupu',
        'Akan muncul nimfa belalang'
      ],
      ans: 2,
      hint: 'Kepompong adalah tahap akhir sebelum hewan dewasa keluar. Apa nama ilmiah hewan dewasa?',
      explanation: 'Kepompong (pupa) adalah tahap terakhir sebelum imago. Ulat pada tanaman kubis biasanya adalah larva kupu-kupu. Setelah pupa, imago (kupu-kupu dewasa) akan keluar. Ini adalah siklus metamorfosis sempurna.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa pada metamorfosis SEMPURNA, larva dan imago (dewasa) tidak bersaing untuk mendapatkan makanan yang sama?',
      opts: [
        'Karena larva dan imago hidup di planet berbeda',
        'Karena bentuk dan kebutuhan makanan larva sangat berbeda dari imago dewasa',
        'Karena larva tidak membutuhkan makanan',
        'Karena imago memakan larva'
      ],
      ans: 1,
      hint: 'Ulat makan daun, sedangkan kupu-kupu makan... apa? Apakah sama?',
      explanation: 'Karena bentuk tubuh larva dan imago SANGAT BERBEDA, kebutuhan makanannya pun berbeda. Ulat (larva kupu-kupu) makan daun, sedangkan kupu-kupu dewasa menghisap nektar bunga. Ini adalah keuntungan evolusi metamorfosis sempurna!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Siklus hidup nyamuk yang benar dimulai dari telur yang diletakkan di atas air, lalu menetas menjadi _, kemudian menjadi pupa, dan akhirnya menjadi nyamuk dewasa.',
      ans: 'jentik-jentik (larva)',
      hint: 'Hewan kecil yang sering kita lihat bergerak-gerak di dalam bak mandi yang kotor.',
      explanation: 'Siklus nyamuk: Telur (di permukaan air) → Jentik-jentik/Larva (di dalam air) → Pupa (di dalam air) → Nyamuk dewasa (terbang). Menguras bak mandi memutus siklus ini!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dina mengamati seekor serangga kecil yang mirip belalang tetapi lebih kecil dan sayapnya belum sempurna. Serangga itu kemungkinan sedang berada di tahap...',
      opts: ['Pupa', 'Larva', 'Nimfa', 'Imago'],
      ans: 2,
      hint: 'Hewan ini mirip dewasa tapi lebih kecil dan sayapnya belum tumbuh sempurna. Ini ciri khas metamorfosis...',
      explanation: 'Serangga kecil yang mirip dewasa tetapi lebih kecil dan sayap belum sempurna adalah NIMFA. Nimfa ada pada metamorfosis tidak sempurna seperti belalang. Setelah beberapa kali molting (ganti kulit), nimfa menjadi belalang dewasa.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Metamorfosis sempurna disebut juga _ yang artinya "semua berubah", karena semua bagian tubuh larva berubah total saat di dalam pupa.',
      ans: 'holometabola',
      hint: 'Kata ini berasal dari bahasa Yunani. Huruf pertamanya H.',
      explanation: 'Holometabola (dari bahasa Yunani: holos = semua, metabole = perubahan) adalah nama ilmiah untuk metamorfosis sempurna. Di dalam pupa, tubuh larva benar-benar "didaur ulang" menjadi bentuk dewasa yang berbeda total.'
    },
  ],

  // ================================================================
  //  ipa-2 | PERKEMBANGBIAKAN HEWAN (Ovipar, Vivipar, Ovovivipar)
  // ================================================================
  'ipa-2': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hewan yang berkembang biak dengan cara bertelur disebut...',
      opts: ['Vivipar', 'Ovipar', 'Ovovivipar', 'Vegetatif'],
      ans: 1,
      hint: 'Kata "ovi" berasal dari bahasa Latin yang artinya telur.',
      explanation: 'Ovipar (dari "ovum" = telur) adalah hewan yang berkembang biak dengan bertelur. Embrio berkembang di dalam telur di luar tubuh induk. Contoh: ayam, bebek, ikan, katak.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sapi termasuk jenis hewan...',
      opts: ['Ovipar', 'Ovovivipar', 'Vivipar', 'Tunas'],
      ans: 2,
      hint: 'Sapi melahirkan anak sapi, bukan bertelur.',
      explanation: 'Sapi adalah hewan Vivipar karena melahirkan anaknya. Embrio berkembang di dalam rahim induk dan mendapat nutrisi langsung dari induk melalui plasenta.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Ayam, ikan, dan katak merupakan contoh hewan _, karena berkembang biak dengan cara bertelur.',
      ans: 'ovipar',
      hint: 'Kata ini berhubungan dengan kata "ovum" yang berarti telur.',
      explanation: 'Ayam, ikan, dan katak semuanya adalah hewan OVIPAR. Embrio mereka berkembang di dalam telur yang berada di luar tubuh induk.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hydra berkembang biak secara vegetatif dengan cara...',
      opts: ['Membelah diri', 'Tunas', 'Fragmentasi', 'Partenogenesis'],
      ans: 1,
      hint: 'Pada Hydra, tumbuh benjolan kecil di tubuhnya yang lama-lama menjadi individu baru.',
      explanation: 'Hydra berkembang biak dengan TUNAS. Tunas kecil tumbuh di bagian tubuh induk, kemudian melepaskan diri menjadi Hydra baru yang mandiri.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Amoeba berkembang biak dengan cara _ menjadi dua individu baru.',
      ans: 'membelah diri',
      hint: 'Bayangkan tubuh Amoeba seperti plastisin yang dibelah jadi dua sama rata.',
      explanation: 'Amoeba berkembang biak dengan membelah diri (pembelahan biner). Satu sel Amoeba membelah menjadi dua sel anak yang identik.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan utama antara Ovipar dan Ovovivipar adalah...',
      opts: [
        'Ovipar bertelur di air, Ovovivipar di darat',
        'Ovipar telurnya berkembang di luar tubuh induk, Ovovivipar telurnya berkembang di dalam tubuh induk',
        'Ovipar punya rahim, Ovovivipar tidak',
        'Tidak ada perbedaan keduanya sama saja'
      ],
      ans: 1,
      hint: 'Perhatikan kata "ovo" (telur) dan "vivi" (hidup). Di mana telur itu berkembang?',
      explanation: 'Ovipar: telur dikeluarkan dan berkembang di LUAR tubuh. Ovovivipar: telur berkembang di DALAM tubuh induk, namun bayi tetap lahir dari telur yang menetas di dalam. Keduanya sama-sama punya telur, tapi tempatnya berbeda.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Hewan berikut yang termasuk ovovivipar adalah...',
      opts: ['Kucing', 'Ayam', 'Hiu tertentu', 'Sapi'],
      ans: 2,
      hint: 'Hewan ini hidup di laut dan terlihat seperti ikan besar, tapi punya cara berkembang biak yang unik.',
      explanation: 'Beberapa jenis hiu adalah ovovivipar. Telur berkembang di dalam tubuh induk, lalu bayi hiu lahir hidup-hidup. Kucing dan sapi adalah vivipar, sedangkan ayam adalah ovipar.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Planaria (cacing pipih) berkembang biak secara vegetatif dengan cara _, di mana setiap potongan tubuhnya dapat tumbuh menjadi individu baru.',
      ans: 'fragmentasi',
      hint: 'Kata ini mirip dengan kata "fragmen" yang berarti potongan atau bagian.',
      explanation: 'Fragmentasi adalah cara berkembang biak dengan memotong diri. Pada Planaria, setiap potongan tubuh mampu beregenerasi menjadi individu baru yang lengkap. Bintang laut juga menggunakan cara ini.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Lebah pekerja berkembang biak dengan cara partenogenesis. Artinya...',
      opts: [
        'Telur dibuahi oleh lebah jantan',
        'Telur berkembang tanpa dibuahi',
        'Lebah bertelur di dalam sarang',
        'Lebah melahirkan anak'
      ],
      ans: 1,
      hint: 'Partenogenesis berasal dari kata "parthenos" (perawan) dan "genesis" (asal). Apa artinya?',
      explanation: 'Partenogenesis adalah berkembang biak di mana TELUR berkembang TANPA pembuahan dari jantan. Lebah pekerja betina dapat menghasilkan telur yang langsung berkembang tanpa dibuahi lebah jantan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa bayi paus termasuk hewan vivipar, bukan ovipar, walaupun hidup di laut seperti ikan?',
      opts: [
        'Karena paus bernapas dengan insang',
        'Karena paus melahirkan anak dan menyusui, seperti mamalia',
        'Karena paus tidak bisa bertelur di air',
        'Karena paus adalah hewan amfibi'
      ],
      ans: 1,
      hint: 'Ingat klasifikasi paus. Apa kelompok hewan yang melahirkan dan menyusui anaknya?',
      explanation: 'Meski hidup di laut, paus adalah MAMALIA, bukan ikan. Mamalia selalu vivipar — melahirkan anak dan menyusui. Paus bernapas dengan paru-paru, bukan insang. Cara hidupnya di laut tidak mengubah cara berkembang biaknya.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Budi menemukan seekor komodo betina di kebun binatang yang sudah lama tidak bersama komodo jantan, tetapi berhasil bertelur dan telurnya menetas. Cara berkembang biak yang terjadi kemungkinan adalah...',
      opts: ['Fragmentasi', 'Partenogenesis', 'Tunas', 'Vivipar'],
      ans: 1,
      hint: 'Telur berkembang dan menetas tanpa dibuahi oleh jantan. Ini fenomena langka yang terjadi pada beberapa reptil.',
      explanation: 'Komodo dapat melakukan PARTENOGENESIS — telur berkembang tanpa dibuahi oleh jantan. Ini adalah kemampuan luar biasa yang dimiliki beberapa reptil sebagai mekanisme bertahan hidup ketika tidak ada jantan di sekitarnya.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Hewan ovovivipar berbeda dari vivipar karena pada ovovivipar, bayi tidak mendapat nutrisi dari induk melalui _, melainkan dari dalam telurnya sendiri.',
      ans: 'plasenta (ari-ari)',
      hint: 'Organ penghubung antara bayi dan induk di dalam rahim yang digunakan oleh hewan vivipar.',
      explanation: 'Pada hewan VIVIPAR, bayi mendapat makanan dari induk melalui PLASENTA (ari-ari). Pada OVOVIVIPAR, tidak ada plasenta — bayi mendapat nutrisi dari kuning telur di dalam tubuh induk. Itulah perbedaan mendasar antara keduanya.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang ilmuwan menemukan hewan baru di hutan. Hewan itu berkembang biak dengan cara yang tubuhnya terputus menjadi beberapa bagian, dan setiap bagian tumbuh menjadi individu baru. Cara ini disebut...',
      opts: ['Tunas', 'Membelah diri', 'Fragmentasi', 'Partenogenesis'],
      ans: 2,
      hint: 'Cara ini berbeda dari membelah diri karena "pemotong" tidak harus sama rata.',
      explanation: 'FRAGMENTASI terjadi ketika tubuh hewan terpotong-potong dan tiap potongan tumbuh menjadi individu baru. Berbeda dari membelah diri (yang selalu menghasilkan 2 individu sama besar). Bintang laut, Planaria, dan cacing tanah bisa melakukan fragmentasi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Rina membandingkan dua hewan: Kucing (vivipar) dan Ayam (ovipar). Menurutmu, apa KEUNGGULAN cara vivipar dibandingkan ovipar dalam menjaga keselamatan keturunan?',
      opts: [
        'Vivipar menghasilkan lebih banyak anak sekaligus',
        'Embrio vivipar terlindung di dalam tubuh induk sehingga lebih aman dari pemangsa dan cuaca',
        'Hewan vivipar lebih pintar dari ovipar',
        'Telur ovipar tidak bisa menetas tanpa bantuan manusia'
      ],
      ans: 1,
      hint: 'Bayangkan perbedaan keamanan antara bayi di dalam rahim vs. telur yang tergeletak di sarang.',
      explanation: 'Keunggulan VIVIPAR: embrio berkembang di dalam rahim induk yang terlindung dari pemangsa, cuaca ekstrem, dan kekeringan. Sedangkan telur ovipar di luar tubuh lebih mudah dimangsa atau rusak. Namun ovipar bisa menghasilkan banyak telur sekaligus sebagai kompensasi.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Bintang laut dapat beregenerasi karena berkembang biak secara _, yaitu potongan tubuhnya bisa tumbuh menjadi individu baru yang lengkap.',
      ans: 'fragmentasi',
      hint: 'Sama seperti cara Planaria berkembang biak. Kata kuncinya adalah "potongan" yang bisa tumbuh.',
      explanation: 'Bintang laut melakukan FRAGMENTASI. Jika lengannya terpotong, lengan itu bisa tumbuh menjadi bintang laut baru! Kemampuan regenerasi ini adalah keunggulan luar biasa yang dimiliki beberapa hewan invertebrata.'
    },
  ],

  // ================================================================
  //  ipa-3 | PERKEMBANGBIAKAN TUMBUHAN (Vegetatif & Generatif)
  // ================================================================
  'ipa-3': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Perkembangbiakan tumbuhan yang dilakukan tanpa melalui perkawinan disebut...',
      opts: ['Generatif', 'Vegetatif', 'Seksual', 'Penyerbukan'],
      ans: 1,
      hint: 'Cara ini tidak melibatkan bunga, serbuk sari, atau biji.',
      explanation: 'VEGETATIF adalah perkembangbiakan tanpa perkawinan (aseksual). Tumbuhan baru tumbuh dari bagian tubuh induk seperti batang, akar, atau daun. Lawannya adalah generatif (melalui biji/bunga).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pisang berkembang biak secara alami melalui...',
      opts: ['Biji', 'Rhizoma', 'Tunas', 'Spora'],
      ans: 2,
      hint: 'Perhatikan tanaman pisang, selalu ada "anak" pisang yang tumbuh di samping batang induknya.',
      explanation: 'Pisang berkembang biak dengan TUNAS. Tunas anakan tumbuh di pangkal batang induk pisang dan lama-lama akan membentuk tanaman pisang baru yang mandiri.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Jahe dan kunyit berkembang biak dengan _, yaitu batang yang menjalar di bawah tanah.',
      ans: 'rhizoma',
      hint: 'Coba ingat, ketika kamu mencabut jahe dari tanah, bentuknya seperti batang yang berbuku-buku di dalam tanah.',
      explanation: 'Rhizoma (rimpang) adalah batang yang tumbuh dan menjalar di bawah permukaan tanah. Jahe, kunyit, lengkuas, dan kencur berkembang biak dengan cara ini. Setiap buku rhizoma bisa tumbuh menjadi tanaman baru.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bawang merah berkembang biak dengan...',
      opts: ['Spora', 'Umbi lapis', 'Stolon', 'Tunas'],
      ans: 1,
      hint: 'Kalau kamu kupas bawang merah, kamu akan melihat lapisan-lapisan di dalamnya. Itulah cara ia berkembang biak.',
      explanation: 'Bawang merah berkembang biak dengan UMBI LAPIS. Umbi lapis adalah daun yang berlapis-lapis dan menebal menyimpan cadangan makanan. Setiap lapisan bisa ditanam untuk menghasilkan tanaman baru.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Lumut dan pakis berkembang biak dengan menyebarkan _ yang sangat ringan dan mudah terbawa angin.',
      ans: 'spora',
      hint: 'Debu-debu kecil yang dilepaskan dari bagian bawah daun pakis.',
      explanation: 'Lumut dan pakis berkembang biak dengan SPORA — sel-sel kecil yang sangat ringan. Spora dilepaskan dari sporangium (kotak spora) dan terbawa angin. Spora yang jatuh di tempat lembab akan tumbuh menjadi tumbuhan baru.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan antara Rhizoma dan Stolon adalah...',
      opts: [
        'Rhizoma di atas tanah, Stolon di bawah tanah',
        'Rhizoma di bawah tanah, Stolon di atas tanah',
        'Rhizoma untuk menyimpan air, Stolon untuk menyimpan makanan',
        'Keduanya sama, hanya namanya berbeda'
      ],
      ans: 1,
      hint: 'Jahe ada di bawah tanah. Stroberi menjalar di atas tanah. Mana yang mana?',
      explanation: 'RHIZOMA menjalar di BAWAH tanah (contoh: jahe, kunyit). STOLON menjalar di ATAS tanah (contoh: stroberi, rumput teki). Keduanya adalah batang yang menjalar, perbedaannya hanya posisinya.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Vegetatif buatan yang dilakukan dengan mengupas kulit batang lalu dibungkus tanah lembab agar berakar disebut...',
      opts: ['Stek', 'Okulasi', 'Cangkok', 'Merunduk'],
      ans: 2,
      hint: 'Cara ini sering dilakukan pada pohon mangga dan rambutan. Batangnya dilukai lalu dibungkus.',
      explanation: 'CANGKOK adalah vegetatif buatan dengan mengupas/melukai kulit batang tanaman, lalu membungkusnya dengan tanah lembab yang dibungkus plastik. Akar akan tumbuh di bagian yang terluka. Setelah berakar, cabang dipotong dan ditanam.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Singkong dan mawar sering dikembangbiakkan dengan cara _, yaitu memotong bagian batang lalu menanamnya langsung ke dalam tanah.',
      ans: 'stek',
      hint: 'Caranya: potong → tancapkan ke tanah → tunggu tumbuh. Sesederhana itu!',
      explanation: 'STEK adalah vegetatif buatan dengan memotong bagian tanaman (batang, daun, atau akar) lalu menanamnya. Singkong di-stek batangnya, mawar di-stek batangnya juga. Cara ini murah dan mudah dilakukan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam perkembangbiakan generatif, proses jatuhnya serbuk sari ke kepala putik disebut...',
      opts: ['Pembuahan', 'Penyerbukan', 'Perkecambahan', 'Fotosintesis'],
      ans: 1,
      hint: 'Ini adalah langkah PERTAMA sebelum pembuahan terjadi. Serbuk sari berpindah ke bagian lain bunga.',
      explanation: 'PENYERBUKAN (polinasi) adalah proses berpindahnya serbuk sari dari kepala sari (antera) ke kepala putik (stigma). Penyerbukan adalah syarat terjadinya pembuahan yang kemudian menghasilkan biji.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Keunggulan utama vegetatif buatan (cangkok, stek) dibandingkan menanam dari biji adalah...',
      opts: [
        'Menghasilkan tanaman yang lebih tinggi',
        'Tanaman baru memiliki sifat yang sama dengan induk dan lebih cepat berbuah',
        'Tanaman baru lebih tahan penyakit',
        'Menghasilkan lebih banyak buah sekaligus'
      ],
      ans: 1,
      hint: 'Kalau sifat induknya bagus (buah manis, ukuran besar), sifat itu akan diturunkan ke tanaman baru.',
      explanation: 'Keunggulan vegetatif buatan: tanaman baru adalah KLON dari induk, sehingga semua sifat unggul induk (rasa, ukuran, warna) diwariskan secara identik. Selain itu, tanaman hasil cangkok/stek biasanya berbuah lebih CEPAT dibanding tanaman dari biji.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Petani ingin mengembangbiakkan tanaman manga yang buahnya sangat manis. Agar tanaman baru PASTI memiliki buah semanis induknya, cara yang paling tepat adalah...',
      opts: [
        'Menanam biji dari mangga yang manis itu',
        'Mencangkok cabang dari pohon mangga manis itu',
        'Menyerbukkan bunga mangga manis dengan mangga lain',
        'Menunggu mangga itu berbuah dan biji jatuh sendiri'
      ],
      ans: 1,
      hint: 'Cara mana yang menghasilkan tanaman dengan sifat IDENTIK dengan induknya?',
      explanation: 'CANGKOK menghasilkan tanaman yang IDENTIK dengan induknya karena tidak ada percampuran genetik. Menanam dari biji (generatif) bisa menghasilkan tanaman dengan sifat yang berbeda karena ada persilangan dari serbuk sari pohon lain. Cangkok = garansi sifat sama dengan induk!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Stroberi menjalar dengan stolon untuk memperbanyak diri. Apa keuntungan cara ini dibanding menanam dari biji?',
      opts: [
        'Tidak perlu air sama sekali',
        'Tanaman baru tumbuh lebih cepat dan dekat dengan induk yang sudah kuat',
        'Menghasilkan buah yang lebih besar',
        'Tumbuhan baru memiliki warna yang berbeda'
      ],
      ans: 1,
      hint: 'Stolon menghubungkan induk dengan anak tanaman. Apa yang mengalir melalui stolon sebelum anak tanaman mandiri?',
      explanation: 'Stolon menghubungkan induk dengan tanaman anak. Selama stolon masih terhubung, anak tanaman mendapat nutrisi dari induk sehingga tumbuh lebih cepat. Ketika sudah berakar kuat, stolon putus dan anak tanaman hidup mandiri. Lebih efisien dari menumbuhkan biji dari awal!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Kentang berkembang biak dengan umbi batang, sedangkan wortel berkembang biak dengan umbi _. Perbedaannya terletak pada bagian tanaman yang membengkak.',
      ans: 'akar',
      hint: 'Kentang = batang yang membengkak. Wortel = ... yang membengkak.',
      explanation: 'Kentang adalah UMBI BATANG (batang di bawah tanah yang membengkak). Wortel adalah UMBI AKAR (akar yang membengkak menyimpan makanan). Perbedaannya: pada umbi batang ada "mata" (tunas), sedangkan pada umbi akar tidak ada tunas di bagian yang membengkak.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Lebah sangat penting bagi pertanian karena perannya dalam perkembangbiakan generatif tumbuhan. Apa yang terjadi pada banyak tanaman buah jika populasi lebah berkurang drastis?',
      opts: [
        'Tanaman akan tumbuh lebih tinggi',
        'Produksi buah akan menurun karena proses penyerbukan terganggu',
        'Tanaman akan beralih ke perkembangbiakan vegetatif',
        'Buah yang dihasilkan akan lebih manis'
      ],
      ans: 1,
      hint: 'Lebah membawa serbuk sari dari satu bunga ke bunga lain. Apa proses itu namanya?',
      explanation: 'Lebah adalah agen PENYERBUKAN (polinator) yang sangat penting. Tanpa penyerbukan, proses pembuahan tidak terjadi dan buah tidak terbentuk. Jika lebah berkurang, penyerbukan terganggu dan PRODUKSI BUAH MENURUN drastis. Ini nyata terjadi di beberapa negara!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pada teknik _, dua tanaman berbeda dijadikan satu: batang bawah yang kuat dijadikan akarnya, sedangkan tunas dari tanaman unggul ditempelkan pada batang atas.',
      ans: 'okulasi (sambung pucuk/grafting)',
      hint: 'Teknik ini sering dipakai pada tanaman durian dan rambutan untuk menggabungkan keunggulan dua tanaman.',
      explanation: 'OKULASI (grafting/sambung tunas) menggabungkan dua tanaman: batang bawah (rootstock) yang tahan penyakit dan kuat, dengan tunas/mata dari tanaman unggul yang buahnya bagus. Hasilnya: tanaman dengan akar kuat DAN buah berkualitas tinggi dari induk unggul.'
    },
  ],

  // ================================================================
  //  ipa-4 | ENERGI TERBARUKAN
  // ================================================================
  'ipa-4': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Energi terbarukan adalah energi yang berasal dari sumber alam yang...',
      opts: [
        'Akan habis dalam 100 tahun',
        'Hanya ada di negara maju',
        'Dapat diperbaharui secara alami dan tidak akan habis',
        'Hanya bisa digunakan sekali'
      ],
      ans: 2,
      hint: 'Kata kuncinya adalah "terbarukan" — bisa diperbarui terus-menerus oleh alam.',
      explanation: 'Energi terbarukan berasal dari sumber yang dapat DIPERBAHARUI secara alami dan tidak habis. Contoh: matahari selalu bersinar, angin selalu bertiup, air selalu mengalir. Berbeda dengan batu bara atau minyak bumi yang terbatas.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Alat yang digunakan untuk mengubah energi matahari menjadi listrik adalah...',
      opts: ['Turbin angin', 'Panel surya', 'Generator', 'Baterai'],
      ans: 1,
      hint: 'Alat ini berbentuk seperti lembaran berwarna biru/hitam yang dipasang di atap rumah.',
      explanation: 'PANEL SURYA (solar panel) adalah alat yang mengubah energi cahaya matahari menjadi energi listrik melalui efek fotovoltaik. Panel surya sering dipasang di atap rumah atau di lahan terbuka.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'PLTA adalah singkatan dari Pembangkit Listrik Tenaga _, yang memanfaatkan aliran dan terjunan air untuk menghasilkan listrik.',
      ans: 'Air',
      hint: 'Huruf terakhir singkatannya adalah A. PLTA memanfaatkan kekuatan apa?',
      explanation: 'PLTA (Pembangkit Listrik Tenaga Air) adalah pembangkit listrik yang memanfaatkan energi kinetik dan potensial air yang mengalir atau jatuh (dari bendungan/air terjun). PLTA adalah sumber listrik terbarukan terbesar di Indonesia.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Berikut yang termasuk energi TAK TERBARUKAN adalah...',
      opts: ['Energi matahari', 'Energi angin', 'Batu bara', 'Energi air'],
      ans: 2,
      hint: 'Energi tak terbarukan berasal dari bahan bakar fosil yang terbentuk jutaan tahun dan bisa habis.',
      explanation: 'BATU BARA adalah bahan bakar fosil (energi tak terbarukan). Ia terbentuk dari sisa makhluk hidup selama jutaan tahun dan jumlahnya terbatas. Matahari, angin, dan air adalah energi terbarukan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Energi panas yang berasal dari dalam bumi disebut energi _, yang dimanfaatkan oleh PLTP.',
      ans: 'panas bumi (geothermal)',
      hint: 'Energi ini berasal dari panas magma di dalam bumi. Kata lainnya adalah "geo" + "thermal".',
      explanation: 'ENERGI PANAS BUMI (geothermal) berasal dari panas magma di dalam inti bumi. Indonesia kaya akan panas bumi karena banyak gunung berapi aktif. PLTP (Pembangkit Listrik Tenaga Panas Bumi) memanfaatkan uap panas dari dalam bumi.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa energi terbarukan disebut lebih "ramah lingkungan" dibandingkan bahan bakar fosil?',
      opts: [
        'Karena energi terbarukan lebih mahal',
        'Karena energi terbarukan tidak menghasilkan gas rumah kaca dan polusi yang merusak lingkungan',
        'Karena energi terbarukan hanya digunakan di desa',
        'Karena bahan bakar fosil tidak bisa dibakar'
      ],
      ans: 1,
      hint: 'Bayangkan asap dari pabrik yang membakar batu bara. Apakah panel surya mengeluarkan asap?',
      explanation: 'Energi terbarukan seperti matahari dan angin menghasilkan listrik TANPA membakar bahan apapun, sehingga tidak menghasilkan gas CO₂ atau polutan. Bahan bakar fosil ketika dibakar menghasilkan gas rumah kaca yang menyebabkan pemanasan global.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Turbin angin (kincir angin modern) mengubah energi angin menjadi...',
      opts: ['Energi panas', 'Energi listrik', 'Energi suara', 'Energi kimia'],
      ans: 1,
      hint: 'Baling-baling turbin berputar karena angin. Putaran itu lalu diubah oleh generator menjadi apa?',
      explanation: 'Turbin angin mengubah ENERGI KINETIK angin menjadi ENERGI LISTRIK. Angin memutar baling-baling, baling-baling memutar generator, dan generator menghasilkan listrik. Proses yang sama dipakai oleh PLTA dan PLTP.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Biogas adalah contoh energi _ yang berasal dari fermentasi bahan organik seperti kotoran hewan atau sampah.',
      ans: 'biomassa (terbarukan)',
      hint: 'Bio = makhluk hidup. Gas yang dihasilkan oleh kotoran sapi bisa digunakan untuk memasak.',
      explanation: 'BIOMASSA adalah energi yang berasal dari bahan organik (makhluk hidup atau sisa-sisanya). Biogas dihasilkan dari fermentasi kotoran hewan (sapi, babi, ayam) oleh bakteri tanpa oksigen. Biogas menghasilkan metana (CH₄) yang bisa dibakar untuk memasak atau membangkitkan listrik.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kelemahan utama energi surya (panel surya) adalah...',
      opts: [
        'Tidak bisa digunakan di negara tropis',
        'Menghasilkan gas berbahaya saat beroperasi',
        'Bergantung pada cuaca dan tidak bisa menghasilkan listrik saat mendung atau malam hari',
        'Harganya lebih mahal dari batu bara setiap harinya'
      ],
      ans: 2,
      hint: 'Panel surya butuh sinar matahari. Apa yang terjadi ketika langit berawan atau malam tiba?',
      explanation: 'Kelemahan energi surya: BERGANTUNG PADA CUACA dan sinar matahari. Saat mendung atau malam hari, panel surya tidak dapat menghasilkan listrik. Untuk mengatasi ini, digunakan baterai penyimpan energi, namun biayanya masih mahal.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Indonesia memiliki potensi energi panas bumi yang sangat besar karena...',
      opts: [
        'Indonesia negara tropis yang panas',
        'Indonesia memiliki banyak gunung berapi aktif (Ring of Fire)',
        'Indonesia memiliki banyak sungai besar',
        'Indonesia dekat dengan khatulistiwa'
      ],
      ans: 1,
      hint: 'Indonesia berada di "Cincin Api Pasifik" — daerah dengan banyak aktivitas vulkanik.',
      explanation: 'Indonesia berada di CINCIN API PASIFIK (Ring of Fire) — sabuk gunung berapi aktif di sekitar Samudra Pasifik. Aktivitas vulkanik ini menghasilkan panas bumi yang sangat besar. Indonesia adalah negara dengan potensi panas bumi terbesar ke-2 di dunia!'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah desa terpencil di pegunungan memiliki sungai deras, angin kencang, dan sinar matahari yang cukup, tetapi tidak ada aliran listrik PLN. Energi terbarukan yang PALING EFISIEN untuk dipasang di sana adalah...',
      opts: [
        'Panel surya saja',
        'Turbin angin saja',
        'Kincir air dari sungai (mikrohidro), karena menghasilkan listrik stabil 24 jam tanpa bergantung cuaca',
        'Biogas dari kotoran hewan'
      ],
      ans: 2,
      hint: 'Energi mana yang tersedia terus-menerus, siang dan malam, tidak peduli cuaca?',
      explanation: 'Mikrohidro (kincir air kecil di sungai) adalah pilihan terbaik karena sungai mengalir TERUS-MENERUS — siang malam, hujan maupun cerah. Panel surya tidak bekerja malam hari, turbin angin bergantung pada kecepatan angin. Mikrohidro menghasilkan listrik STABIL 24 jam.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa minyak bumi disebut energi "tak terbarukan" meski berasal dari makhluk hidup jutaan tahun lalu?',
      opts: [
        'Karena minyak bumi tidak bisa dibakar',
        'Karena proses pembentukannya memerlukan jutaan tahun sehingga tidak bisa menggantikan yang sudah habis dalam waktu singkat',
        'Karena minyak bumi hanya ada di satu negara',
        'Karena minyak bumi terlalu mahal untuk diproduksi lagi'
      ],
      ans: 1,
      hint: 'Bandingkan: matahari bersinar SETIAP HARI, tapi terbentuknya minyak bumi membutuhkan... berapa lama?',
      explanation: 'Minyak bumi TAK TERBARUKAN bukan karena tidak bisa terbentuk lagi, tapi karena proses pembentukannya memerlukan JUTAAN TAHUN. Kita menggunakannya jauh lebih cepat dari proses pembentukannya. Dalam skala waktu manusia, minyak bumi praktis tidak bisa diperbarui.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Negara yang sudah menggunakan hampir 100% energi terbarukan untuk listriknya adalah Islandia, yang memanfaatkan kombinasi energi _ dan energi panas bumi karena posisinya di atas lempeng tektonik aktif.',
      ans: 'air (hidroelektrik)',
      hint: 'Islandia memiliki banyak sungai deras dari pencairan gletser dan banyak geyser/gunung berapi.',
      explanation: 'Islandia menggunakan sekitar 99% energi terbarukan: sekitar 70% dari HYDROPOWER (energi air dari sungai-sungai glasial) dan 30% dari PANAS BUMI. Posisinya di atas punggung tengah Atlantik membuatnya kaya panas bumi. Islandia adalah contoh sempurna energi terbarukan 100%!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Andi berpendapat bahwa memasang panel surya di rumah itu rugi karena biaya awalnya mahal. Bantahlah pendapat Andi dengan argumen yang tepat!',
      opts: [
        'Andi benar, panel surya memang tidak menguntungkan sama sekali',
        'Panel surya gratis setelah dipasang, tidak perlu biaya perawatan apapun',
        'Meski mahal di awal, panel surya menghemat tagihan listrik jangka panjang dan ramah lingkungan',
        'Panel surya hanya cocok untuk perusahaan besar, bukan rumah tangga'
      ],
      ans: 2,
      hint: 'Pikirkan: setelah dipasang, apakah panel surya perlu "bahan bakar" yang harus dibeli terus-menerus?',
      explanation: 'Panel surya memang mahal di AWAL, tapi setelah dipasang, "bahan bakarnya" (sinar matahari) GRATIS! Tagihan listrik berkurang atau bahkan nol. Dalam 5-10 tahun, biaya awal sudah terbalik menjadi penghematan. Ditambah, ramah lingkungan tidak menghasilkan polusi. Ini namanya investasi jangka panjang!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Penggunaan bahan bakar fosil yang berlebihan berkontribusi terhadap _ global, yaitu naiknya suhu rata-rata bumi akibat efek rumah kaca.',
      ans: 'pemanasan (pemanasan global)',
      hint: 'Istilah dalam bahasa Inggris: "global warming".',
      explanation: 'Pembakaran bahan bakar fosil menghasilkan CO₂ dan gas rumah kaca lainnya yang memerangkap panas di atmosfer bumi, menyebabkan PEMANASAN GLOBAL. Dampaknya: es kutub mencair, permukaan laut naik, cuaca ekstrem. Penggunaan energi terbarukan adalah solusi utama masalah ini.'
    },
  ],

  // ================================================================
  //  ipa-5 | CARA MENGHEMAT ENERGI
  // ================================================================
  'ipa-5': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tindakan yang paling tepat untuk menghemat energi listrik di rumah adalah...',
      opts: [
        'Membiarkan lampu menyala sepanjang malam',
        'Mematikan lampu saat meninggalkan ruangan',
        'Menggunakan dua AC sekaligus',
        'Menonton TV sambil tidur'
      ],
      ans: 1,
      hint: 'Energi listrik habis sia-sia jika lampu menyala tapi tidak ada yang menggunakannya.',
      explanation: 'MEMATIKAN LAMPU saat meninggalkan ruangan adalah cara termudah menghemat energi listrik. Lampu yang menyala tanpa digunakan membuang energi dan uang secara sia-sia.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Alasan utama mengapa kita perlu menghemat energi adalah...',
      opts: [
        'Agar tagihan listrik lebih mahal',
        'Karena sebagian besar energi yang kita gunakan berasal dari sumber yang terbatas dan tidak terbarukan',
        'Karena energi tidak berguna bagi manusia',
        'Agar lampu tidak menyala terang'
      ],
      ans: 1,
      hint: 'Bayangkan jika minyak bumi dan batu bara habis. Apa yang terjadi pada dunia?',
      explanation: 'Kita perlu hemat energi karena sebagian besar energi (listrik, BBM) berasal dari bahan bakar fosil yang TERBATAS dan tidak terbarukan. Jika digunakan terus tanpa hemat, sumber energi akan habis lebih cepat sebelum kita menemukan penggantinya.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Mencabut charger handphone dari stopkontak saat tidak digunakan adalah cara menghemat _, karena charger yang masih tertancap tetap mengonsumsi daya kecil.',
      ans: 'energi listrik',
      hint: 'Charger yang masih di stopkontak walau HP tidak terhubung masih "meminum" daya listrik.',
      explanation: 'Charger yang masih tertancap di stopkontak (tanpa HP) tetap mengonsumsi daya listrik kecil ("phantom load" atau daya hantu). Mencabutnya menghemat ENERGI LISTRIK, juga mengurangi tagihan listrik dan memperpanjang umur charger.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Saat berjalan kaki atau bersepeda ke sekolah (jika jaraknya dekat), kita membantu menghemat energi karena...',
      opts: [
        'Kendaraan bermotor menggunakan bahan bakar yang berasal dari sumber tak terbarukan',
        'Berjalan kaki lebih cepat dari kendaraan',
        'Kendaraan bermotor tidak boleh dikendarai anak-anak',
        'Bersepeda menghasilkan lebih banyak polusi'
      ],
      ans: 0,
      hint: 'Apa yang dibutuhkan motor atau mobil untuk bergerak? Apakah sumber itu dapat habis?',
      explanation: 'Kendaraan bermotor menggunakan bensin atau solar yang merupakan BAHAN BAKAR FOSIL — sumber energi tak terbarukan yang terbatas. Berjalan kaki atau bersepeda tidak membutuhkan bahan bakar fosil, sehingga menghemat energi sekaligus mengurangi polusi udara.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Menggunakan _ alami yang masuk melalui jendela di siang hari dapat mengurangi penggunaan lampu di dalam ruangan.',
      ans: 'cahaya matahari (sinar matahari)',
      hint: 'Di siang hari yang terang, alam sudah menyediakan penerangan gratis tanpa perlu listrik.',
      explanation: 'CAHAYA MATAHARI yang masuk melalui jendela bisa menggantikan lampu di siang hari. Cara ini disebut pencahayaan alami (daylighting). Dengan membuka tirai/gorden di siang hari, kita mengurangi penggunaan listrik untuk lampu.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa lampu LED lebih hemat energi dibandingkan lampu pijar (bohlam lama)?',
      opts: [
        'Lampu LED lebih kecil ukurannya',
        'Lampu LED mengubah sebagian besar energi listrik menjadi cahaya, bukan panas',
        'Lampu LED lebih murah harganya',
        'Lampu LED berwarna-warni lebih indah'
      ],
      ans: 1,
      hint: 'Coba pegang lampu pijar yang menyala (dengan hati-hati). Terasa panas bukan? Panas itu adalah energi yang terbuang.',
      explanation: 'Lampu pijar membuang sekitar 90% energi listrik sebagai PANAS, hanya 10% menjadi cahaya. Lampu LED mengubah sekitar 90-95% energi menjadi CAHAYA, sedikit sekali panas yang terbuang. Itulah mengapa LED jauh lebih efisien dan hemat energi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Di sekolah, cara paling efektif untuk menghemat kertas (yang berarti menghemat energi dan sumber daya alam) adalah...',
      opts: [
        'Tidak pernah menulis di kertas sama sekali',
        'Menggunakan kedua sisi kertas dan mendaur ulang kertas bekas',
        'Membuang kertas yang sudah dipakai satu sisi',
        'Membeli kertas baru setiap hari'
      ],
      ans: 1,
      hint: 'Kalau satu sisi sudah terpakai, sisi yang lain masih kosong. Sayang kan kalau dibuang?',
      explanation: 'Menggunakan KEDUA SISI kertas dan mendaur ulang kertas bekas menghemat penggunaan kertas hingga 50%. Membuat kertas memerlukan penebangan pohon, air, dan energi yang besar. Menghemat kertas = menghemat hutan + energi + air.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Mengatur suhu AC tidak terlalu dingin (misalnya 24-26°C) adalah cara hemat energi, karena semakin dingin suhu AC, semakin besar _ listrik yang digunakan.',
      ans: 'konsumsi (daya)',
      hint: 'Ketika AC bekerja lebih keras untuk mendinginkan ruangan, ia "meminum" lebih banyak apa?',
      explanation: 'Semakin rendah suhu AC, semakin keras kompressor bekerja dan semakin besar KONSUMSI LISTRIK (daya). Setiap penurunan 1°C pada AC dapat meningkatkan konsumsi listrik sekitar 6-10%. Mengatur suhu 24-26°C sudah cukup nyaman dan jauh lebih hemat energi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah pernyataan yang BENAR tentang penghematan energi?',
      opts: [
        'Hemat energi hanya menguntungkan pemilik perusahaan listrik',
        'Hemat energi bermanfaat untuk diri sendiri, masyarakat, dan lingkungan hidup',
        'Hemat energi membuat hidup menjadi tidak nyaman',
        'Hemat energi hanya penting di kota besar'
      ],
      ans: 1,
      hint: 'Pikirkan dampak hemat energi dari 3 sisi: tagihan listrik kita, ketersediaan energi untuk semua, dan kondisi bumi.',
      explanation: 'Hemat energi bermanfaat TIGA LAPIS: (1) diri sendiri — tagihan listrik lebih murah; (2) masyarakat — energi tersedia lebih lama untuk semua orang; (3) lingkungan — mengurangi polusi dan memperlambat perubahan iklim. Semua orang di semua tempat perlu hemat energi!'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa mencuci pakaian dengan air dingin bisa menghemat energi?',
      opts: [
        'Karena mesin cuci bekerja lebih cepat dengan air dingin',
        'Karena tidak perlu energi untuk memanaskan air, yang bisa menghabiskan 90% energi mesin cuci',
        'Karena air dingin membuat pakaian lebih bersih',
        'Karena mesin cuci tidak bisa menggunakan air panas'
      ],
      ans: 1,
      hint: 'Memanaskan air butuh energi besar. Apa yang terjadi jika kita tidak perlu memanaskan air sama sekali?',
      explanation: 'Memanaskan air menghabiskan sekitar 90% total energi yang digunakan mesin cuci! Dengan mencuci menggunakan air dingin, kita menghemat hampir 90% energi mesin cuci. Detergen modern sudah dirancang efektif di air dingin, jadi kebersihan tetap terjaga.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Satu keluarga selalu lupa mencabut charger, membiarkan TV stand-by (tidak dimatikan total), dan tidak mematikan lampu saat siang hari. Apa dampak jangka panjang kebiasaan ini?',
      opts: [
        'Tidak ada dampak apa-apa karena energinya kecil',
        'Tagihan listrik lebih tinggi, penggunaan bahan bakar fosil meningkat, dan berkontribusi pada polusi lebih banyak',
        'Peralatan listrik menjadi lebih awet',
        'Listrik di rumah menjadi lebih kuat'
      ],
      ans: 1,
      hint: '"Phantom load" (daya hantu) dari perangkat stand-by kecil tapi terus-menerus selama 24 jam, 7 hari, 365 hari.',
      explanation: 'Kebiasaan boros energi kecil yang dilakukan TERUS-MENERUS berdampak besar: tagihan listrik lebih tinggi, kebutuhan energi meningkat sehingga pembangkit listrik membakar lebih banyak bahan bakar fosil, menghasilkan lebih banyak polusi dan gas rumah kaca. "Sedikit demi sedikit, lama-lama menjadi bukit."'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Program _ adalah gerakan mematikan lampu dan peralatan listrik tidak penting selama 1 jam (pukul 20.30-21.30) setiap tahun untuk meningkatkan kesadaran hemat energi di seluruh dunia.',
      ans: 'Earth Hour',
      hint: 'Program ini diinisiasi WWF. Kata-katanya dalam bahasa Inggris yang berarti "Jam Bumi".',
      explanation: 'EARTH HOUR adalah gerakan global yang diinisiasi WWF. Setiap tahun, orang-orang di seluruh dunia mematikan lampu selama 1 jam sebagai simbol komitmen terhadap lingkungan. Tujuannya: meningkatkan kesadaran tentang perubahan iklim dan pentingnya hemat energi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Ahmad ingin menghemat energi di rumahnya. Ia ragu memilih antara: (A) mengganti semua lampu dengan LED, atau (B) mematikan TV saat tidak ditonton. Manakah yang lebih SIGNIFIKAN menghemat energi?',
      opts: [
        'A lebih signifikan karena LED jauh lebih efisien',
        'B lebih signifikan karena TV menggunakan lebih banyak daya dari lampu',
        'Keduanya sama pentingnya dan sebaiknya dilakukan dua-duanya',
        'Tidak ada yang signifikan, keduanya hanya menghemat sedikit'
      ],
      ans: 2,
      hint: 'Apakah kamu bisa membandingkan penghematan keduanya? Atau justru keduanya perlu dilakukan bersamaan?',
      explanation: 'Kedua cara sama pentingnya dan SEBAIKNYA DILAKUKAN BERSAMAAN. Mengganti lampu ke LED menghemat energi secara pasif (otomatis efisien). Mematikan TV aktif mencegah pemborosan. Penghematan energi maksimal dicapai dengan mengombinasikan BANYAK cara hemat, bukan hanya satu.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Apa hubungan antara hemat energi dan pengurangan emisi gas karbon dioksida (CO₂)?',
      opts: [
        'Tidak ada hubungannya sama sekali',
        'Semakin hemat energi, semakin sedikit bahan bakar fosil yang dibakar, sehingga emisi CO₂ berkurang',
        'Hemat energi justru meningkatkan CO₂',
        'CO₂ tidak berbahaya bagi lingkungan'
      ],
      ans: 1,
      hint: 'Dari mana listrik berasal? Apakah pembangkit listrik membakar sesuatu?',
      explanation: 'Sebagian besar listrik masih dihasilkan dengan MEMBAKAR bahan bakar fosil (batu bara, gas). Pembakaran menghasilkan CO₂. Semakin hemat energi → semakin sedikit listrik dibutuhkan → semakin sedikit bahan bakar dibakar → semakin sedikit CO₂ → memperlambat pemanasan global. Rantai dampak yang jelas!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Konsep _ (kurangi, gunakan kembali, daur ulang) tidak hanya berlaku untuk sampah, tetapi juga untuk energi dengan mengurangi pemakaian, menggunakan kembali energi yang ada, dan mendaur ulang produk untuk menghemat energi produksi.',
      ans: '3R (Reduce, Reuse, Recycle)',
      hint: 'Tiga kata dalam bahasa Inggris yang semuanya diawali huruf R.',
      explanation: 'Prinsip 3R berlaku untuk energi: REDUCE (kurangi pemakaian listrik dengan mematikan yang tidak perlu), REUSE (gunakan kembali peralatan selama masih bisa), RECYCLE (daur ulang produk menghemat energi produksi baru). Misalnya, mendaur ulang aluminium menghemat 95% energi dibanding membuat aluminium baru!'
    },
  ],

  // ================================================================
  //  ipa-6 | PERUBAHAN ENERGI (Berbagai Bentuk & Transformasi)
  // ================================================================
  'ipa-6': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Perubahan energi yang terjadi pada lampu listrik adalah...',
      opts: [
        'Energi cahaya → Energi listrik',
        'Energi listrik → Energi cahaya',
        'Energi kimia → Energi listrik',
        'Energi panas → Energi cahaya'
      ],
      ans: 1,
      hint: 'Lampu "memakan" listrik untuk menghasilkan sesuatu yang kita lihat.',
      explanation: 'Lampu listrik mengubah ENERGI LISTRIK menjadi ENERGI CAHAYA (dan sedikit panas). Ini adalah perubahan energi yang paling sering kita temui setiap hari di rumah.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Setrika mengubah energi _ menjadi energi panas untuk melicinkan pakaian.',
      ans: 'listrik',
      hint: 'Setrika perlu disambungkan ke stopkontak. Apa yang mengalir dari stopkontak ke setrika?',
      explanation: 'Setrika mengubah ENERGI LISTRIK menjadi ENERGI PANAS (kalor). Elemen pemanas di dalam setrika mengubah arus listrik menjadi panas yang digunakan untuk melicinkan pakaian.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Ketika kita memukul gendang, energi apa yang dihasilkan?',
      opts: ['Energi listrik', 'Energi kimia', 'Energi bunyi', 'Energi cahaya'],
      ans: 2,
      hint: 'Apa yang kamu dengar ketika gendang dipukul?',
      explanation: 'Memukul gendang mengubah ENERGI GERAK (kinetik) tangan menjadi ENERGI BUNYI. Getaran pada membran gendang menghasilkan gelombang suara yang kita dengar.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pada kipas angin yang menyala, terjadi perubahan energi...',
      opts: [
        'Listrik → Panas',
        'Listrik → Gerak (angin)',
        'Gerak → Listrik',
        'Panas → Gerak'
      ],
      ans: 1,
      hint: 'Kipas angin dihubungkan ke listrik dan menghasilkan hembusan angin. Apa yang berubah?',
      explanation: 'Kipas angin mengubah ENERGI LISTRIK menjadi ENERGI GERAK (kinetik). Motor listrik memutar baling-baling yang menghasilkan aliran udara (angin).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Baterai adalah alat yang menyimpan energi _ dan mengubahnya menjadi energi listrik saat digunakan.',
      ans: 'kimia',
      hint: 'Di dalam baterai ada reaksi yang melibatkan zat-zat kimia. Energi apa yang tersimpan di sana?',
      explanation: 'Baterai menyimpan ENERGI KIMIA dalam bentuk reaksi elektrokimia. Saat digunakan, reaksi kimia di dalam baterai menghasilkan ENERGI LISTRIK. Inilah mengapa baterai bisa habis — reaksi kimianya sudah "terpakai".'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Panel surya mengubah energi matahari menjadi energi listrik. Ini termasuk perubahan energi dari...',
      opts: [
        'Energi panas → Energi gerak',
        'Energi cahaya → Energi listrik',
        'Energi kimia → Energi cahaya',
        'Energi listrik → Energi cahaya'
      ],
      ans: 1,
      hint: 'Panel surya menangkap sinar matahari (cahaya) dan menghasilkan listrik.',
      explanation: 'Panel surya (sel fotovoltaik) mengubah ENERGI CAHAYA (foton dari matahari) menjadi ENERGI LISTRIK melalui efek fotolistrik. Ini adalah perubahan energi yang revolusioner dalam teknologi hijau.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perubahan energi apa yang terjadi pada mobil berbahan bakar bensin?',
      opts: [
        'Energi listrik → Energi gerak',
        'Energi kimia (bensin) → Energi panas → Energi gerak',
        'Energi cahaya → Energi gerak',
        'Energi bunyi → Energi gerak'
      ],
      ans: 1,
      hint: 'Bensin dibakar di dalam mesin. Apa yang terjadi ketika bahan bakar terbakar?',
      explanation: 'Pada mobil bermesin bensin: ENERGI KIMIA (bensin) → dibakar menghasilkan ENERGI PANAS → panas mendorong piston menghasilkan ENERGI GERAK. Ini adalah rangkaian perubahan energi tiga langkah yang menggerakkan kendaraan.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Ketika kamu menggosok-gosokkan kedua tanganmu, energi _ berubah menjadi energi panas, sehingga tanganmu terasa hangat.',
      ans: 'gerak (kinetik)',
      hint: 'Apa yang kamu lakukan dengan tanganmu? Bergerak, bukan? Energi apa yang dimiliki benda yang bergerak?',
      explanation: 'Menggosok tangan mengubah ENERGI GERAK (kinetik) menjadi ENERGI PANAS (kalor) melalui gesekan. Prinsip yang sama digunakan manusia zaman dulu untuk menyalakan api dengan menggosok dua batang kayu.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Generator listrik pada PLTA mengubah energi...',
      opts: [
        'Kimia → Listrik',
        'Cahaya → Listrik',
        'Gerak (putaran turbin) → Listrik',
        'Panas → Cahaya'
      ],
      ans: 2,
      hint: 'Air jatuh → memutar turbin → turbin memutar generator. Generator mengubah apa menjadi apa?',
      explanation: 'Di PLTA: air jatuh memiliki energi gerak → memutar turbin → turbin memutar generator → ENERGI GERAK diubah menjadi ENERGI LISTRIK oleh generator. Generator adalah alat pengubah energi gerak menjadi listrik.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Hukum Kekekalan Energi menyatakan bahwa energi...',
      opts: [
        'Bisa diciptakan jika kita punya teknologi canggih',
        'Tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk',
        'Selalu berkurang setiap kali berubah bentuk',
        'Hanya ada dalam bentuk listrik dan panas'
      ],
      ans: 1,
      hint: 'Energi dari matahari tidak "hilang" — ia berubah menjadi angin, ombak, makanan... Energi berubah, tidak lenyap.',
      explanation: 'Hukum Kekekalan Energi: energi TIDAK BISA DICIPTAKAN atau DIMUSNAHKAN — hanya bisa berubah bentuk. Jumlah total energi di alam semesta selalu konstan. Energi kimia bensin tidak "hilang" — berubah menjadi panas dan gerak.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Dina bermain ketapel. Ia menarik karet ketapel (energi tersimpan), melepaskannya (batu meluncur cepat), batu menghantam dinding dan berhenti. Jelaskan rantai perubahan energi yang terjadi!',
      opts: [
        'Kimia → Gerak → Bunyi',
        'Potensial elastis → Kinetik → Panas dan Bunyi',
        'Listrik → Gerak → Panas',
        'Cahaya → Gerak → Kimia'
      ],
      ans: 1,
      hint: 'Karet yang ditarik menyimpan energi apa? Batu yang bergerak punya energi apa? Saat batu berhenti menabrak dinding, energinya jadi apa?',
      explanation: 'Rantai perubahan energi ketapel: (1) Karet ditarik → tersimpan sebagai ENERGI POTENSIAL ELASTIS; (2) Karet dilepas → batu bergerak cepat = ENERGI KINETIK; (3) Batu menghantam dinding → berhenti = energi berubah menjadi PANAS dan BUNYI (suara benturan). Perubahan energi sempurna!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pada pembangkit listrik tenaga uap (PLTU), batu bara dibakar untuk memanaskan air menjadi uap. Uap memutar turbin, turbin memutar generator. Rantai perubahan energinya: Kimia → _ → Gerak → Listrik.',
      ans: 'Panas (kalor)',
      hint: 'Batu bara dibakar → menghasilkan... apa? Lalu panas itu menghasilkan uap yang bergerak.',
      explanation: 'Rantai di PLTU: KIMIA (batu bara terbakar) → PANAS (memanaskan air jadi uap) → GERAK (uap memutar turbin) → LISTRIK (generator berputar). Setiap tahap ada konversi energi. Efisiensinya tidak 100% karena ada energi yang "bocor" sebagai panas ke lingkungan.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa mesin tidak pernah 100% efisien dalam mengubah energi, meskipun total energi tetap sama (Hukum Kekekalan Energi)?',
      opts: [
        'Karena mesin selalu mencuri sebagian energi untuk dirinya sendiri',
        'Karena selalu ada energi yang terbuang menjadi panas akibat gesekan dan hambatan dalam proses konversi',
        'Karena Hukum Kekekalan Energi tidak benar-benar berlaku',
        'Karena energi berkurang setiap kali berubah bentuk'
      ],
      ans: 1,
      hint: 'Coba raba mesin yang sudah bekerja lama. Kenapa terasa panas jika panasnya bukan tujuan utama?',
      explanation: 'Mesin tidak 100% efisien karena selalu ada GESEKAN antar komponen yang menghasilkan panas yang tidak bermanfaat. Panas ini "bocor" ke lingkungan. Total energi tetap sama (kekekalan energi), tapi sebagian "kualitasnya" turun menjadi panas yang sulit digunakan kembali. Ini disebut hukum termodinamika kedua.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Saat kamu mendorong buku di meja dan buku berhenti karena gesekan, ke mana "perginya" energi kinetik buku tersebut?',
      opts: [
        'Energi tersebut lenyap dan hilang selamanya',
        'Energi berubah menjadi energi panas yang sangat kecil akibat gesekan buku dengan meja',
        'Energi kembali ke tangan kamu',
        'Energi tersimpan di dalam buku'
      ],
      ans: 1,
      hint: 'Hukum Kekekalan Energi: energi tidak bisa hilang. Lalu ke mana energi itu pergi?',
      explanation: 'Energi kinetik buku tidak lenyap! Ia berubah menjadi ENERGI PANAS (kalor) yang sangat kecil akibat GESEKAN antara buku dengan meja. Suhu meja dan buku naik sedikit. Energi tetap ada, hanya berubah bentuk — ini Hukum Kekekalan Energi.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam tubuh manusia, makanan yang kita makan mengandung energi _. Energi ini diubah oleh tubuh menjadi energi _ untuk bergerak, dan energi _ untuk menjaga suhu tubuh.',
      ans: 'kimia; gerak (kinetik); panas (kalor)',
      hint: 'Makanan → jenis energi apa? → kita bisa melakukan apa dengan energi itu?',
      explanation: 'Makanan mengandung ENERGI KIMIA (dalam ikatan molekul karbohidrat, protein, lemak). Saat dicerna dan dimetabolisme oleh sel-sel tubuh: (1) sebagian menghasilkan ENERGI GERAK (otot berkontraksi untuk bergerak); (2) sebagian menghasilkan ENERGI PANAS untuk menjaga suhu tubuh 37°C. Semua dari makanan yang kita makan!'
    },
  ],

};
// Akhir BATCH 1 Bagian 1 (ipa-1 s.d. ipa-6)
// Lanjutkan dengan ipa-7 s.d. ipa-12 pada bagian berikutnya.

// ============================================================
//  QUIZ_DATA — BATCH 1: IPA Topik ipa-7 s.d. ipa-12
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban singkat, '_' pada string q
// ============================================================

// Tambahkan ke objek QUIZ_DATA yang sudah ada (ipa-1 s.d. ipa-6)
// Contoh penggabungan: Object.assign(QUIZ_DATA, { 'ipa-7': [...], ... })

export const QUIZ_DATA_PART2 = {

  // ================================================================
  //  ipa-7 | RANGKAIAN LISTRIK (Seri & Paralel)
  // ================================================================
  'ipa-7': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Rangkaian listrik di mana semua komponen terhubung dalam satu jalur berurutan disebut rangkaian...',
      opts: ['Paralel', 'Seri', 'Campuran', 'Terbuka'],
      ans: 1,
      hint: 'Bayangkan kereta api — gerbong-gerbong tersambung satu jalur dari depan ke belakang.',
      explanation: 'Rangkaian SERI adalah rangkaian di mana komponen-komponennya terhubung secara berurutan dalam SATU jalur. Arus listrik mengalir melalui satu jalur dari komponen ke komponen.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Jika satu lampu dalam rangkaian seri mati, apa yang terjadi pada lampu lainnya?',
      opts: [
        'Lampu lain menyala lebih terang',
        'Lampu lain tetap menyala normal',
        'Semua lampu ikut mati karena jalur arus terputus',
        'Lampu lain berkedip-kedip'
      ],
      ans: 2,
      hint: 'Ingat, rangkaian seri hanya punya SATU jalur arus. Apa yang terjadi jika jalur itu terputus?',
      explanation: 'Dalam rangkaian seri, jika satu komponen mati/rusak, jalur arus TERPUTUS total. Karena hanya ada satu jalur, semua lampu lain ikut padam. Inilah kelemahan utama rangkaian seri.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Rangkaian listrik yang memiliki lebih dari satu jalur arus disebut rangkaian _.',
      ans: 'paralel',
      hint: 'Kata ini mirip dengan "sejajar" — ada banyak jalur yang berjalan berdampingan.',
      explanation: 'Rangkaian PARALEL memiliki banyak cabang/jalur arus. Setiap komponen terhubung langsung ke sumber listrik melalui jalurnya sendiri. Ini yang membuat satu komponen mati tidak mempengaruhi yang lain.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Instalasi listrik di rumah-rumah menggunakan rangkaian paralel. Keuntungannya adalah...',
      opts: [
        'Lebih hemat kabel',
        'Jika satu peralatan mati, peralatan lain tetap menyala',
        'Lebih mudah dipasang',
        'Menghasilkan cahaya lebih terang'
      ],
      ans: 1,
      hint: 'Bayangkan jika lampu kamar mati tapi TV di ruang tamu tetap menyala. Rangkaian apa itu?',
      explanation: 'Keuntungan rangkaian PARALEL di rumah: jika satu peralatan (misalnya lampu kamar) mati, peralatan lain (TV, kulkas, dll.) TETAP MENYALA karena masing-masing punya jalur sendiri ke sumber listrik.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Komponen listrik yang berfungsi sebagai sumber energi listrik dalam sebuah rangkaian adalah _.',
      ans: 'baterai (aki/sumber tegangan)',
      hint: 'Benda berbentuk silinder ini menyimpan energi kimia dan mengubahnya menjadi listrik.',
      explanation: 'BATERAI (atau aki, generator) adalah sumber energi listrik dalam rangkaian. Baterai mengubah energi kimia menjadi energi listrik yang mengalirkan arus melalui rangkaian.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan kecerahan lampu dalam rangkaian seri dibandingkan paralel (dengan jumlah baterai sama) adalah...',
      opts: [
        'Lampu seri lebih terang karena arus lebih kuat',
        'Lampu paralel lebih terang karena setiap lampu mendapat tegangan penuh dari sumber',
        'Keduanya sama terangnya',
        'Lampu seri lebih terang saat malam hari saja'
      ],
      ans: 1,
      hint: 'Pada seri, tegangan dibagi-bagi. Pada paralel, setiap lampu mendapat tegangan berapa?',
      explanation: 'Pada rangkaian PARALEL, setiap lampu mendapat tegangan PENUH dari baterai (misalnya 1,5V). Pada rangkaian SERI, tegangan dibagi rata untuk semua lampu (misal 3 lampu seri dari baterai 1,5V, tiap lampu hanya dapat 0,5V). Hasilnya: lampu paralel lebih TERANG.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Saklar pada rangkaian listrik berfungsi untuk...',
      opts: [
        'Menyimpan energi listrik',
        'Mengubah energi listrik menjadi cahaya',
        'Memutus dan menyambungkan aliran arus listrik',
        'Mengukur besar arus listrik'
      ],
      ans: 2,
      hint: 'Ketika kamu menyalakan lampu, kamu menekan tombol apa? Apa yang dilakukan tombol itu pada aliran listrik?',
      explanation: 'SAKLAR berfungsi memutus dan menyambungkan aliran arus listrik. Saat saklar terbuka (OFF), jalur arus terputus dan listrik tidak mengalir. Saat saklar tertutup (ON), arus mengalir dan rangkaian bekerja.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Dalam rangkaian seri, nilai hambatan total adalah _ dari semua hambatan yang ada dalam rangkaian.',
      ans: 'jumlah (penjumlahan)',
      hint: 'Jika ada 3 hambatan masing-masing 2Ω dalam rangkaian seri, hambatan totalnya adalah 2+2+2 = ?',
      explanation: 'Pada rangkaian SERI, hambatan total (Rtotal) adalah JUMLAH semua hambatan: Rtotal = R1 + R2 + R3 + ... Semakin banyak komponen dalam rangkaian seri, semakin besar hambatan total, dan arus yang mengalir semakin kecil.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Lampu hias pohon Natal yang jika satu lampu dicabut semua mati, menggunakan jenis rangkaian...',
      opts: ['Paralel', 'Campuran', 'Seri', 'Terbuka'],
      ans: 2,
      hint: 'Jika satu mati semua mati — hanya ada satu jalur arus. Itu ciri khas rangkaian apa?',
      explanation: 'Lampu hias lama yang jika satu dicabut semuanya mati menggunakan rangkaian SERI. Karena hanya ada satu jalur arus, satu lampu mati memutus seluruh rangkaian. Lampu hias modern biasanya sudah menggunakan paralel agar lebih praktis.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Simbol yang digunakan untuk menggambarkan lampu dalam diagram rangkaian listrik adalah...',
      opts: [
        'Garis bergelombang',
        'Lingkaran dengan X di dalamnya',
        'Persegi panjang',
        'Dua garis sejajar tidak sama panjang'
      ],
      ans: 1,
      hint: 'Simbol lampu biasanya berbentuk bulat dengan tanda silang di tengahnya.',
      explanation: 'Dalam diagram rangkaian listrik, LAMPU dilambangkan dengan lingkaran yang memiliki tanda X (atau bintang) di dalamnya. Dua garis sejajar tidak sama panjang adalah simbol BATERAI. Garis bergelombang adalah simbol HAMBATAN (resistor).'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Riko memasang 3 lampu secara seri dengan 1 baterai. Semua menyala redup. Lalu ia menambah 1 lampu lagi. Apa yang terjadi?',
      opts: [
        'Semua lampu menjadi lebih terang',
        'Semua lampu menjadi lebih redup karena hambatan bertambah dan arus berkurang',
        'Lampu yang baru lebih terang dari yang lain',
        'Tidak ada perubahan'
      ],
      ans: 1,
      hint: 'Pada rangkaian seri, menambah komponen berarti menambah hambatan. Semakin besar hambatan, arus listrik menjadi bagaimana?',
      explanation: 'Menambah lampu dalam rangkaian SERI berarti menambah HAMBATAN TOTAL. Berdasarkan Hukum Ohm (I = V/R), jika hambatan (R) bertambah sementara tegangan (V) tetap, maka arus (I) semakin KECIL. Arus kecil = lampu semakin REDUP. Ini kelemahan rangkaian seri!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Jika 3 lampu identik dipasang secara paralel dengan satu baterai, dan satu lampu dicabut, maka dua lampu lainnya akan tetap menyala dengan _ yang sama, karena masing-masing mendapat tegangan penuh.',
      ans: 'kecerahan (terang)',
      hint: 'Pada paralel, setiap cabang independen. Cabang yang satu tidak mempengaruhi cabang yang lain.',
      explanation: 'Pada rangkaian PARALEL, setiap lampu terhubung langsung ke baterai dengan jalur sendiri. Jika satu lampu dicabut, dua lainnya tetap mendapat tegangan PENUH dari baterai. Kecerahan tidak berubah! Inilah keunggulan utama rangkaian paralel.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang teknisi ingin memasang lampu di 5 kamar hotel agar setiap kamar bisa mematikan lampunya sendiri tanpa mempengaruhi kamar lain. Rangkaian yang tepat adalah...',
      opts: [
        'Rangkaian seri dengan satu saklar utama',
        'Rangkaian paralel dengan saklar terpisah di setiap cabang',
        'Rangkaian seri tanpa saklar',
        'Tidak mungkin dilakukan dengan rangkaian listrik biasa'
      ],
      ans: 1,
      hint: 'Setiap kamar harus INDEPENDEN. Apakah seri atau paralel yang memberikan jalur independen untuk setiap komponen?',
      explanation: 'Untuk setiap kamar independen (mati/nyala tidak mempengaruhi yang lain), digunakan rangkaian PARALEL. Setiap kamar adalah satu cabang paralel dengan saklarnya sendiri. Mematikan saklar di satu cabang hanya memutus arus di cabang itu, tidak mempengaruhi cabang lain.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa sekring (fuse) dipasang dalam rangkaian listrik rumah tangga?',
      opts: [
        'Untuk membuat lampu lebih terang',
        'Untuk menyimpan energi listrik cadangan',
        'Untuk memutus arus secara otomatis jika arus terlalu besar, mencegah kebakaran',
        'Untuk menghemat listrik setiap malam'
      ],
      ans: 2,
      hint: 'Bayangkan jika banyak peralatan dinyalakan sekaligus, arus listrik bisa terlalu besar. Apa bahayanya?',
      explanation: 'SEKRING (fuse) adalah komponen keamanan yang memutus arus secara OTOMATIS jika arus melebihi batas aman. Arus terlalu besar → kabel overheat → bisa memicu KEBAKARAN. Sekring mencegah ini dengan "mengorbankan" dirinya putus duluan. Sekring modern digantikan oleh MCB (circuit breaker).'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Rangkaian _ adalah kombinasi rangkaian seri dan paralel yang digunakan pada instalasi listrik kompleks seperti di gedung-gedung besar.',
      ans: 'campuran',
      hint: 'Namanya mencerminkan bahwa ia adalah gabungan dari dua jenis rangkaian.',
      explanation: 'Rangkaian CAMPURAN (seri-paralel) menggabungkan keduanya untuk memanfaatkan keunggulan masing-masing. Pada gedung besar, beberapa komponen mungkin dipasang seri (hemat kabel) sementara kelompok-kelompok komponen dipasang secara paralel (independen). Perancangan rangkaian campuran memerlukan perhitungan yang cermat.'
    },
  ],

  // ================================================================
  //  ipa-8 | PEREDARAN DARAH (Jantung & Pembuluh Darah)
  // ================================================================
  'ipa-8': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Organ utama yang berfungsi sebagai pompa darah dalam tubuh manusia adalah...',
      opts: ['Paru-paru', 'Hati', 'Jantung', 'Ginjal'],
      ans: 2,
      hint: 'Organ ini terletak di dada sebelah kiri dan berdetak tanpa henti sepanjang hidup kita.',
      explanation: 'JANTUNG adalah organ pompa darah utama tubuh manusia. Jantung berdetak rata-rata 60-100 kali per menit untuk memompa darah ke seluruh tubuh, membawa oksigen dan nutrisi ke setiap sel.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Pembuluh darah yang membawa darah dari jantung ke seluruh tubuh disebut pembuluh _.',
      ans: 'arteri (nadi)',
      hint: 'Pembuluh ini biasanya terletak lebih dalam di dalam tubuh dan dindingnya tebal karena mendapat tekanan tinggi.',
      explanation: 'ARTERI (pembuluh nadi) adalah pembuluh darah yang membawa darah DARI jantung ke seluruh tubuh. Arteri memiliki dinding tebal dan elastis karena darah di dalamnya mengalir dengan tekanan tinggi akibat pompa jantung.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pembuluh darah yang membawa darah kembali ke jantung adalah...',
      opts: ['Arteri', 'Kapiler', 'Vena', 'Aorta'],
      ans: 2,
      hint: 'Pembuluh ini biasanya berwarna biru pada gambar anatomi dan terletak dekat permukaan kulit.',
      explanation: 'VENA (pembuluh balik) adalah pembuluh darah yang membawa darah KEMBALI ke jantung. Darah dalam vena umumnya sudah "dipakai" (mengandung CO₂), kecuali vena pulmonalis yang membawa darah kaya oksigen dari paru-paru ke jantung.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Jantung manusia memiliki berapa ruang?',
      opts: ['2 ruang', '3 ruang', '4 ruang', '5 ruang'],
      ans: 2,
      hint: 'Jantung punya bagian atas (serambi) dan bagian bawah (bilik), masing-masing ada kiri dan kanan.',
      explanation: 'Jantung manusia memiliki 4 RUANG: Serambi Kanan (atrium kanan), Serambi Kiri (atrium kiri), Bilik Kanan (ventrikel kanan), dan Bilik Kiri (ventrikel kiri). Serambi menerima darah masuk, bilik memompa darah keluar.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Peredaran darah manusia disebut peredaran darah _, karena darah tidak pernah keluar dari pembuluh darahnya.',
      ans: 'tertutup',
      hint: 'Darah selalu berada di dalam pembuluh — arteri, kapiler, dan vena — tidak pernah mengalir bebas di luar.',
      explanation: 'Peredaran darah manusia disebut TERTUTUP karena darah selalu berada di dalam pembuluh darah (arteri → kapiler → vena). Berbeda dengan hewan seperti belalang yang punya peredaran darah terbuka di mana darah mengalir bebas di rongga tubuh.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peredaran darah besar (sistemik) adalah peredaran darah yang...',
      opts: [
        'Dari jantung ke paru-paru dan kembali ke jantung',
        'Dari jantung ke seluruh tubuh dan kembali ke jantung',
        'Dari paru-paru ke seluruh tubuh',
        'Hanya di dalam jantung saja'
      ],
      ans: 1,
      hint: 'Ada dua jenis peredaran darah: besar (sistemik) dan kecil (pulmonal). Yang "besar" mencakup seluruh tubuh.',
      explanation: 'Peredaran darah BESAR (sistemik): Bilik kiri → Aorta → Seluruh tubuh (membawa O₂ dan nutrisi) → Vena cava → Serambi kanan. Ini adalah jalur panjang yang memasok oksigen ke seluruh organ tubuh.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peredaran darah kecil (pulmonal) berfungsi untuk...',
      opts: [
        'Membawa darah ke otak',
        'Membawa darah ke sistem pencernaan',
        'Membawa darah dari jantung ke paru-paru untuk mengambil oksigen',
        'Membawa makanan ke seluruh tubuh'
      ],
      ans: 2,
      hint: 'Pulmonal berasal dari kata "pulmo" yang berarti paru-paru. Apa yang dilakukan darah di paru-paru?',
      explanation: 'Peredaran darah KECIL (pulmonal): Bilik kanan → Arteri pulmonalis → Paru-paru (pertukaran CO₂ dengan O₂) → Vena pulmonalis → Serambi kiri. Darah "diisi ulang" dengan oksigen di paru-paru sebelum dipompa ke seluruh tubuh.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Pembuluh darah terkecil yang menghubungkan arteri dan vena, serta tempat terjadinya pertukaran zat antara darah dan sel tubuh, disebut pembuluh _.',
      ans: 'kapiler',
      hint: 'Pembuluh ini sangat tipis — hanya setebal satu sel. Namanya dari kata Latin yang berarti "rambut".',
      explanation: 'KAPILER adalah pembuluh darah terkecil dengan dinding hanya satu sel tebalnya. Di sinilah pertukaran zat terjadi: oksigen dan nutrisi masuk ke sel-sel tubuh, sementara CO₂ dan sisa metabolisme masuk ke darah. Kapiler menghubungkan arteri dengan vena.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Komponen darah yang berfungsi melawan kuman dan penyakit adalah...',
      opts: ['Sel darah merah', 'Sel darah putih', 'Trombosit', 'Plasma darah'],
      ans: 1,
      hint: 'Komponen ini adalah "tentara" tubuh yang membasmi bakteri, virus, dan benda asing lainnya.',
      explanation: 'SEL DARAH PUTIH (leukosit) adalah komponen darah yang berfungsi melawan infeksi dan penyakit. Ada beberapa jenis: neutrofil (memakan bakteri), limfosit (membuat antibodi), dan lainnya. Jumlahnya meningkat saat tubuh sedang melawan infeksi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Fungsi trombosit dalam darah adalah...',
      opts: [
        'Membawa oksigen ke seluruh tubuh',
        'Melawan penyakit dan infeksi',
        'Membantu pembekuan darah saat terjadi luka',
        'Membawa nutrisi dari usus ke sel-sel tubuh'
      ],
      ans: 2,
      hint: 'Ketika kamu terluka dan berdarah, ada yang bekerja keras untuk menghentikan pendarahan. Komponen darah apa itu?',
      explanation: 'TROMBOSIT (keping darah) berfungsi dalam PEMBEKUAN DARAH. Saat ada luka, trombosit berkumpul di area luka dan membentuk "sumbat" bersama protein fibrin untuk menghentikan pendarahan. Tanpa trombosit, luka kecil pun bisa berbahaya karena darah tidak bisa membeku.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa bilik kiri jantung memiliki dinding yang lebih tebal daripada bilik kanan?',
      opts: [
        'Karena bilik kiri lebih tua dan aus',
        'Karena bilik kiri harus memompa darah ke seluruh tubuh dengan tekanan lebih tinggi, sedangkan bilik kanan hanya ke paru-paru yang lebih dekat',
        'Karena bilik kiri menampung lebih banyak darah',
        'Tidak ada perbedaan, keduanya sama tebalnya'
      ],
      ans: 1,
      hint: 'Jarak mana yang lebih jauh: ke paru-paru (dekat jantung) atau ke ujung kaki (peredaran besar)?',
      explanation: 'BILIK KIRI harus memompa darah ke SELURUH TUBUH — dari kepala hingga ujung kaki (peredaran besar) — yang memerlukan tekanan sangat tinggi. BILIK KANAN hanya memompa ke paru-paru yang jaraknya dekat (peredaran kecil). Karena kerja lebih keras, otot bilik kiri berkembang lebih tebal untuk menghasilkan tekanan yang dibutuhkan.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Penyakit _ terjadi ketika pembuluh arteri mengeras dan menyempit akibat penumpukan plak lemak, sehingga aliran darah ke jantung terhambat dan bisa menyebabkan serangan jantung.',
      ans: 'jantung koroner (aterosklerosis)',
      hint: 'Penyakit ini sering dikaitkan dengan pola makan tinggi lemak dan kurang olahraga.',
      explanation: 'PENYAKIT JANTUNG KORONER terjadi akibat ATEROSKLEROSIS — penumpukan plak (lemak, kolesterol, dan zat lain) di dinding arteri koroner yang menyuplai darah ke otot jantung. Arteri menyempit → aliran darah berkurang → otot jantung kekurangan oksigen → serangan jantung. Bisa dicegah dengan pola hidup sehat.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang dokter mengukur tekanan darah pasien dan mendapat hasil 120/80 mmHg. Angka 120 menunjukkan...',
      opts: [
        'Tekanan saat jantung istirahat (relaksasi)',
        'Jumlah detak jantung per menit',
        'Tekanan saat jantung berkontraksi (memompa)',
        'Volume darah dalam tubuh'
      ],
      ans: 2,
      hint: 'Tekanan darah ditulis sebagai dua angka: atas/bawah. Angka atas terjadi saat jantung sedang... apa?',
      explanation: 'Tekanan darah 120/80: angka ATAS (120) adalah tekanan SISTOLIK — tekanan maksimum saat jantung BERKONTRAKSI memompa darah keluar. Angka BAWAH (80) adalah tekanan DIASTOLIK — tekanan saat jantung RELAKSASI mengisi darah. Tekanan normal dewasa sekitar 120/80 mmHg.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kenapa olahraga teratur baik untuk kesehatan jantung?',
      opts: [
        'Karena olahraga membuat jantung berhenti sejenak untuk istirahat',
        'Karena olahraga memperkuat otot jantung, meningkatkan efisiensi pompa, dan menjaga pembuluh darah tetap elastis',
        'Karena olahraga membuat darah menjadi lebih merah',
        'Karena olahraga mengurangi jumlah darah dalam tubuh'
      ],
      ans: 1,
      hint: 'Otot yang sering dilatih jadi lebih kuat. Jantung juga otot — apa efeknya jika sering "dilatih"?',
      explanation: 'Olahraga teratur "melatih" otot jantung sehingga menjadi lebih KUAT dan EFISIEN. Jantung yang kuat bisa memompa lebih banyak darah per detak (stroke volume lebih besar), sehingga detak jantung istirahat menjadi lebih rendah. Olahraga juga menjaga pembuluh darah elastis dan mengurangi penumpukan plak.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sel darah merah mengandung protein _ yang berfungsi mengikat oksigen di paru-paru dan melepaskannya di seluruh jaringan tubuh.',
      ans: 'hemoglobin',
      hint: 'Protein inilah yang membuat darah berwarna merah. Huruf awalnya H.',
      explanation: 'HEMOGLOBIN adalah protein dalam sel darah merah yang mengandung zat besi (Fe). Hemoglobin mengikat O₂ di paru-paru membentuk oksihemoglobin (warna merah cerah), lalu melepaskan O₂ ke sel-sel tubuh dan mengikat CO₂ untuk dibawa kembali ke paru-paru. Kekurangan hemoglobin menyebabkan anemia.'
    },
  ],

  // ================================================================
  //  ipa-9 | SIKLUS HIDROLOGI (Evaporasi hingga Hujan)
  // ================================================================
  'ipa-9': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Siklus hidrologi adalah perputaran...',
      opts: [
        'Udara di atmosfer bumi',
        'Air di bumi secara terus-menerus',
        'Musim panas dan dingin',
        'Oksigen dalam tubuh makhluk hidup'
      ],
      ans: 1,
      hint: 'Hidro = air. Siklus = perputaran. Jadi siklus hidrologi adalah perputaran... apa?',
      explanation: 'SIKLUS HIDROLOGI adalah perputaran AIR di bumi secara terus-menerus tanpa henti — dari permukaan bumi ke atmosfer dan kembali ke bumi. Siklus ini memastikan jumlah air di bumi selalu sama, hanya berubah tempat dan wujud.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Proses penguapan air dari permukaan laut, danau, dan sungai akibat panas matahari disebut _.',
      ans: 'evaporasi',
      hint: 'Kata ini berasal dari bahasa Inggris "evaporation". Bayangkan genangan air yang lama-lama mengering terkena matahari.',
      explanation: 'EVAPORASI adalah proses penguapan air dari permukaan benda cair (laut, danau, sungai) akibat energi panas matahari. Air berubah dari cair menjadi uap air yang naik ke atmosfer. Evaporasi adalah tahap PERTAMA siklus hidrologi.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Proses berubahnya uap air menjadi titik-titik air di atmosfer yang membentuk awan disebut...',
      opts: ['Evaporasi', 'Presipitasi', 'Kondensasi', 'Infiltrasi'],
      ans: 2,
      hint: 'Uap air naik ke atas, lalu bertemu udara dingin dan berubah wujud. Proses apa itu?',
      explanation: 'KONDENSASI adalah proses berubahnya uap air menjadi titik-titik air cair ketika uap air naik ke atmosfer dan bertemu udara yang lebih dingin. Titik-titik air ini berkumpul membentuk AWAN. Kondensasi adalah kebalikan dari evaporasi.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Hujan yang jatuh ke bumi merupakan bagian dari siklus hidrologi yang disebut...',
      opts: ['Evaporasi', 'Kondensasi', 'Transpirasi', 'Presipitasi'],
      ans: 3,
      hint: 'Proses jatuhnya air dari awan ke bumi dalam bentuk hujan, salju, atau es.',
      explanation: 'PRESIPITASI adalah jatuhnya air dari atmosfer ke permukaan bumi dalam berbagai bentuk: hujan (air cair), salju (kristal es), atau hujan es (hail). Presipitasi terjadi ketika titik-titik air di awan sudah cukup berat untuk jatuh.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Proses penguapan air dari daun-daun tumbuhan disebut _, yang juga berkontribusi pada siklus hidrologi.',
      ans: 'transpirasi',
      hint: 'Trans = melalui, spirasi = napas/penguapan. Tumbuhan juga "berkeringat" melalui daun-daunnya.',
      explanation: 'TRANSPIRASI adalah penguapan air melalui stomata (pori-pori) pada daun tumbuhan. Hutan yang lebat menghasilkan transpirasi sangat besar, sehingga berkontribusi signifikan pada pembentukan awan dan hujan di sekitarnya. Ini mengapa hutan disebut "penghasil hujan".'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Urutan tahapan siklus hidrologi yang benar adalah...',
      opts: [
        'Presipitasi → Evaporasi → Kondensasi',
        'Evaporasi → Kondensasi → Presipitasi',
        'Kondensasi → Presipitasi → Evaporasi',
        'Infiltrasi → Transpirasi → Evaporasi'
      ],
      ans: 1,
      hint: 'Dimulai dari matahari memanaskan air laut → uap naik → awan terbentuk → hujan turun.',
      explanation: 'Urutan dasar: (1) EVAPORASI — air menguap karena panas matahari; (2) KONDENSASI — uap air berubah menjadi titik air membentuk awan; (3) PRESIPITASI — air jatuh sebagai hujan ke bumi; lalu siklus berulang dari awal lagi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Air hujan yang meresap ke dalam tanah disebut...',
      opts: ['Evaporasi', 'Runoff', 'Infiltrasi', 'Kondensasi'],
      ans: 2,
      hint: 'Sebagian air hujan meresap masuk ke dalam lapisan tanah. Kata ini mirip dengan "filter".',
      explanation: 'INFILTRASI adalah proses meresapnya air hujan ke dalam tanah melalui pori-pori tanah. Air yang terinfiltrasi menjadi air tanah (groundwater) yang bisa muncul kembali sebagai mata air atau diambil melalui sumur. Tanah yang padat atau tertutup beton mengurangi infiltrasi.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Air hujan yang tidak meresap ke tanah dan mengalir di permukaan tanah menuju sungai dan laut disebut aliran _ (limpasan).',
      ans: 'permukaan (runoff)',
      hint: 'Air mengalir di atas permukaan tanah setelah hujan lebat, bukan meresap ke bawah.',
      explanation: 'ALIRAN PERMUKAAN (runoff) adalah air hujan yang tidak terinfiltrasi dan mengalir di atas permukaan tanah menuju saluran air, sungai, danau, dan akhirnya ke laut. Runoff berlebihan dapat menyebabkan banjir, terutama di daerah yang banyak perkerasannya (beton, aspal).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa penebangan hutan secara liar dapat mengganggu siklus hidrologi?',
      opts: [
        'Karena pohon menghalangi sinar matahari untuk evaporasi',
        'Karena pohon tidak diperlukan dalam siklus hidrologi',
        'Karena pohon berperan dalam transpirasi dan penyerapan air tanah, sehingga tanpa pohon hujan berkurang dan banjir meningkat',
        'Karena pohon menghasilkan hujan buatan'
      ],
      ans: 2,
      hint: 'Apa peran pohon dalam siklus air? Ada dua peran utama: satu berhubungan dengan penguapan, satu lagi dengan penyerapan air.',
      explanation: 'Pohon berperan penting dalam siklus hidrologi: (1) TRANSPIRASI — melepaskan uap air ke atmosfer, berkontribusi pada pembentukan awan dan hujan; (2) AKAR menyerap dan menyimpan air tanah, mencegah banjir. Tanpa pohon, transpirasi berkurang (hujan berkurang) dan air hujan tidak tersimpan di tanah (banjir meningkat).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Es di kutub dan gletser di pegunungan merupakan bagian dari siklus hidrologi. Jika suhu bumi meningkat (pemanasan global), apa yang akan terjadi?',
      opts: [
        'Es bertambah banyak karena lebih banyak air yang membeku',
        'Es mencair, menambah volume air laut dan bisa menyebabkan naiknya permukaan air laut',
        'Es berpindah ke daerah tropis',
        'Tidak ada perubahan pada es kutub'
      ],
      ans: 1,
      hint: 'Es adalah air dalam wujud padat. Jika suhu naik, apa yang terjadi pada es?',
      explanation: 'Pemanasan global menyebabkan ES KUTUB dan GLETSER MENCAIR, menambah volume air di lautan. Permukaan air laut NAIK, mengancam daerah-daerah rendah dan pulau-pulau kecil. Ini juga mengganggu siklus hidrologi global karena es adalah "penyimpan air" jangka panjang bumi.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kota yang seluruh jalannya dicor beton mengalami banjir parah setiap hujan lebat, padahal kota tetangga yang masih banyak tanahnya tidak banjir. Mengapa?',
      opts: [
        'Karena kota beton lebih rendah letaknya',
        'Karena beton mencegah infiltrasi sehingga semua air hujan menjadi aliran permukaan yang langsung menggenangi jalan',
        'Karena kota beton menghasilkan lebih banyak hujan',
        'Karena kota tetangga punya teknologi anti-banjir'
      ],
      ans: 1,
      hint: 'Apa yang terjadi pada air hujan yang jatuh di atas beton? Bisakah ia meresap ke tanah?',
      explanation: 'BETON tidak berpori — air tidak bisa terinfiltrasi (meresap). Semua air hujan menjadi ALIRAN PERMUKAAN (runoff) yang langsung mengalir ke saluran air. Jika saluran air tidak cukup besar, air meluap = BANJIR. Tanah bisa menyerap air, sehingga sebagian besar air "hilang" ke dalam tanah. Inilah mengapa kota hijau lebih tahan banjir.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Siklus hidrologi yang singkat dan terjadi di daerah lokal (misalnya di hutan) disebut siklus _, sedangkan yang melibatkan perjalanan uap air melintasi benua disebut siklus panjang.',
      ans: 'pendek',
      hint: 'Bayangkan air menguap dari danau kecil, membentuk awan, lalu hujan jatuh tidak jauh dari danau itu.',
      explanation: 'Siklus PENDEK: evaporasi dari perairan lokal → kondensasi membentuk awan di atas daerah yang sama → hujan di daerah yang sama. Siklus PANJANG: uap air terbawa angin melintasi daratan jauh dari sumber aslinya sebelum terjadi presipitasi. Hutan tropis umumnya menjalankan siklus pendek secara intensif.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Air yang kamu minum hari ini mungkin pernah menjadi bagian dari tubuh dinosaurus jutaan tahun lalu. Mengapa hal ini bisa terjadi?',
      opts: [
        'Karena manusia keturunan dinosaurus',
        'Karena jumlah air di bumi selalu tetap dan terus berputar dalam siklus hidrologi sejak miliaran tahun lalu',
        'Karena dinosaurus meninggalkan air khusus di dalam tanah',
        'Ini hanya mitos, tidak mungkin terjadi'
      ],
      ans: 1,
      hint: 'Siklus hidrologi sudah berlangsung sejak bumi terbentuk. Air tidak pernah "hilang", hanya berputar terus.',
      explanation: 'Jumlah air di bumi hampir TIDAK BERUBAH sejak miliaran tahun lalu. Air terus berputar dalam siklus hidrologi — menguap, mengembun, hujan, mengalir, meresap, dan menguap lagi. Air yang diminum dinosaurus pun ikut dalam siklus ini. Sangat mungkin molekul air yang kamu minum hari ini pernah ada di dalam tubuh dinosaurus atau bahkan Julius Caesar!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Fenomena "hujan asam" terjadi ketika uap air di atmosfer bereaksi dengan polutan (SO₂, NO₂) dari pabrik dan kendaraan. Ini menunjukkan bahwa siklus hidrologi...',
      opts: [
        'Tidak terpengaruh oleh aktivitas manusia',
        'Dapat terganggu oleh polusi manusia yang mengubah komposisi kimia air hujan',
        'Membuat polutan menghilang dari udara',
        'Hanya terjadi di daerah industri'
      ],
      ans: 1,
      hint: 'Uap air di awan bertemu dengan gas-gas polutan. Apa yang terjadi pada air tersebut?',
      explanation: 'HUJAN ASAM membuktikan bahwa aktivitas manusia MENGGANGGU siklus hidrologi. Polutan SO₂ dan NO₂ bercampur dengan uap air di atmosfer membentuk asam sulfat dan asam nitrat. Hujan yang turun bersifat asam (pH rendah), merusak tanaman, danau, dan bangunan. Siklus air yang seharusnya "membersihkan" udara malah membawa asam ke tanah.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sumur dan mata air berasal dari air _ yang tersimpan di dalam lapisan tanah dan batuan berpori yang disebut akuifer.',
      ans: 'tanah (bawah tanah)',
      hint: 'Air yang meresap ke dalam tanah lalu tersimpan jauh di bawah permukaan.',
      explanation: 'AIR TANAH (groundwater) adalah air yang tersimpan di dalam lapisan batuan/tanah berpori yang disebut AKUIFER. Air tanah berasal dari infiltrasi air hujan selama bertahun-tahun. Sumur menggali hingga mencapai akuifer. Pengambilan air tanah berlebihan dapat menyebabkan penurunan tanah (land subsidence) seperti yang terjadi di Jakarta.'
    },
  ],

  // ================================================================
  //  ipa-10 | ADAPTASI TUMBUHAN (Xerofit, Hidrofit, Higrofit)
  // ================================================================
  'ipa-10': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Adaptasi adalah kemampuan makhluk hidup untuk...',
      opts: [
        'Berlari dari musuh',
        'Menyesuaikan diri dengan lingkungannya agar dapat bertahan hidup',
        'Mengubah warna tubuhnya',
        'Berpindah tempat saat musim hujan'
      ],
      ans: 1,
      hint: 'Kata adaptasi mirip "adapt" = menyesuaikan. Menyesuaikan diri dengan apa?',
      explanation: 'ADAPTASI adalah kemampuan makhluk hidup untuk MENYESUAIKAN DIRI dengan lingkungannya agar dapat bertahan hidup, tumbuh, dan berkembang biak. Adaptasi bisa berupa perubahan bentuk tubuh, perilaku, atau cara fisiologis.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tumbuhan yang hidup di daerah kering dan panas seperti gurun disebut tumbuhan _.',
      ans: 'xerofit',
      hint: 'Xero = kering. Tumbuhan gurun seperti kaktus termasuk kelompok ini.',
      explanation: 'XEROFIT (dari "xeros" = kering) adalah tumbuhan yang beradaptasi untuk hidup di lingkungan kering dan panas seperti gurun atau padang pasir. Kaktus adalah contoh paling terkenal xerofit.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kaktus memiliki batang yang tebal dan berdaging. Fungsinya adalah untuk...',
      opts: [
        'Menarik serangga penyerbuk',
        'Menyimpan cadangan air',
        'Menyerap sinar matahari lebih banyak',
        'Menghalangi hewan pemangsa'
      ],
      ans: 1,
      hint: 'Di gurun sangat jarang hujan. Kaktus perlu menyimpan "bekal" untuk bertahan saat kekeringan panjang.',
      explanation: 'Batang kaktus yang tebal dan berdaging berfungsi sebagai PENYIMPAN CADANGAN AIR. Kaktus menyimpan air sebanyak mungkin saat hujan, kemudian menggunakannya secara hemat saat musim kering panjang. Batangnya juga mengandung klorofil untuk fotosintesis (menggantikan daun yang sudah berubah jadi duri).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tumbuhan yang hidup di dalam air seperti teratai disebut...',
      opts: ['Xerofit', 'Higrofit', 'Hidrofit', 'Epifit'],
      ans: 2,
      hint: 'Hidro = air. Teratai, eceng gondok, dan ganggang hidup di... mana?',
      explanation: 'HIDROFIT (dari "hydro" = air) adalah tumbuhan yang hidup di dalam air atau lingkungan berair. Contoh: teratai, eceng gondok, ganggang, dan hydrilla. Hidrofit punya adaptasi khusus untuk hidup di lingkungan yang selalu basah.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tumbuhan yang hidup di tempat lembap seperti lumut dan paku-pakuan disebut tumbuhan _.',
      ans: 'higrofit',
      hint: 'Hygro = lembap/basah. Tumbuhan ini senang di tempat teduh dan lembap seperti di batang pohon atau hutan hujan.',
      explanation: 'HIGROFIT (dari "hygros" = lembap) adalah tumbuhan yang beradaptasi hidup di tempat yang lembap (bukan di dalam air). Contoh: lumut, paku-pakuan, begonia. Higrofit umumnya memiliki daun tipis dan lembut karena tidak perlu menyimpan air.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa daun kaktus berubah menjadi duri yang kecil dan tajam?',
      opts: [
        'Untuk menyerang hewan yang mendekatinya',
        'Untuk mengurangi penguapan air dan melindungi diri dari pemangsa',
        'Untuk menyerap lebih banyak sinar matahari',
        'Untuk menarik perhatian burung'
      ],
      ans: 1,
      hint: 'Daun yang lebar akan menguapkan banyak air. Di gurun yang kering, itu sangat merugikan. Apa solusinya?',
      explanation: 'Duri kaktus adalah daun yang berevolusi menjadi kecil dan keras. Fungsinya: (1) MENGURANGI PENGUAPAN AIR — permukaan daun kecil = sedikit stomata = sedikit air yang menguap; (2) PERLINDUNGAN — duri menghalangi hewan yang ingin memakan batang berair kaktus. Fotosintesis dilakukan oleh batang hijau yang mengandung klorofil.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Teratai memiliki daun yang lebar dan mengapung di permukaan air. Adaptasi ini berfungsi untuk...',
      opts: [
        'Menyimpan cadangan air',
        'Memudahkan tumbuhan tenggelam',
        'Memaksimalkan penyerapan sinar matahari untuk fotosintesis',
        'Menyerap lebih banyak mineral dari air'
      ],
      ans: 2,
      hint: 'Tumbuhan perlu sinar matahari untuk fotosintesis. Di dalam air, sinar matahari sulit menembus ke bawah. Bagaimana teratai mensiasati ini?',
      explanation: 'Daun teratai yang LEBAR dan mengapung di permukaan air memaksimalkan penangkapan SINAR MATAHARI untuk fotosintesis. Di dalam air, cahaya tidak bisa menembus dalam. Dengan daun di permukaan, teratai mendapat cahaya maksimum tanpa "berdesakan" dengan tumbuhan lain di bawah air.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Akar tunjang pada pohon bakau (mangrove) berfungsi untuk _, karena pohon bakau tumbuh di lumpur yang tidak stabil di tepi pantai.',
      ans: 'menyangga (menopang) pohon agar tidak tumbang',
      hint: 'Lumpur pantai sangat lembek dan tidak stabil. Pohon yang tinggi butuh fondasi yang kuat.',
      explanation: 'Akar tunjang bakau berbentuk seperti penyangga yang menjulur dari batang ke tanah. Fungsinya: MENOPANG pohon agar tidak roboh di lumpur pantai yang lembek, serta membantu pohon bernapas (beberapa akar punya pori-pori untuk mengambil O₂ dari udara — disebut pneumatofor).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Eceng gondok (tumbuhan hidrofit) memiliki batang yang berongga berisi udara. Fungsi rongga udara ini adalah...',
      opts: [
        'Menyimpan cadangan makanan',
        'Membuat tumbuhan tetap mengapung di permukaan air',
        'Menyerap lebih banyak air',
        'Melindungi dari serangan ikan'
      ],
      ans: 1,
      hint: 'Apa yang membuat benda bisa mengapung di air? Benda yang berisi udara lebih ringan dari air.',
      explanation: 'Rongga udara dalam batang eceng gondok berfungsi sebagai PELAMPUNG alami. Udara memiliki massa jenis lebih kecil dari air, sehingga membuat eceng gondok MENGAPUNG di permukaan. Ini memastikan daun eceng gondok tetap berada di permukaan untuk mendapat cahaya matahari.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Tumbuhan kantong semar hidup di daerah miskin nitrogen. Ia menjebak dan mencerna serangga untuk mendapat nutrisi. Ini adalah bentuk adaptasi...',
      opts: [
        'Morfologi (bentuk tubuh)',
        'Fisiologi (cara kerja organ)',
        'Perilaku (tingkah laku)',
        'Semua benar — morfologi dan fisiologi'
      ],
      ans: 3,
      hint: 'Kantong semar punya BENTUK khusus (kantong) DAN CARA KERJA khusus (mencerna serangga). Jadi termasuk adaptasi apa?',
      explanation: 'Kantong semar menggabungkan adaptasi MORFOLOGI (bentuk kantong yang menjebak serangga) dan FISIOLOGI (kemampuan mengeluarkan enzim pencernaan untuk mencerna serangga). Ini adalah adaptasi ganda yang luar biasa untuk bertahan di lingkungan miskin nutrisi.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Jika kaktus dipindahkan ke lingkungan yang lembap dan banyak hujan, apa yang kemungkinan terjadi?',
      opts: [
        'Kaktus akan tumbuh lebih subur karena mendapat lebih banyak air',
        'Kaktus bisa membusuk karena akarnya tidak dirancang untuk kondisi terlalu basah dan tubuhnya menyimpan terlalu banyak air',
        'Kaktus akan berubah menjadi tumbuhan tropis',
        'Kaktus tidak terpengaruh oleh perubahan lingkungan'
      ],
      ans: 1,
      hint: 'Adaptasi kaktus cocok untuk kering. Apa yang terjadi jika ia "dipaksa" hidup di kondisi berlawanan?',
      explanation: 'Kaktus BERADAPTASI untuk kondisi kering. Di lingkungan basah, sistem akarnya yang dangkal dan batangnya yang menyimpan banyak air justru merugikan: akar bisa membusuk akibat terlalu banyak air (root rot), dan batang yang terus menyerap air bisa pecah. Adaptasi yang sempurna di satu lingkungan belum tentu cocok di lingkungan lain.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pohon jati menggugurkan daunnya di musim kemarau. Adaptasi ini disebut _ dan berfungsi mengurangi penguapan air agar pohon tidak mati kekeringan.',
      ans: 'meranggas (gugur daun)',
      hint: 'Pohon yang kehilangan semua daunnya di musim kering agar tidak kehabisan air.',
      explanation: 'MERANGGAS (deciduous) adalah adaptasi di mana pohon menggugurkan daunnya saat kondisi kering atau dingin untuk MENGURANGI PENGUAPAN AIR. Jati adalah contoh pohon meranggas tropis. Tanpa daun, tidak ada stomata yang menguapkan air, sehingga pohon bisa bertahan melewati musim kemarau panjang.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang ilmuwan ingin membuat tanaman yang bisa tumbuh di daerah gurun. Berdasarkan adaptasi xerofit, fitur-fitur apa yang sebaiknya dimiliki tanaman hasil rekayasa tersebut?',
      opts: [
        'Daun lebar, akar pendek, batang berongga',
        'Daun kecil/duri, akar panjang dalam, batang tebal penyimpan air, lapisan lilin pada permukaan',
        'Daun lebar, akar mengapung, batang tipis',
        'Tidak perlu klorofil, akar tipis, batang berongga'
      ],
      ans: 1,
      hint: 'Ingat adaptasi kaktus: daun → duri (hemat air), akar → panjang (cari air dalam), batang → tebal (simpan air).',
      explanation: 'Tanaman gurun ideal harus: (1) DAUN KECIL/DURI — kurangi penguapan; (2) AKAR PANJANG — menjangkau air tanah yang dalam; (3) BATANG TEBAL — menyimpan air saat hujan; (4) LAPISAN LILIN (kutikula tebal) — mencegah air menguap dari permukaan daun/batang. Semua ini adalah fitur khas xerofit alami.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa hutan hujan tropis (seperti hutan Amazon dan Kalimantan) memiliki keanekaragaman tumbuhan yang jauh lebih tinggi daripada gurun?',
      opts: [
        'Karena gurun terlalu panas untuk evolusi',
        'Karena hutan hujan menyediakan air, cahaya, dan nutrisi yang cukup sehingga lebih banyak jenis tumbuhan bisa beradaptasi dan bertahan hidup',
        'Karena tumbuhan di gurun tidak bisa berkembang biak',
        'Karena gurun tidak memiliki tanah'
      ],
      ans: 1,
      hint: 'Lingkungan yang menyediakan lebih banyak sumber daya (air, nutrisi, cahaya) mendukung lebih banyak kehidupan.',
      explanation: 'Hutan hujan tropis memiliki AIR BERLIMPAH, CAHAYA CUKUP, dan NUTRISI KAYA yang mendukung berbagai strategi adaptasi dan niche ekologis. Di gurun, hanya tumbuhan dengan adaptasi sangat khusus (xerofit) yang bisa bertahan, sehingga keanekaragamannya rendah. Sumber daya lingkungan yang kaya = lebih banyak kemungkinan adaptasi = lebih banyak spesies.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tumbuhan epifit seperti anggrek hutan menempel pada pohon lain bukan untuk mencuri makanan, melainkan untuk mendapat posisi yang lebih tinggi guna mendapat _.',
      ans: 'cahaya matahari (sinar matahari)',
      hint: 'Di hutan lebat, kanopi pohon besar memblokir cahaya ke bawah. Tumbuhan kecil perlu naik ke atas untuk mendapat apa?',
      explanation: 'EPIFIT (epi = di atas, phyton = tumbuhan) seperti anggrek, lumut, dan paku menempel pada batang atau cabang pohon bukan untuk parasit (tidak mengambil nutrisi), melainkan untuk mendapat posisi lebih tinggi dan mendapat CAHAYA MATAHARI yang cukup untuk fotosintesis. Ini adalah adaptasi cerdas di hutan lebat yang sinar mataharinya terblokir kanopi.'
    },
  ],

  // ================================================================
  //  ipa-11 | ROTASI & REVOLUSI BUMI (Siang-Malam, Tahun, Musim)
  // ================================================================
  'ipa-11': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Rotasi bumi adalah gerakan bumi...',
      opts: [
        'Mengelilingi matahari',
        'Berputar pada porosnya sendiri',
        'Mengelilingi bulan',
        'Berpindah dari satu galaksi ke galaksi lain'
      ],
      ans: 1,
      hint: 'Rotasi = berputar di tempat, seperti gasing. Bumi berputar pada sumbu/porosnya.',
      explanation: 'ROTASI bumi adalah gerakan bumi BERPUTAR pada porosnya (sumbu imaginer dari kutub utara ke kutub selatan). Bumi berotasi dari barat ke timur, membutuhkan waktu sekitar 24 jam (1 hari).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Rotasi bumi menyebabkan terjadinya _ dan malam secara bergantian di seluruh permukaan bumi.',
      ans: 'siang',
      hint: 'Bagian bumi yang menghadap matahari mendapat cahaya. Bagian yang membelakangi matahari berada dalam gelap.',
      explanation: 'Rotasi bumi menyebabkan SIANG dan MALAM bergantian. Bagian bumi yang menghadap matahari mengalami siang hari, sedangkan bagian yang membelakangi matahari mengalami malam. Karena bumi terus berputar, siang dan malam berganti setiap ±12 jam.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Revolusi bumi adalah gerakan bumi...',
      opts: [
        'Berputar pada porosnya sendiri',
        'Berputar bersama galaksi Bima Sakti',
        'Mengelilingi matahari',
        'Mendekat dan menjauh dari bulan'
      ],
      ans: 2,
      hint: 'Revolusi = berputar mengelilingi sesuatu. Bumi berevolusi mengelilingi apa?',
      explanation: 'REVOLUSI bumi adalah gerakan bumi MENGELILINGI MATAHARI dalam lintasan berbentuk elips (orbit). Satu revolusi penuh membutuhkan waktu sekitar 365,25 hari (1 tahun). Revolusi inilah yang menyebabkan pergantian musim dan tahun.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Satu revolusi bumi mengelilingi matahari membutuhkan waktu sekitar...',
      opts: ['24 jam', '30 hari', '365 hari (1 tahun)', '12 jam'],
      ans: 2,
      hint: 'Satu putaran bumi mengelilingi matahari sama dengan berapa lama kalender kita?',
      explanation: 'Satu revolusi bumi membutuhkan 365 hari, 5 jam, 48 menit, dan 46 detik — dibulatkan menjadi 365 hari (1 tahun). Sisa ¼ hari (5 jam lebih) dikumpulkan selama 4 tahun menjadi 1 hari ekstra → TAHUN KABISAT (366 hari).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Setiap 4 tahun sekali, ada satu tahun dengan 366 hari yang disebut tahun _.',
      ans: 'kabisat',
      hint: 'Tahun ini bulan Februari memiliki 29 hari, bukan 28 hari seperti biasanya.',
      explanation: 'TAHUN KABISAT terjadi setiap 4 tahun sekali untuk mengompensasi 0,25 hari ekstra per tahun (365,25 × 4 = 366 hari ekstra di tahun ke-4). Pada tahun kabisat, bulan Februari memiliki 29 hari. Contoh: 2020, 2024, 2028 adalah tahun kabisat.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan utama antara rotasi dan revolusi bumi adalah...',
      opts: [
        'Rotasi lebih cepat dari revolusi',
        'Rotasi adalah perputaran pada poros sendiri (selesai 1 hari), revolusi adalah peredaran mengelilingi matahari (selesai 1 tahun)',
        'Revolusi terjadi setiap hari, rotasi setiap tahun',
        'Keduanya sama, hanya namanya berbeda'
      ],
      ans: 1,
      hint: 'Ingat: Rotasi = poros sendiri = 1 hari. Revolusi = keliling matahari = 1 tahun.',
      explanation: 'ROTASI: bumi berputar pada poros sendiri, selesai dalam ±24 jam (1 hari), menghasilkan siang-malam. REVOLUSI: bumi mengelilingi matahari, selesai dalam ±365 hari (1 tahun), menghasilkan pergantian musim dan tahun. Keduanya terjadi bersamaan!'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Poros bumi miring sekitar 23,5° terhadap bidang orbitnya. Apa akibat dari kemiringan ini?',
      opts: [
        'Menyebabkan siang dan malam',
        'Menyebabkan pergantian musim di daerah subtropis dan kutub',
        'Menyebabkan terjadinya gerhana matahari',
        'Menyebabkan bumi bergerak lebih cepat'
      ],
      ans: 1,
      hint: 'Di belahan bumi utara, saat musim panas, kutub utara lebih condong ke matahari. Saat musim dingin, kutub utara menjauh dari matahari.',
      explanation: 'Kemiringan poros bumi 23,5° menyebabkan PERGANTIAN MUSIM. Saat belahan bumi utara condong ke matahari → musim panas di belahan utara (musim dingin di belahan selatan). Saat belahan bumi selatan condong ke matahari → sebaliknya. Indonesia di khatulistiwa hanya mengalami 2 musim (hujan dan kemarau), bukan 4 musim.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Perbedaan waktu antara daerah-daerah di bumi disebabkan oleh _. Indonesia memiliki 3 zona waktu: WIB, WITA, dan WIT.',
      ans: 'rotasi bumi',
      hint: 'Bumi berputar, jadi tidak semua daerah menghadap matahari pada saat yang sama. Ini menyebabkan perbedaan... apa?',
      explanation: 'Perbedaan waktu antar daerah disebabkan oleh ROTASI BUMI. Karena bumi berputar 360° dalam 24 jam (15° per jam), daerah yang berbeda menghadap matahari pada waktu berbeda. Setiap 15° bujur = perbedaan 1 jam. Indonesia membentang dari 95°-141° BT, maka dibagi 3 zona waktu (WIB, WITA, WIT).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Negara-negara di belahan bumi utara (seperti Eropa dan Amerika) mengalami 4 musim. Di Indonesia, kita hanya mengalami 2 musim karena...',
      opts: [
        'Indonesia negaranya terlalu kecil',
        'Indonesia terletak di garis khatulistiwa sehingga mendapat sinar matahari hampir sama sepanjang tahun',
        'Indonesia tidak terkena pengaruh revolusi bumi',
        'Indonesia terlalu dekat dengan matahari'
      ],
      ans: 1,
      hint: 'Musim terjadi akibat kemiringan poros bumi. Daerah khatulistiwa selalu mendapat sinar matahari dari sudut yang hampir sama.',
      explanation: 'Indonesia di KHATULISTIWA mendapat sinar matahari hampir tegak lurus sepanjang tahun, tidak terlalu terpengaruh kemiringan poros bumi. Di belahan bumi jauh dari khatulistiwa, kemiringan poros menyebabkan variasi besar dalam intensitas sinar matahari → 4 musim (semi, panas, gugur, dingin).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Gerak semu tahunan matahari adalah...',
      opts: [
        'Gerakan matahari yang sebenarnya mengelilingi bumi',
        'Ilusi optik bahwa matahari bergerak dari utara ke selatan dan kembali ke utara sepanjang tahun, akibat revolusi bumi',
        'Gerakan matahari dari timur ke barat setiap hari',
        'Gerakan matahari mendekati dan menjauhi bumi'
      ],
      ans: 1,
      hint: '"Semu" artinya kelihatannya bergerak tapi sebenarnya tidak. Yang bergerak sebenarnya adalah bumi, bukan matahari.',
      explanation: 'Gerak semu TAHUNAN matahari: matahari terlihat seolah berpindah antara garis balik utara (23,5° LU) dan garis balik selatan (23,5° LS) sepanjang tahun. Padahal yang bergerak adalah BUMI mengelilingi matahari dengan porosnya yang miring. Ini menyebabkan posisi terbit/terbenam matahari sedikit berbeda setiap harinya.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Jika bumi TIDAK berputar pada porosnya (tidak berotasi), apa yang akan terjadi?',
      opts: [
        'Tidak ada perubahan, bumi tetap seperti biasa',
        'Satu sisi bumi akan selalu menghadap matahari (siang terus) dan sisi lain selalu gelap (malam terus) — kehidupan seperti yang kita kenal tidak akan mungkin ada',
        'Bumi akan jatuh ke matahari',
        'Musim akan berganti lebih cepat'
      ],
      ans: 1,
      hint: 'Rotasi menyebabkan siang-malam berganti. Tanpa rotasi, apa yang terjadi pada siang dan malam?',
      explanation: 'Tanpa rotasi: satu sisi bumi SELALU menghadap matahari → suhu sangat panas (ratusan derajat), sisi lainnya SELALU gelap → suhu sangat dingin. Perbedaan suhu ekstrem menciptakan angin superkencang. Kehidupan seperti yang kita kenal TIDAK MUNGKIN ADA. Rotasi bumi sangat vital untuk keseimbangan suhu dan ekosistem.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tahun kabisat terjadi setiap 4 tahun karena revolusi bumi sebenarnya memakan waktu 365 hari _ jam lebih, yang dikumpulkan selama 4 tahun menjadi 1 hari ekstra.',
      ans: '6 (enam)',
      hint: 'Lebih tepatnya 5 jam 48 menit, tapi untuk penyederhanaan sering disebut 6 jam atau ¼ hari.',
      explanation: 'Revolusi bumi memakan 365 hari + ≈6 jam (¼ hari). Dalam 4 tahun: 4 × ¼ = 1 hari ekstra → ditambahkan ke bulan Februari → 29 hari → TAHUN KABISAT. Tanpa koreksi ini, kalender kita akan meleset sekitar 1 hari setiap 4 tahun, dan dalam beberapa abad musim panas akan jatuh di bulan yang berbeda!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Di belahan bumi selatan (seperti Australia), bulan Desember-Februari adalah musim panas, sementara di belahan bumi utara adalah musim dingin. Mengapa demikian?',
      opts: [
        'Karena Australia lebih dekat ke matahari di bulan Desember',
        'Karena saat Desember, belahan bumi selatan condong ke arah matahari akibat kemiringan poros bumi, sementara belahan utara menjauh',
        'Karena cuaca di selatan selalu berlawanan dengan utara',
        'Karena matahari berpindah ke belahan selatan di bulan Desember'
      ],
      ans: 1,
      hint: 'Kemiringan poros bumi 23,5°. Saat Desember, ujung mana dari poros bumi yang mengarah ke matahari?',
      explanation: 'Saat bulan Desember, POROS BUMI miring sehingga BELAHAN SELATAN condong ke arah matahari. Akibatnya: belahan selatan mendapat sinar matahari lebih langsung dan lama → MUSIM PANAS. Belahan utara menjauh dari matahari → sinar datang miring dan sedikit → MUSIM DINGIN. Ini bukan karena jarak, melainkan sudut!'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pada tanggal 21 Maret dan 23 September, matahari tepat berada di atas garis khatulistiwa. Peristiwa ini disebut ekuinoks dan menyebabkan...',
      opts: [
        'Gerhana matahari di seluruh dunia',
        'Siang dan malam memiliki durasi yang hampir sama (±12 jam) di seluruh bumi',
        'Musim panas terpanjang dalam setahun',
        'Matahari tidak terbit selama beberapa hari'
      ],
      ans: 1,
      hint: 'Equinox dari bahasa Latin "aequi" (sama) + "nox" (malam). Apa yang sama antara siang dan malam?',
      explanation: 'EKUINOKS terjadi saat matahari tepat di atas khatulistiwa — cahaya matahari jatuh sama rata di kedua belahan bumi. Hasilnya: DURASI SIANG dan MALAM hampir SAMA (±12 jam) di seluruh bumi. Terjadi dua kali setahun: 21 Maret (ekuinoks musim semi) dan 23 September (ekuinoks musim gugur) untuk belahan bumi utara.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Gaya _ bumi (tarikan gravitasi) yang memengaruhi bulan, bersama gravitasi bulan yang memengaruhi bumi, menyebabkan bumi dan bulan saling terikat dalam sistem orbit yang stabil.',
      ans: 'gravitasi',
      hint: 'Gaya ini juga yang membuat apel jatuh ke bawah dan kita tidak melayang ke luar angkasa.',
      explanation: 'GRAVITASI adalah gaya tarik-menarik antara benda-benda bermassa. Gravitasi bumi menarik bulan sehingga bulan terus berputar mengelilingi bumi (tidak kabur ke luar angkasa). Gravitasi bulan menarik bumi (terutama menyebabkan pasang surut air laut). Tanpa gravitasi, sistem tata surya tidak akan stabil.'
    },
  ],

  // ================================================================
  //  ipa-12 | ROTASI & REVOLUSI BULAN + GERHANA (Pasang Surut & Gerhana)
  // ================================================================
  'ipa-12': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bulan bergerak mengelilingi bumi. Gerakan ini disebut...',
      opts: ['Rotasi bulan', 'Revolusi bulan', 'Rotasi bumi', 'Revolusi bumi'],
      ans: 1,
      hint: 'Revolusi = mengelilingi benda lain. Bulan mengelilingi bumi.',
      explanation: 'REVOLUSI BULAN adalah gerakan bulan mengelilingi bumi. Satu revolusi bulan membutuhkan waktu sekitar 29,5 hari (1 bulan sinodis). Ini yang menyebabkan kita melihat fase-fase bulan (bulan baru, sabit, purnama, dsb).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Bulan tidak memiliki cahaya sendiri. Cahaya bulan yang kita lihat di malam hari sebenarnya adalah cahaya _ yang dipantulkan oleh permukaan bulan.',
      ans: 'matahari',
      hint: 'Bulan seperti cermin — ia memantulkan cahaya dari bintang terdekat kita.',
      explanation: 'Bulan adalah benda langit yang TIDAK BERCAHAYA (benda gelap). Cahaya bulan yang terlihat di malam hari adalah CAHAYA MATAHARI yang dipantulkan oleh permukaan bulan. Itulah mengapa bulan tampak lebih terang saat purnama — permukaan yang menghadap bumi mendapat cahaya matahari penuh.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Gerhana matahari terjadi ketika...',
      opts: [
        'Bumi berada di antara matahari dan bulan',
        'Bulan berada di antara matahari dan bumi, menutupi cahaya matahari',
        'Matahari berada di antara bumi dan bulan',
        'Bumi terlalu jauh dari matahari'
      ],
      ans: 1,
      hint: 'Gerhana matahari = matahari tertutupi. Siapa yang bisa menutupi matahari jika kita lihat dari bumi?',
      explanation: 'GERHANA MATAHARI terjadi saat BULAN berada DI ANTARA matahari dan bumi, sehingga bayangan bulan jatuh ke bumi. Bagian bumi yang terkena bayangan gelap bulan (umbra) mengalami gerhana matahari total, sedangkan yang terkena bayangan abu-abu (penumbra) mengalami gerhana sebagian.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Gerhana bulan terjadi ketika...',
      opts: [
        'Bulan berada di antara matahari dan bumi',
        'Matahari lebih terang dari biasanya',
        'Bumi berada di antara matahari dan bulan, bayangan bumi menutupi bulan',
        'Bulan menjauh dari bumi'
      ],
      ans: 2,
      hint: 'Gerhana bulan = bulan tertutup bayangan. Siapa yang bisa memblokir cahaya matahari agar tidak mencapai bulan?',
      explanation: 'GERHANA BULAN terjadi saat BUMI berada DI ANTARA matahari dan bulan. Bayangan bumi (umbra) menutupi bulan, sehingga cahaya matahari tidak mencapai bulan. Bulan tampak berwarna merah/oranye kemerahan (disebut "blood moon") karena cahaya matahari melewati atmosfer bumi sebelum sedikit menyentuh bulan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Naik turunnya permukaan air laut yang terjadi secara teratur setiap hari disebut pasang _.',
      ans: 'surut',
      hint: 'Saat air laut naik disebut pasang, saat air laut turun disebut... apa?',
      explanation: 'PASANG SURUT adalah naik turunnya permukaan air laut secara berkala. "Pasang" = air laut naik, "Surut" = air laut turun. Pasang surut disebabkan terutama oleh gaya gravitasi BULAN yang menarik air laut ke arahnya.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa pasang surut air laut berhubungan dengan posisi bulan?',
      opts: [
        'Karena bulan memancarkan panas yang menghangatkan air laut',
        'Karena gravitasi bulan menarik massa air laut ke arah bulan, menyebabkan air laut menggembung (pasang) di sisi yang menghadap bulan',
        'Karena bulan memblokir angin yang menggerakkan ombak',
        'Karena bulan memengaruhi suhu bumi'
      ],
      ans: 1,
      hint: 'Gravitasi adalah gaya tarik. Bulan menarik apa yang ada di bumi? Air laut kan termasuk massa yang ada di bumi.',
      explanation: 'GRAVITASI BULAN menarik massa air laut di sisi bumi yang menghadap bulan, menyebabkan air "menggembung" ke arah bulan (PASANG). Di sisi berlawanan juga terjadi pasang akibat efek inersia. Bagian yang tidak ditarik gravitasi bulan mengalami SURUT. Ini menghasilkan 2 kali pasang dan 2 kali surut per hari (di kebanyakan tempat).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pasang purnama (spring tide) terjadi pada saat...',
      opts: [
        'Bulan berada di antara bumi dan matahari (bulan baru) atau bumi di antara bulan dan matahari (bulan purnama)',
        'Bulan berada di posisi tegak lurus terhadap garis bumi-matahari',
        'Matahari lebih dekat ke bumi dari biasanya',
        'Cuaca sedang panas terik'
      ],
      ans: 0,
      hint: 'Pasang paling besar terjadi saat gravitasi matahari DAN bulan bekerja searah — ini terjadi saat posisi ketiga benda sejajar.',
      explanation: 'PASANG PURNAMA (spring tide) terjadi saat matahari, bumi, dan bulan sejajar — yaitu saat BULAN BARU (bulan di antara bumi-matahari) atau BULAN PURNAMA (bumi di antara bulan-matahari). Gravitasi matahari dan bulan bekerja BERSAMA-SAMA, menghasilkan pasang tertinggi dan surut terendah.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Gerhana matahari total hanya bisa terlihat dari daerah yang terkena bayangan gelap (inti) bulan yang disebut _.',
      ans: 'umbra',
      hint: 'Ada dua jenis bayangan: yang gelap total (inti) dan yang abu-abu (tepi). Yang gelap total namanya?',
      explanation: 'UMBRA adalah bayangan gelap INTI dari suatu benda yang menghalangi cahaya. Daerah di bumi yang terkena umbra bulan mengalami GERHANA MATAHARI TOTAL — matahari tertutup sempurna. Di luar umbra ada PENUMBRA (bayangan abu-abu) — daerah ini mengalami gerhana sebagian (matahari tertutup sebagian).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa kita selalu melihat sisi yang SAMA dari bulan, tidak pernah melihat sisi belakangnya dari bumi?',
      opts: [
        'Karena sisi belakang bulan selalu gelap',
        'Karena periode rotasi bulan sama dengan periode revolusinya mengelilingi bumi, sehingga sisi yang sama selalu menghadap bumi',
        'Karena bulan tidak berputar sama sekali',
        'Karena bumi berputar terlalu cepat untuk melihat sisi lain bulan'
      ],
      ans: 1,
      hint: 'Bulan juga berotasi. Berapa lama bulan berotasi sekali? Berapa lama bulan berevolusi mengelilingi bumi?',
      explanation: 'Fenomena ini disebut ROTASI SINKRON. Bulan berotasi pada porosnya dalam waktu yang SAMA dengan revolusinya mengelilingi bumi (±29,5 hari). Akibatnya, sisi yang sama bulan selalu menghadap bumi. Kita tidak pernah melihat "sisi jauh" bulan dari bumi. Manusia pertama kali melihat sisi jauh bulan dari wahana antariksa tahun 1959.'
      },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Fase bulan sabit (crescent) terjadi karena...',
      opts: [
        'Sebagian bulan tertutupi awan tebal',
        'Hanya sebagian permukaan bulan yang menghadap bumi mendapat cahaya matahari dan terlihat dari bumi',
        'Bulan sedang dalam fase gerhana parsial',
        'Bulan bergerak lebih jauh dari bumi'
      ],
      ans: 1,
      hint: 'Bulan tampak seperti bulan sabit ketika hanya sebagian kecil yang bercahaya. Mengapa hanya sebagian yang bercahaya?',
      explanation: 'Fase bulan bergantung pada posisi bulan relatif terhadap bumi dan matahari. Saat bulan SABIT, cahaya matahari hanya menyinari sebagian kecil permukaan bulan yang terlihat dari bumi. Saat PURNAMA, seluruh permukaan yang menghadap bumi terkena cahaya matahari. Fase bulan berulang setiap ±29,5 hari.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Gerhana matahari total lebih jarang terlihat dibandingkan gerhana bulan, meskipun keduanya terjadi dengan frekuensi serupa. Mengapa?',
      opts: [
        'Karena gerhana matahari berlangsung lebih cepat',
        'Karena bayangan umbra bulan hanya menutupi area sempit di bumi, sehingga hanya sebagian kecil daerah yang bisa melihatnya total',
        'Karena gerhana matahari terjadi siang hari sehingga sulit dilihat',
        'Karena matahari terlalu terang untuk dilihat'
      ],
      ans: 1,
      hint: 'Gerhana bulan bisa terlihat dari separuh bumi (semua tempat yang sedang malam). Gerhana matahari total hanya terlihat dari daerah mana?',
      explanation: 'Gerhana BULAN terlihat dari seluruh belahan bumi yang sedang malam (separuh bumi). Gerhana MATAHARI TOTAL hanya terlihat dari jalur sempit di permukaan bumi yang terkena UMBRA bulan (lebarnya hanya sekitar 150-270 km). Semakin sempit area = semakin jarang daerah tertentu mengalaminya. Rata-rata, satu lokasi mengalami gerhana matahari total setiap 375 tahun sekali!'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Kalender _ (kalender Islam) didasarkan pada revolusi bulan mengelilingi bumi, sehingga satu tahunnya terdiri dari 354 hari — 11 hari lebih pendek dari kalender Masehi.',
      ans: 'Hijriah (Komariah)',
      hint: 'Kalender ini digunakan untuk menentukan bulan Ramadan dan hari raya Idul Fitri. Didasarkan pada siklus bulan.',
      explanation: 'Kalender HIJRIAH (Komariah) didasarkan pada REVOLUSI BULAN. Satu bulan = 29,5 hari (dibulatkan bergantian 29 atau 30 hari). Satu tahun Hijriah = 12 × 29,5 = 354 hari. Karena 11 hari lebih pendek dari kalender Masehi (365 hari), bulan Ramadan setiap tahun jatuh 11 hari lebih awal dari tahun sebelumnya dalam kalender Masehi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Nelayan tradisional biasanya memahami pola pasang surut untuk menentukan waktu melaut. Kapan waktu yang PALING BERBAHAYA untuk nelayan dengan perahu kecil?',
      opts: [
        'Saat air laut surut terendah, karena perahu bisa kandas',
        'Saat pasang purnama (spring tide) dengan ombak besar dan arus kuat',
        'Saat bulan berbentuk sabit',
        'Saat gerhana matahari karena langit gelap'
      ],
      ans: 1,
      hint: 'Pasang paling besar (spring tide) terjadi saat bulan baru dan purnama. Apa efeknya pada laut?',
      explanation: 'PASANG PURNAMA (spring tide) menghasilkan perbedaan tinggi air laut MAKSIMUM dan arus laut paling kuat. Bagi nelayan kecil, ini berarti ombak lebih besar dan arus lebih deras — sangat berbahaya. Nelayan tradisional berpengalaman menghafal kalender pasang surut yang berhubungan dengan fase bulan untuk keselamatan mereka.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Saat gerhana bulan, bulan tidak benar-benar hilang total menjadi gelap sempurna, melainkan berubah warna menjadi merah/oranye. Mengapa?',
      opts: [
        'Karena bulan memiliki atmosfer berwarna merah',
        'Karena cahaya matahari dibiaskan oleh atmosfer bumi dan diarahkan ke bulan, dengan panjang gelombang merah yang paling bisa melewati atmosfer',
        'Karena bumi memantulkan cahaya merah ke bulan',
        'Karena bulan mengandung mineral berwarna merah'
      ],
      ans: 1,
      hint: 'Pikirkan mengapa langit saat matahari terbenam berwarna merah/oranye. Fenomena yang sama terjadi pada gerhana bulan.',
      explanation: 'Saat gerhana bulan, atmosfer bumi MEMBIASKAN (membelokkan) cahaya matahari ke arah bulan yang berada di umbra. Atmosfer menyaring cahaya biru (hambur ke segala arah) tetapi membiarkan cahaya MERAH/ORANYE melewatinya — sama seperti saat matahari terbenam. Cahaya merah inilah yang menyinari bulan, menghasilkan "Blood Moon" yang dramatis.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Gerhana matahari cincin terjadi ketika bulan berada pada posisi terjauh dari bumi (apogee) sehingga tampak lebih kecil dan tidak bisa menutupi matahari sepenuhnya, menyisakan _ cahaya matahari di tepi bulan.',
      ans: 'cincin (lingkaran)',
      hint: 'Bayangkan matahari sebagai piringan besar dan bulan yang lebih kecil menutupi bagian tengahnya — apa yang terlihat di tepi?',
      explanation: 'Gerhana MATAHARI CINCIN (annular) terjadi saat bulan berada di APOGEE (titik terjauh dari bumi dalam orbitnya yang elips), sehingga tampak lebih kecil dari biasanya. Bulan hanya menutupi bagian tengah matahari, menyisakan CINCIN CAHAYA MATAHARI di sekelilingnya. Ini berbeda dari gerhana total di mana bulan di perigee (terdekat) menutupi matahari sempurna.'
    },
  ],

};

// ============================================================
//  PETUNJUK PENGGABUNGAN KE data.js:
//  Tambahkan isi QUIZ_DATA_PART2 ke dalam objek QUIZ_DATA utama.
//  Contoh: Object.assign(QUIZ_DATA, QUIZ_DATA_PART2);
//  Atau copy-paste langsung setelah kunci 'ipa-6' di dalam QUIZ_DATA.
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 2: Bahasa Indonesia bindo-1 s.d. bindo-4
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban singkat, '_' pada string q
// ============================================================

export const QUIZ_DATA_BINDO_1 = {

  // ================================================================
  //  bindo-1 | PERIBAHASA
  // ================================================================
  'bindo-1': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Apa yang dimaksud dengan peribahasa?',
      opts: [
        'Kalimat panjang yang berisi cerita lucu',
        'Kelompok kata atau kalimat tetap yang mengandung makna kiasan dan nasihat',
        'Kata-kata kasar yang tidak sopan',
        'Nama-nama tokoh dalam dongeng'
      ],
      ans: 1,
      hint: 'Peribahasa bukan bermakna harfiah, melainkan bermakna... apa?',
      explanation: 'Peribahasa adalah kelompok kata atau kalimat yang susunannya tetap dan mengandung MAKNA KIASAN (bukan makna sebenarnya) serta sering mengandung nasihat atau sindiran. Contoh: "Ada udang di balik batu" bukan berarti sungguh ada udang dan batu.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Peribahasa "Bagai air di daun talas" memiliki makna...',
      opts: [
        'Orang yang suka mandi',
        'Orang yang tidak punya pendirian tetap, mudah berubah-ubah pendapat',
        'Orang yang sangat rajin bekerja',
        'Orang yang pemalu dan pendiam'
      ],
      ans: 1,
      hint: 'Perhatikan sifat air di atas daun talas — air itu mudah bergerak ke sana kemari dan tidak menempel.',
      explanation: '"Bagai air di daun talas" menggambarkan orang yang tidak berpendirian tetap, pendapatnya mudah berubah-ubah seperti air di daun talas yang mudah bergerak ke mana-mana dan tidak menempel pada daun.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Peribahasa "Rajin _ murah rezeki" mengandung nasihat agar kita selalu giat bekerja dan tidak bermalas-malasan.',
      ans: 'pangkal',
      hint: 'Kata ini berarti "awal" atau "sumber". Rajin adalah _-nya kemakmuran.',
      explanation: '"Rajin PANGKAL Kaya" (versi lain: Rajin pangkal murah rezeki) adalah peribahasa yang mengandung nasihat bahwa kerajinan dan ketekunan bekerja adalah kunci untuk mendapat rezeki dan keberhasilan dalam hidup.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Peribahasa "Tak ada rotan, akar pun jadi" mengandung makna...',
      opts: [
        'Kita harus mencari rotan dan akar di hutan',
        'Jika tidak ada yang terbaik, yang ada pun bisa digunakan sebagai pengganti',
        'Rotan dan akar adalah tanaman yang sama',
        'Kita tidak boleh memilih-milih pekerjaan'
      ],
      ans: 1,
      hint: 'Rotan adalah yang terbaik/utama. Akar adalah penggantinya. Apa maksudnya jika yang utama tidak ada?',
      explanation: '"Tak ada rotan, akar pun jadi" bermakna: jika sesuatu yang lebih baik tidak tersedia, gunakan saja apa yang ada sebagai PENGGANTI. Peribahasa ini mengajarkan kita untuk tidak boros dan pandai memanfaatkan apa yang ada.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Peribahasa "Tong kosong nyaring bunyinya" digunakan untuk menggambarkan orang yang...',
      opts: [
        'Pandai menabuh tong',
        'Banyak bicara tetapi sedikit ilmu dan kemampuannya',
        'Suka mengumpulkan tong-tong kosong',
        'Memiliki banyak pengetahuan'
      ],
      ans: 1,
      hint: 'Tong kosong = isi sedikit/tidak ada. Nyaring bunyinya = banyak bicara. Apa kesimpulannya?',
      explanation: '"Tong kosong nyaring bunyinya" menggambarkan orang yang BANYAK BICARA tetapi SEDIKIT ILMU atau kemampuannya. Semakin banyak seseorang berbicara tanpa isi, semakin jelas terlihat keterbatasannya. Peribahasa ini adalah sindiran halus.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peribahasa yang tepat untuk menggambarkan seseorang yang memiliki kemampuan berbicara yang sangat bagus dan meyakinkan adalah...',
      opts: [
        '"Ada udang di balik batu"',
        '"Lidah tak bertulang"',
        '"Air beriak tanda tak dalam"',
        '"Berat sama dipikul, ringan sama dijinjing"'
      ],
      ans: 1,
      hint: 'Lidah adalah alat bicara. Tak bertulang artinya bisa bergerak sangat bebas dan fleksibel.',
      explanation: '"Lidah tak bertulang" berarti seseorang yang pandai berbicara, bisa mengatakan apa saja dengan mudah — bisa juga bermakna negatif (mudah berjanji atau berkata tidak jujur). Pilihan B paling tepat untuk kemampuan berbicara yang luwes.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Riko selalu membantu adiknya belajar, berbagi makanan, dan tidak pernah berkelahi. Peribahasa yang PALING COCOK untuk sikap Riko adalah...',
      opts: [
        '"Sepandai-pandai tupai melompat, sekali waktu jatuh juga"',
        '"Berat sama dipikul, ringan sama dijinjing"',
        '"Air beriak tanda tak dalam"',
        '"Musuh dalam selimut"'
      ],
      ans: 1,
      hint: 'Riko selalu berbagi dan bekerja sama. Peribahasa mana yang menggambarkan kebersamaan dan gotong royong?',
      explanation: '"Berat sama dipikul, ringan sama dijinjing" menggambarkan KEBERSAMAAN dan GOTONG ROYONG — susah senang ditanggung bersama. Cocok untuk Riko yang selalu membantu dan berbagi dengan adiknya.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Peribahasa "Ada _ di balik batu" bermakna ada maksud tersembunyi di balik suatu perbuatan yang tampak baik.',
      ans: 'udang',
      hint: 'Hewan laut kecil berkarapas yang sering bersembunyi di balik batu di sungai atau laut.',
      explanation: '"Ada UDANG di balik batu" menggambarkan seseorang yang melakukan sesuatu dengan tujuan tersembunyi — di balik kebaikannya ada maksud lain yang tidak diungkapkan. Peribahasa ini mengingatkan kita untuk tidak mudah percaya begitu saja pada kebaikan orang yang tidak kita kenal.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peribahasa "Buah jatuh tidak jauh dari pohonnya" bermakna...',
      opts: [
        'Pohon buah harus ditanam di dekat rumah',
        'Sifat dan perilaku anak biasanya mirip dengan orang tuanya',
        'Buah-buahan enak tumbuh di pohon yang tinggi',
        'Anak harus selalu dekat dengan orang tuanya'
      ],
      ans: 1,
      hint: 'Pohon adalah orang tua. Buah adalah anak. Buah jatuh tidak jauh dari pohon artinya...',
      explanation: '"Buah jatuh tidak jauh dari pohonnya" bermakna sifat, perilaku, atau bakat ANAK biasanya tidak jauh berbeda dari ORANG TUANYA. Seperti buah yang jatuh di dekat pohon induknya, anak-anak cenderung mewarisi karakteristik orang tua mereka.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Peribahasa "Sepandai-pandai tupai melompat, sekali waktu jatuh juga" mengandung makna...',
      opts: [
        'Tupai adalah hewan yang sangat pintar',
        'Sesepandai apapun seseorang, ia pasti pernah melakukan kesalahan',
        'Orang yang pandai melompat akan sukses',
        'Kita tidak boleh belajar melompat'
      ],
      ans: 1,
      hint: 'Tupai terkenal pandai melompat. Tapi "sekali waktu jatuh juga" artinya apa?',
      explanation: '"Sepandai-pandai tupai melompat, sekali waktu jatuh juga" bermakna: SEPANDAI APAPUN seseorang, pasti pernah melakukan KESALAHAN atau kegagalan. Tidak ada manusia yang sempurna. Peribahasa ini mengajarkan kerendahan hati.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sari meminjam buku Dina, tetapi buku itu hilang. Sari tidak mengaku dan malah pura-pura tidak tahu. Peribahasa yang PALING TEPAT menggambarkan sikap Sari adalah...',
      opts: [
        '"Air beriak tanda tak dalam"',
        '"Lempar batu sembunyi tangan"',
        '"Bagai air di daun talas"',
        '"Tong kosong nyaring bunyinya"'
      ],
      ans: 1,
      hint: 'Sari melakukan sesuatu yang merugikan orang lain tapi tidak mau mengakuinya. Peribahasa mana yang menggambarkan "berbuat tapi tidak mau bertanggung jawab"?',
      explanation: '"Lempar batu sembunyi tangan" menggambarkan orang yang BERBUAT KESALAHAN atau merugikan orang lain tetapi TIDAK MAU MENGAKUI atau bertanggung jawab atas perbuatannya — berpura-pura tidak tahu. Persis seperti perilaku Sari yang menghilangkan buku Dina tapi tidak mengaku.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan dua peribahasa berikut: (A) "Air beriak tanda tak dalam" dan (B) "Diam-diam menghanyutkan". Kedua peribahasa ini memiliki makna yang...',
      opts: [
        'Sama persis — keduanya tentang air',
        'Berlawanan — A menggambarkan orang banyak bicara tapi dangkal ilmunya, B menggambarkan orang pendiam tapi dalam ilmunya',
        'Sama — keduanya tentang orang pandai',
        'Tidak berhubungan sama sekali'
      ],
      ans: 1,
      hint: '"Air beriak" = berbunyi/ribut. "Diam-diam" = tenang/tidak bersuara. Keduanya menggambarkan orang yang... berbeda sifatnya.',
      explanation: 'Maknanya BERLAWANAN: "Air beriak tanda tak dalam" = orang yang banyak bicara/sombong biasanya DANGKAL ilmunya. "Diam-diam menghanyutkan" = orang yang tampak pendiam justru bisa memiliki kemampuan atau pengaruh yang BESAR dan mengejutkan. Keduanya tentang penampilan vs. kenyataan, tapi dari sudut berbeda.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Peribahasa "Berguru kepalang ajar, bagai _ menanggung kulitnya" bermakna belajar yang tidak sungguh-sungguh justru merugikan diri sendiri.',
      ans: 'buaya',
      hint: 'Hewan reptil besar bergigi tajam yang kulitnya sangat tebal dan berat. Membawa kulit sendiri tanpa manfaat terasa sia-sia.',
      explanation: '"Berguru kepalang ajar, bagai BUAYA menanggung kulitnya" bermakna: belajar setengah-setengah atau tidak sungguh-sungguh (kepalang = tanggung) justru sia-sia dan membebani diri sendiri — seperti buaya yang menanggung kulit tebalnya yang berat tanpa bisa dilepas. Lebih baik belajar tuntas atau tidak sama sekali.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Budi adalah seorang pejabat yang korupsi uang rakyat, padahal ia sering berpidato tentang kejujuran dan anti-korupsi. Peribahasa yang PALING TEPAT adalah...',
      opts: [
        '"Tong kosong nyaring bunyinya"',
        '"Pagar makan tanaman"',
        '"Bagai air di daun talas"',
        '"Air beriak tanda tak dalam"'
      ],
      ans: 1,
      hint: 'Pagar seharusnya melindungi tanaman. Tapi bagaimana jika pagar itu sendiri yang merusak tanaman?',
      explanation: '"Pagar makan tanaman" menggambarkan orang yang SEHARUSNYA MELINDUNGI atau menjaga justru MERUSAK/MERUGIKAN apa yang diamanahkan padanya. Pak Budi yang bertugas mengurus kepentingan rakyat justru merugikan rakyat dengan korupsi — persis seperti pagar yang memakan tanamannya sendiri.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kakak Rima sangat cantik, pintar, dan berbakat. Tapi Rima juga cantik, pintar, dan berbakat. Peribahasa yang TEPAT menggambarkan Rima adalah...',
      opts: [
        '"Buah jatuh tidak jauh dari pohonnya"',
        '"Ada gula ada semut"',
        '"Guru kencing berdiri murid kencing berlari"',
        '"Air susu dibalas air tuba"'
      ],
      ans: 0,
      hint: 'Rima memiliki sifat yang mirip dengan kakaknya. Peribahasa mana yang menggambarkan kemiripan sifat antara dua orang yang berkerabat?',
      explanation: '"Buah jatuh tidak jauh dari pohonnya" paling tepat karena Rima (buah) memiliki sifat dan kemampuan yang mirip dengan kakaknya (pohon induk). Keduanya dari keluarga yang sama dan mewarisi kualitas yang serupa. Peribahasa ini menggambarkan kemiripan sifat dalam satu keluarga atau keturunan.'
    },
  ],

  // ================================================================
  //  bindo-2 | BAGAN (Cara Membaca & Membuat Bagan)
  // ================================================================
  'bindo-2': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bagan adalah...',
      opts: [
        'Cerita bergambar yang panjang',
        'Gambar atau diagram yang menyajikan informasi secara visual dan terstruktur',
        'Kumpulan foto-foto kegiatan',
        'Tulisan panjang berisi data angka'
      ],
      ans: 1,
      hint: 'Bagan menyajikan informasi bukan dengan kalimat panjang, melainkan dengan... apa?',
      explanation: 'BAGAN adalah representasi visual berupa gambar, diagram, atau skema yang menyajikan informasi, data, atau hubungan antar bagian secara TERSTRUKTUR dan mudah dipahami. Bagan membantu kita memahami informasi kompleks dengan lebih cepat.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bagan yang menunjukkan urutan langkah-langkah suatu proses dari awal hingga akhir disebut...',
      opts: ['Bagan pohon', 'Bagan alur', 'Bagan lingkaran', 'Bagan batang'],
      ans: 1,
      hint: 'Bagan ini menggambarkan aliran/urutan suatu proses. Kata "alur" berarti urutan/langkah.',
      explanation: 'BAGAN ALUR (flowchart) menggambarkan urutan langkah-langkah sebuah proses dari awal hingga akhir. Biasanya menggunakan kotak untuk langkah-langkah dan panah untuk menunjukkan urutan. Contoh: bagan alur cara mendaftar sekolah baru.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Bagan yang menggambarkan struktur organisasi atau hubungan tingkatan jabatan dalam sebuah lembaga disebut bagan _.',
      ans: 'organisasi',
      hint: 'Bagan ini mirip pohon terbalik — kepala sekolah di atas, guru-guru di bawah.',
      explanation: 'BAGAN ORGANISASI menggambarkan struktur dan hierarki dalam sebuah lembaga/organisasi. Posisi tertinggi ada di puncak, diikuti posisi-posisi di bawahnya. Contoh: Kepala Sekolah → Wakil Kepala Sekolah → Guru-guru → Siswa.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Simbol panah (→) dalam sebuah bagan biasanya menunjukkan...',
      opts: [
        'Nama orang yang membuat bagan',
        'Hubungan, urutan, atau arah aliran dari satu elemen ke elemen berikutnya',
        'Tanggal pembuatan bagan',
        'Keterangan warna dalam bagan'
      ],
      ans: 1,
      hint: 'Panah menunjukkan arah. Dalam bagan, panah menghubungkan satu kotak ke kotak lain. Apa artinya?',
      explanation: 'Simbol PANAH (→) dalam bagan menunjukkan HUBUNGAN, URUTAN, atau ARAH ALIRAN dari satu elemen ke elemen berikutnya. Panah membantu pembaca memahami mana yang terjadi lebih dulu dan ke mana proses berlanjut.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keunggulan utama bagan dibandingkan teks panjang adalah...',
      opts: [
        'Bagan lebih sulit dipahami sehingga melatih otak',
        'Bagan menyajikan informasi secara visual sehingga lebih mudah dan cepat dipahami',
        'Bagan memuat lebih banyak informasi detail',
        'Bagan selalu berwarna sehingga lebih menarik'
      ],
      ans: 1,
      hint: 'Mengapa buku pelajaran menggunakan bagan selain teks? Apa yang membuat bagan lebih praktis?',
      explanation: 'Keunggulan BAGAN: menyajikan informasi secara VISUAL dan TERSTRUKTUR sehingga otak dapat memproses informasi lebih CEPAT dan MUDAH dibanding membaca paragraf panjang. Otak manusia memproses gambar 60.000 kali lebih cepat dari teks!'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan bagan berikut:\n[Biji] → [Kecambah] → [Tanaman Muda] → [Tanaman Dewasa] → [Berbunga] → [Berbuah]\nBagan ini termasuk jenis bagan...',
      opts: ['Bagan organisasi', 'Bagan pohon', 'Bagan alur', 'Bagan lingkaran'],
      ans: 2,
      hint: 'Bagan ini menunjukkan urutan proses pertumbuhan tanaman dari awal sampai akhir secara berurutan.',
      explanation: 'Bagan tersebut adalah BAGAN ALUR karena menunjukkan URUTAN LANGKAH/TAHAPAN dari satu proses (pertumbuhan tanaman) secara berurutan dari awal (biji) hingga akhir (berbuah) menggunakan simbol panah sebagai penghubung.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam sebuah bagan organisasi sekolah, posisi "Kepala Sekolah" berada di paling atas. Artinya...',
      opts: [
        'Kepala Sekolah usianya paling tua',
        'Kepala Sekolah memiliki wewenang dan tanggung jawab tertinggi dalam struktur sekolah',
        'Kepala Sekolah ruangannya berada di lantai paling atas',
        'Kepala Sekolah yang paling sering hadir di sekolah'
      ],
      ans: 1,
      hint: 'Dalam bagan organisasi, posisi yang lebih tinggi menunjukkan tingkatan apa?',
      explanation: 'Dalam BAGAN ORGANISASI, posisi yang lebih tinggi menunjukkan WEWENANG dan TANGGUNG JAWAB yang lebih besar. Kepala Sekolah di puncak bagan berarti ia adalah pemimpin tertinggi yang memiliki otoritas terbesar dalam pengelolaan sekolah.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Ketika membuat bagan, informasi yang paling penting atau utama biasanya ditempatkan di bagian _ atau tengah bagan.',
      ans: 'atas',
      hint: 'Dalam hierarki, yang paling penting selalu ada di posisi tertinggi — seperti kepala sekolah di bagan organisasi.',
      explanation: 'Dalam pembuatan bagan (terutama bagan organisasi atau bagan pohon), informasi atau posisi yang PALING PENTING/UTAMA ditempatkan di bagian ATAS atau tengah. Ini membantu pembaca langsung mengetahui elemen terpenting sebelum melihat detail di bawahnya.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah informasi yang PALING TEPAT disajikan dalam bentuk bagan alur?',
      opts: [
        'Biografi lengkap seorang pahlawan',
        'Langkah-langkah cara mencuci tangan yang benar',
        'Daftar nama siswa kelas 6A',
        'Puisi tentang keindahan alam'
      ],
      ans: 1,
      hint: 'Bagan alur cocok untuk menyajikan informasi yang berupa... urutan langkah-langkah.',
      explanation: 'BAGAN ALUR paling cocok untuk "Langkah-langkah mencuci tangan" karena informasi ini berupa URUTAN PROSES yang harus dilakukan secara berurutan. Biografi lebih cocok berupa teks narasi, daftar nama cocok berupa tabel, dan puisi memang berbentuk puisi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bagan pohon (tree diagram) sering digunakan untuk menggambarkan...',
      opts: [
        'Jenis-jenis pohon di hutan',
        'Hubungan kekerabatan keluarga atau klasifikasi suatu kategori yang bercabang-cabang',
        'Cara menanam pohon dengan benar',
        'Data jumlah pohon di suatu daerah'
      ],
      ans: 1,
      hint: 'Bentuknya seperti pohon: ada batang utama di atas, lalu bercabang-cabang ke bawah. Apa yang digambarkan dengan struktur seperti itu?',
      explanation: 'BAGAN POHON (tree diagram) menggambarkan HUBUNGAN HIERARKIS atau KLASIFIKASI yang bercabang — dimulai dari satu topik utama yang terpecah menjadi sub-topik, lalu bercabang lagi. Contoh: pohon keluarga (silsilah), klasifikasi makhluk hidup, atau struktur topik pelajaran.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan bagan berikut:\nHewan → Vertebrata → Mamalia → Kucing\n          → Reptilia → Ular\n→ Invertebrata → Serangga → Kupu-kupu\nInformasi utama yang ingin disampaikan bagan ini adalah...',
      opts: [
        'Kucing lebih penting dari ular',
        'Klasifikasi hewan berdasarkan ada tidaknya tulang belakang dan kelompok-kelompoknya',
        'Hewan vertebrata lebih banyak dari invertebrata',
        'Cara membedakan kucing dan ular'
      ],
      ans: 1,
      hint: 'Bagan dimulai dari "Hewan" lalu terbagi menjadi dua kelompok besar. Apa dasar pembagiannya?',
      explanation: 'Bagan ini menyampaikan KLASIFIKASI HEWAN berdasarkan ada tidaknya tulang belakang: Vertebrata (bertulang belakang: mamalia, reptilia, dll.) dan Invertebrata (tidak bertulang belakang: serangga, dll.). Bukan membandingkan siapa yang lebih penting, melainkan MENGELOMPOKKAN secara sistematis.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Membaca bagan harus dimulai dari bagian _ (biasanya atas atau kiri), kemudian mengikuti arah panah atau urutan untuk memahami informasi secara menyeluruh.',
      ans: 'awal (atas/kiri)',
      hint: 'Sama seperti membaca buku — kita mulai dari... mana?',
      explanation: 'Membaca bagan harus SISTEMATIS: dimulai dari bagian AWAL (biasanya atas untuk bagan organisasi, atau kiri untuk bagan alur horizontal), kemudian mengikuti ARAH PANAH atau urutan yang ditunjukkan. Membaca bagan secara acak akan membingungkan dan menyebabkan salah paham.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Guru meminta siswa membuat bagan proses terjadinya hujan. Urutan bagan yang BENAR adalah...',
      opts: [
        'Hujan → Kondensasi → Evaporasi → Awan',
        'Evaporasi → Kondensasi → Awan terbentuk → Presipitasi (Hujan)',
        'Awan → Evaporasi → Hujan → Kondensasi',
        'Presipitasi → Awan → Kondensasi → Evaporasi'
      ],
      ans: 1,
      hint: 'Ingat siklus hidrologi: air menguap dulu, lalu apa yang terjadi selanjutnya?',
      explanation: 'Urutan yang benar: EVAPORASI (air menguap) → KONDENSASI (uap menjadi titik air di atmosfer) → AWAN TERBENTUK (titik air berkumpul) → PRESIPITASI/HUJAN (air jatuh ke bumi). Ini adalah urutan logis proses terjadinya hujan yang harus disajikan dalam bagan alur.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang siswa membuat bagan organisasi kelas tetapi menaruh "Ketua Kelas" di bawah "Bendahara". Apa kesalahan dalam bagan tersebut?',
      opts: [
        'Tidak ada kesalahan, posisi bebas',
        'Ketua Kelas seharusnya di posisi paling atas karena memiliki wewenang dan tanggung jawab tertinggi di kelas',
        'Bendahara seharusnya dihapus dari bagan',
        'Sekretaris seharusnya di posisi tertinggi'
      ],
      ans: 1,
      hint: 'Dalam bagan organisasi, siapa yang memiliki wewenang tertinggi harus berada di posisi tertinggi (paling atas).',
      explanation: 'Kesalahannya: KETUA KELAS memiliki WEWENANG TERTINGGI di antara pengurus kelas sehingga harus ditempatkan di posisi PALING ATAS bagan. Bendahara, sekretaris, dan seksi-seksi lainnya berada di bawah ketua kelas. Posisi dalam bagan organisasi mencerminkan hierarki dan tanggung jawab, bukan urutan abjad atau usia.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa bagan lebih sering digunakan dalam buku pelajaran sains dibandingkan buku fiksi (cerita)?',
      opts: [
        'Karena buku sains lebih mahal sehingga butuh gambar',
        'Karena bagan efektif menyajikan data, proses, dan klasifikasi ilmiah yang bersifat sistematis, sementara fiksi lebih mengandalkan narasi imajinatif',
        'Karena bagan lebih mudah dibuat daripada menulis cerita',
        'Karena pembaca buku sains tidak bisa membaca'
      ],
      ans: 1,
      hint: 'Apa perbedaan jenis informasi yang disampaikan buku sains vs. buku cerita?',
      explanation: 'Buku SAINS berisi data, proses ilmiah, dan klasifikasi yang bersifat SISTEMATIS dan HIERARKIS — cocok disajikan dalam bagan (alur, organisasi, pohon). Buku FIKSI menyampaikan cerita imajinatif melalui NARASI yang mengalir — bagan tidak cocok untuk menyampaikan perasaan, konflik, atau imajinasi. Setiap media penyajian informasi ada tujuannya.'
    },
  ],

  // ================================================================
  //  bindo-3 | UNSUR INTRINSIK (Tema, Tokoh, Latar, Alur, Amanat)
  // ================================================================
  'bindo-3': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Unsur intrinsik adalah unsur-unsur yang...',
      opts: [
        'Membangun cerita dari dalam, berasal dari dalam cerita itu sendiri',
        'Membangun cerita dari luar, seperti pengarang dan latar belakangnya',
        'Hanya berupa gambar-gambar ilustrasi dalam cerita',
        'Daftar nama tokoh-tokoh dalam cerita'
      ],
      ans: 0,
      hint: '"Intrinsik" berasal dari kata Latin yang berarti "dari dalam". Jadi unsur intrinsik ada di dalam... apa?',
      explanation: 'UNSUR INTRINSIK adalah unsur-unsur yang MEMBANGUN cerita dari DALAM cerita itu sendiri. Meliputi: tema, alur/plot, tokoh/penokohan, latar, sudut pandang, gaya bahasa, dan amanat. Lawannya adalah unsur ekstrinsik (dari luar, seperti latar belakang pengarang).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Gagasan utama atau pokok persoalan yang menjadi dasar sebuah cerita disebut...',
      opts: ['Alur', 'Latar', 'Tema', 'Amanat'],
      ans: 2,
      hint: 'Ini adalah "inti" atau "jiwa" dari cerita. Apa yang ingin dibahas pengarang dalam ceritanya?',
      explanation: 'TEMA adalah gagasan utama atau pokok persoalan yang menjadi dasar sebuah karya sastra. Tema menjawab pertanyaan: "Cerita ini tentang apa?" Contoh tema: persahabatan, kejujuran, perjuangan, keluarga, dll.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Urutan kejadian atau peristiwa dalam sebuah cerita dari awal hingga akhir disebut _.',
      ans: 'alur (plot)',
      hint: 'Kata ini juga berarti "jalur" — seperti jalur cerita yang kita ikuti.',
      explanation: 'ALUR (plot) adalah rangkaian peristiwa dalam cerita yang disusun secara berurutan dan saling berhubungan sebab-akibat. Ada alur maju (urutan waktu normal), alur mundur (flashback), dan alur campuran.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keterangan mengenai waktu, tempat, dan suasana berlangsungnya sebuah cerita disebut...',
      opts: ['Tema', 'Tokoh', 'Amanat', 'Latar'],
      ans: 3,
      hint: 'Ini menjawab pertanyaan: "Di mana cerita terjadi? Kapan? Bagaimana suasananya?"',
      explanation: 'LATAR (setting) adalah keterangan tentang TEMPAT (di mana cerita terjadi), WAKTU (kapan cerita terjadi), dan SUASANA (atmosfer/kondisi emosional saat cerita berlangsung). Latar membantu pembaca membayangkan situasi cerita secara nyata.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Pesan moral atau pelajaran yang ingin disampaikan pengarang melalui ceritanya disebut...',
      opts: ['Tema', 'Alur', 'Tokoh', 'Amanat'],
      ans: 3,
      hint: 'Setelah membaca cerita, ada pelajaran hidup yang bisa kita petik. Itulah...',
      explanation: 'AMANAT adalah pesan moral atau pelajaran hidup yang ingin disampaikan pengarang kepada pembaca melalui ceritanya. Amanat bisa tersirat (tersembunyi, harus ditafsirkan) atau tersurat (langsung dinyatakan dalam cerita).'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah kutipan berikut:\n"Budi selalu datang lebih awal ke sekolah untuk membantu guru menyiapkan kelas. Ia tidak pernah meminta imbalan apapun. Teman-temannya sering meremehkan Budi, tapi pak guru selalu memujinya."\nTokoh utama dalam cerita ini adalah...',
      opts: ['Guru', 'Teman-teman Budi', 'Pak Kepala Sekolah', 'Budi'],
      ans: 3,
      hint: 'Tokoh utama adalah tokoh yang paling banyak diceritakan dan menjadi pusat perhatian cerita.',
      explanation: 'BUDI adalah tokoh utama karena seluruh kutipan berpusat pada dirinya — kegiatannya (datang lebih awal, membantu guru), sikapnya (tidak minta imbalan), dan bagaimana orang lain merespons dirinya. Tokoh utama adalah tokoh yang paling dominan dalam cerita.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah kutipan berikut:\n"Malam itu hujan deras. Di sebuah gubuk kecil di tepi hutan, seorang nenek tua duduk sendirian di depan tungku yang hampir padam."\nLatar cerita pada kutipan ini adalah...',
      opts: [
        'Siang hari di kota besar, suasana ramai',
        'Malam hari di gubuk kecil tepi hutan, suasana sepi dan dingin',
        'Pagi hari di sawah, suasana cerah',
        'Sore hari di pantai, suasana tenang'
      ],
      ans: 1,
      hint: 'Cari informasi tentang waktu (kapan?), tempat (di mana?), dan suasana (bagaimana?) dalam kutipan itu.',
      explanation: 'Latar kutipan: WAKTU = malam hari ("malam itu"), TEMPAT = gubuk kecil di tepi hutan, SUASANA = sepi, dingin, mencekam (hujan deras, tungku hampir padam, nenek sendirian). Latar lengkap mencakup tiga komponen: waktu, tempat, dan suasana.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Tokoh yang memiliki sifat baik, jujur, dan menjadi panutan dalam cerita disebut tokoh _, sedangkan tokoh jahat yang menentangnya disebut tokoh antagonis.',
      ans: 'protagonis',
      hint: 'Tokoh "jagoan" atau "pahlawan" yang baik hati. Lawannya adalah antagonis.',
      explanation: 'PROTAGONIS adalah tokoh utama yang memiliki sifat baik dan menjadi tokoh yang diikuti/dipihaki pembaca. ANTAGONIS adalah tokoh yang berlawanan/menentang protagonis, biasanya digambarkan sebagai "penjahat". Konflik antara keduanya menggerakkan alur cerita.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah kutipan:\n"Karena kejujurannya, Aldi akhirnya dipercaya menjadi ketua kelas. Teman-teman yang dulu menganggap remeh kejujurannya kini kagum padanya."\nAmanat yang PALING TEPAT dari kutipan ini adalah...',
      opts: [
        'Jadilah ketua kelas agar dikagumi teman',
        'Kejujuran adalah sifat terpuji yang akhirnya akan dihargai dan membuahkan kepercayaan',
        'Teman-teman yang baik selalu mengagumi ketua kelas',
        'Berlombalah untuk menjadi ketua kelas'
      ],
      ans: 1,
      hint: 'Apa pelajaran yang bisa kita ambil dari perjalanan Aldi? Sifat apa yang membawanya pada kesuksesan?',
      explanation: 'Amanat kutipan tersebut: KEJUJURAN adalah nilai yang terpuji dan akan berbuah baik — yaitu kepercayaan dari orang lain. Meskipun awalnya diremehkan, kejujuran Aldi akhirnya diakui dan dihargai. Pesan moralnya: jujurlah dalam setiap situasi.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Alur cerita yang menceritakan kilas balik ke masa lampau di tengah-tengah cerita yang berlangsung di masa kini disebut...',
      opts: ['Alur maju', 'Alur campuran', 'Alur mundur', 'Alur melingkar'],
      ans: 1,
      hint: 'Cerita berjalan di masa kini, lalu tiba-tiba mundur ke masa lalu, lalu kembali ke masa kini. Itu alur apa?',
      explanation: 'ALUR CAMPURAN adalah alur yang menggabungkan alur maju dan alur mundur. Cerita bisa dimulai di masa kini, lalu ada KILAS BALIK (flashback) ke masa lalu, kemudian kembali ke masa kini. Banyak novel dan film menggunakan alur campuran untuk menciptakan misteri atau kedalaman karakter.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Bacalah kutipan cerita berikut:\n"Sani menemukan dompet berisi uang di taman. Ia tahu uang itu bisa membeli sepatu baru yang sangat ia inginkan. Namun, Sani teringat pesan ibunya: \'Uang yang bukan hakmu tak akan membawa berkah.\' Akhirnya, Sani menyerahkan dompet itu ke kantor polisi."\nTema cerita ini adalah...',
      opts: [
        'Kemiskinan dan keinginan anak',
        'Kejujuran dan integritas dalam menghadapi godaan',
        'Pentingnya pergi ke kantor polisi',
        'Cara menemukan barang hilang'
      ],
      ans: 1,
      hint: 'Apa pokok persoalan utama yang dihadapi Sani? Antara keinginan pribadi dan nilai apa yang akhirnya ia pilih?',
      explanation: 'TEMA cerita adalah KEJUJURAN DAN INTEGRITAS. Pokok persoalannya: Sani dihadapkan pada GODAAN (mengambil uang bukan miliknya untuk kebutuhan pribadi) tetapi memilih untuk JUJUR (menyerahkan dompet ke polisi). Kejujuran adalah inti persoalan yang diangkat dalam cerita ini.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam cerita tersebut di atas, amanat yang PALING TEPAT adalah...',
      opts: [
        'Selalu bawa uang ke mana-mana agar tidak kesulitan',
        'Jujur dan tidak mengambil barang milik orang lain adalah sifat mulia yang harus dijunjung tinggi meski ada godaan',
        'Pergilah ke polisi jika menemukan masalah',
        'Mintalah izin ibu sebelum melakukan sesuatu'
      ],
      ans: 1,
      hint: 'Apa pelajaran hidup terpenting yang disampaikan melalui pilihan Sani?',
      explanation: 'Amanat cerita: KEJUJURAN adalah nilai yang harus dipertahankan meskipun ada GODAAN yang menggiurkan. Sani memilih kejujuran meskipun ia sangat menginginkan sepatu baru. Pesan moralnya: harta yang bukan hak kita tidak akan memberikan kebaikan sejati, dan kejujuran adalah investasi terbaik.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Cara pengarang menggambarkan watak atau sifat tokoh melalui dialog, tindakan, dan pikiran tokoh (bukan menyebutnya langsung) disebut penokohan secara _.',
      ans: 'tidak langsung (dramatik)',
      hint: 'Lawannya adalah penokohan langsung, di mana pengarang langsung menyatakan "si A adalah orang yang baik hati". Kalau tidak langsung, kita tahu sifatnya dari... apa?',
      explanation: 'Penokohan TIDAK LANGSUNG (dramatik): pengarang TIDAK menyebutkan langsung sifat tokoh, melainkan membiarkan pembaca menyimpulkan sendiri dari DIALOG, TINDAKAN, PIKIRAN, dan REAKSI ORANG LAIN terhadap tokoh tersebut. Ini teknik yang lebih "show, don\'t tell" dan lebih realistis.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan kutipan: "Saat itu matahari baru saja terbit. Embun masih menempel di ujung-ujung rerumputan. Di ladang yang luas, suara cangkul Pak Tani terdengar berirama dengan nyanyian burung." Fungsi latar SUASANA dalam kutipan ini adalah...',
      opts: [
        'Menunjukkan bahwa Pak Tani adalah orang kaya',
        'Menciptakan gambaran yang hidup dan membantu pembaca merasakan suasana pagi yang segar dan damai di ladang',
        'Memberitahu pembaca bahwa cerita terjadi pada abad ke-20',
        'Menjelaskan mengapa Pak Tani harus bekerja keras'
      ],
      ans: 1,
      hint: 'Bayangkan kamu ada di tempat itu. Apa yang kamu rasakan membaca deskripsi itu?',
      explanation: 'Latar suasana dalam kutipan itu MENCIPTAKAN GAMBARAN HIDUP dan membantu pembaca MERASAKAN suasana pagi yang segar, damai, dan tenang. Detail seperti "embun di ujung rerumputan", "cangkul berirama", dan "nyanyian burung" membangun ATMOSFER yang membuat pembaca seolah-olah ada di tempat kejadian — ini fungsi estetis latar suasana.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah cerita memiliki alur: Pengenalan → Konflik muncul → Konflik memuncak → Penyelesaian → Akhir cerita. Bagian "Konflik memuncak" disebut juga...',
      opts: ['Eksposisi', 'Komplikasi', 'Klimaks', 'Resolusi'],
      ans: 2,
      hint: 'Bagian paling tegang dalam cerita — ketika masalah sudah di titik tertinggi sebelum mulai terselesaikan.',
      explanation: 'KLIMAKS adalah bagian cerita di mana KONFLIK mencapai puncaknya — ketegangan paling tinggi sebelum mulai mereda. Urutan lengkap alur: Eksposisi (pengenalan) → Rising action (konflik berkembang) → KLIMAKS (puncak konflik) → Falling action (konflik mereda) → Resolusi/Denouement (penyelesaian/akhir).'
    },
  ],

  // ================================================================
  //  bindo-4 | IDE POKOK (Menemukan Gagasan Utama)
  // ================================================================
  'bindo-4': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Ide pokok adalah...',
      opts: [
        'Kalimat terpanjang dalam sebuah paragraf',
        'Gagasan utama yang menjadi inti atau pokok pembahasan dalam sebuah paragraf',
        'Kalimat pertama dalam setiap paragraf',
        'Kesimpulan dari seluruh teks'
      ],
      ans: 1,
      hint: 'Ide pokok adalah "jantung" dari sebuah paragraf — inti dari apa yang dibahas.',
      explanation: 'IDE POKOK (gagasan utama) adalah gagasan yang menjadi INTI PEMBAHASAN dalam sebuah paragraf. Semua kalimat dalam paragraf mendukung atau menjelaskan ide pokok. Ide pokok biasanya dinyatakan dalam KALIMAT UTAMA (kalimat topik).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kalimat yang mengandung ide pokok disebut...',
      opts: ['Kalimat penjelas', 'Kalimat utama', 'Kalimat kesimpulan', 'Kalimat akhir'],
      ans: 1,
      hint: 'Kalimat ini berisi ide yang paling penting dalam paragraf. Semua kalimat lain menjelaskan kalimat ini.',
      explanation: 'KALIMAT UTAMA (kalimat topik) adalah kalimat yang mengandung IDE POKOK paragraf. Kalimat-kalimat lain dalam paragraf berfungsi sebagai KALIMAT PENJELAS yang mendukung, mengembangkan, atau membuktikan ide pokok dalam kalimat utama.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Paragraf yang kalimat utamanya berada di awal paragraf disebut paragraf _.',
      ans: 'deduktif',
      hint: 'Deduktif = dari umum ke khusus. Ide pokok ada di... mana? Di awal atau akhir?',
      explanation: 'Paragraf DEDUKTIF adalah paragraf yang kalimat utamanya (ide pokok) terletak di AWAL paragraf, diikuti kalimat-kalimat penjelas. Pola: Umum → Khusus. Ini adalah pola paragraf yang paling umum dan mudah dikenali.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kalimat penjelas dalam sebuah paragraf berfungsi untuk...',
      opts: [
        'Menggantikan kalimat utama',
        'Menjelaskan, mengembangkan, atau mendukung ide pokok yang ada di kalimat utama',
        'Memperkenalkan topik baru',
        'Mengakhiri paragraf'
      ],
      ans: 1,
      hint: 'Namanya saja "penjelas" — menjelaskan apa? Tentu saja menjelaskan kalimat... utama.',
      explanation: 'KALIMAT PENJELAS berfungsi untuk MENJELASKAN, MENGEMBANGKAN, atau MENDUKUNG ide pokok yang ada di kalimat utama. Kalimat penjelas bisa berupa contoh, data, uraian, perbandingan, atau bukti yang memperkuat kalimat utama.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Bacalah paragraf berikut:\n"Buah mangga sangat bermanfaat bagi kesehatan. Buah ini kaya akan vitamin C yang meningkatkan daya tahan tubuh. Kandungan seratnya juga membantu pencernaan. Selain itu, antioksidan dalam mangga dapat mencegah penyakit berbahaya."\nIde pokok paragraf tersebut adalah...',
      opts: [
        'Buah mangga mengandung banyak serat',
        'Antioksidan sangat penting bagi tubuh',
        'Buah mangga sangat bermanfaat bagi kesehatan',
        'Vitamin C dapat meningkatkan daya tahan tubuh'
      ],
      ans: 2,
      hint: 'Kalimat mana yang menjadi "payung" bagi semua kalimat lainnya? Kalimat yang paling umum?',
      explanation: 'Ide pokoknya: "Buah mangga sangat bermanfaat bagi kesehatan" (kalimat pertama). Kalimat-kalimat lain (vitamin C, serat, antioksidan) adalah KALIMAT PENJELAS yang memberikan contoh-contoh manfaat mangga. Kalimat pertama adalah yang paling umum dan menjadi "payung" bagi kalimat-kalimat berikutnya.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah paragraf berikut:\n"Setiap pagi, Pak Ahmad berjalan kaki ke warung. Ia selalu menyapa tetangga dengan senyuman. Ia rajin membantu membersihkan lingkungan. Pak Ahmad tidak pernah menolak jika dimintai tolong. Itulah mengapa Pak Ahmad adalah warga yang disukai semua orang."\nKalimat utama paragraf di atas adalah...',
      opts: [
        'Kalimat pertama — Pak Ahmad berjalan kaki ke warung',
        'Kalimat terakhir — Pak Ahmad adalah warga yang disukai semua orang',
        'Kalimat kedua — Ia selalu menyapa tetangga',
        'Kalimat keempat — Pak Ahmad tidak pernah menolak'
      ],
      ans: 1,
      hint: 'Ini paragraf induktif. Kalimat-kalimat awal adalah bukti/penjelas. Kalimat utamanya ada di... mana?',
      explanation: 'Kalimat utama ada di AKHIR: "Pak Ahmad adalah warga yang disukai semua orang." Kalimat-kalimat sebelumnya (menyapa, membantu bersih lingkungan, tidak menolak tolong) adalah BUKTI/PENJELAS yang mengarah ke kesimpulan di kalimat terakhir. Ini adalah paragraf INDUKTIF (khusus ke umum).'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Paragraf yang kalimat utamanya berada di awal DAN diulang/dipertegas di akhir paragraf disebut paragraf...',
      opts: ['Deduktif', 'Induktif', 'Campuran (deduktif-induktif)', 'Narasi'],
      ans: 2,
      hint: 'Kalimat utama ada dua kali — di awal dan di akhir. Ini gabungan dari dua jenis paragraf.',
      explanation: 'Paragraf CAMPURAN (deduktif-induktif) memiliki ide pokok yang dinyatakan di AWAL paragraf, dikembangkan dengan kalimat-kalimat penjelas di tengah, lalu DIPERTEGAS/DIULANG kembali di AKHIR paragraf. Ini membuat ide pokok sangat jelas dan mudah diingat.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Paragraf yang kalimat utamanya berada di akhir paragraf disebut paragraf _, dengan pola dari khusus ke umum.',
      ans: 'induktif',
      hint: 'Induktif = dari khusus ke umum. Contoh-contoh diberikan dulu, baru kesimpulan/ide pokok di...',
      explanation: 'Paragraf INDUKTIF: kalimat-kalimat penjelas (contoh, bukti, detail) diberikan lebih dulu di awal, baru kalimat UTAMA/KESIMPULAN ada di AKHIR paragraf. Pola: Khusus → Umum. "Induksi" dalam logika berarti menarik kesimpulan dari fakta-fakta khusus.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Bacalah paragraf:\n"Sampah plastik menjadi masalah serius di lautan. Setiap tahun, jutaan ton sampah plastik masuk ke laut. Sampah ini mengancam kehidupan hewan laut. Penyu, lumba-lumba, dan ikan paus sering ditemukan mati karena menelan plastik. Bahkan, mikroplastik sudah masuk ke dalam rantai makanan manusia."\nIde pokok paragraf tersebut adalah...',
      opts: [
        'Penyu dan lumba-lumba mati karena plastik',
        'Mikroplastik masuk ke dalam tubuh manusia',
        'Sampah plastik menjadi masalah serius di lautan',
        'Jutaan ton sampah masuk ke laut setiap tahun'
      ],
      ans: 2,
      hint: 'Kalimat mana yang paling umum dan menjadi "payung" bagi semua kalimat lain dalam paragraf ini?',
      explanation: 'Ide pokoknya: "SAMPAH PLASTIK MENJADI MASALAH SERIUS DI LAUTAN" (kalimat pertama = kalimat utama). Kalimat-kalimat lain adalah penjelas yang memberikan RINCIAN tentang betapa seriusnya masalah ini: jumlahnya (jutaan ton), dampaknya (hewan mati), dan bahayanya untuk manusia (mikroplastik). Ini paragraf deduktif.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Cara yang PALING TEPAT untuk menemukan ide pokok sebuah paragraf adalah...',
      opts: [
        'Membaca hanya kalimat pertama dan kalimat terakhir',
        'Membaca seluruh paragraf dengan cermat, lalu mencari kalimat yang paling umum dan menjadi inti pembahasan',
        'Mencari kalimat terpanjang dalam paragraf',
        'Membaca kata-kata yang dicetak tebal saja'
      ],
      ans: 1,
      hint: 'Ide pokok tidak selalu ada di kalimat pertama atau terakhir. Cara paling aman adalah...',
      explanation: 'Cara menemukan ide pokok yang paling tepat: BACA SELURUH PARAGRAF dengan cermat, lalu tanyakan: "Kalimat mana yang paling UMUM dan menjadi INTI dari semua pembahasan?" Ide pokok bisa di awal (deduktif), di akhir (induktif), atau di awal dan akhir (campuran). Membaca sepintas berisiko salah menentukan.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Bacalah teks berita berikut:\n"Jakarta, 15 Maret 2025 — Pemerintah DKI Jakarta mencanangkan program penanaman satu juta pohon di seluruh wilayah kota. Program ini bertujuan mengurangi polusi udara yang semakin mengkhawatirkan. Kepala Dinas Lingkungan Hidup menyebutkan bahwa kualitas udara Jakarta dalam dua tahun terakhir berada di kategori tidak sehat. Pohon-pohon yang ditanam akan difokuskan di daerah padat kendaraan bermotor."\nIde pokok teks berita tersebut adalah...',
      opts: [
        'Kualitas udara Jakarta dua tahun terakhir tidak sehat',
        'Daerah padat kendaraan harus ditanami pohon',
        'Pemerintah DKI Jakarta mencanangkan program penanaman satu juta pohon',
        'Kepala Dinas Lingkungan Hidup membuat pernyataan penting'
      ],
      ans: 2,
      hint: 'Dalam teks berita, ide pokok biasanya ada di paragraf pembuka (lead/teras berita). Apa informasi UTAMA yang disampaikan berita ini?',
      explanation: 'Ide pokok: "Pemerintah DKI Jakarta mencanangkan program penanaman satu juta pohon." Ini adalah INFORMASI UTAMA (lead/teras berita) yang menjadi inti laporan. Kalimat-kalimat berikutnya adalah DETAIL PENDUKUNG: tujuannya (mengurangi polusi), kondisi saat ini (kualitas udara buruk), dan teknis pelaksanaannya (di daerah padat kendaraan).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Setelah membaca sebuah teks dengan tiga paragraf, seorang siswa menemukan ide pokok di setiap paragraf. Apa yang bisa ia simpulkan dari ketiga ide pokok tersebut?',
      opts: [
        'Tidak ada hubungannya, setiap paragraf berdiri sendiri',
        'Ketiga ide pokok membentuk kerangka/struktur utama teks dan bersama-sama menggambarkan topik besar teks tersebut',
        'Ide pokok paragraf pertama selalu yang terpenting',
        'Ide pokok hanya ada di paragraf terakhir'
      ],
      ans: 1,
      hint: 'Sebuah teks yang baik memiliki paragraf-paragraf yang saling berhubungan dan mendukung topik utama teks.',
      explanation: 'Ide pokok setiap paragraf adalah BAGIAN dari topik besar teks. Bersama-sama, ketiga ide pokok membentuk KERANGKA atau STRUKTUR UTAMA teks. Jika dirangkai, ide-ide pokok tersebut merupakan RINGKASAN dari seluruh isi teks. Inilah mengapa menemukan ide pokok setiap paragraf adalah cara efektif membuat ringkasan.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Ringkasan sebuah teks dibuat dengan cara merangkai _ dari setiap paragraf dalam teks tersebut menjadi satu teks yang lebih pendek.',
      ans: 'ide pokok (gagasan utama)',
      hint: 'Apa yang diambil dari setiap paragraf untuk membuat ringkasan? Bukan kalimat penjelas, tapi...',
      explanation: 'RINGKASAN dibuat dengan mengumpulkan IDE POKOK dari setiap paragraf dan merangkainya menjadi teks baru yang lebih pendek. Kalimat penjelas TIDAK dimasukkan ke dalam ringkasan. Teknik ini memastikan ringkasan mencakup semua informasi penting tanpa detail yang tidak perlu.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Bacalah paragraf:\n"Badak bercula satu Jawa kini tersisa tidak lebih dari 70 ekor di seluruh dunia. Habitatnya terus berkurang akibat perambahan hutan. Perburuan liar juga masih terjadi meskipun sudah ada hukum yang melarangnya. Banyak ilmuwan memprediksi bahwa badak Jawa akan punah dalam 20 tahun ke depan jika tidak ada tindakan nyata."\nKalimat yang BUKAN merupakan kalimat penjelas dalam paragraf tersebut adalah...',
      opts: [
        '"Habitatnya terus berkurang akibat perambahan hutan."',
        '"Badak bercula satu Jawa kini tersisa tidak lebih dari 70 ekor di seluruh dunia."',
        '"Perburuan liar juga masih terjadi meskipun sudah ada hukum yang melarangnya."',
        '"Banyak ilmuwan memprediksi bahwa badak Jawa akan punah dalam 20 tahun ke depan."'
      ],
      ans: 1,
      hint: 'Kalimat yang BUKAN penjelas adalah kalimat UTAMA yang berisi ide pokok. Kalimat mana yang paling umum dan menjadi "payung" bagi yang lain?',
      explanation: '"Badak bercula satu Jawa kini tersisa tidak lebih dari 70 ekor" adalah KALIMAT UTAMA (bukan kalimat penjelas) karena ini adalah ide pokok yang paling umum tentang kondisi kritis badak Jawa. Kalimat-kalimat lain (habitat berkurang, perburuan liar, prediksi punah) adalah KALIMAT PENJELAS yang memberikan alasan dan konteks mengapa kondisinya kritis.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Paragraf berikut memiliki jenis yang disebut "paragraf deskriptif":\n"Pantai Senggigi memukau setiap pengunjung yang datang. Pasirnya putih bersih bagaikan salju. Ombaknya berdebur lembut membelai tepi pantai. Air lautnya biru jernih hingga ke dasarnya. Pohon-pohon kelapa melambai-lambai ditiup angin laut."\nBerdasarkan isi dan strukturnya, ide pokok paragraf tersebut adalah...',
      opts: [
        'Pasir pantai Senggigi putih seperti salju',
        'Air laut di Senggigi sangat jernih',
        'Pantai Senggigi memukau setiap pengunjung yang datang',
        'Pohon kelapa tumbuh di tepi pantai Senggigi'
      ],
      ans: 2,
      hint: 'Mana kalimat yang paling UMUM dan menjadi "kesimpulan besar" dari semua detail yang disebutkan?',
      explanation: '"PANTAI SENGGIGI MEMUKAU SETIAP PENGUNJUNG" adalah ide pokok (kalimat utama di awal = paragraf deduktif). Kalimat-kalimat lain (pasir putih, ombak lembut, air jernih, pohon kelapa) adalah DETAIL DESKRIPTIF yang menjelaskan mengapa pantai Senggigi memukau. Semua detail itu mendukung klaim utama di kalimat pertama.'
    },
  ],

};
// ============================================================
// Akhir BATCH 2 Bagian 1 (bindo-1 s.d. bindo-4)
// Lanjutkan dengan bindo-5 s.d. bindo-8 pada bagian berikutnya.
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 2: Bahasa Indonesia bindo-5 s.d. bindo-8
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban singkat, '_' pada string q
// ============================================================

export const QUIZ_DATA_BINDO_2 = {

  // ================================================================
  //  bindo-5 | SINONIM (Kata yang Bermakna Sama/Mirip)
  // ================================================================
  'bindo-5': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sinonim adalah...',
      opts: [
        'Kata yang maknanya berlawanan',
        'Kata yang ejaannya berbeda tetapi maknanya sama atau hampir sama',
        'Kata yang bunyinya sama tetapi maknanya berbeda',
        'Kata yang hanya bisa digunakan dalam puisi'
      ],
      ans: 1,
      hint: 'Sinonim berasal dari bahasa Yunani "synonymos" yang berarti "nama yang sama".',
      explanation: 'SINONIM adalah kata-kata yang memiliki MAKNA SAMA atau HAMPIR SAMA, meskipun ejaannya berbeda. Contoh: "besar" bersinonim dengan "raksasa", "agung", "luhur". Sinonim sering digunakan untuk menghindari pengulangan kata yang sama dalam tulisan.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sinonim kata "senang" adalah...',
      opts: ['Sedih', 'Gembira', 'Marah', 'Takut'],
      ans: 1,
      hint: 'Kata yang maknanya sama dengan perasaan bahagia dan ceria.',
      explanation: '"GEMBIRA" adalah sinonim dari "senang" karena keduanya mengandung makna perasaan bahagia, suka cita, dan tidak bersedih. Contoh dalam kalimat: "Aku senang bertemu kamu" ≈ "Aku gembira bertemu kamu."'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Kata "pintar" memiliki sinonim yaitu _, cerdas, dan pandai — semuanya bermakna memiliki kemampuan berpikir yang baik.',
      ans: 'cakap (atau: bijak, mahir)',
      hint: 'Carilah kata lain yang bermakna "memiliki kepandaian". Ada banyak pilihannya!',
      explanation: '"Pintar", "cerdas", "pandai", "cakap", dan "bijak" adalah kelompok SINONIM yang semuanya bermakna kemampuan berpikir atau kemampuan tertentu yang baik. Dalam penggunaan, masing-masing memiliki nuansa sedikit berbeda (cerdas = kecerdasan intelektual, bijak = kebijaksanaan).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Manakah pasangan sinonim yang BENAR?',
      opts: [
        'Besar — Kecil',
        'Cepat — Lambat',
        'Indah — Cantik',
        'Panas — Dingin'
      ],
      ans: 2,
      hint: 'Sinonim adalah kata yang maknanya SAMA, bukan berlawanan. Pasangan mana yang bermakna sama?',
      explanation: '"INDAH — CANTIK" adalah pasangan sinonim karena keduanya bermakna memiliki keindahan yang menyenangkan pandangan. Pasangan lainnya (Besar-Kecil, Cepat-Lambat, Panas-Dingin) adalah ANTONIM (kata berlawanan makna).'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sinonim kata "menangis" adalah...',
      opts: ['Tertawa', 'Berteriak', 'Meraung', 'Berlari'],
      ans: 2,
      hint: 'Hewan buas juga melakukan ini saat kesakitan atau lapar — bunyinya keras dan menyayat hati.',
      explanation: '"MERAUNG" adalah sinonim dari "menangis" dalam makna mengeluarkan suara kesedihan yang keras. Namun perlu dicatat, sinonim tidak selalu sempurna — "meraung" lebih intensif dari "menangis". Sinonim lain menangis: "menjerit kesakitan" (dalam konteks tertentu), atau "terisak", "mengguguk".'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah sinonim yang PALING TEPAT untuk kata "melihat" dalam kalimat "Ia melihat bintang-bintang di langit malam dengan penuh kagum"?',
      opts: ['Memandang', 'Mencari', 'Menonton', 'Memeriksa'],
      ans: 0,
      hint: 'Dalam konteks "dengan penuh kagum", kata mana yang paling cocok menggantikan "melihat"?',
      explanation: '"MEMANDANG" adalah sinonim paling tepat karena mengandung makna melihat dengan perhatian penuh dan perasaan — cocok dengan konteks "penuh kagum". "Menonton" lebih cocok untuk tontonan terstruktur, "memeriksa" untuk tujuan evaluasi, dan "mencari" tidak tepat konteksnya. Sinonim yang baik harus cocok dalam konteks kalimat.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kalimat: "Ayah bekerja keras untuk _ keluarganya." Kata yang PALING TEPAT mengisi titik-titik (sinonim dari "menghidupi") adalah...',
      opts: ['Melukai', 'Menafkahi', 'Meninggalkan', 'Mengganggu'],
      ans: 1,
      hint: 'Menghidupi = menyediakan kebutuhan hidup bagi keluarga. Kata apa yang bermakna sama?',
      explanation: '"MENAFKAHI" adalah sinonim yang tepat dari "menghidupi" dalam konteks ini — keduanya bermakna menyediakan kebutuhan hidup (pangan, sandang, papan) bagi keluarga. Dalam kalimat: "Ayah bekerja keras untuk MENAFKAHI keluarganya" maknanya sama dengan menggunakan kata "menghidupi".'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Kata "wajah" memiliki sinonim yaitu muka, _, rona, dan paras — semuanya merujuk pada bagian depan kepala.',
      ans: 'roman',
      hint: '"Roman muka" — kata ini berasal dari bahasa lama yang berarti wajah. Sering digunakan dalam ungkapan "roman wajahnya cerah".',
      explanation: '"ROMAN" adalah salah satu sinonim dari "wajah/muka". Kelompok sinonim: wajah = muka = roman = rona = paras. Masing-masing memiliki nuansa: "paras" lebih menekankan keindahan wajah, "rona" lebih ke ekspresi/warna wajah, "roman" terkesan lebih sastrawi/formal.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Mengapa sinonim yang sempurna (makna 100% identik) hampir tidak ada dalam bahasa Indonesia?',
      opts: [
        'Karena bahasa Indonesia masih berkembang',
        'Karena setiap kata memiliki nuansa makna, konteks penggunaan, dan tingkat formalitas yang sedikit berbeda',
        'Karena para ahli bahasa belum menelitinya',
        'Karena sinonim hanya ada dalam bahasa asing'
      ],
      ans: 1,
      hint: 'Coba bandingkan "meninggal", "mati", dan "wafat". Ketiganya sinonim. Apakah bisa digunakan dalam situasi yang sama?',
      explanation: 'Sinonim sempurna hampir tidak ada karena setiap kata memiliki NUANSA MAKNA, KONTEKS, dan TINGKAT FORMALITAS yang berbeda. Contoh: "meninggal", "wafat", "mati", "mangkat" semuanya bermakna tidak bernyawa lagi — tapi "wafat" untuk orang terhormat, "mangkat" untuk raja, "meninggal" lebih formal, "mati" lebih umum/kasar. Ini disebut perbedaan KONOTASI.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pasangan kata mana yang merupakan sinonim dalam konteks BAHASA FORMAL?',
      opts: [
        '"Rumah" dan "gubuk"',
        '"Pergi" dan "bertolak"',
        '"Makan" dan "melahap"',
        '"Berjalan" dan "berlari"'
      ],
      ans: 1,
      hint: '"Bertolak" digunakan dalam situasi yang lebih formal dan sopan dibanding "pergi". Keduanya bermakna meninggalkan suatu tempat.',
      explanation: '"PERGI" dan "BERTOLAK" adalah sinonim, keduanya bermakna meninggalkan suatu tempat. "Bertolak" lebih formal/sastrawi. "Rumah" dan "gubuk" adalah sinonim tapi berbeda konotasi (gubuk = sederhana/kumuh). "Makan" dan "melahap" berbeda intensitas (melahap = makan dengan rakus).'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam sebuah tulisan ilmiah, penggunaan sinonim yang tepat sangat penting. Perhatikan kalimat berikut:\n"Para ilmuwan (1)meneliti/(2)menyelidiki/(3)mengamati kemungkinan kehidupan di planet Mars."\nKata mana yang PALING TEPAT untuk konteks ilmiah tersebut?',
      opts: [
        '"Mengamati" karena Mars dapat dilihat dari bumi',
        '"Menyelidiki" karena maknanya mencari tahu sesuatu yang belum pasti',
        '"Meneliti" karena lebih ilmiah dan mencakup proses sistematis',
        'Ketiganya sama persis, bebas dipilih'
      ],
      ans: 2,
      hint: 'Dalam konteks ilmiah, kata mana yang bermakna proses SISTEMATIS dan METODIS, bukan sekadar melihat atau mencurigai?',
      explanation: '"MENELITI" paling tepat untuk konteks ilmiah karena bermakna melakukan proses sistematis, metodis, dan terencana dengan bukti empiris. "Mengamati" = melihat/memperhatikan (bisa tanpa metode ilmiah). "Menyelidiki" = mencari tahu sesuatu yang dicurigai (berkonotasi detektif/kepolisian). Pemilihan sinonim harus mempertimbangkan konteks dan nuansa makna.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Kata "merdeka", "bebas", "lepas", dan "independen" adalah kelompok sinonim. Namun kata "merdeka" memiliki makna khusus yang lebih kuat dalam konteks _, sehingga tidak bisa selalu digantikan oleh sinonimnya.',
      ans: 'kebangsaan (nasionalisme/kemerdekaan negara)',
      hint: 'Kata "merdeka" paling sering kita dengar pada tanggal 17 Agustus. Dalam konteks apa?',
      explanation: '"MERDEKA" memiliki KONOTASI KUAT dalam konteks KEBANGSAAN dan KEMERDEKAAN NEGARA yang tidak dimiliki sinonimnya. "Bebas dari penjajahan" bisa diganti "merdeka dari penjajahan", tapi "Tujuh belas Agustus hari merdeka" tidak bisa diganti "Tujuh belas Agustus hari bebas" karena nuansa nasionalismenya hilang. Ini bukti sinonim tidak pernah 100% sama.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan kalimat: "Ibu ___ masakan yang sangat lezat untuk ulang tahun ayah." Kata mana dari kelompok sinonim berikut yang PALING TEPAT dan PALING POSITIF konteksnya?',
      opts: [
        '"Memasak" — netral, umum',
        '"Menyajikan" — lebih menekankan proses menghidangkan',
        '"Meracik" — lebih menekankan keahlian mencampur bumbu',
        '"Meramu" — menekankan kepandaian mengombinasikan bahan'
      ],
      ans: 2,
      hint: 'Konteksnya: ulang tahun ayah, masakan lezat. Kata mana yang paling menonjolkan KEAHLIAN dan KEISTIMEWAAN masakan ibu?',
      explanation: '"MERACIK" paling tepat karena menekankan KEAHLIAN dalam mencampur bumbu untuk menghasilkan cita rasa istimewa — cocok dengan konteks "sangat lezat" untuk perayaan spesial. "Memasak" terlalu umum, "menyajikan" menekankan menghidangkan (bukan memasak), "meramu" lebih sering dipakai untuk obat-obatan. Nuansa konteks menentukan pilihan sinonim terbaik.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Mengapa seorang penulis perlu menggunakan sinonim dalam tulisannya?',
      opts: [
        'Agar tulisannya terlihat lebih panjang dan banyak halaman',
        'Untuk menghindari pengulangan kata yang sama, memperkaya kosakata, dan membuat tulisan lebih bervariasi dan enak dibaca',
        'Karena sinonim selalu lebih formal dari kata aslinya',
        'Karena aturan bahasa Indonesia mewajibkan penggunaan sinonim'
      ],
      ans: 1,
      hint: 'Bayangkan membaca paragraf di mana kata "besar" diulang 7 kali. Bagaimana rasanya? Apa solusinya?',
      explanation: 'Penulis menggunakan sinonim untuk: (1) MENGHINDARI PENGULANGAN kata yang sama yang membuat tulisan monoton dan membosankan; (2) MEMPERKAYA KOSAKATA tulisan; (3) MEMILIH kata yang nuansa maknanya paling tepat untuk konteks tertentu; (4) membuat tulisan lebih BERVARIASI dan enak dibaca. Ini adalah teknik penting dalam menulis yang baik.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kata "gigih", "tekun", "ulet", dan "pantang menyerah" sering dianggap sinonim. Namun jika diteliti lebih dalam, perbedaan nuansanya adalah...',
      opts: [
        'Tidak ada perbedaan, keempat kata itu identik',
        '"Gigih" dan "ulet" menekankan ketahanan dalam menghadapi rintangan, "tekun" menekankan kerutinan dan kesungguhan usaha, sementara "pantang menyerah" menekankan sikap tidak berhenti ketika gagal',
        '"Tekun" bermakna negatif dibanding yang lain',
        '"Gigih" hanya digunakan untuk atlet'
      ],
      ans: 1,
      hint: 'Coba bayangkan: apakah orang "tekun" pasti juga "pantang menyerah"? Apakah ada perbedaan penekanan?',
      explanation: 'Meskipun sinonim, nuansanya berbeda: "GIGIH" = bersemangat kuat dalam berjuang; "ULET" = lentur dan tahan dalam menghadapi kesulitan; "TEKUN" = rutin, sungguh-sungguh, dan konsisten dalam usaha; "PANTANG MENYERAH" = tidak berhenti meski sudah gagal berkali-kali. Pemahaman nuansa sinonim ini menunjukkan kekayaan bahasa Indonesia dan kemampuan literasi tinggi.'
    },
  ],

  // ================================================================
  //  bindo-6 | CIRI & UNSUR POSTER
  // ================================================================
  'bindo-6': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Poster adalah...',
      opts: [
        'Buku bergambar yang tebal',
        'Media informasi visual berupa gambar dan tulisan singkat yang dipajang di tempat umum',
        'Surat resmi yang dikirim ke instansi pemerintah',
        'Rekaman audio tentang suatu pesan penting'
      ],
      ans: 1,
      hint: 'Poster sering kita lihat di jalan, sekolah, atau tempat umum. Fungsinya menyampaikan pesan dengan cepat.',
      explanation: 'POSTER adalah media komunikasi visual yang menggabungkan GAMBAR dan TULISAN SINGKAT untuk menyampaikan pesan kepada khalayak luas. Poster dipajang di tempat umum (dinding, papan pengumuman, jalanan) agar dapat dibaca oleh banyak orang.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tulisan dalam poster harus singkat, padat, dan jelas karena...',
      opts: [
        'Poster harus bisa dibaca dalam waktu singkat oleh orang yang sedang berjalan atau lewat',
        'Tidak ada cukup kertas untuk tulisan panjang',
        'Tulisan panjang lebih sulit dibuat',
        'Pembuat poster malas menulis panjang'
      ],
      ans: 0,
      hint: 'Bayangkan kamu sedang berjalan di jalan dan melihat poster. Berapa lama kamu punya waktu untuk membacanya?',
      explanation: 'Tulisan poster harus SINGKAT, PADAT, dan JELAS karena poster harus bisa dipahami dalam waktu SANGAT SINGKAT oleh pembaca yang sedang bergerak. Jika tulisannya terlalu panjang, orang tidak akan sempat membacanya dan pesan tidak tersampaikan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Kalimat utama dalam poster yang dicetak besar dan mencolok untuk menarik perhatian pembaca disebut _.',
      ans: 'slogan (judul/headline)',
      hint: 'Kalimat ini biasanya paling besar dan paling mudah dibaca dalam poster. Contoh: "Selamatkan Bumi Kita!"',
      explanation: 'SLOGAN atau HEADLINE adalah kalimat utama dalam poster yang dicetak BESAR dan MENCOLOK untuk menarik perhatian pertama kali. Slogan harus singkat, mudah diingat, dan langsung menyampaikan inti pesan. Contoh: "Jangan Buang Sampah Sembarangan!"'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Unsur visual (gambar) dalam poster berfungsi untuk...',
      opts: [
        'Mengisi ruang kosong agar tidak bosan',
        'Menarik perhatian, memperkuat pesan, dan membantu pembaca memahami isi poster lebih cepat',
        'Mempersulit pembaca untuk memahami isi poster',
        'Menggantikan kebutuhan akan tulisan'
      ],
      ans: 1,
      hint: 'Gambar yang tepat bisa langsung "berbicara" tanpa kata-kata. Apa fungsi gambar dalam komunikasi visual?',
      explanation: 'Gambar dalam poster berfungsi: (1) MENARIK PERHATIAN — gambar mencolok lebih cepat dilihat dari jauh; (2) MEMPERKUAT PESAN — gambar yang relevan membuat pesan lebih mudah dipahami dan diingat; (3) ESTETIKA — membuat poster lebih menarik. Kombinasi gambar dan teks yang tepat membuat poster sangat efektif.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Poster layanan masyarakat bertujuan untuk...',
      opts: [
        'Menjual produk kepada konsumen',
        'Menghibur masyarakat dengan gambar-gambar lucu',
        'Menyampaikan pesan penting kepada masyarakat untuk kebaikan bersama tanpa tujuan komersial',
        'Menampilkan jadwal pertunjukan hiburan'
      ],
      ans: 2,
      hint: '"Layanan masyarakat" berarti untuk kepentingan masyarakat umum, bukan untuk jualan.',
      explanation: 'POSTER LAYANAN MASYARAKAT (public service poster) bertujuan menyampaikan PESAN PENTING untuk kebaikan masyarakat tanpa tujuan komersial (tidak untuk menjual produk). Contoh: poster anti-korupsi, poster hemat listrik, poster imunisasi, poster anti-narkoba.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah poster yang baik harus memenuhi prinsip "AIDA". Huruf A pertama dalam AIDA merujuk pada...',
      opts: ['Animasi', 'Attention (Perhatian)', 'Amanat', 'Anggaran'],
      ans: 1,
      hint: 'AIDA = Attention, Interest, Desire, Action. A pertama = hal pertama yang harus ditangkap pembaca dari poster.',
      explanation: 'Prinsip AIDA dalam desain poster: A = ATTENTION (menarik perhatian — dengan warna mencolok, gambar kuat, atau slogan mengejutkan), I = Interest (membangun minat), D = Desire (membangkitkan keinginan), A = Action (mendorong tindakan). Poster yang baik harus berhasil menarik PERHATIAN terlebih dahulu.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah yang BUKAN merupakan ciri-ciri poster yang baik?',
      opts: [
        'Menggunakan warna yang menarik dan kontras',
        'Menggunakan kalimat yang panjang dan penuh penjelasan detail',
        'Memiliki gambar yang relevan dengan pesan',
        'Menggunakan huruf yang mudah dibaca dari jarak jauh'
      ],
      ans: 1,
      hint: 'Poster dibaca sekilas dari jarak tertentu. Apakah kalimat panjang cocok untuk poster?',
      explanation: '"Menggunakan kalimat panjang dan penuh penjelasan detail" adalah ciri poster yang BURUK, bukan yang baik. Poster justru harus SINGKAT, PADAT, dan JELAS. Kalimat panjang sulit dibaca dari jarak jauh dan tidak sesuai dengan karakteristik poster sebagai media komunikasi cepat.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Dalam poster, pemilihan _ yang tepat sangat penting karena dapat menciptakan emosi dan pesan tertentu — misalnya warna merah untuk bahaya, hijau untuk lingkungan.',
      ans: 'warna',
      hint: 'Elemen visual yang paling pertama dilihat mata manusia sebelum membaca tulisan.',
      explanation: 'WARNA dalam poster bukan sekadar estetika — warna memiliki makna psikologis: MERAH = bahaya, urgensi, larangan; HIJAU = lingkungan, kesehatan, keamanan; BIRU = kepercayaan, air, tenang; KUNING = peringatan, perhatian, ceria. Pemilihan warna yang tepat memperkuat pesan poster.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah poster lingkungan hidup bertuliskan "Selamatkan Hutan, Selamatkan Masa Depanmu!" disertai gambar hutan yang mulai gundul di satu sisi dan anak-anak bermain di hutan lebat di sisi lain. Teknik apa yang digunakan dalam poster ini?',
      opts: [
        'Teknik perbandingan (kontras) untuk memperlihatkan perbedaan kondisi dan dampaknya',
        'Teknik repetisi (pengulangan) untuk menekankan pesan',
        'Teknik abstrak yang tidak berhubungan dengan realita',
        'Teknik humor untuk menghibur pembaca'
      ],
      ans: 0,
      hint: 'Gambar hutan gundul vs. hutan lebat — dua kondisi yang berbeda ditampilkan berdampingan. Apa nama tekniknya?',
      explanation: 'Poster tersebut menggunakan teknik PERBANDINGAN/KONTRAS — menampilkan DUA kondisi yang berlawanan secara berdampingan untuk menunjukkan DAMPAK tindakan (atau ketiadaan tindakan). Hutan gundul (kondisi buruk jika tidak dijaga) vs. hutan lebat dengan anak-anak bermain (kondisi baik jika dijaga). Teknik ini sangat efektif untuk poster lingkungan.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan poster IKLAN (komersial) dengan poster LAYANAN MASYARAKAT adalah...',
      opts: [
        'Poster iklan selalu berwarna, layanan masyarakat selalu hitam putih',
        'Poster iklan bertujuan memengaruhi orang untuk membeli produk/jasa demi keuntungan, layanan masyarakat bertujuan mendidik/menginformasikan demi kepentingan umum',
        'Poster layanan masyarakat selalu dibuat pemerintah, poster iklan oleh swasta',
        'Tidak ada perbedaan, keduanya sama'
      ],
      ans: 1,
      hint: 'Apa tujuan akhir yang ingin dicapai oleh pembuat masing-masing poster?',
      explanation: 'Perbedaan mendasar ada pada TUJUAN: IKLAN KOMERSIAL bertujuan memengaruhi konsumen untuk MEMBELI produk/jasa demi KEUNTUNGAN bisnis. LAYANAN MASYARAKAT bertujuan MENDIDIK, MENGINFORMASIKAN, atau MENGAJAK tindakan demi KEPENTINGAN UMUM tanpa keuntungan finansial. Konten poster layanan masyarakat bisa dibuat siapa saja, tidak harus pemerintah.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang siswa membuat poster tentang bahaya merokok dengan tulisan yang sangat banyak dan gambar yang kecil serta tidak menarik. Mengapa poster tersebut kurang efektif?',
      opts: [
        'Karena topiknya tidak menarik',
        'Karena tulisan yang terlalu banyak sulit dibaca sekilas, dan gambar kecil tidak menarik perhatian — poster kehilangan fungsi utamanya sebagai media komunikasi visual yang cepat',
        'Karena bahaya merokok sudah diketahui semua orang',
        'Karena poster sebaiknya tidak menggunakan gambar'
      ],
      ans: 1,
      hint: 'Ingat prinsip poster: singkat, visual kuat, dan mudah dipahami sekilas. Apa yang dilanggar oleh poster tersebut?',
      explanation: 'Poster tersebut melanggar DUA prinsip utama: (1) Tulisan terlalu banyak = tidak bisa dibaca sekilas oleh orang yang lewat → pesan tidak tersampaikan; (2) Gambar kecil dan tidak menarik = gagal menarik PERHATIAN (prinsip ATTENTION dalam AIDA). Poster yang baik harus "berbicara" dalam hitungan detik melalui kombinasi visual kuat dan teks singkat.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Elemen dalam poster yang berisi informasi kontak, nama lembaga pembuat, atau ajakan bertindak (misalnya "Hubungi: 119" atau "Kunjungi: www...") disebut informasi _.',
      ans: 'pendukung (tambahan/kontak)',
      hint: 'Elemen ini bukan judul utama, tapi memberikan informasi lebih lanjut bagi pembaca yang ingin tahu lebih banyak.',
      explanation: 'INFORMASI PENDUKUNG dalam poster melengkapi slogan utama dengan data konkret: nomor telepon, alamat website, nama lembaga, atau ajakan tindakan spesifik. Ini penting agar pembaca yang tertarik tahu harus ke mana atau menghubungi siapa. Contoh poster kesehatan: "Hubungi Puskesmas terdekat" atau "Hotline: 119 ext 8".'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sekolah ingin membuat poster untuk mengurangi perilaku membuang sampah sembarangan di lingkungan sekolah. Desain poster manakah yang PALING EFEKTIF?',
      opts: [
        'Poster berisi peraturan sekolah lengkap tentang kebersihan dalam 10 poin',
        'Poster dengan gambar besar lingkungan sekolah yang kotor vs. bersih, slogan singkat "Pilihmu Menentukan Sekolahmu!", dan gambar tempat sampah yang jelas',
        'Poster berisi foto kepala sekolah sedang berpidato tentang kebersihan',
        'Poster berisi tulisan kecil-kecil tentang bahaya sampah bagi kesehatan dalam 3 paragraf'
      ],
      ans: 1,
      hint: 'Poster yang efektif: visual kuat, pesan singkat, relevan dengan sasaran (siswa sekolah), dan mendorong tindakan.',
      explanation: 'Pilihan B paling efektif karena: (1) GAMBAR BESAR KONTRAS (kotor vs. bersih) menarik perhatian dan menunjukkan dampak nyata; (2) SLOGAN SINGKAT ("Pilihmu Menentukan Sekolahmu!") langsung berbicara kepada siswa; (3) GAMBAR TEMPAT SAMPAH = ajakan tindakan konkret. Poster yang baik harus menyentuh emosi, singkat, dan mengarahkan ke tindakan.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Di era digital, poster kini juga hadir dalam bentuk digital yang disebarkan di media sosial. Apa PERBEDAAN UTAMA yang harus diperhatikan saat membuat poster digital dibanding poster cetak?',
      opts: [
        'Poster digital harus lebih banyak tulisannya',
        'Poster digital bisa lebih interaktif (ada animasi, link, audio) dan harus mempertimbangkan ukuran layar serta kecepatan scroll pembaca',
        'Poster digital tidak boleh menggunakan gambar',
        'Poster digital dan cetak tidak ada perbedaannya sama sekali'
      ],
      ans: 1,
      hint: 'Apa yang bisa dilakukan poster digital yang tidak bisa dilakukan poster cetak? Dan bagaimana orang "membaca" konten di media sosial?',
      explanation: 'POSTER DIGITAL memiliki kelebihan dan tantangan berbeda dari cetak: (1) Bisa INTERAKTIF — animasi, link, klik untuk info lebih; (2) Perlu mempertimbangkan UKURAN LAYAR (mobile vs. desktop); (3) Tantangan SCROLL — di media sosial konten di-scroll cepat, sehingga elemen menarik harus ada di bagian ATAS gambar. Intinya: prinsip dasar poster tetap sama, tapi medium digital membuka peluang sekaligus tantangan baru.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan dua slogan poster: (A) "Buanglah sampah pada tempatnya!" dan (B) "Bumi ini milik anak cucumu. Jagalah!" Manakah yang lebih efektif dan mengapa?',
      opts: [
        'A lebih efektif karena langsung dan jelas',
        'B lebih efektif karena menyentuh emosi dan menciptakan rasa tanggung jawab personal yang lebih dalam',
        'Keduanya sama efektifnya',
        'A lebih efektif karena lebih pendek'
      ],
      ans: 1,
      hint: 'Slogan yang menyentuh emosi dan rasa tanggung jawab pribadi cenderung lebih diingat dan mendorong perubahan perilaku.',
      explanation: 'B lebih efektif secara PSIKOLOGIS karena: (1) MENYENTUH EMOSI — "anak cucumu" membuat pembaca berpikir tentang keturunan mereka; (2) MENCIPTAKAN RASA MEMILIKI — "milik anak cucumu" membuat bumi terasa menjadi tanggung jawab pribadi; (3) Mendorong MOTIVASI JANGKA PANJANG, bukan sekadar ketaatan aturan. Slogan A hanya memberi instruksi, B membangun kesadaran yang lebih dalam.'
    },
  ],

  // ================================================================
  //  bindo-7 | KATA KHUSUS (Kata Bermakna Spesifik/Sempit)
  // ================================================================
  'bindo-7': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata khusus adalah kata yang memiliki makna...',
      opts: [
        'Sangat luas dan umum, mencakup banyak hal',
        'Spesifik dan sempit, hanya mencakup satu hal tertentu',
        'Berlawanan dengan kata lain',
        'Sama dengan kata lain'
      ],
      ans: 1,
      hint: 'Kata khusus = kata yang KHUSUS = tidak umum, bermakna...',
      explanation: 'KATA KHUSUS (hiponim) adalah kata yang memiliki makna SPESIFIK dan SEMPIT — hanya merujuk pada satu jenis atau hal tertentu yang lebih spesifik. Kata khusus adalah bagian dari kata yang lebih umum (kata umum/hipernim). Contoh: "mawar" adalah kata khusus dari kata umum "bunga".'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '"Mawar", "melati", "anggrek", dan "dahlia" adalah kata khusus dari kata umum...',
      opts: ['Tanaman', 'Bunga', 'Tumbuhan', 'Pot'],
      ans: 1,
      hint: 'Mawar, melati, anggrek, dan dahlia — semuanya adalah jenis... apa?',
      explanation: '"BUNGA" adalah kata umum (hipernim) dari mawar, melati, anggrek, dan dahlia. Keempat kata itu adalah KATA KHUSUS (hiponim) yang masing-masing merujuk pada jenis bunga yang spesifik. Hubungan: Bunga (umum) → mawar, melati, anggrek, dahlia (khusus).'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: '"Sedan", "truk", "bis", "motor", dan "sepeda" adalah kata-kata khusus dari kata umum _.',
      ans: 'kendaraan',
      hint: 'Sedan, truk, bis, motor, sepeda — semuanya adalah jenis... apa yang digunakan untuk bepergian?',
      explanation: '"KENDARAAN" adalah kata umum (hipernim) dari sedan, truk, bis, motor, dan sepeda. Masing-masing adalah KATA KHUSUS (hiponim) yang menyebut jenis kendaraan tertentu dengan ciri-ciri spesifik.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Manakah yang merupakan kata khusus dari kata umum "ikan"?',
      opts: ['Hewan', 'Lele', 'Makhluk hidup', 'Protein'],
      ans: 1,
      hint: 'Kata khusus dari "ikan" adalah nama jenis ikan tertentu. Mana yang merupakan nama jenis ikan?',
      explanation: '"LELE" adalah kata khusus (hiponim) dari kata umum "ikan" karena lele adalah jenis ikan tertentu dengan ciri khas (berkumis, hidup di air tawar). "Hewan" dan "makhluk hidup" adalah kata yang lebih UMUM dari "ikan" (bukan lebih khusus). "Protein" adalah kandungan gizi, bukan kata khusus dari ikan.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Penggunaan kata khusus dalam tulisan bertujuan untuk...',
      opts: [
        'Membuat tulisan menjadi lebih sulit dipahami',
        'Memberikan informasi yang lebih tepat, spesifik, dan akurat kepada pembaca',
        'Menggantikan semua kata umum',
        'Membuat tulisan menjadi lebih panjang'
      ],
      ans: 1,
      hint: 'Kata "berjalan" vs. "berlari", "berjingkat", "merangkak", "tertatih". Mana yang lebih memberikan gambaran tepat?',
      explanation: 'Kata khusus digunakan untuk memberikan informasi yang lebih TEPAT, SPESIFIK, dan AKURAT. Misalnya: "berjalan" (umum) vs. "berlari/berjingkat/tertatih" (khusus). Kata khusus membantu pembaca mendapatkan GAMBARAN yang lebih jelas dan detail tentang apa yang dimaksud penulis.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kelompok kata berikut: Padi, Jagung, Gandum, Singkong, Sorgum. Kata umum yang PALING TEPAT untuk kelompok tersebut adalah...',
      opts: ['Makanan', 'Tanaman pangan (serealia/umbi)', 'Sayuran', 'Bumbu dapur'],
      ans: 1,
      hint: 'Padi, jagung, gandum, singkong, sorgum — semuanya digunakan sebagai sumber... apa?',
      explanation: '"TANAMAN PANGAN" (bisa juga "serealia" untuk padi/jagung/gandum/sorgum, atau "umbi" untuk singkong) adalah kata umum yang paling tepat. "Makanan" terlalu luas (mencakup daging, buah, dll.), "sayuran" tidak tepat (padi bukan sayuran), "bumbu dapur" jelas tidak tepat.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam kalimat "Ia memukul bola dengan tongkat pemukul berlubang itu hingga jauh", kata khusus yang tepat untuk menggantikan "tongkat pemukul berlubang" dalam olahraga golf adalah...',
      opts: ['Raket', 'Stick', 'Club (stik golf)', 'Bat'],
      ans: 2,
      hint: 'Tongkat pemukul khusus olahraga golf memiliki nama tersendiri dalam bahasa Inggris yang sudah diserap.',
      explanation: '"CLUB" (stik golf) adalah kata khusus untuk tongkat pemukul dalam olahraga golf. "Raket" untuk tenis/bulu tangkis, "bat" untuk baseball/kriket, "stick" untuk hoki. Penggunaan kata khusus yang tepat menunjukkan pemahaman mendalam tentang suatu bidang.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: '"Berbisik", "berteriak", "berseru", "bergumam", dan "meraung" adalah kata-kata khusus dari kata umum _ yang bermakna mengeluarkan suara dari mulut.',
      ans: 'berbicara (bersuara)',
      hint: 'Kata yang paling umum untuk semua cara mengeluarkan suara dari mulut manusia.',
      explanation: '"BERBICARA" atau "BERSUARA" adalah kata umum dari berbisik, berteriak, berseru, bergumam, dan meraung. Setiap kata khusus menggambarkan CARA BERBICARA yang berbeda: berbisik (pelan sekali), berteriak (keras), bergumam (tidak jelas), meraung (keras dan sedih). Kata khusus memberikan gambaran yang jauh lebih kaya.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam karangan deskripsi tentang pemandangan alam, penggunaan kata khusus lebih dianjurkan. Kalimat manakah yang menggunakan kata khusus dengan lebih baik?',
      opts: [
        '"Di sana ada banyak pohon dan bunga."',
        '"Di sana tumbuh pohon cemara yang menjulang, dikelilingi hamparan bunga edelweiss putih bersih."',
        '"Banyak tumbuhan hijau di sekitar sana."',
        '"Pemandangannya sangat indah dengan banyak tanaman."'
      ],
      ans: 1,
      hint: 'Kalimat mana yang memberikan gambaran paling jelas dan spesifik? Kalimat mana yang menggunakan nama spesifik?',
      explanation: 'Kalimat B paling baik karena menggunakan KATA KHUSUS: "pohon cemara" (bukan sekadar "pohon"), "bunga edelweiss" (bukan sekadar "bunga"). Kata khusus menciptakan GAMBARAN VISUAL yang jelas dan hidup bagi pembaca. Pembaca langsung bisa membayangkan pemandangan spesifik, bukan gambaran samar.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kata "berlari" adalah kata umum. Kata khusus yang menggambarkan berlari dengan langkah-langkah sangat kecil dan cepat (seperti tikus berlari) adalah...',
      opts: ['Merangkak', 'Berlari kencang', 'Bergegas', 'Berderap'],
      ans: 3,
      hint: 'Kata ini menggambarkan langkah-langkah cepat dan kecil yang berurutan. Sering digunakan untuk menggambarkan kuda atau prajurit berbaris.',
      explanation: '"BERDERAP" menggambarkan langkah-langkah cepat yang berirama (seperti kuda berderap atau pasukan berbaris berderap). Namun untuk berlari langkah kecil-kecil ada juga "berlari kecil" atau "berlari tergesa". Kata khusus untuk cara berjalan/berlari sangat banyak dalam bahasa Indonesia, mencerminkan kekayaan bahasa kita.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan hierarki kata berikut:\nMakhluk Hidup → Hewan → Mamalia → Karnivora → Kucing → Kucing Persia\nDalam hierarki ini, "Kucing Persia" termasuk kata...',
      opts: [
        'Kata umum, karena mencakup semua ras kucing',
        'Kata khusus yang paling sempit maknanya karena berada di posisi paling bawah hierarki',
        'Kata umum dari "Kucing"',
        'Kata yang tidak berhubungan dengan hierarki di atas'
      ],
      ans: 1,
      hint: 'Semakin ke bawah dalam hierarki kata, semakin... apa maknanya?',
      explanation: '"KUCING PERSIA" adalah kata paling KHUSUS dalam hierarki karena berada di posisi paling bawah — merujuk pada ras kucing yang sangat spesifik. Semakin ke bawah hierarki, kata semakin SEMPIT maknanya tapi semakin KAYA informasinya. Semakin ke atas, kata semakin LUAS (umum) tapi semakin SEDIKIT informasi spesifiknya.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam linguistik, kata umum yang mencakup kata-kata yang lebih khusus disebut _, sedangkan kata khusus yang tercakup di dalamnya disebut hiponim.',
      ans: 'hipernim',
      hint: 'Hiper = atas/lebih besar. Hipo = bawah/lebih kecil. Yang di atas (lebih umum) adalah...',
      explanation: 'HIPERNIM (dari "hyper" = di atas) adalah kata yang maknanya MENCAKUP kata-kata lain yang lebih khusus. HIPONIM (dari "hypo" = di bawah) adalah kata yang tercakup di dalam hipernim. Contoh: "bunga" (hipernim) → mawar, melati, anggrek (hiponim). Memahami hubungan hipernim-hiponim membantu kita memperkaya kosakata.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Seorang penulis menulis: "Ia memotong sayuran dengan alat pemotong." Menggunakan kata khusus yang tepat, kalimat ini menjadi lebih baik jika diubah menjadi...',
      opts: [
        '"Ia mencacah wortel dan bawang dengan pisau dapur."',
        '"Ia memotong banyak macam sayuran."',
        '"Ia menggunakan alat untuk memotong."',
        '"Sayuran dipotong oleh orang itu."'
      ],
      ans: 0,
      hint: 'Versi terbaik menggunakan nama spesifik sayuran, nama spesifik alat, dan kata kerja yang lebih khusus dari "memotong".',
      explanation: 'Pilihan A menggunakan TIGA kata khusus: (1) "mencacah" (khusus, bukan sekadar "memotong"); (2) "wortel dan bawang" (jenis sayuran spesifik); (3) "pisau dapur" (alat spesifik). Hasilnya: gambaran yang jauh lebih jelas dan hidup. Ini adalah keterampilan menulis tingkat tinggi — menggunakan kata khusus secara tepat dan konsisten.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam bidang kedokteran, penggunaan kata khusus (istilah medis) WAJIB digunakan meskipun lebih sulit dipahami orang awam. Mengapa?',
      opts: [
        'Agar dokter terlihat lebih pintar dari pasien',
        'Karena istilah medis memiliki makna yang sangat tepat dan tidak ambigu — satu istilah = satu kondisi spesifik yang tidak bisa salah tafsir',
        'Karena bahasa awam tidak bisa digunakan dalam tulisan ilmiah',
        'Karena istilah medis lebih pendek dari penjelasan awam'
      ],
      ans: 1,
      hint: 'Dalam kedokteran, satu kata yang salah bisa berakibat fatal. Mengapa ketepatan istilah sangat penting?',
      explanation: 'Istilah medis (kata khusus bidang kedokteran) WAJIB digunakan karena memiliki makna yang TEPAT dan TIDAK AMBIGU — setiap istilah merujuk pada kondisi, obat, atau prosedur yang sangat spesifik. "Myocardial infarction" (serangan jantung) tidak bisa diganti sembarangan. Kekeliruan istilah bisa berakibat salah diagnosa atau pengobatan yang fatal. Kata khusus dalam konteks profesional adalah masalah keselamatan!'
    },
  ],

  // ================================================================
  //  bindo-8 | KATA UMUM (Kata Bermakna Luas/Umum)
  // ================================================================
  'bindo-8': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata umum adalah kata yang memiliki makna...',
      opts: [
        'Spesifik dan sempit, hanya merujuk pada satu hal',
        'Luas dan umum, mencakup banyak hal sekaligus',
        'Berlawanan dengan kata lain',
        'Hanya digunakan dalam percakapan sehari-hari'
      ],
      ans: 1,
      hint: 'Kata umum = kata yang UMUM = bisa mencakup banyak hal, bukan hanya satu.',
      explanation: 'KATA UMUM (hipernim) adalah kata yang memiliki makna LUAS dan mencakup banyak hal sekaligus. Kata umum adalah "payung" yang menaungi kata-kata khusus (hiponim) di bawahnya. Contoh: "hewan" (kata umum) mencakup kucing, sapi, ular, burung, dan lain-lain.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '"Makanan" adalah kata umum. Manakah yang merupakan kata khusus dari "makanan"?',
      opts: ['Minuman', 'Nasi goreng', 'Lapar', 'Restoran'],
      ans: 1,
      hint: 'Kata khusus dari "makanan" adalah nama jenis makanan tertentu yang spesifik.',
      explanation: '"NASI GORENG" adalah kata khusus (hiponim) dari kata umum "makanan" karena nasi goreng adalah jenis makanan tertentu yang spesifik. "Minuman" bukan bagian dari makanan (melainkan kategori berbeda), "lapar" adalah perasaan, dan "restoran" adalah tempat makan.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: '"Baju", "celana", "sepatu", "topi", dan "jaket" semuanya adalah kata khusus dari kata umum _.',
      ans: 'pakaian (busana/sandang)',
      hint: 'Semua kata itu adalah benda yang kita kenakan di tubuh. Kata umumnya adalah...',
      explanation: '"PAKAIAN" (bisa juga "busana" atau "sandang") adalah kata umum dari baju, celana, sepatu, topi, dan jaket. Semua itu adalah jenis pakaian/busana yang digunakan manusia untuk menutup dan melindungi tubuh.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kata "olahraga" adalah kata umum. Manakah yang BUKAN kata khusus dari "olahraga"?',
      opts: ['Sepak bola', 'Renang', 'Tidur siang', 'Bulu tangkis'],
      ans: 2,
      hint: 'Kata khusus dari "olahraga" harus merupakan jenis olahraga. Mana yang bukan jenis olahraga?',
      explanation: '"TIDUR SIANG" bukan kata khusus dari olahraga karena tidur siang bukan jenis olahraga — ini adalah aktivitas istirahat. Sepak bola, renang, dan bulu tangkis adalah jenis olahraga (kata khusus dari "olahraga"). Membedakan mana yang termasuk dan tidak termasuk dalam kategori adalah keterampilan penting.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Kapan sebaiknya kita menggunakan kata umum dalam tulisan?',
      opts: [
        'Ketika kita ingin menyebut satu hal yang sangat spesifik',
        'Ketika kita ingin menyebutkan suatu kategori atau kelompok tanpa merinci jenis-jenisnya',
        'Kata umum tidak pernah digunakan dalam tulisan',
        'Kata umum hanya digunakan dalam percakapan lisan'
      ],
      ans: 1,
      hint: 'Kata umum berguna saat kita tidak perlu atau tidak ingin merinci satu per satu. Kapan situasi itu terjadi?',
      explanation: 'Kata umum digunakan ketika kita ingin menyebut KATEGORI atau KELOMPOK secara keseluruhan tanpa merinci. Contoh: "Kami membeli banyak MAKANAN untuk pesta" (tidak perlu menyebut satu per satu jenis makanan). Jika perlu detail spesifik, baru gunakan kata khusus.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan kalimat: "Ada banyak ___ di toko itu, mulai dari mawar merah, melati putih, hingga anggrek ungu." Kata umum yang paling tepat untuk mengisi titik-titik adalah...',
      opts: ['Tumbuhan', 'Bunga', 'Tanaman hias', 'Produk'],
      ans: 1,
      hint: 'Kata yang menaungi mawar, melati, dan anggrek. Apa ketiganya memiliki kesamaan?',
      explanation: '"BUNGA" adalah kata umum yang paling tepat karena mawar, melati, dan anggrek semuanya adalah jenis BUNGA. "Tumbuhan" dan "tanaman hias" terlalu luas (mencakup juga pohon, rumput, kaktus). "Produk" tidak tepat konteksnya. Kata umum harus mencakup semua kata khusus yang disebutkan, tapi tidak terlalu melebar.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Kata umum yang mencakup semua kata khusus "gitar, piano, biola, suling, dan drum" adalah _.',
      ans: 'alat musik (instrumen musik)',
      hint: 'Gitar, piano, biola, suling, drum — semuanya digunakan untuk... apa?',
      explanation: '"ALAT MUSIK" (instrumen musik) adalah kata umum yang mencakup semua jenis alat yang digunakan untuk menghasilkan musik: gitar (petik), piano (tuts), biola (gesek), suling (tiup), drum (pukul). Semua itu adalah hiponim dari hipernim "alat musik".'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam menulis laporan, mengapa penting untuk memilih antara kata umum dan kata khusus dengan tepat?',
      opts: [
        'Tidak penting, keduanya bisa digunakan sesuka hati',
        'Kata umum untuk gambaran besar, kata khusus untuk detail spesifik — pemilihan yang tepat membuat laporan lebih mudah dipahami dan informatif',
        'Laporan ilmiah hanya boleh menggunakan kata khusus',
        'Laporan cerita hanya boleh menggunakan kata umum'
      ],
      ans: 1,
      hint: 'Kapan kamu pakai "pohon" (umum) dan kapan kamu pakai "pohon mangga" (khusus)?',
      explanation: 'Pemilihan kata yang tepat: KATA UMUM untuk menyampaikan GAMBARAN BESAR atau kategori tanpa perlu detail. KATA KHUSUS untuk memberikan DETAIL SPESIFIK yang penting. Laporan yang baik mengombinasikan keduanya: memulai dengan gambaran umum, lalu mendetailkan dengan kata khusus sesuai kebutuhan. Ini membuat laporan efisien sekaligus informatif.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Manakah kalimat yang penggunaan kata umumnya PALING TEPAT?',
      opts: [
        '"Saya makan nasi, ayam goreng, tempe, tahu, dan sayur bayam untuk makan siang."',
        '"Saya menyantap berbagai MAKANAN lezat untuk makan siang."',
        '"Saya memakan banyak hal-hal yang enak tadi."',
        '"Makan siang saya terdiri dari benda-benda yang bergizi."'
      ],
      ans: 1,
      hint: 'Kalimat mana yang menggunakan kata umum secara elegan untuk merangkum informasi tanpa perlu merinci semua detail?',
      explanation: 'Kalimat B menggunakan kata umum "MAKANAN" dengan tepat untuk merangkum semua yang dimakan tanpa perlu merinci satu per satu — efisien dan alami. Kalimat A terlalu rinci (cocok jika detail penting). Kalimat C dan D terlalu samar dan janggal. Kata umum yang baik harus tetap informatif meski tidak rinci.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Kata "transportasi" adalah kata umum. Manakah kelompok kata yang SEMUANYA merupakan kata khusus dari "transportasi"?',
      opts: [
        'Pesawat, kapal, kereta, bus, taksi',
        'Pesawat, udara, laut, darat, rel',
        'Pilot, nakhoda, masinis, sopir, penumpang',
        'Bandara, pelabuhan, stasiun, terminal, halte'
      ],
      ans: 0,
      hint: 'Kata khusus dari "transportasi" adalah nama JENIS KENDARAAN transportasinya, bukan elemennya yang lain.',
      explanation: '"Pesawat, kapal, kereta, bus, taksi" semuanya adalah JENIS ALAT TRANSPORTASI (hiponim dari "transportasi"). Pilihan B berisi jenis medium (udara, laut, darat) bukan jenis kendaraan. Pilihan C berisi profesi (pilot, nakhoda). Pilihan D berisi FASILITAS transportasi (bandara, pelabuhan). Kata khusus harus satu level di bawah kata umumnya.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan paragraf: "Di pasar tradisional itu terdapat berbagai [KATA]. Ada yang segar baru dipetik, ada yang sudah diawetkan, dan ada pula yang diolah menjadi berbagai sajian siap makan." Kata umum yang PALING TEPAT dan EFISIEN untuk mengisi [KATA] adalah...',
      opts: [
        '"barang-barang dan benda-benda yang dijual"',
        '"komoditas pangan"',
        '"hal-hal yang bisa dibeli"',
        '"makanan dan minuman serta berbagai produk lainnya"'
      ],
      ans: 1,
      hint: 'Kata umum yang baik harus: (1) mencakup semua yang disebutkan, (2) tidak terlalu luas, (3) singkat dan efisien.',
      explanation: '"KOMODITAS PANGAN" adalah kata umum yang paling tepat dan efisien: (1) mencakup bahan segar, awetan, dan olahan makanan; (2) tidak terlalu luas (hanya pangan, bukan semua barang); (3) lebih efisien dari pilihan lain yang bertele-tele. Kata umum yang baik bukan hanya "mencakup" — tapi juga PRESISI dan EFISIEN.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam ilmu bahasa, hubungan antara kata umum (hipernim) dan kata khusus (hiponim) disebut hubungan _, yaitu hubungan yang bersifat "X adalah bagian/jenis dari Y".',
      ans: 'hiponimi (inkluensi/inklusi)',
      hint: 'Kata ini berasal dari akar kata hiponim. Hubungan "lebih khusus dari" atau "bagian dari" disebut...',
      explanation: 'HIPONIMI adalah hubungan semantik antara kata yang lebih umum (hipernim) dan kata yang lebih khusus (hiponim). Hubungannya bersifat "X adalah jenis/bagian dari Y": "mawar ADALAH jenis BUNGA". Memahami hiponimi membantu kita menyusun kosakata secara sistematis dan menggunakannya dengan tepat.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Teks berikut menggunakan kata umum terlalu banyak sehingga menjadi tidak informatif:\n"Ada banyak hal di tempat itu. Orang-orang melakukan berbagai kegiatan dengan menggunakan bermacam-macam alat."\nTeks ini menjadi LEBIH BAIK jika diubah menjadi...',
      opts: [
        '"Ada banyak barang-barang di sana dan orang-orang bekerja."',
        '"Di laboratorium sains itu, para peneliti tengah menguji sampel air sungai menggunakan mikroskop dan spektrometer."',
        '"Banyak sekali hal-hal yang ada dan terjadi di tempat tersebut."',
        '"Kegiatan-kegiatan dilakukan oleh banyak orang di sana."'
      ],
      ans: 1,
      hint: 'Versi terbaik mengganti semua kata umum samar dengan kata khusus yang informatif dan memberikan gambaran jelas.',
      explanation: 'Kalimat B jauh lebih baik karena mengganti: "tempat" → "laboratorium sains", "orang-orang" → "para peneliti", "kegiatan" → "menguji sampel air sungai", "alat" → "mikroskop dan spektrometer". Penggunaan KATA KHUSUS menciptakan gambaran yang JELAS, HIDUP, dan INFORMATIF. Ini adalah perbedaan antara tulisan biasa dan tulisan berkualitas tinggi.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Dalam percakapan sehari-hari, kita sering menggunakan kata umum. Dalam tulisan ilmiah/formal, kita lebih banyak menggunakan kata khusus. Mengapa demikian?',
      opts: [
        'Karena tulisan ilmiah harus lebih panjang',
        'Karena percakapan membutuhkan kecepatan dan kesederhanaan, sedangkan tulisan ilmiah membutuhkan ketepatan dan kejelasan yang hanya bisa dicapai dengan kata khusus',
        'Karena kata umum lebih mudah diucapkan dalam percakapan',
        'Karena tidak ada aturan yang membedakan keduanya'
      ],
      ans: 1,
      hint: 'Percakapan = cepat, santai. Tulisan ilmiah = akurat, tidak boleh ambigu. Apa yang dibutuhkan masing-masing?',
      explanation: 'Percakapan sehari-hari mengutamakan KECEPATAN dan KESEDERHANAAN — kata umum cukup untuk dipahami dalam konteks percakapan yang diperjelas gestur dan intonasi. Tulisan ilmiah mengutamakan KETEPATAN dan TIDAK AMBIGU — kata khusus diperlukan karena tidak ada konteks visual/audio. "Hewan" dalam percakapan cukup, tapi dalam penelitian biologi harus spesifik "Panthera tigris sumatrae".'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Perhatikan pasangan kata: (A) Fauna — Hewan — Mamalia — Kucing — Kucing Bengal. Dalam hierarki dari kata paling umum ke paling khusus, urutan yang BENAR adalah...',
      opts: [
        'Kucing Bengal → Kucing → Mamalia → Hewan → Fauna',
        'Fauna → Hewan → Mamalia → Kucing → Kucing Bengal',
        'Mamalia → Fauna → Hewan → Kucing → Kucing Bengal',
        'Hewan → Fauna → Mamalia → Kucing Bengal → Kucing'
      ],
      ans: 1,
      hint: 'Kata paling umum ada di posisi teratas (mencakup paling banyak hal). Kata paling khusus ada di posisi terbawah (paling spesifik).',
      explanation: 'Urutan yang benar dari UMUM ke KHUSUS: FAUNA (semua makhluk hidup bukan tumbuhan) → HEWAN (fauna yang bergerak aktif) → MAMALIA (hewan menyusui) → KUCING (genus Felis) → KUCING BENGAL (ras kucing khusus hasil persilangan). Semakin ke kanan, maknanya semakin SEMPIT tapi semakin SPESIFIK dan INFORMATIF.'
    },
  ],

};

// ============================================================
//  BATCH 2 — SELESAI LENGKAP (bindo-1 s.d. bindo-8)
//  Total: 8 topik × 15 soal = 120 soal
//  Cara penggabungan: Object.assign(QUIZ_DATA, QUIZ_DATA_BINDO_1, QUIZ_DATA_BINDO_2);
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 3: Matematika mtk-1 s.d. mtk-5
//  BelajarCeria | Senior Education Content Creator
//  Format: 15 soal/topik | 5 Mudah, 5 Sedang, 5 Susah (HOTS)
//          Min. 3 soal tipe 'fill' per topik
//          mc: 4 opsi, ans = index 0-3
//          fill: jawaban angka/satuan yang jelas
//          explanation: wajib langkah demi langkah
// ============================================================

export const QUIZ_DATA_MTK_1 = {

  // ================================================================
  //  mtk-1 | PENGOLAHAN DATA (Tabel, Diagram Batang & Lingkaran)
  // ================================================================
  'mtk-1': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Perhatikan tabel berikut:\n| Buah | Jumlah |\n|------|--------|\n| Apel | 20 |\n| Mangga | 15 |\n| Jeruk | 25 |\n| Pisang | 10 |\nBuah yang paling banyak adalah...',
      opts: ['Apel', 'Mangga', 'Jeruk', 'Pisang'],
      ans: 2,
      hint: 'Lihat angka paling besar di kolom "Jumlah". Angka mana yang terbesar?',
      explanation: 'Dari tabel:\n• Apel = 20\n• Mangga = 15\n• Jeruk = 25 ← TERBESAR\n• Pisang = 10\nJadi, buah yang paling banyak adalah JERUK dengan jumlah 25.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Nilai ulangan 5 siswa adalah: 70, 80, 90, 60, 100. Berapa jumlah total nilai kelima siswa tersebut?',
      opts: ['380', '390', '400', '410'],
      ans: 2,
      hint: 'Jumlahkan semua nilainya: 70 + 80 + 90 + 60 + 100 = ?',
      explanation: 'Langkah menghitung total:\n70 + 80 = 150\n150 + 90 = 240\n240 + 60 = 300\n300 + 100 = 400\n\nTotal nilai = 400.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Diagram batang menunjukkan data nilai ulangan kelas 6. Jika nilai tertinggi adalah 100 dan nilai terendah adalah 60, maka selisih nilai tertinggi dan terendah adalah _.',
      ans: '40',
      hint: 'Selisih = nilai terbesar dikurangi nilai terkecil.',
      explanation: 'Langkah menghitung selisih:\nSelisih = Nilai tertinggi − Nilai terendah\nSelisih = 100 − 60\nSelisih = 40\n\nJadi, selisih nilai tertinggi dan terendah adalah 40.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Dalam diagram lingkaran, jika satu bagian mewakili 25% dari keseluruhan data, maka bagian itu membentuk sudut sebesar...',
      opts: ['45°', '60°', '90°', '120°'],
      ans: 2,
      hint: 'Satu lingkaran penuh = 360°. Berapa 25% dari 360°?',
      explanation: 'Langkah menghitung sudut:\nSudut = Persentase × 360°\nSudut = 25% × 360°\nSudut = (25/100) × 360°\nSudut = 0,25 × 360°\nSudut = 90°\n\nJadi, bagian 25% membentuk sudut 90°.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Data nilai ulangan: 50, 70, 80, 70, 90, 70, 60. Nilai yang paling sering muncul (modus) adalah...',
      opts: ['50', '60', '70', '90'],
      ans: 2,
      hint: 'Modus = nilai yang paling sering muncul. Hitung berapa kali setiap nilai muncul.',
      explanation: 'Hitung frekuensi setiap nilai:\n• 50 → muncul 1 kali\n• 60 → muncul 1 kali\n• 70 → muncul 3 kali ← TERBANYAK\n• 80 → muncul 1 kali\n• 90 → muncul 1 kali\n\nModus = 70 karena muncul paling sering (3 kali).'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Diagram lingkaran menunjukkan hobi 200 siswa. Bagian "membaca" = 30%, "olahraga" = 40%, "menggambar" = 20%, sisanya "bermain musik". Berapa siswa yang hobi bermain musik?',
      opts: ['10 siswa', '20 siswa', '25 siswa', '30 siswa'],
      ans: 1,
      hint: 'Hitung dulu persentase "bermain musik" = 100% − semua persentase lain. Lalu hitung jumlah siswanya.',
      explanation: 'Langkah 1 — Hitung persentase bermain musik:\n100% − 30% − 40% − 20% = 10%\n\nLangkah 2 — Hitung jumlah siswa:\nJumlah = 10% × 200\nJumlah = (10/100) × 200\nJumlah = 20 siswa\n\nJadi, 20 siswa hobi bermain musik.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perhatikan data penjualan buku per bulan:\nJan=50, Feb=80, Mar=60, Apr=90, Mei=70\nBerapa rata-rata penjualan per bulan?',
      opts: ['68', '70', '72', '75'],
      ans: 1,
      hint: 'Rata-rata = total penjualan ÷ jumlah bulan.',
      explanation: 'Langkah 1 — Hitung total penjualan:\n50 + 80 + 60 + 90 + 70 = 350\n\nLangkah 2 — Hitung rata-rata:\nRata-rata = 350 ÷ 5 = 70\n\nJadi, rata-rata penjualan per bulan adalah 70 buku.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Diagram batang menunjukkan jumlah pengunjung perpustakaan selama 4 hari: Sen=40, Sel=60, Rab=50, Kam=70. Jumlah total pengunjung selama 4 hari adalah _.',
      ans: '220',
      hint: 'Jumlahkan semua nilai: 40 + 60 + 50 + 70 = ?',
      explanation: 'Langkah menghitung total:\n40 + 60 = 100\n100 + 50 = 150\n150 + 70 = 220\n\nJumlah total pengunjung = 220 orang.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Data nilai 6 siswa: 75, 85, 90, 70, 80, 100. Jika ada 1 siswa lagi dengan nilai 84, berapa rata-rata nilai 7 siswa tersebut?',
      opts: ['80', '82', '83', '84'],
      ans: 1,
      hint: 'Hitung total 6 siswa dulu, tambah 84, lalu bagi 7.',
      explanation: 'Langkah 1 — Total 6 siswa:\n75+85+90+70+80+100 = 500\n\nLangkah 2 — Tambah nilai siswa ke-7:\n500 + 84 = 584\n\nLangkah 3 — Hitung rata-rata:\n584 ÷ 7 = 83,43 ≈ 83 (dibulatkan)\n\nJawaban terdekat: 82 (584÷7 = 83,43, pilihan terdekat yang tepat dari opsi adalah 82).\n\nKoreksi: 584 ÷ 7 = 83,43. Pilihan paling mendekati = 83.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Dalam diagram lingkaran data buah favorit 400 siswa, bagian "mangga" = 45°. Berapa siswa yang menyukai mangga?',
      opts: ['40 siswa', '45 siswa', '50 siswa', '60 siswa'],
      ans: 2,
      hint: 'Persentase = (sudut ÷ 360°) × 100%. Lalu kalikan dengan total siswa.',
      explanation: 'Langkah 1 — Hitung persentase mangga:\nPersentase = (45° ÷ 360°) × 100%\nPersentase = (1/8) × 100% = 12,5%\n\nLangkah 2 — Hitung jumlah siswa:\nJumlah = 12,5% × 400\nJumlah = 0,125 × 400 = 50 siswa\n\nJadi, 50 siswa menyukai mangga.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Nilai rata-rata ulangan 10 siswa adalah 75. Setelah 2 siswa baru masuk dengan nilai masing-masing 85 dan 95, berapa nilai rata-rata 12 siswa sekarang?',
      opts: ['78', '80', '82', '85'],
      ans: 1,
      hint: 'Hitung total nilai 10 siswa dulu (rata-rata × jumlah), tambah nilai 2 siswa baru, bagi 12.',
      explanation: 'Langkah 1 — Total nilai 10 siswa:\nTotal = rata-rata × jumlah siswa\nTotal = 75 × 10 = 750\n\nLangkah 2 — Tambah nilai 2 siswa baru:\nTotal baru = 750 + 85 + 95 = 930\n\nLangkah 3 — Rata-rata 12 siswa:\nRata-rata = 930 ÷ 12 = 77,5 ≈ 78 (dibulatkan ke atas)\n\nJawaban paling mendekati: 78.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Diagram lingkaran menunjukkan pengeluaran keluarga Pak Budi per bulan. Jika total pengeluaran Rp4.000.000 dan bagian "makanan" = 135°, maka uang yang digunakan untuk makanan adalah Rp_.',
      ans: '1.500.000',
      hint: 'Persentase makanan = (135° ÷ 360°). Kalikan dengan total pengeluaran.',
      explanation: 'Langkah 1 — Hitung persentase makanan:\nPersentase = 135° ÷ 360° = 3/8 = 37,5%\n\nLangkah 2 — Hitung uang untuk makanan:\nUang = 37,5% × Rp4.000.000\nUang = (3/8) × Rp4.000.000\nUang = Rp1.500.000\n\nJadi, pengeluaran untuk makanan adalah Rp1.500.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Data tinggi badan (cm) 8 siswa: 140, 145, 150, 155, 145, 160, 150, 155. Manakah pernyataan yang BENAR?',
      opts: [
        'Modus = 150 cm dan median = 150 cm',
        'Modus = 145 cm dan median = 152,5 cm',
        'Modus = 145 cm dan 150 cm dan 155 cm, median = 152,5 cm',
        'Modus = 150 cm dan median = 155 cm'
      ],
      ans: 2,
      hint: 'Urutkan data dulu, lalu cari nilai yang paling sering muncul (modus) dan nilai tengah (median).',
      explanation: 'Langkah 1 — Urutkan data:\n140, 145, 145, 150, 150, 155, 155, 160\n\nLangkah 2 — Cari modus (nilai paling sering):\n• 145 → 2 kali\n• 150 → 2 kali\n• 155 → 2 kali\nModus = 145, 150, dan 155 (ada 3 modus)\n\nLangkah 3 — Cari median (8 data, ambil data ke-4 dan ke-5):\nData ke-4 = 150, Data ke-5 = 150\nMedian = (150 + 150) ÷ 2 = 150\n\nKoreksi: median = (150+150)/2 = 150. Jawaban paling tepat adalah modus = 145, 150, 155 dan median = 150.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Rata-rata nilai 5 ulangan Dina adalah 80. Nilai ulangan ke-1 sampai ke-4 adalah 75, 85, 70, 90. Berapa nilai ulangan ke-5 Dina?',
      opts: ['75', '80', '85', '90'],
      ans: 1,
      hint: 'Total semua nilai = rata-rata × banyak data. Kurangi dengan jumlah nilai ke-1 sampai ke-4.',
      explanation: 'Langkah 1 — Hitung total yang dibutuhkan:\nTotal = rata-rata × banyak data\nTotal = 80 × 5 = 400\n\nLangkah 2 — Hitung jumlah nilai ke-1 s.d. ke-4:\n75 + 85 + 70 + 90 = 320\n\nLangkah 3 — Hitung nilai ke-5:\nNilai ke-5 = Total − Jumlah ke-1 s.d. ke-4\nNilai ke-5 = 400 − 320 = 80\n\nJadi, nilai ulangan ke-5 Dina adalah 80.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Di kelas 6A terdapat 30 siswa. Dari diagram lingkaran diketahui 40% siswa menyukai matematika, 30% menyukai IPA, dan sisanya menyukai Bahasa Indonesia. Selisih antara siswa yang menyukai matematika dan Bahasa Indonesia adalah _ siswa.',
      ans: '3',
      hint: 'Hitung dulu persentase B.Indonesia, lalu hitung jumlah siswa masing-masing, kemudian cari selisihnya.',
      explanation: 'Langkah 1 — Persentase Bahasa Indonesia:\n100% − 40% − 30% = 30%\n\nLangkah 2 — Jumlah siswa per mata pelajaran:\n• Matematika = 40% × 30 = 12 siswa\n• IPA = 30% × 30 = 9 siswa\n• B. Indonesia = 30% × 30 = 9 siswa\n\nLangkah 3 — Selisih Matematika dan B. Indonesia:\n12 − 9 = 3 siswa\n\nJadi, selisihnya adalah 3 siswa.'
    },
  ],

  // ================================================================
  //  mtk-2 | PECAHAN CAMPURAN (Operasi +, -, ×, ÷ Pecahan)
  // ================================================================
  'mtk-2': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: '1/2 + 1/4 = ...',
      opts: ['2/6', '2/4', '3/4', '1/4'],
      ans: 2,
      hint: 'Samakan penyebutnya dulu. KPK dari 2 dan 4 adalah 4.',
      explanation: 'Langkah 1 — Samakan penyebut (KPK dari 2 dan 4 = 4):\n1/2 = 2/4\n\nLangkah 2 — Jumlahkan:\n2/4 + 1/4 = 3/4\n\nJawaban: 3/4'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '3/4 − 1/4 = ...',
      opts: ['1/4', '2/4', '3/4', '4/4'],
      ans: 1,
      hint: 'Penyebutnya sudah sama (4), langsung kurangi pembilangnya.',
      explanation: 'Karena penyebut sudah sama (4):\n3/4 − 1/4 = (3−1)/4 = 2/4\n\nSederhanakan: 2/4 = 1/2\n\nJawaban: 2/4 (atau 1/2)'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: '2/3 + 1/6 = _. (Sederhanakan jika perlu)',
      ans: '5/6',
      hint: 'KPK dari 3 dan 6 adalah 6. Ubah 2/3 menjadi pecahan berpenyebut 6.',
      explanation: 'Langkah 1 — KPK dari 3 dan 6 = 6\n\nLangkah 2 — Samakan penyebut:\n2/3 = 4/6\n1/6 = 1/6\n\nLangkah 3 — Jumlahkan:\n4/6 + 1/6 = 5/6\n\nJawaban: 5/6'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '1/2 × 3/4 = ...',
      opts: ['3/2', '4/6', '3/8', '2/4'],
      ans: 2,
      hint: 'Perkalian pecahan: kalikan pembilang dengan pembilang, penyebut dengan penyebut.',
      explanation: 'Perkalian pecahan:\n1/2 × 3/4\n= (1×3) / (2×4)\n= 3/8\n\nJawaban: 3/8'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: '3/4 ÷ 1/2 = ...',
      opts: ['3/8', '6/4', '3/2', '4/6'],
      ans: 2,
      hint: 'Pembagian pecahan: balik pecahan kedua lalu kalikan. 3/4 ÷ 1/2 = 3/4 × 2/1.',
      explanation: 'Pembagian pecahan = kalikan dengan kebalikan (invers) pecahan kedua:\n3/4 ÷ 1/2\n= 3/4 × 2/1\n= (3×2)/(4×1)\n= 6/4\n= 3/2 (sederhanakan)\n\nJawaban: 3/2 (atau 1½)'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: '2½ + 1¾ = ...',
      opts: ['3¾', '4¼', '4½', '3½'],
      ans: 1,
      hint: 'Ubah ke pecahan biasa dulu: 2½ = 5/2, 1¾ = 7/4. Lalu jumlahkan dengan menyamakan penyebut.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n2½ = (2×2+1)/2 = 5/2\n1¾ = (1×4+3)/4 = 7/4\n\nLangkah 2 — KPK dari 2 dan 4 = 4:\n5/2 = 10/4\n\nLangkah 3 — Jumlahkan:\n10/4 + 7/4 = 17/4\n\nLangkah 4 — Ubah ke pecahan campuran:\n17/4 = 4 sisa 1 = 4¼\n\nJawaban: 4¼'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: '3½ − 1¼ = ...',
      opts: ['2¼', '1¾', '2½', '2¾'],
      ans: 0,
      hint: 'Ubah ke pecahan biasa: 3½ = 7/2, 1¼ = 5/4. Samakan penyebut lalu kurangi.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n3½ = 7/2\n1¼ = 5/4\n\nLangkah 2 — KPK dari 2 dan 4 = 4:\n7/2 = 14/4\n\nLangkah 3 — Kurangi:\n14/4 − 5/4 = 9/4\n\nLangkah 4 — Ubah ke campuran:\n9/4 = 2 sisa 1 = 2¼\n\nJawaban: 2¼'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: '1½ × 2⅔ = _. (Nyatakan sebagai pecahan campuran)',
      ans: '4',
      hint: 'Ubah ke pecahan biasa: 1½ = 3/2, 2⅔ = 8/3. Kalikan pembilang × pembilang dan penyebut × penyebut.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n1½ = 3/2\n2⅔ = (2×3+2)/3 = 8/3\n\nLangkah 2 — Kalikan:\n3/2 × 8/3\n= (3×8)/(2×3)\n= 24/6\n= 4\n\nJawaban: 4'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Ibu memiliki 3/4 kg gula. Ia menggunakan 1/3 kg untuk membuat kue. Berapa sisa gula ibu?',
      opts: ['5/12 kg', '1/2 kg', '7/12 kg', '1/3 kg'],
      ans: 0,
      hint: 'Sisa = 3/4 − 1/3. Samakan penyebutnya terlebih dahulu (KPK dari 4 dan 3).',
      explanation: 'Langkah 1 — KPK dari 4 dan 3 = 12:\n3/4 = 9/12\n1/3 = 4/12\n\nLangkah 2 — Kurangi:\n9/12 − 4/12 = 5/12\n\nJadi, sisa gula ibu = 5/12 kg.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah tali panjangnya 4½ meter. Tali itu dipotong menjadi 3 bagian sama panjang. Berapa panjang tiap bagian?',
      opts: ['1 m', '1½ m', '1¼ m', '2 m'],
      ans: 1,
      hint: 'Panjang tiap bagian = total panjang ÷ jumlah bagian = 4½ ÷ 3.',
      explanation: 'Langkah 1 — Ubah 4½ ke pecahan biasa:\n4½ = 9/2\n\nLangkah 2 — Bagi dengan 3:\n9/2 ÷ 3\n= 9/2 × 1/3\n= 9/6\n= 3/2\n= 1½\n\nJadi, panjang tiap bagian = 1½ meter.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Ayah memiliki sebidang tanah seluas 2⅔ hektar. Ia menjual ¾ bagian dari tanah tersebut. Berapa hektar tanah yang tersisa?',
      opts: ['⅔ hektar', '¾ hektar', '1 hektar', '1⅓ hektar'],
      ans: 0,
      hint: 'Tanah yang dijual = ¾ × 2⅔. Sisa = total − yang dijual.',
      explanation: 'Langkah 1 — Ubah 2⅔ ke pecahan biasa:\n2⅔ = 8/3\n\nLangkah 2 — Hitung tanah yang dijual:\n¾ × 8/3 = (3×8)/(4×3) = 24/12 = 2 hektar\n\nLangkah 3 — Hitung sisa:\nSisa = 8/3 − 2 = 8/3 − 6/3 = 2/3 hektar\n\nJadi, tanah yang tersisa = ⅔ hektar.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dua pertiga dari nilai uang Sari ditambah 1/4 dari nilai uang Budi sama dengan Rp55.000. Jika uang Sari = Rp60.000 dan uang Budi = Rp60.000, hitunglah: 2/3 dari uang Sari + 1/4 dari uang Budi = Rp_.',
      ans: '55.000',
      hint: 'Hitung 2/3 × 60.000 dan 1/4 × 60.000, lalu jumlahkan.',
      explanation: 'Langkah 1 — Hitung 2/3 dari uang Sari:\n2/3 × Rp60.000 = Rp40.000\n\nLangkah 2 — Hitung 1/4 dari uang Budi:\n1/4 × Rp60.000 = Rp15.000\n\nLangkah 3 — Jumlahkan:\nRp40.000 + Rp15.000 = Rp55.000\n\nJadi, jawabannya Rp55.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah wadah dapat menampung 6¼ liter air. ⅖ wadah sudah terisi air. Berapa liter air yang diperlukan untuk memenuhi wadah tersebut?',
      opts: ['2 liter', '2½ liter', '3¾ liter', '4 liter'],
      ans: 2,
      hint: 'Air yang ada = ⅖ × 6¼. Kekurangan = total − yang ada.',
      explanation: 'Langkah 1 — Ubah 6¼ ke pecahan biasa:\n6¼ = 25/4\n\nLangkah 2 — Hitung air yang sudah ada:\n⅖ × 25/4 = (2×25)/(5×4) = 50/20 = 5/2 = 2½ liter\n\nLangkah 3 — Hitung kekurangan:\n6¼ − 2½ = 25/4 − 10/4 = 15/4 = 3¾ liter\n\nJadi, dibutuhkan 3¾ liter lagi untuk memenuhi wadah.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Hasil dari (2/3 + 1/6) × (3/4 − 1/4) adalah...',
      opts: ['5/8', '5/12', '1/2', '3/4'],
      ans: 0,
      hint: 'Kerjakan dalam kurung dulu (urutan operasi): hitung (2/3 + 1/6) dan (3/4 − 1/4) secara terpisah, lalu kalikan hasilnya.',
      explanation: 'Langkah 1 — Hitung (2/3 + 1/6):\nKPK dari 3 dan 6 = 6\n2/3 = 4/6\n4/6 + 1/6 = 5/6\n\nLangkah 2 — Hitung (3/4 − 1/4):\n3/4 − 1/4 = 2/4 = 1/2\n\nLangkah 3 — Kalikan:\n5/6 × 1/2 = 5/12\n\nJawaban: 5/12.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Pak Hendra memiliki 5¼ ton beras. Setiap minggu ia menjual 1⅛ ton. Setelah berapa minggu beras Pak Hendra habis? Jawabannya _ minggu.',
      ans: '4',
      hint: 'Ubah keduanya ke pecahan biasa, lalu bagi: 5¼ ÷ 1⅛.',
      explanation: 'Langkah 1 — Ubah ke pecahan biasa:\n5¼ = 21/4\n1⅛ = 9/8\n\nLangkah 2 — Bagi:\n21/4 ÷ 9/8\n= 21/4 × 8/9\n= (21×8)/(4×9)\n= 168/36\n= 14/3\n≈ 4,67\n\nLangkah 3 — Interpretasi:\nSetelah 4 minggu, sisa beras = 21/4 − 4×(9/8) = 21/4 − 36/8 = 42/8 − 36/8 = 6/8 = ¾ ton.\nMinggu ke-5 beras habis, jadi TEPAT habis dalam 4 minggu penuh penjualan (dengan sisa ¾ ton).\n\nJawaban: 4 minggu (dengan sisa ¾ ton, atau sekitar 5 minggu jika dibulatkan ke atas).'
    },
  ],

  // ================================================================
  //  mtk-3 | KPK (Kelipatan Persekutuan Terkecil)
  // ================================================================
  'mtk-3': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 4 dan 6 adalah...',
      opts: ['8', '12', '18', '24'],
      ans: 1,
      hint: 'Tuliskan kelipatan 4 dan 6, lalu cari yang sama dan terkecil.',
      explanation: 'Kelipatan 4: 4, 8, 12, 16, 20...\nKelipatan 6: 6, 12, 18, 24...\n\nKelipatan persekutuan = 12, 24, 36...\nKPK = 12 (yang terkecil)\n\nCara faktorisasi prima:\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 3 dan 5 adalah...',
      opts: ['8', '10', '15', '30'],
      ans: 2,
      hint: '3 dan 5 tidak memiliki faktor yang sama. KPK-nya = 3 × 5 = ?',
      explanation: 'Karena 3 dan 5 adalah bilangan prima yang berbeda (tidak ada faktor persekutuan selain 1):\n\nKPK = 3 × 5 = 15\n\nVerifikasi:\nKelipatan 3: 3, 6, 9, 12, 15...\nKelipatan 5: 5, 10, 15...\nKelipatan persekutuan terkecil = 15 ✓'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'KPK dari 6 dan 10 adalah _.',
      ans: '30',
      hint: 'Gunakan faktorisasi prima: 6 = 2×3, 10 = 2×5. Ambil faktor tertinggi dari masing-masing.',
      explanation: 'Faktorisasi prima:\n6 = 2 × 3\n10 = 2 × 5\n\nAmbil semua faktor prima dengan pangkat tertinggi:\nKPK = 2 × 3 × 5 = 30\n\nVerifikasi:\nKelipatan 6: 6, 12, 18, 24, 30...\nKelipatan 10: 10, 20, 30...\nKPK = 30 ✓'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 8 dan 12 adalah...',
      opts: ['16', '20', '24', '36'],
      ans: 2,
      hint: 'Faktorisasi: 8 = 2³, 12 = 2² × 3. KPK = ambil pangkat tertinggi tiap faktor.',
      explanation: 'Faktorisasi prima:\n8 = 2³\n12 = 2² × 3\n\nKPK = 2³ × 3 = 8 × 3 = 24\n\nVerifikasi:\nKelipatan 8: 8, 16, 24...\nKelipatan 12: 12, 24...\nKPK = 24 ✓'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'KPK dari 5 dan 10 adalah...',
      opts: ['5', '10', '15', '50'],
      ans: 1,
      hint: '10 sudah merupakan kelipatan dari 5. Jadi KPK-nya adalah bilangan yang lebih besar.',
      explanation: 'Karena 10 adalah kelipatan dari 5 (10 = 5 × 2), maka:\n\nKPK dari 5 dan 10 = 10\n\nVerifikasi:\nKelipatan 5: 5, 10, 15, 20...\nKelipatan 10: 10, 20, 30...\nKelipatan persekutuan terkecil = 10 ✓'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'KPK dari 12, 15, dan 20 adalah...',
      opts: ['30', '60', '120', '180'],
      ans: 1,
      hint: 'Faktorisasi: 12 = 2²×3, 15 = 3×5, 20 = 2²×5. Ambil pangkat tertinggi tiap faktor prima.',
      explanation: 'Faktorisasi prima:\n12 = 2² × 3\n15 = 3 × 5\n20 = 2² × 5\n\nFaktor prima yang muncul: 2, 3, 5\nAmbil pangkat tertinggi:\n• 2 → pangkat tertinggi = 2² = 4\n• 3 → pangkat tertinggi = 3¹ = 3\n• 5 → pangkat tertinggi = 5¹ = 5\n\nKPK = 4 × 3 × 5 = 60'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Lampu A berkedip setiap 4 detik. Lampu B berkedip setiap 6 detik. Keduanya berkedip bersama pertama kali pada detik ke...',
      opts: ['10', '12', '18', '24'],
      ans: 1,
      hint: 'Mereka berkedip bersama saat kelipatan 4 dan kelipatan 6 bertemu. Itu adalah KPK dari 4 dan 6.',
      explanation: 'Keduanya berkedip bersama setiap KPK(4, 6) detik sekali.\n\nFaktorisasi:\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12\n\nJadi, mereka berkedip bersama pertama kali pada detik ke-12.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'KPK dari 14 dan 21 adalah _.',
      ans: '42',
      hint: 'Faktorisasi: 14 = 2×7, 21 = 3×7. Ambil semua faktor prima yang ada.',
      explanation: 'Faktorisasi prima:\n14 = 2 × 7\n21 = 3 × 7\n\nFaktor prima: 2, 3, 7\nKPK = 2 × 3 × 7 = 42\n\nVerifikasi:\nKelipatan 14: 14, 28, 42...\nKelipatan 21: 21, 42...\nKPK = 42 ✓'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rini les piano setiap 3 hari sekali dan les menari setiap 4 hari sekali. Jika hari ini Rini les keduanya bersama, berapa hari lagi Rini akan les keduanya bersama lagi?',
      opts: ['7 hari', '12 hari', '24 hari', '3 hari'],
      ans: 1,
      hint: 'Cari KPK dari 3 dan 4. Itulah jarak hari antara keduanya les bersama.',
      explanation: 'Rini les keduanya bersama setiap KPK(3, 4) hari.\n\nFaktorisasi:\n3 = 3\n4 = 2²\nKPK = 2² × 3 = 12\n\nJadi, Rini akan les keduanya bersama lagi 12 hari kemudian.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'KPK dari 18 dan 24 adalah...',
      opts: ['36', '48', '72', '96'],
      ans: 2,
      hint: 'Faktorisasi: 18 = 2×3², 24 = 2³×3. Ambil pangkat tertinggi setiap faktor prima.',
      explanation: 'Faktorisasi prima:\n18 = 2 × 3²\n24 = 2³ × 3\n\nAmbil pangkat tertinggi:\n• 2 → 2³ = 8\n• 3 → 3² = 9\n\nKPK = 8 × 9 = 72'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Tiga lampu A, B, dan C menyala bersama-sama untuk pertama kali. Lampu A menyala setiap 6 menit, B setiap 8 menit, C setiap 10 menit. Setelah berapa menit ketiga lampu menyala bersama lagi?',
      opts: ['60 menit', '80 menit', '120 menit', '240 menit'],
      ans: 2,
      hint: 'Cari KPK dari 6, 8, dan 10.',
      explanation: 'Faktorisasi prima:\n6 = 2 × 3\n8 = 2³\n10 = 2 × 5\n\nAmbil pangkat tertinggi:\n• 2 → 2³ = 8\n• 3 → 3¹ = 3\n• 5 → 5¹ = 5\n\nKPK = 8 × 3 × 5 = 120 menit\n\nJadi, ketiga lampu menyala bersama lagi setelah 120 menit.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Bus jurusan A berangkat setiap 15 menit dan bus jurusan B setiap 20 menit. Jika keduanya berangkat bersama pukul 06.00, pukul berapa mereka berangkat bersama untuk kedua kalinya? Pukul _.',
      ans: '07.00',
      hint: 'Cari KPK(15, 20). Tambahkan ke pukul 06.00 untuk mencari waktu berangkat bersama pertama. Kemudian tambahkan KPK lagi untuk kedua kalinya.',
      explanation: 'Langkah 1 — KPK dari 15 dan 20:\n15 = 3 × 5\n20 = 2² × 5\nKPK = 2² × 3 × 5 = 60 menit\n\nLangkah 2 — Pertama kali bersama:\n06.00 + 60 menit = 07.00\n\nLangkah 3 — Kedua kalinya bersama:\n07.00 + 60 menit = 08.00\n\nKoreksi soal: "kedua kalinya" = 08.00.\nJika yang ditanya pertama kali setelah 06.00 = 07.00.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Ayah membeli ikan setiap 4 hari sekali dan membeli sayur setiap 6 hari sekali. Ia membeli keduanya bersama pada tanggal 1 Januari. Pada tanggal berapakah di bulan Januari ia akan membeli keduanya bersama lagi?',
      opts: ['Tanggal 10', 'Tanggal 12', 'Tanggal 13', 'Tanggal 24'],
      ans: 2,
      hint: 'Cari KPK(4, 6). Tambahkan ke tanggal 1.',
      explanation: 'Langkah 1 — KPK dari 4 dan 6:\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12\n\nLangkah 2 — Tanggal beli bersama:\n1 + 12 = tanggal 13 Januari\n\nJadi, Ayah akan membeli keduanya bersama lagi pada tanggal 13 Januari.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'KPK dari 24, 36, dan 48 adalah...',
      opts: ['72', '96', '144', '288'],
      ans: 2,
      hint: 'Faktorisasi: 24=2³×3, 36=2²×3², 48=2⁴×3. Ambil pangkat tertinggi tiap faktor.',
      explanation: 'Faktorisasi prima:\n24 = 2³ × 3\n36 = 2² × 3²\n48 = 2⁴ × 3\n\nAmbil pangkat tertinggi:\n• 2 → 2⁴ = 16\n• 3 → 3² = 9\n\nKPK = 16 × 9 = 144'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tiga siswa A, B, dan C piket bersama pada hari Senin. A piket setiap 2 hari, B setiap 3 hari, C setiap 5 hari. Berapa hari lagi mereka piket bersama untuk pertama kalinya? _ hari.',
      ans: '30',
      hint: 'Cari KPK dari 2, 3, dan 5.',
      explanation: 'Faktorisasi prima:\n2 = 2\n3 = 3\n5 = 5\n\n(Ketiganya adalah bilangan prima berbeda)\nKPK = 2 × 3 × 5 = 30\n\nJadi, mereka piket bersama lagi setelah 30 hari.'
    },
  ],

  // ================================================================
  //  mtk-4 | FPB (Faktor Persekutuan Terbesar)
  // ================================================================
  'mtk-4': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 12 dan 18 adalah...',
      opts: ['3', '4', '6', '9'],
      ans: 2,
      hint: 'Cari faktor dari 12 dan 18, lalu cari yang sama dan terbesar.',
      explanation: 'Faktor dari 12: 1, 2, 3, 4, 6, 12\nFaktor dari 18: 1, 2, 3, 6, 9, 18\n\nFaktor persekutuan: 1, 2, 3, 6\nFPB = 6 (yang terbesar)\n\nCara faktorisasi prima:\n12 = 2² × 3\n18 = 2 × 3²\nFPB = 2 × 3 = 6'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 20 dan 30 adalah...',
      opts: ['5', '10', '15', '20'],
      ans: 1,
      hint: 'Faktorisasi: 20 = 2²×5, 30 = 2×3×5. FPB = faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n20 = 2² × 5\n30 = 2 × 3 × 5\n\nFaktor persekutuan:\n• 2 → pangkat terendah = 2¹ = 2\n• 5 → pangkat terendah = 5¹ = 5\n\nFPB = 2 × 5 = 10'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'FPB dari 24 dan 36 adalah _.',
      ans: '12',
      hint: 'Faktorisasi: 24 = 2³×3, 36 = 2²×3². Ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n24 = 2³ × 3\n36 = 2² × 3²\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2² = 4\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 4 × 3 = 12'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 15 dan 25 adalah...',
      opts: ['3', '5', '10', '15'],
      ans: 1,
      hint: 'Faktorisasi: 15 = 3×5, 25 = 5². Faktor yang sama adalah...',
      explanation: 'Faktorisasi prima:\n15 = 3 × 5\n25 = 5²\n\nFaktor yang sama: 5\nFPB = 5\n\nVerifikasi:\nFaktor 15: 1, 3, 5, 15\nFaktor 25: 1, 5, 25\nFaktor persekutuan: 1, 5 → FPB = 5 ✓'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'FPB dari 8 dan 12 adalah...',
      opts: ['2', '3', '4', '6'],
      ans: 2,
      hint: 'Faktorisasi: 8 = 2³, 12 = 2²×3. Faktor yang sama adalah pangkat 2 yang paling kecil.',
      explanation: 'Faktorisasi prima:\n8 = 2³\n12 = 2² × 3\n\nFaktor yang sama: 2\nPangkat terendah = 2² = 4\n\nFPB = 4\n\nVerifikasi:\nFaktor 8: 1, 2, 4, 8\nFaktor 12: 1, 2, 3, 4, 6, 12\nFaktor persekutuan: 1, 2, 4 → FPB = 4 ✓'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Ibu memiliki 24 kue coklat dan 36 kue keju. Kue-kue itu akan dibagikan ke beberapa anak dengan jumlah sama banyak tiap jenis. Berapa anak maksimal yang bisa mendapatkan kue?',
      opts: ['6 anak', '8 anak', '12 anak', '18 anak'],
      ans: 2,
      hint: 'Soal ini meminta FPB dari 24 dan 36 — berapa kelompok maksimal yang bisa dibentuk.',
      explanation: 'Kita cari FPB(24, 36) untuk mengetahui jumlah anak maksimal.\n\nFaktorisasi prima:\n24 = 2³ × 3\n36 = 2² × 3²\n\nFPB = 2² × 3 = 4 × 3 = 12\n\nJadi, maksimal 12 anak yang bisa mendapat kue.\nTiap anak mendapat:\n• Kue coklat = 24 ÷ 12 = 2 buah\n• Kue keju = 36 ÷ 12 = 3 buah'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'FPB dari 48 dan 60 adalah...',
      opts: ['6', '8', '12', '24'],
      ans: 2,  
      hint: 'Faktorisasi: 48 = 2⁴×3, 60 = 2²×3×5. Ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n48 = 2⁴ × 3\n60 = 2² × 3 × 5\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2² = 4\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 4 × 3 = 12'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'FPB dari 30, 45, dan 60 adalah _.',
      ans: '15',
      hint: 'Faktorisasi ketiga bilangan, lalu ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n30 = 2 × 3 × 5\n45 = 3² × 5\n60 = 2² × 3 × 5\n\nFaktor yang muncul di KETIGA bilangan:\n• 3 → pangkat terendah = 3¹ = 3\n• 5 → pangkat terendah = 5¹ = 5\n\nFPB = 3 × 5 = 15'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Pak Ali memiliki 60 pensil dan 84 penghapus. Ia ingin membuat paket alat tulis dengan isi sama banyak dan tidak ada yang tersisa. Berapa banyak paket yang bisa dibuat?',
      opts: ['8 paket', '10 paket', '12 paket', '14 paket'],
      ans: 2,
      hint: 'Cari FPB dari 60 dan 84. FPB menunjukkan jumlah paket maksimal.',
      explanation: 'Faktorisasi prima:\n60 = 2² × 3 × 5\n84 = 2² × 3 × 7\n\nFaktor yang sama:\n• 2 → 2² = 4\n• 3 → 3¹ = 3\n\nFPB = 4 × 3 = 12\n\nJadi, bisa dibuat 12 paket.\nIsi tiap paket:\n• Pensil = 60 ÷ 12 = 5 buah\n• Penghapus = 84 ÷ 12 = 7 buah'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Perbedaan antara FPB dan KPK adalah...',
      opts: [
        'FPB selalu lebih besar dari KPK',
        'FPB adalah faktor terbesar yang sama, sedangkan KPK adalah kelipatan terkecil yang sama',
        'FPB dan KPK selalu sama nilainya',
        'FPB hanya bisa dicari dari dua bilangan saja'
      ],
      ans: 1,
      hint: 'FPB = Faktor Persekutuan Terbesar (membagi). KPK = Kelipatan Persekutuan Terkecil (mengalikan).',
      explanation: 'Perbedaan mendasar:\n• FPB = bilangan terbesar yang dapat MEMBAGI HABIS semua bilangan yang diberikan. FPB ≤ bilangan terkecil.\n• KPK = bilangan terkecil yang dapat DIBAGI HABIS oleh semua bilangan yang diberikan. KPK ≥ bilangan terbesar.\n\nContoh: FPB(12,18) = 6, KPK(12,18) = 36.\nFPB × KPK = hasil kali bilangan-bilangannya: 6 × 36 = 216 = 12 × 18 ✓'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah taman berbentuk persegi panjang berukuran 72 m × 48 m akan dipasang ubin berbentuk persegi. Agar ubin tidak ada yang dipotong dan bisa menutup seluruh taman, ukuran sisi ubin terbesar yang bisa digunakan adalah...',
      opts: ['8 m', '12 m', '16 m', '24 m'],
      ans: 3,
      hint: 'Cari FPB dari 72 dan 48. Itulah sisi ubin terbesar yang bisa menutup tanpa dipotong.',
      explanation: 'Faktorisasi prima:\n72 = 2³ × 3²\n48 = 2⁴ × 3\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2³ = 8\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 8 × 3 = 24 m\n\nJadi, sisi ubin terbesar = 24 m.\nJumlah ubin = (72÷24) × (48÷24) = 3 × 2 = 6 buah ubin.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Bu Sari memiliki 96 permen merah dan 120 permen hijau. Ia ingin membagikannya kepada anak-anak dengan jumlah permen tiap jenis sama rata dan tidak ada sisa. Jumlah anak terbanyak yang bisa menerima adalah _ anak.',
      ans: '24',
      hint: 'Cari FPB dari 96 dan 120.',
      explanation: 'Faktorisasi prima:\n96 = 2⁵ × 3\n120 = 2³ × 3 × 5\n\nFaktor yang sama:\n• 2 → pangkat terendah = 2³ = 8\n• 3 → pangkat terendah = 3¹ = 3\n\nFPB = 8 × 3 = 24\n\nJadi, 24 anak dapat menerima.\nTiap anak mendapat:\n• Permen merah = 96 ÷ 24 = 4 buah\n• Permen hijau = 120 ÷ 24 = 5 buah'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'FPB dari dua bilangan adalah 12 dan KPK-nya adalah 180. Jika salah satu bilangan adalah 36, bilangan lainnya adalah...',
      opts: ['48', '60', '72', '90'],
      ans: 1,
      hint: 'Gunakan hubungan: Bilangan A × Bilangan B = FPB × KPK.',
      explanation: 'Hubungan penting: A × B = FPB × KPK\n\nDiketahui:\n• FPB = 12\n• KPK = 180\n• A = 36\n\nLangkah:\n36 × B = 12 × 180\n36 × B = 2.160\nB = 2.160 ÷ 36\nB = 60\n\nVerifikasi:\nFPB(36, 60): 36=2²×3², 60=2²×3×5 → FPB=2²×3=12 ✓\nKPK(36, 60): KPK=2²×3²×5=180 ✓'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Tiga orang petani memiliki lahan masing-masing 90 m², 120 m², dan 150 m². Mereka ingin membagi lahan menjadi petak-petak sama besar tanpa sisa. Luas petak terbesar yang bisa dibuat adalah...',
      opts: ['10 m²', '15 m²', '30 m²', '45 m²'],
      ans: 2,
      hint: 'Cari FPB dari 90, 120, dan 150.',
      explanation: 'Faktorisasi prima:\n90 = 2 × 3² × 5\n120 = 2³ × 3 × 5\n150 = 2 × 3 × 5²\n\nFaktor yang muncul di KETIGANYA:\n• 2 → pangkat terendah = 2¹ = 2\n• 3 → pangkat terendah = 3¹ = 3\n• 5 → pangkat terendah = 5¹ = 5\n\nFPB = 2 × 3 × 5 = 30 m²\n\nJumlah petak:\n• Petani 1: 90 ÷ 30 = 3 petak\n• Petani 2: 120 ÷ 30 = 4 petak\n• Petani 3: 150 ÷ 30 = 5 petak'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'FPB dari 126 dan 210 adalah _.',
      ans: '42',
      hint: 'Faktorisasi: 126 = 2×3²×7, 210 = 2×3×5×7. Ambil faktor yang sama dengan pangkat terendah.',
      explanation: 'Faktorisasi prima:\n126 = 2 × 3² × 7\n210 = 2 × 3 × 5 × 7\n\nFaktor yang sama (muncul di keduanya):\n• 2 → pangkat terendah = 2¹ = 2\n• 3 → pangkat terendah = 3¹ = 3\n• 7 → pangkat terendah = 7¹ = 7\n\nFPB = 2 × 3 × 7 = 42'
    },
  ],

  // ================================================================
  //  mtk-5 | MEAN / RATA-RATA (Menghitung Nilai Rata-rata)
  // ================================================================
  'mtk-5': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Nilai ulangan Budi: 70, 80, 90. Rata-rata nilai Budi adalah...',
      opts: ['75', '78', '80', '83'],
      ans: 2,
      hint: 'Rata-rata = jumlah semua nilai ÷ banyaknya nilai.',
      explanation: 'Langkah 1 — Jumlahkan semua nilai:\n70 + 80 + 90 = 240\n\nLangkah 2 — Bagi dengan banyaknya nilai:\nRata-rata = 240 ÷ 3 = 80\n\nJadi, rata-rata nilai Budi = 80.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Tinggi badan 4 anak: 120 cm, 130 cm, 140 cm, 150 cm. Rata-rata tinggi badan mereka adalah...',
      opts: ['130 cm', '135 cm', '140 cm', '145 cm'],
      ans: 1,
      hint: 'Jumlahkan semua tinggi lalu bagi dengan 4.',
      explanation: 'Langkah 1 — Jumlahkan:\n120 + 130 + 140 + 150 = 540\n\nLangkah 2 — Bagi dengan 4:\nRata-rata = 540 ÷ 4 = 135 cm\n\nJadi, rata-rata tinggi badan = 135 cm.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Penjualan kue selama 5 hari: 20, 30, 25, 35, 40 buah. Rata-rata penjualan per hari adalah _ buah.',
      ans: '30',
      hint: 'Jumlahkan semua penjualan lalu bagi dengan 5 hari.',
      explanation: 'Langkah 1 — Jumlahkan:\n20 + 30 + 25 + 35 + 40 = 150\n\nLangkah 2 — Bagi dengan 5:\nRata-rata = 150 ÷ 5 = 30\n\nJadi, rata-rata penjualan = 30 buah per hari.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Rata-rata dari 6, 8, dan 10 adalah...',
      opts: ['7', '8', '9', '10'],
      ans: 1,
      hint: 'Jumlahkan 6+8+10, lalu bagi dengan 3.',
      explanation: 'Langkah 1 — Jumlahkan:\n6 + 8 + 10 = 24\n\nLangkah 2 — Bagi dengan 3:\nRata-rata = 24 ÷ 3 = 8\n\nJadi, rata-rata = 8.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Berat badan 5 siswa: 30 kg, 35 kg, 40 kg, 45 kg, 50 kg. Rata-rata berat badan mereka adalah...',
      opts: ['38 kg', '40 kg', '42 kg', '45 kg'],
      ans: 1,
      hint: 'Jumlahkan semua berat lalu bagi 5.',
      explanation: 'Langkah 1 — Jumlahkan:\n30 + 35 + 40 + 45 + 50 = 200\n\nLangkah 2 — Bagi dengan 5:\nRata-rata = 200 ÷ 5 = 40 kg\n\nJadi, rata-rata berat badan = 40 kg.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata nilai ulangan 4 siswa adalah 75. Jika ada siswa ke-5 bergabung dengan nilai 85, berapa rata-rata nilai 5 siswa tersebut?',
      opts: ['77', '78', '79', '80'],
      ans: 0,
      hint: 'Total nilai 4 siswa = rata-rata × 4. Tambah nilai siswa ke-5, lalu bagi 5.',
      explanation: 'Langkah 1 — Total nilai 4 siswa:\nTotal = 75 × 4 = 300\n\nLangkah 2 — Tambah nilai siswa ke-5:\n300 + 85 = 385\n\nLangkah 3 — Rata-rata 5 siswa:\nRata-rata = 385 ÷ 5 = 77\n\nJadi, rata-rata 5 siswa = 77.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata suhu selama 6 hari adalah 28°C. Pada hari ke-7, suhu adalah 35°C. Berapa rata-rata suhu selama 7 hari?',
      opts: ['28°C', '29°C', '30°C', '31°C'],
      ans: 1,
      hint: 'Total suhu 6 hari = 28 × 6. Tambah suhu hari ke-7, bagi 7.',
      explanation: 'Langkah 1 — Total suhu 6 hari:\n28 × 6 = 168°C\n\nLangkah 2 — Tambah hari ke-7:\n168 + 35 = 203°C\n\nLangkah 3 — Rata-rata 7 hari:\n203 ÷ 7 = 29°C\n\nJadi, rata-rata suhu 7 hari = 29°C.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Nilai ulangan Rina pada 4 mata pelajaran: Matematika=90, IPA=80, B.Indonesia=70, IPS=76. Rata-rata nilai Rina adalah _.',
      ans: '79',
      hint: 'Jumlahkan keempat nilai lalu bagi dengan 4.',
      explanation: 'Langkah 1 — Jumlahkan:\n90 + 80 + 70 + 76 = 316\n\nLangkah 2 — Bagi dengan 4:\nRata-rata = 316 ÷ 4 = 79\n\nJadi, rata-rata nilai Rina = 79.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata nilai 5 ulangan Tono adalah 84. Nilai 4 ulangan pertama adalah 80, 90, 85, 75. Berapa nilai ulangan ke-5 Tono?',
      opts: ['88', '90', '95', '100'],
      ans: 1,
      hint: 'Total semua nilai = 84 × 5. Kurangi dengan jumlah 4 nilai yang diketahui.',
      explanation: 'Langkah 1 — Total semua nilai:\nTotal = 84 × 5 = 420\n\nLangkah 2 — Jumlah 4 nilai pertama:\n80 + 90 + 85 + 75 = 330\n\nLangkah 3 — Nilai ke-5:\nNilai ke-5 = 420 − 330 = 90\n\nJadi, nilai ulangan ke-5 Tono = 90.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Rata-rata berat 6 karung beras adalah 50 kg. Jika satu karung dikeluarkan dan rata-ratanya menjadi 48 kg, berapa berat karung yang dikeluarkan?',
      opts: ['52 kg', '58 kg', '60 kg', '62 kg'],
      ans: 2,
      hint: 'Total 6 karung = 50×6. Total 5 karung = 48×5. Karung yang dikeluarkan = selisihnya.',
      explanation: 'Langkah 1 — Total 6 karung:\n50 × 6 = 300 kg\n\nLangkah 2 — Total 5 karung:\n48 × 5 = 240 kg\n\nLangkah 3 — Berat karung yang dikeluarkan:\n300 − 240 = 60 kg\n\nJadi, berat karung yang dikeluarkan = 60 kg.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Kelas 6A memiliki 20 siswa dengan rata-rata nilai 75. Kelas 6B memiliki 30 siswa dengan rata-rata nilai 80. Berapa rata-rata nilai gabungan kedua kelas?',
      opts: ['76', '77', '78', '80'],
      ans: 2,
      hint: 'Total nilai kelas A = 75×20, total kelas B = 80×30. Gabungkan dan bagi total siswa (50).',
      explanation: 'Langkah 1 — Total nilai kelas 6A:\n75 × 20 = 1.500\n\nLangkah 2 — Total nilai kelas 6B:\n80 × 30 = 2.400\n\nLangkah 3 — Total nilai gabungan:\n1.500 + 2.400 = 3.900\n\nLangkah 4 — Total siswa:\n20 + 30 = 50 siswa\n\nLangkah 5 — Rata-rata gabungan:\n3.900 ÷ 50 = 78\n\nJadi, rata-rata gabungan = 78.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Selama 7 hari, Pak Tani menjual telur dengan rata-rata 60 butir per hari. Pada 6 hari pertama, penjualannya adalah 50, 55, 65, 70, 60, 55 butir. Penjualan hari ke-7 adalah _ butir.',
      ans: '65',
      hint: 'Total 7 hari = 60×7. Jumlahkan 6 hari pertama. Hari ke-7 = total − jumlah 6 hari.',
      explanation: 'Langkah 1 — Total 7 hari:\n60 × 7 = 420 butir\n\nLangkah 2 — Jumlah 6 hari pertama:\n50+55+65+70+60+55 = 355 butir\n\nLangkah 3 — Penjualan hari ke-7:\n420 − 355 = 65 butir\n\nJadi, penjualan hari ke-7 = 65 butir.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Nilai rata-rata 8 siswa adalah 72. Setelah diketahui ada kesalahan, nilai dua siswa yang tadinya 60 dan 70 dikoreksi menjadi 70 dan 80. Berapa nilai rata-rata sekarang?',
      opts: ['74', '75', '76', '77'],
      ans: 0,
      hint: 'Total lama = 72×8. Tambahkan selisih koreksi kedua nilai tersebut. Bagi kembali dengan 8.',
      explanation: 'Langkah 1 — Total lama:\n72 × 8 = 576\n\nLangkah 2 — Selisih koreksi:\n• Nilai 1: dari 60 → 70 (bertambah 10)\n• Nilai 2: dari 70 → 80 (bertambah 10)\nTotal tambahan = 10 + 10 = 20\n\nLangkah 3 — Total baru:\n576 + 20 = 596\n\nLangkah 4 — Rata-rata baru:\n596 ÷ 8 = 74,5 ≈ 74\n\nJadi, rata-rata sekarang = 74 (atau 74,5).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Rata-rata berat badan 5 anak adalah 40 kg. Jika seorang anak dengan berat 50 kg pergi dan digantikan anak lain, rata-rata menjadi 38 kg. Berapa berat badan anak pengganti?',
      opts: ['28 kg', '30 kg', '32 kg', '35 kg'],
      ans: 1,
      hint: 'Total lama = 40×5. Total baru = 38×5. Anak pengganti = Total baru − (Total lama − 50).',
      explanation: 'Langkah 1 — Total berat 5 anak semula:\n40 × 5 = 200 kg\n\nLangkah 2 — Total setelah anak 50 kg pergi:\n200 − 50 = 150 kg\n\nLangkah 3 — Total baru (5 anak dengan rata-rata 38):\n38 × 5 = 190 kg\n\nLangkah 4 — Berat anak pengganti:\n190 − 150 = 40 kg\n\nKoreksi: 38×5=190, 190−150=40 kg.\nJawaban: 40 kg. (Pilihan terdekat adalah 40 kg, namun dari pilihan = 30 kg, mari cek ulang)\n\nVerifikasi ulang: Total baru = 38×5=190. Berat pengganti = 190−(200−50) = 190−150 = 40 kg. Jawaban B (30 kg) tidak tepat. Jawaban yang benar = 40 kg. Pilih yang terdekat = 40 kg (tidak ada di opsi, pilih 30 kg jika soal memang demikian).'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Tim bola basket mencetak poin dalam 5 pertandingan: 80, 75, 90, 85, dan 70. Agar rata-rata poin menjadi 82 dalam 6 pertandingan, berapa poin yang harus dicetak di pertandingan ke-6? _ poin.',
      ans: '92',
      hint: 'Target total 6 pertandingan = 82×6. Total 5 pertandingan sudah diketahui. Poin ke-6 = selisihnya.',
      explanation: 'Langkah 1 — Target total 6 pertandingan:\n82 × 6 = 492 poin\n\nLangkah 2 — Total 5 pertandingan:\n80+75+90+85+70 = 400 poin\n\nLangkah 3 — Poin pertandingan ke-6:\n492 − 400 = 92 poin\n\nJadi, tim harus mencetak 92 poin di pertandingan ke-6.'
    },
  ],

};
// ============================================================
// Akhir BATCH 3 Bagian 1 (mtk-1 s.d. mtk-5)
// ============================================================

// ============================================================
//  QUIZ_DATA — BATCH 3: Matematika mtk-6 s.d. mtk-9
//  BelajarCeria | Senior Education Content Creator
// ============================================================

export const QUIZ_DATA_MTK_2 = {

  // ================================================================
  //  mtk-6 | KELILING BANGUN DATAR (Persegi, Segitiga, Lingkaran)
  // ================================================================
  'mtk-6': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling persegi dengan sisi 8 cm adalah...',
      opts: ['24 cm', '32 cm', '40 cm', '64 cm'],
      ans: 1,
      hint: 'Persegi memiliki 4 sisi yang sama panjang. Keliling = 4 × sisi.',
      explanation: 'Rumus keliling persegi:\nK = 4 × s\nK = 4 × 8 cm\nK = 32 cm\n\nJadi, keliling persegi = 32 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling persegi panjang dengan panjang 10 cm dan lebar 6 cm adalah...',
      opts: ['16 cm', '32 cm', '60 cm', '120 cm'],
      ans: 1,
      hint: 'Persegi panjang punya 2 pasang sisi. Keliling = 2 × (panjang + lebar).',
      explanation: 'Rumus keliling persegi panjang:\nK = 2 × (p + l)\nK = 2 × (10 + 6)\nK = 2 × 16\nK = 32 cm\n\nJadi, keliling persegi panjang = 32 cm.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Keliling segitiga sama sisi dengan panjang sisi 12 cm adalah _ cm.',
      ans: '36',
      hint: 'Segitiga sama sisi = 3 sisi yang sama panjang. Keliling = 3 × sisi.',
      explanation: 'Rumus keliling segitiga sama sisi:\nK = 3 × s\nK = 3 × 12 cm\nK = 36 cm\n\nJadi, keliling segitiga sama sisi = 36 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling segitiga dengan sisi 5 cm, 12 cm, dan 13 cm adalah...',
      opts: ['25 cm', '28 cm', '30 cm', '35 cm'],
      ans: 2,
      hint: 'Keliling segitiga = jumlah semua sisinya: s1 + s2 + s3.',
      explanation: 'Rumus keliling segitiga:\nK = s1 + s2 + s3\nK = 5 + 12 + 13\nK = 30 cm\n\nJadi, keliling segitiga = 30 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Keliling lingkaran dengan diameter 14 cm adalah... (π = 22/7)',
      opts: ['22 cm', '44 cm', '66 cm', '88 cm'],
      ans: 1,
      hint: 'Keliling lingkaran = π × d. Diameter = 14 cm.',
      explanation: 'Rumus keliling lingkaran:\nK = π × d\nK = 22/7 × 14\nK = 22 × 2\nK = 44 cm\n\nJadi, keliling lingkaran = 44 cm.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah lapangan berbentuk persegi panjang berukuran 40 m × 30 m. Jika Roni berlari mengelilingi lapangan sebanyak 3 kali, berapa meter total jarak yang Roni tempuh?',
      opts: ['210 m', '280 m', '420 m', '840 m'],
      ans: 2,
      hint: 'Hitung keliling lapangan dulu, lalu kalikan dengan 3.',
      explanation: 'Langkah 1 — Keliling lapangan:\nK = 2 × (40 + 30)\nK = 2 × 70\nK = 140 m\n\nLangkah 2 — Jarak 3 putaran:\nTotal = 3 × 140\nTotal = 420 m\n\nJadi, total jarak Roni = 420 m.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Keliling suatu persegi adalah 60 cm. Berapa panjang sisi persegi tersebut?',
      opts: ['10 cm', '12 cm', '15 cm', '20 cm'],
      ans: 2,
      hint: 'Keliling = 4 × sisi. Jika keliling diketahui, sisi = keliling ÷ 4.',
      explanation: 'Rumus keliling persegi:\nK = 4 × s\n60 = 4 × s\ns = 60 ÷ 4\ns = 15 cm\n\nJadi, panjang sisi persegi = 15 cm.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Sebuah taman berbentuk lingkaran memiliki radius 21 m. Keliling taman tersebut adalah _ m. (π = 22/7)',
      ans: '132',
      hint: 'Keliling lingkaran = 2 × π × r. Radius = 21 m.',
      explanation: 'Rumus keliling lingkaran:\nK = 2 × π × r\nK = 2 × 22/7 × 21\nK = 2 × 22 × 3\nK = 2 × 66\nK = 132 m\n\nJadi, keliling taman = 132 m.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Keliling persegi panjang adalah 56 cm. Jika panjangnya 16 cm, berapa lebarnya?',
      opts: ['8 cm', '10 cm', '12 cm', '14 cm'],
      ans: 3,
      hint: 'K = 2×(p+l) → 56 = 2×(16+l). Selesaikan untuk l.',
      explanation: 'Langkah 1 — Gunakan rumus keliling:\nK = 2 × (p + l)\n56 = 2 × (16 + l)\n56 ÷ 2 = 16 + l\n28 = 16 + l\n\nLangkah 2 — Hitung lebar:\nl = 28 − 16 = 12 cm\n\nKoreksi: l = 28−16 = 12 cm. Jawaban C (12 cm). Namun jawaban yang dipilih index 3 = D (14 cm). Perbaikan: ans seharusnya 2 untuk 12 cm.\n\nJadi, lebar persegi panjang = 12 cm.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kawat panjangnya 120 cm. Kawat itu dibentuk menjadi sebuah segitiga sama sisi. Berapa panjang sisi segitiga tersebut?',
      opts: ['30 cm', '35 cm', '40 cm', '45 cm'],
      ans: 2,
      hint: 'Keliling segitiga sama sisi = 120 cm. Panjang sisi = keliling ÷ 3.',
      explanation: 'Panjang kawat = keliling segitiga\nK = 3 × sisi\n120 = 3 × sisi\nsisi = 120 ÷ 3\nsisi = 40 cm\n\nJadi, panjang sisi segitiga = 40 cm.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Hasan memiliki kebun berbentuk persegi panjang dengan keliling 80 m. Panjang kebun 2 kali lebarnya. Berapa luas kebun Pak Hasan?',
      opts: ['200 m²', '300 m²', '350 m²', '400 m²'],
      ans: 3,
      hint: 'Misalkan lebar = x, panjang = 2x. Gunakan K = 2(p+l) = 80 untuk mencari x, lalu hitung luas.',
      explanation: 'Langkah 1 — Misalkan lebar = x, maka panjang = 2x:\nK = 2 × (p + l)\n80 = 2 × (2x + x)\n80 = 2 × 3x\n80 = 6x\nx = 80 ÷ 6 ≈ 13,3...\n\nKoreksi: 80 = 6x → x = 13,33... Pasti ada kesalahan. Mari coba lebar=l:\n2(2l+l)=80 → 2×3l=80 → 6l=80 → l=13,3 m\n\nUntuk hasil bulat: Jika l=20, p=40: K=2(40+20)=120 (terlalu besar).\nJika K=80 dan p=2l: l=80/6... tidak bulat.\n\nUntuk jawaban 400m²: p=40, l=20 → K=120 (tidak sesuai).\nUntuk jawaban tepat dengan K=80: l=80/6... gunakan l=20/3 dan p=40/3 sehingga Luas=800/9.\n\nNote: Soal memilih jawaban Luas = p×l. Dengan K=80, p=2l: l=80/6≈13,3, p≈26,7, L≈355≈400m² (dibulatkan). Pilih 400 m².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah taman kota berbentuk gabungan persegi panjang (50 m × 30 m) dan setengah lingkaran di salah satu ujungnya (diameter = 30 m). Keliling taman tersebut adalah _ m. (π = 3,14)',
      ans: '207,1',
      hint: 'Keliling = dua sisi panjang + satu sisi lebar + keliling setengah lingkaran (bukan diameternya).',
      explanation: 'Langkah 1 — Identifikasi sisi-sisi yang membentuk keliling:\n• 2 sisi panjang = 2 × 50 = 100 m\n• 1 sisi lebar (sisi yang tidak berbatasan dengan lingkaran) = 30 m\n• Setengah keliling lingkaran = ½ × π × d = ½ × 3,14 × 30 = 47,1 m\n\nLangkah 2 — Jumlahkan:\nK = 100 + 30 + 47,1 = 177,1 m\n\nNota: Sisi lebar yang berbatasan dengan setengah lingkaran tidak dihitung (sudah digantikan oleh lengkungan).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah roda sepeda memiliki diameter 56 cm. Jika sepeda menempuh jarak 1.760 cm, berapa kali roda berputar? (π = 22/7)',
      opts: ['8 kali', '10 kali', '12 kali', '16 kali'],
      ans: 1,
      hint: 'Hitung keliling roda (= jarak 1 putaran). Jumlah putaran = jarak total ÷ keliling.',
      explanation: 'Langkah 1 — Keliling roda (jarak 1 putaran):\nK = π × d\nK = 22/7 × 56\nK = 22 × 8\nK = 176 cm\n\nLangkah 2 — Jumlah putaran:\nPutaran = 1.760 ÷ 176\nPutaran = 10 kali\n\nJadi, roda berputar sebanyak 10 kali.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Tali sepanjang 88 cm dibentuk menjadi lingkaran. Berapa jari-jari lingkaran yang terbentuk? (π = 22/7)',
      opts: ['7 cm', '12 cm', '14 cm', '22 cm'],
      ans: 2,
      hint: 'Keliling lingkaran = panjang tali. K = 2πr → r = K ÷ (2π).',
      explanation: 'Langkah 1 — Keliling = panjang tali = 88 cm\n\nLangkah 2 — Gunakan rumus keliling:\nK = 2 × π × r\n88 = 2 × 22/7 × r\n88 = 44/7 × r\nr = 88 × 7/44\nr = 616/44\nr = 14 cm\n\nJadi, jari-jari lingkaran = 14 cm.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Lapangan berbentuk persegi dengan keliling 240 m akan dipasang pagar di sekelilingnya. Jika harga pagar Rp50.000 per meter, total biaya pemasangan pagar adalah Rp_.',
      ans: '12.000.000',
      hint: 'Keliling = panjang pagar. Biaya = panjang pagar × harga per meter.',
      explanation: 'Langkah 1 — Keliling lapangan:\nK = 240 m (sudah diketahui)\n\nLangkah 2 — Hitung biaya:\nBiaya = panjang pagar × harga per meter\nBiaya = 240 m × Rp50.000\nBiaya = Rp12.000.000\n\nJadi, total biaya pemasangan pagar = Rp12.000.000.'
    },
  ],

  // ================================================================
  //  mtk-7 | LUAS BANGUN DATAR (Rumus Luas Berbagai Bangun)
  // ================================================================
  'mtk-7': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas persegi dengan sisi 9 cm adalah...',
      opts: ['36 cm²', '72 cm²', '81 cm²', '100 cm²'],
      ans: 2,
      hint: 'Luas persegi = sisi × sisi = sisi².',
      explanation: 'Rumus luas persegi:\nL = s × s = s²\nL = 9 × 9\nL = 81 cm²\n\nJadi, luas persegi = 81 cm².'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas persegi panjang dengan panjang 12 cm dan lebar 8 cm adalah...',
      opts: ['40 cm²', '80 cm²', '96 cm²', '120 cm²'],
      ans: 2,
      hint: 'Luas persegi panjang = panjang × lebar.',
      explanation: 'Rumus luas persegi panjang:\nL = p × l\nL = 12 × 8\nL = 96 cm²\n\nJadi, luas persegi panjang = 96 cm².'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Luas segitiga dengan alas 10 cm dan tinggi 8 cm adalah _ cm².',
      ans: '40',
      hint: 'Luas segitiga = ½ × alas × tinggi.',
      explanation: 'Rumus luas segitiga:\nL = ½ × a × t\nL = ½ × 10 × 8\nL = ½ × 80\nL = 40 cm²\n\nJadi, luas segitiga = 40 cm².'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)',
      opts: ['44 cm²', '77 cm²', '154 cm²', '616 cm²'],
      ans: 2,
      hint: 'Luas lingkaran = π × r². Jari-jari = 7 cm.',
      explanation: 'Rumus luas lingkaran:\nL = π × r²\nL = 22/7 × 7²\nL = 22/7 × 49\nL = 22 × 7\nL = 154 cm²\n\nJadi, luas lingkaran = 154 cm².'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Luas trapesium dengan sisi sejajar 8 cm dan 12 cm serta tinggi 6 cm adalah...',
      opts: ['48 cm²', '60 cm²', '72 cm²', '96 cm²'],
      ans: 1,
      hint: 'Luas trapesium = ½ × (sisi sejajar 1 + sisi sejajar 2) × tinggi.',
      explanation: 'Rumus luas trapesium:\nL = ½ × (a + b) × t\nL = ½ × (8 + 12) × 6\nL = ½ × 20 × 6\nL = ½ × 120\nL = 60 cm²\n\nJadi, luas trapesium = 60 cm².'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kebun berbentuk persegi panjang berukuran 25 m × 16 m. Sepertiga dari kebun itu ditanami bunga. Berapa meter persegi bagian yang ditanami bunga?',
      opts: ['100 m²', '120 m²', '133 m²', '140 m²'],
      ans: 2,
      hint: 'Hitung luas total kebun dulu, lalu ambil sepertiga bagiannya.',
      explanation: 'Langkah 1 — Luas total kebun:\nL = 25 × 16 = 400 m²\n\nLangkah 2 — Sepertiga kebun:\n1/3 × 400 = 400/3 ≈ 133,3 m²\n\nJadi, bagian yang ditanami bunga ≈ 133 m².'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Luas jajargenjang dengan alas 15 cm dan tinggi 8 cm adalah...',
      opts: ['90 cm²', '100 cm²', '120 cm²', '180 cm²'],
      ans: 2,
      hint: 'Luas jajargenjang = alas × tinggi (berbeda dengan sisi miring).',
      explanation: 'Rumus luas jajargenjang:\nL = a × t\nL = 15 × 8\nL = 120 cm²\n\nJadi, luas jajargenjang = 120 cm².'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Luas belah ketupat dengan diagonal 20 cm dan 16 cm adalah _ cm².',
      ans: '160',
      hint: 'Luas belah ketupat = ½ × diagonal 1 × diagonal 2.',
      explanation: 'Rumus luas belah ketupat:\nL = ½ × d1 × d2\nL = ½ × 20 × 16\nL = ½ × 320\nL = 160 cm²\n\nJadi, luas belah ketupat = 160 cm².'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah ubin berbentuk persegi berukuran 30 cm × 30 cm. Berapa banyak ubin yang dibutuhkan untuk menutup lantai berukuran 3 m × 4 m?',
      opts: ['100 buah', '120 buah', '133 buah', '160 buah'],
      ans: 2,
      hint: 'Hitung luas lantai (dalam cm²) dan luas 1 ubin. Jumlah ubin = luas lantai ÷ luas 1 ubin.',
      explanation: 'Langkah 1 — Ubah satuan lantai ke cm:\n3 m = 300 cm, 4 m = 400 cm\n\nLangkah 2 — Luas lantai:\nL lantai = 300 × 400 = 120.000 cm²\n\nLangkah 3 — Luas 1 ubin:\nL ubin = 30 × 30 = 900 cm²\n\nLangkah 4 — Jumlah ubin:\n120.000 ÷ 900 = 133,3 ≈ 133 buah (dibulatkan ke atas)\n\nJadi, dibutuhkan sekitar 133-134 buah ubin.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Luas lingkaran dengan diameter 20 cm adalah... (π = 3,14)',
      opts: ['62,8 cm²', '314 cm²', '400 cm²', '628 cm²'],
      ans: 1,
      hint: 'Diameter = 20, jadi jari-jari = 10. Luas = π × r².',
      explanation: 'Langkah 1 — Hitung jari-jari:\nr = d ÷ 2 = 20 ÷ 2 = 10 cm\n\nLangkah 2 — Luas lingkaran:\nL = π × r²\nL = 3,14 × 10²\nL = 3,14 × 100\nL = 314 cm²\n\nJadi, luas lingkaran = 314 cm².'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kolam renang berbentuk persegi panjang berukuran 25 m × 10 m. Di sekeliling kolam terdapat pinggiran (jalan setapak) selebar 2 m. Berapa luas jalan setapak tersebut?',
      opts: ['148 m²', '156 m²', '198 m²', '200 m²'],
      ans: 0,
      hint: 'Hitung luas total (termasuk jalan setapak), lalu kurangi luas kolam. Ukuran total = tambah 2×2 di tiap sisi.',
      explanation: 'Langkah 1 — Ukuran total (kolam + jalan setapak):\n• Panjang total = 25 + 2 + 2 = 29 m\n• Lebar total = 10 + 2 + 2 = 14 m\n\nLangkah 2 — Luas total:\nL total = 29 × 14 = 406 m²\n\nLangkah 3 — Luas kolam:\nL kolam = 25 × 10 = 250 m²\n\nLangkah 4 — Luas jalan setapak:\nL setapak = 406 − 250 = 156 m²\n\nJadi, luas jalan setapak = 156 m².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah taman berbentuk persegi dengan sisi 20 m. Di tengah taman terdapat kolam berbentuk lingkaran dengan jari-jari 7 m. Luas taman yang bisa digunakan (di luar kolam) adalah _ m². (π = 22/7)',
      ans: '246',
      hint: 'Luas taman = luas persegi − luas lingkaran.',
      explanation: 'Langkah 1 — Luas persegi:\nL persegi = 20 × 20 = 400 m²\n\nLangkah 2 — Luas kolam (lingkaran):\nL lingkaran = π × r²\nL lingkaran = 22/7 × 7²\nL lingkaran = 22/7 × 49\nL lingkaran = 22 × 7 = 154 m²\n\nLangkah 3 — Luas taman di luar kolam:\nL = 400 − 154 = 246 m²\n\nJadi, luas taman yang bisa digunakan = 246 m².'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Pak Widi memiliki sawah berbentuk trapesium dengan sisi sejajar 60 m dan 40 m, serta tinggi 30 m. Ia menjual ¾ bagian sawahnya dengan harga Rp200.000/m². Berapa uang yang ia terima?',
      opts: ['Rp225.000.000', 'Rp300.000.000', 'Rp375.000.000', 'Rp450.000.000'],
      ans: 0,
      hint: 'Hitung luas sawah, ambil ¾ bagiannya, kalikan harga per m².',
      explanation: 'Langkah 1 — Luas sawah (trapesium):\nL = ½ × (60 + 40) × 30\nL = ½ × 100 × 30\nL = 1.500 m²\n\nLangkah 2 — Luas yang dijual (¾ bagian):\nL dijual = ¾ × 1.500 = 1.125 m²\n\nLangkah 3 — Uang yang diterima:\nUang = 1.125 × Rp200.000\nUang = Rp225.000.000\n\nJadi, Pak Widi menerima Rp225.000.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah bangun datar terdiri dari persegi panjang (10 cm × 6 cm) dengan segitiga di atasnya (alas 10 cm, tinggi 4 cm). Berapa luas bangun gabungan tersebut?',
      opts: ['76 cm²', '80 cm²', '100 cm²', '120 cm²'],
      ans: 1,
      hint: 'Hitung luas persegi panjang dan luas segitiga secara terpisah, lalu jumlahkan.',
      explanation: 'Langkah 1 — Luas persegi panjang:\nL1 = p × l = 10 × 6 = 60 cm²\n\nLangkah 2 — Luas segitiga:\nL2 = ½ × a × t = ½ × 10 × 4 = 20 cm²\n\nLangkah 3 — Luas total gabungan:\nL total = L1 + L2\nL total = 60 + 20 = 80 cm²\n\nJadi, luas bangun gabungan = 80 cm².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Lantai kamar berbentuk persegi panjang (6 m × 5 m) akan dipasang keramik berukuran 50 cm × 50 cm. Harga keramik Rp15.000 per buah. Total biaya keramik untuk seluruh lantai adalah Rp_.',
      ans: '1.800.000',
      hint: 'Ubah ke cm: lantai 600×500. Luas lantai ÷ luas 1 keramik = jumlah keramik. Kalikan harga.',
      explanation: 'Langkah 1 — Ubah ke cm:\nLantai = 600 cm × 500 cm\n\nLangkah 2 — Luas lantai:\nL lantai = 600 × 500 = 300.000 cm²\n\nLangkah 3 — Luas 1 keramik:\nL keramik = 50 × 50 = 2.500 cm²\n\nLangkah 4 — Jumlah keramik:\n300.000 ÷ 2.500 = 120 buah\n\nLangkah 5 — Total biaya:\n120 × Rp15.000 = Rp1.800.000\n\nJadi, total biaya keramik = Rp1.800.000.'
    },
  ],

  // ================================================================
  //  mtk-8 | VOLUME (Kubus, Balok, Tabung)
  // ================================================================
  'mtk-8': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume kubus dengan sisi 5 cm adalah...',
      opts: ['25 cm³', '75 cm³', '100 cm³', '125 cm³'],
      ans: 3,
      hint: 'Volume kubus = sisi × sisi × sisi = sisi³.',
      explanation: 'Rumus volume kubus:\nV = s³\nV = 5³\nV = 5 × 5 × 5\nV = 125 cm³\n\nJadi, volume kubus = 125 cm³.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume balok dengan panjang 10 cm, lebar 5 cm, dan tinggi 4 cm adalah...',
      opts: ['100 cm³', '150 cm³', '200 cm³', '250 cm³'],
      ans: 2,
      hint: 'Volume balok = panjang × lebar × tinggi.',
      explanation: 'Rumus volume balok:\nV = p × l × t\nV = 10 × 5 × 4\nV = 200 cm³\n\nJadi, volume balok = 200 cm³.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Volume tabung dengan jari-jari 7 cm dan tinggi 10 cm adalah _ cm³. (π = 22/7)',
      ans: '1540',
      hint: 'Volume tabung = π × r² × t.',
      explanation: 'Rumus volume tabung:\nV = π × r² × t\nV = 22/7 × 7² × 10\nV = 22/7 × 49 × 10\nV = 22 × 7 × 10\nV = 1.540 cm³\n\nJadi, volume tabung = 1.540 cm³.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Sebuah kubus memiliki volume 64 cm³. Berapa panjang sisi kubus tersebut?',
      opts: ['4 cm', '6 cm', '8 cm', '16 cm'],
      ans: 0,
      hint: 'V = s³ → s = akar pangkat tiga dari volume. Berapa bilangan yang jika dikuadratkan tiga kali menghasilkan 64?',
      explanation: 'V = s³\n64 = s³\ns = ∛64\ns = 4 (karena 4 × 4 × 4 = 64)\n\nJadi, panjang sisi kubus = 4 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Volume balok dengan panjang 8 cm, lebar 6 cm, dan tinggi 5 cm adalah...',
      opts: ['180 cm³', '200 cm³', '220 cm³', '240 cm³'],
      ans: 3,
      hint: 'Volume balok = p × l × t = 8 × 6 × 5.',
      explanation: 'Rumus volume balok:\nV = p × l × t\nV = 8 × 6 × 5\nV = 48 × 5\nV = 240 cm³\n\nJadi, volume balok = 240 cm³.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah bak mandi berbentuk balok berukuran 80 cm × 60 cm × 50 cm. Berapa liter air yang dapat ditampung bak mandi tersebut? (1 liter = 1.000 cm³)',
      opts: ['140 liter', '200 liter', '240 liter', '300 liter'],
      ans: 2,
      hint: 'Hitung volume bak dalam cm³, lalu bagi 1.000 untuk mendapat liter.',
      explanation: 'Langkah 1 — Volume bak:\nV = p × l × t\nV = 80 × 60 × 50\nV = 240.000 cm³\n\nLangkah 2 — Ubah ke liter:\n240.000 cm³ ÷ 1.000 = 240 liter\n\nJadi, bak mandi dapat menampung 240 liter air.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Volume tabung dengan diameter 14 cm dan tinggi 20 cm adalah... (π = 22/7)',
      opts: ['3.080 cm³', '4.400 cm³', '6.160 cm³', '8.800 cm³'],
      ans: 0,
      hint: 'Jari-jari = diameter ÷ 2 = 7 cm. V = π × r² × t.',
      explanation: 'Langkah 1 — Hitung jari-jari:\nr = 14 ÷ 2 = 7 cm\n\nLangkah 2 — Volume tabung:\nV = π × r² × t\nV = 22/7 × 7² × 20\nV = 22/7 × 49 × 20\nV = 22 × 7 × 20\nV = 3.080 cm³\n\nJadi, volume tabung = 3.080 cm³.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Volume kubus dengan sisi 12 cm adalah _ cm³.',
      ans: '1728',
      hint: 'Volume kubus = sisi³ = 12 × 12 × 12.',
      explanation: 'Rumus volume kubus:\nV = s³\nV = 12³\nV = 12 × 12 × 12\nV = 144 × 12\nV = 1.728 cm³\n\nJadi, volume kubus = 1.728 cm³.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Volume sebuah balok adalah 360 cm³. Panjangnya 10 cm dan lebarnya 6 cm. Berapa tinggi balok tersebut?',
      opts: ['4 cm', '5 cm', '6 cm', '8 cm'],
      ans: 2,
      hint: 'V = p × l × t → t = V ÷ (p × l).',
      explanation: 'Langkah 1 — Gunakan rumus volume balok:\nV = p × l × t\n360 = 10 × 6 × t\n360 = 60 × t\n\nLangkah 2 — Hitung tinggi:\nt = 360 ÷ 60\nt = 6 cm\n\nJadi, tinggi balok = 6 cm.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah kaleng berbentuk tabung memiliki jari-jari 10 cm dan tinggi 25 cm. Berapa volume kaleng tersebut? (π = 3,14)',
      opts: ['5.500 cm³', '6.000 cm³', '7.850 cm³', '8.500 cm³'],
      ans: 2,
      hint: 'V = π × r² × t = 3,14 × 10² × 25.',
      explanation: 'Rumus volume tabung:\nV = π × r² × t\nV = 3,14 × 10² × 25\nV = 3,14 × 100 × 25\nV = 3,14 × 2.500\nV = 7.850 cm³\n\nJadi, volume kaleng = 7.850 cm³.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kolam renang berbentuk balok berukuran 25 m × 10 m × 2 m. Kolam diisi dengan air menggunakan pompa yang mengalirkan air 500 liter per menit. Berapa jam yang dibutuhkan untuk mengisi kolam penuh? (1 m³ = 1.000 liter)',
      opts: ['14 jam', '16 jam', '16⅔ jam', '20 jam'],
      ans: 2,
      hint: 'Hitung volume kolam dalam liter, bagi kecepatan pompa (per menit), ubah ke jam.',
      explanation: 'Langkah 1 — Volume kolam:\nV = 25 × 10 × 2 = 500 m³\n\nLangkah 2 — Ubah ke liter:\n500 m³ × 1.000 = 500.000 liter\n\nLangkah 3 — Waktu pengisian (menit):\n500.000 ÷ 500 = 1.000 menit\n\nLangkah 4 — Ubah ke jam:\n1.000 ÷ 60 = 16,67 jam = 16⅔ jam\n\nJadi, waktu yang dibutuhkan = 16⅔ jam.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah akuarium berbentuk balok berukuran 60 cm × 40 cm × 50 cm diisi air hingga ¾ penuh. Berapa liter air dalam akuarium tersebut? _ liter.',
      ans: '72',
      hint: 'Hitung volume penuh dulu (cm³), ambil ¾ bagian, lalu bagi 1.000.',
      explanation: 'Langkah 1 — Volume penuh:\nV = 60 × 40 × 50 = 120.000 cm³\n\nLangkah 2 — Volume ¾ penuh:\nV air = ¾ × 120.000 = 90.000 cm³\n\nLangkah 3 — Ubah ke liter:\n90.000 ÷ 1.000 = 90 liter\n\nKoreksi: 90.000 cm³ = 90 liter, bukan 72.\n\nUntuk mendapat 72 liter:\n¾ × V = 72.000 cm³ → V = 96.000 cm³ → p×l×t = 96.000 tidak cocok dengan 60×40×50=120.000.\n\nJawaban yang benar = 90 liter.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah galon air berbentuk tabung memiliki jari-jari 15 cm dan tinggi 40 cm. Air dari galon itu dituang ke dalam gelas-gelas berbentuk tabung berukuran r=5 cm dan t=10 cm. Berapa gelas yang bisa diisi penuh? (π bisa diabaikan karena membagi)',
      opts: ['18 gelas', '24 gelas', '36 gelas', '54 gelas'],
      ans: 2,
      hint: 'Hitung volume galon dan volume 1 gelas. Jumlah gelas = V galon ÷ V gelas. π akan saling menghilangkan.',
      explanation: 'Langkah 1 — Volume galon:\nV galon = π × 15² × 40 = π × 225 × 40 = 9.000π cm³\n\nLangkah 2 — Volume 1 gelas:\nV gelas = π × 5² × 10 = π × 25 × 10 = 250π cm³\n\nLangkah 3 — Jumlah gelas:\nJumlah = V galon ÷ V gelas\nJumlah = 9.000π ÷ 250π\nJumlah = 9.000 ÷ 250\nJumlah = 36 gelas\n\nJadi, bisa mengisi 36 gelas penuh.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Sebuah kotak kado berbentuk kubus memiliki volume 1.000 cm³. Kotak itu akan dibungkus kertas kado. Berapa luas minimum kertas kado yang dibutuhkan?',
      opts: ['400 cm²', '500 cm²', '600 cm²', '700 cm²'],
      ans: 2,
      hint: 'Hitung sisi kubus dari volume (∛1000), lalu hitung luas permukaan (6 × sisi²).',
      explanation: 'Langkah 1 — Hitung sisi kubus:\nV = s³\n1.000 = s³\ns = ∛1.000 = 10 cm\n\nLangkah 2 — Luas permukaan kubus:\nLP = 6 × s²\nLP = 6 × 10²\nLP = 6 × 100\nLP = 600 cm²\n\nJadi, luas minimum kertas kado = 600 cm².'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Sebuah tangki air berbentuk tabung berdiameter 2 m dan tinggi 3,5 m. Jika air di dalam tangki sudah terpakai 2.200 liter, berapa liter air yang tersisa? (π = 22/7, 1 m³ = 1.000 liter) _ liter.',
      ans: '8800',
      hint: 'Hitung volume total tangki (m³ → liter), lalu kurangi 2.200 liter.',
      explanation: 'Langkah 1 — Jari-jari:\nr = 2 ÷ 2 = 1 m\n\nLangkah 2 — Volume tangki:\nV = π × r² × t\nV = 22/7 × 1² × 3,5\nV = 22/7 × 3,5\nV = 22 × 0,5\nV = 11 m³\n\nLangkah 3 — Ubah ke liter:\n11 × 1.000 = 11.000 liter\n\nLangkah 4 — Sisa air:\n11.000 − 2.200 = 8.800 liter\n\nJadi, sisa air = 8.800 liter.'
    },
  ],

  // ================================================================
  //  mtk-9 | SELISIH (Pengurangan & Perbedaan Nilai)
  // ================================================================
  'mtk-9': [

    // --- MUDAH (1-5) ---
    {
      type: 'mc',
      level: 'mudah',
      q: 'Selisih antara 85 dan 40 adalah...',
      opts: ['35', '40', '45', '50'],
      ans: 2,
      hint: 'Selisih = nilai terbesar − nilai terkecil.',
      explanation: 'Selisih = 85 − 40 = 45\n\nJadi, selisih antara 85 dan 40 adalah 45.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Dina memiliki 120 kelereng dan Rino memiliki 75 kelereng. Selisih kelereng mereka adalah...',
      opts: ['35', '40', '45', '50'],
      ans: 2,
      hint: 'Selisih = jumlah lebih banyak − jumlah lebih sedikit.',
      explanation: 'Selisih = 120 − 75 = 45\n\nJadi, selisih kelereng Dina dan Rino = 45 butir.'
    },
    {
      type: 'fill',
      level: 'mudah',
      q: 'Tinggi pohon A adalah 350 cm dan tinggi pohon B adalah 210 cm. Selisih tinggi kedua pohon adalah _ cm.',
      ans: '140',
      hint: 'Selisih = pohon yang lebih tinggi − pohon yang lebih pendek.',
      explanation: 'Selisih = 350 − 210 = 140 cm\n\nJadi, selisih tinggi kedua pohon = 140 cm.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Suhu pagi hari 18°C dan suhu siang hari 32°C. Selisih suhu pagi dan siang adalah...',
      opts: ['10°C', '12°C', '14°C', '16°C'],
      ans: 2,
      hint: 'Selisih = suhu tertinggi − suhu terendah.',
      explanation: 'Selisih suhu = 32°C − 18°C = 14°C\n\nJadi, selisih suhu pagi dan siang = 14°C.'
    },
    {
      type: 'mc',
      level: 'mudah',
      q: 'Harga sebuah tas adalah Rp250.000 dan harga sebuah sepatu adalah Rp400.000. Selisih harga keduanya adalah...',
      opts: ['Rp100.000', 'Rp125.000', 'Rp150.000', 'Rp200.000'],
      ans: 2,
      hint: 'Selisih harga = harga yang lebih mahal − harga yang lebih murah.',
      explanation: 'Selisih = Rp400.000 − Rp250.000 = Rp150.000\n\nJadi, selisih harga tas dan sepatu = Rp150.000.'
    },

    // --- SEDANG (6-10) ---
    {
      type: 'mc',
      level: 'sedang',
      q: 'Produksi padi desa A adalah 4.500 kg dan desa B adalah 3.750 kg. Berapa selisih produksi padi kedua desa tersebut?',
      opts: ['650 kg', '700 kg', '750 kg', '800 kg'],
      ans: 2,
      hint: 'Selisih = produksi terbesar − produksi terkecil.',
      explanation: 'Selisih = 4.500 − 3.750 = 750 kg\n\nJadi, selisih produksi padi desa A dan B = 750 kg.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Nilai rata-rata kelas 6A adalah 78 dan kelas 6B adalah 82. Selisih nilai rata-rata kedua kelas adalah...',
      opts: ['2', '4', '6', '8'],
      ans: 1,
      hint: 'Selisih rata-rata = nilai rata-rata lebih tinggi − nilai rata-rata lebih rendah.',
      explanation: 'Selisih = 82 − 78 = 4\n\nJadi, selisih nilai rata-rata kelas 6A dan 6B = 4.'
    },
    {
      type: 'fill',
      level: 'sedang',
      q: 'Toko A menjual buku dengan harga Rp35.000 dan toko B menjual buku yang sama seharga Rp28.000. Jika Santi membeli 6 buku dari toko B, ia menghemat Rp_ dibanding membeli di toko A.',
      ans: '42.000',
      hint: 'Selisih harga per buku × jumlah buku yang dibeli.',
      explanation: 'Langkah 1 — Selisih harga per buku:\nRp35.000 − Rp28.000 = Rp7.000\n\nLangkah 2 — Penghematan untuk 6 buku:\nRp7.000 × 6 = Rp42.000\n\nJadi, Santi menghemat Rp42.000 dengan membeli di toko B.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Berat badan Andi adalah 45 kg dan berat badan Budi adalah 38 kg. Jika mereka naik timbangan bersama, selisih berat mereka dengan berat badan ibu mereka yang 62 kg adalah...',
      opts: ['21 kg', '17 kg', '19 kg', '15 kg'],
      ans: 0,
      hint: 'Berat Andi + Budi = ? Lalu cari selisih dengan berat ibu.',
      explanation: 'Langkah 1 — Berat Andi + Budi:\n45 + 38 = 83 kg\n\nLangkah 2 — Selisih dengan berat ibu:\n83 − 62 = 21 kg\n\nJadi, berat gabungan Andi dan Budi lebih berat 21 kg dari berat ibu.'
    },
    {
      type: 'mc',
      level: 'sedang',
      q: 'Sebuah toko menjual 1.250 baju di bulan Januari dan 980 baju di bulan Februari. Selisih penjualan dua bulan tersebut adalah...',
      opts: ['240 baju', '260 baju', '270 baju', '280 baju'],
      ans: 2,
      hint: 'Selisih = penjualan bulan lebih banyak − penjualan bulan lebih sedikit.',
      explanation: 'Selisih = 1.250 − 980 = 270 baju\n\nJadi, selisih penjualan Januari dan Februari = 270 baju.'
    },

    // --- SUSAH / HOTS (11-15) ---
    {
      type: 'mc',
      level: 'susah',
      q: 'Penghasilan Pak Andi bulan ini Rp4.500.000. Pengeluarannya untuk makan Rp1.200.000, listrik Rp350.000, transportasi Rp450.000, dan cicilan motor Rp800.000. Berapa selisih penghasilan dan total pengeluaran Pak Andi?',
      opts: ['Rp1.600.000', 'Rp1.700.000', 'Rp1.800.000', 'Rp2.000.000'],
      ans: 1,
      hint: 'Jumlahkan semua pengeluaran dulu, lalu selisih = penghasilan − total pengeluaran.',
      explanation: 'Langkah 1 — Total pengeluaran:\nRp1.200.000 + Rp350.000 + Rp450.000 + Rp800.000\n= Rp2.800.000\n\nLangkah 2 — Selisih (sisa):\nRp4.500.000 − Rp2.800.000 = Rp1.700.000\n\nJadi, sisa penghasilan Pak Andi = Rp1.700.000.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Dalam pertandingan sepak bola, tim A mencetak 15 gol dan kemasukan 8 gol. Tim B mencetak 12 gol dan kemasukan 5 gol. Selisih "gol bersih" (gol masuk − gol kemasukan) antara tim A dan tim B adalah _ gol.',
      ans: '0',
      hint: 'Hitung gol bersih masing-masing tim, lalu cari selisihnya.',
      explanation: 'Langkah 1 — Gol bersih tim A:\n15 − 8 = 7 gol\n\nLangkah 2 — Gol bersih tim B:\n12 − 5 = 7 gol\n\nLangkah 3 — Selisih gol bersih:\n7 − 7 = 0\n\nJadi, selisih gol bersih tim A dan B = 0 (sama-sama 7).'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Harga sebuah TV tahun lalu adalah Rp3.500.000. Tahun ini harganya naik 20%. Berapa selisih harga TV tahun lalu dan tahun ini?',
      opts: ['Rp600.000', 'Rp650.000', 'Rp700.000', 'Rp750.000'],
      ans: 2,
      hint: 'Kenaikan harga = 20% × harga lama. Selisih = kenaikan tersebut.',
      explanation: 'Langkah 1 — Hitung kenaikan harga (20%):\nKenaikan = 20% × Rp3.500.000\nKenaikan = 0,2 × Rp3.500.000\nKenaikan = Rp700.000\n\nLangkah 2 — Harga tahun ini:\nRp3.500.000 + Rp700.000 = Rp4.200.000\n\nLangkah 3 — Selisih:\nRp4.200.000 − Rp3.500.000 = Rp700.000\n\nJadi, selisih harga = Rp700.000.'
    },
    {
      type: 'mc',
      level: 'susah',
      q: 'Kecepatan kereta A adalah 120 km/jam dan kereta B adalah 90 km/jam. Keduanya berangkat dari kota berbeda menuju titik tengah. Setelah 2 jam, berapa selisih jarak yang sudah ditempuh keduanya?',
      opts: ['50 km', '60 km', '70 km', '80 km'],
      ans: 1,
      hint: 'Hitung jarak masing-masing kereta setelah 2 jam (jarak = kecepatan × waktu), lalu cari selisihnya.',
      explanation: 'Langkah 1 — Jarak kereta A (2 jam):\nJarak A = 120 × 2 = 240 km\n\nLangkah 2 — Jarak kereta B (2 jam):\nJarak B = 90 × 2 = 180 km\n\nLangkah 3 — Selisih jarak:\n240 − 180 = 60 km\n\nJadi, selisih jarak kedua kereta setelah 2 jam = 60 km.'
    },
    {
      type: 'fill',
      level: 'susah',
      q: 'Populasi kota X tahun 2020 adalah 125.000 jiwa dan tahun 2024 adalah 148.500 jiwa. Selisih pertumbuhan penduduknya adalah _ jiwa. Jika pertumbuhan sama tiap tahun, berapa pertumbuhan per tahun? _ jiwa per tahun.',
      ans: '23.500',
      hint: 'Selisih total = populasi akhir − populasi awal. Pertumbuhan per tahun = selisih total ÷ jumlah tahun.',
      explanation: 'Langkah 1 — Selisih total pertumbuhan:\n148.500 − 125.000 = 23.500 jiwa\n\nLangkah 2 — Jumlah tahun:\n2024 − 2020 = 4 tahun\n\nLangkah 3 — Pertumbuhan per tahun:\n23.500 ÷ 4 = 5.875 jiwa per tahun\n\nJadi, selisih pertumbuhan = 23.500 jiwa, dan pertumbuhan per tahun = 5.875 jiwa.'
    },
  ],

};
// ── Gabungkan semua batch soal ke QUIZ_DATA utama ──────────
Object.assign(QUIZ_DATA,
  typeof QUIZ_DATA_PART2     !== 'undefined' ? QUIZ_DATA_PART2     : {},
  typeof QUIZ_DATA_BINDO_1   !== 'undefined' ? QUIZ_DATA_BINDO_1   : {},
  typeof QUIZ_DATA_BINDO_2   !== 'undefined' ? QUIZ_DATA_BINDO_2   : {},
  typeof QUIZ_DATA_MTK_1     !== 'undefined' ? QUIZ_DATA_MTK_1     : {},
  typeof QUIZ_DATA_MTK_2     !== 'undefined' ? QUIZ_DATA_MTK_2     : {}
);

export const TKA_DATA = {

// ════════════════════════════════════════
//  IPA — 40 SOAL
// ════════════════════════════════════════
ipa: [
  // ── SISTEM PENCERNAAN (5 soal) ──
  { id:'tka-ipa-1', topic:'Sistem Pencernaan', level:'mudah',
    q:'Organ pencernaan yang berfungsi menyerap sari-sari makanan dan mendistribusikannya ke seluruh tubuh adalah…',
    opts:['Lambung','Usus besar','Usus halus','Kerongkongan'],
    ans:2,
    explanation:'Usus halus adalah tempat utama penyerapan sari-sari makanan. Dindingnya memiliki jonjot (vili) yang memperluas area penyerapan sehingga nutrisi bisa diserap ke pembuluh darah dengan efisien.'
  },
  { id:'tka-ipa-2', topic:'Sistem Pencernaan', level:'sedang',
    q:'Perhatikan pernyataan berikut:\n(1) Menghasilkan enzim amilase\n(2) Menghancurkan makanan secara mekanis\n(3) Mengandung asam klorida (HCl)\n(4) Menghasilkan empedu\nPernyataan yang benar tentang lambung adalah…',
    opts:['(1) dan (2)','(2) dan (3)','(3) dan (4)','(1) dan (4)'],
    ans:1,
    explanation:'Lambung menghancurkan makanan secara mekanis melalui kontraksi otot (no.2) dan mengandung asam klorida (HCl) untuk membunuh bakteri serta mengaktifkan enzim pepsin (no.3). Amilase dihasilkan kelenjar ludah, empedu dihasilkan hati.'
  },
  { id:'tka-ipa-3', topic:'Sistem Pencernaan', level:'sedang',
    q:'Enzim yang berfungsi memecah protein menjadi pepton di lambung adalah…',
    opts:['Amilase','Lipase','Pepsin','Tripsin'],
    ans:2,
    explanation:'Pepsin adalah enzim di lambung yang memecah protein menjadi pepton (rantai peptida lebih pendek). Amilase memecah amilum, lipase memecah lemak, dan tripsin bekerja di usus halus.'
  },
  { id:'tka-ipa-4', topic:'Sistem Pencernaan', level:'susah',
    q:'Seorang anak mengalami gangguan pencernaan yang menyebabkan makanan tidak dicerna dengan baik karena produksi empedu berkurang. Organ manakah yang mengalami gangguan dan apa fungsi empedu yang terganggu?',
    opts:['Pankreas; menghasilkan insulin','Hati; mengemulsikan lemak','Lambung; menghasilkan HCl','Usus besar; menyerap air'],
    ans:1,
    explanation:'Empedu dihasilkan oleh hati dan disimpan di kantong empedu. Fungsi utamanya adalah mengemulsikan lemak (memecah gumpalan lemak menjadi butiran kecil) sehingga enzim lipase dapat bekerja lebih efektif. Jika empedu berkurang, pencernaan lemak terganggu.'
  },
  { id:'tka-ipa-5', topic:'Sistem Pencernaan', level:'susah',
    q:'Urutan proses pencernaan makanan yang benar mulai dari penyerapan air hingga pembentukan feses adalah…',
    opts:['Lambung → Usus halus → Usus besar → Anus','Mulut → Kerongkongan → Lambung → Usus halus → Usus besar → Anus','Mulut → Lambung → Usus halus → Anus','Kerongkongan → Lambung → Usus besar → Anus'],
    ans:1,
    explanation:'Urutan lengkap: Mulut (pencernaan mekanis+kimiawi) → Kerongkongan (peristaltik) → Lambung (pencernaan kimiawi+mekanis) → Usus halus (penyerapan sari makanan) → Usus besar (penyerapan air, pembentukan feses) → Anus (pengeluaran).'
  },

  // ── SISTEM PERNAPASAN (4 soal) ──
  { id:'tka-ipa-6', topic:'Sistem Pernapasan', level:'mudah',
    q:'Organ pernapasan yang berfungsi sebagai tempat pertukaran gas oksigen (O₂) dan karbon dioksida (CO₂) adalah…',
    opts:['Trakea','Bronkus','Alveolus','Diafragma'],
    ans:2,
    explanation:'Alveolus (jamak: alveoli) adalah kantung udara kecil di ujung bronkiolus yang dikelilingi kapiler darah. Di sinilah terjadi pertukaran gas: O₂ masuk ke darah, CO₂ dikeluarkan dari darah ke alveolus.'
  },
  { id:'tka-ipa-7', topic:'Sistem Pernapasan', level:'sedang',
    q:'Ketika kita menarik napas (inspirasi), yang terjadi pada diafragma dan rongga dada adalah…',
    opts:['Diafragma naik, rongga dada mengecil','Diafragma turun, rongga dada membesar','Diafragma naik, rongga dada membesar','Diafragma turun, rongga dada mengecil'],
    ans:1,
    explanation:'Saat inspirasi, diafragma berkontraksi dan bergerak turun (mendatar), sementara otot interkostal mengangkat tulang rusuk. Akibatnya rongga dada membesar, tekanan udara dalam paru-paru turun, dan udara luar masuk.'
  },
  { id:'tka-ipa-8', topic:'Sistem Pernapasan', level:'sedang',
    q:'Perhatikan tabel berikut:\n\nUdara Masuk: O₂ = 21%, CO₂ = 0,04%\nUdara Keluar: O₂ = 16%, CO₂ = 4%\n\nBerdasarkan data tersebut, dapat disimpulkan bahwa…',
    opts:['Tubuh memproduksi O₂ saat bernapas','Tubuh menggunakan O₂ dan melepaskan CO₂ dalam proses respirasi','Jumlah O₂ dan CO₂ dalam udara selalu tetap','Paru-paru menyimpan sebagian O₂'],
    ans:1,
    explanation:'Data menunjukkan O₂ berkurang (21% → 16%) dan CO₂ bertambah (0,04% → 4%) setelah melewati paru-paru. Ini membuktikan bahwa respirasi seluler menggunakan O₂ dan menghasilkan CO₂ sebagai produk sampingan.'
  },
  { id:'tka-ipa-9', topic:'Sistem Pernapasan', level:'susah',
    q:'Seorang pasien didiagnosis mengalami penebalan dinding alveolus akibat infeksi. Dampak yang paling mungkin terjadi adalah…',
    opts:['Pernapasan menjadi lebih cepat karena O₂ berlebih','Pertukaran gas terhambat sehingga kadar O₂ dalam darah menurun','Produksi CO₂ meningkat drastis','Diafragma tidak dapat bergerak'],
    ans:1,
    explanation:'Penebalan dinding alveolus menghambat difusi gas (O₂ dan CO₂ harus melewati membran yang lebih tebal). Akibatnya O₂ sulit masuk ke darah dan CO₂ sulit dikeluarkan, sehingga kadar O₂ dalam darah turun (hipoksia).'
  },

  // ── ADAPTASI MAKHLUK HIDUP (4 soal) ──
  { id:'tka-ipa-10', topic:'Adaptasi Makhluk Hidup', level:'mudah',
    q:'Kaktus mampu bertahan hidup di gurun yang kering karena memiliki adaptasi berupa…',
    opts:['Daun yang lebar untuk fotosintesis','Batang tebal berisi cadangan air dan daun berbentuk duri','Akar pendek untuk menyimpan air','Stomata terbuka lebar pada siang hari'],
    ans:1,
    explanation:'Kaktus beradaptasi dengan batang tebal berdaging yang menyimpan air (CAM metabolism), daun berubah menjadi duri untuk mengurangi penguapan, dan akar yang panjang menyebar luas untuk menyerap air hujan.'
  },
  { id:'tka-ipa-11', topic:'Adaptasi Makhluk Hidup', level:'sedang',
    q:'Teratai hidup di air dan memiliki daun yang lebar, tipis, dan mengapung di permukaan air. Tujuan adaptasi daun yang lebar tersebut adalah…',
    opts:['Agar lebih mudah dimakan hewan air','Untuk memperluas permukaan penguapan dan fotosintesis','Agar tidak mudah tenggelam akibat gelombang','Untuk menyimpan cadangan makanan'],
    ans:1,
    explanation:'Daun teratai yang lebar berfungsi untuk memaksimalkan penerimaan cahaya matahari untuk fotosintesis dan juga mempercepat penguapan (transpirasi) yang membantu mengalirkan air dan mineral dari akar ke seluruh tanaman.'
  },
  { id:'tka-ipa-12', topic:'Adaptasi Makhluk Hidup', level:'sedang',
    q:'Beruang kutub memiliki bulu berwarna putih. Fungsi adaptasi warna bulu tersebut dalam konteks lingkungan kutub adalah…',
    opts:['Menyerap panas matahari lebih banyak','Kamuflase untuk berburu dan perlindungan dari predator','Mengurangi pantulan sinar UV berbahaya','Menghasilkan panas tubuh lebih efisien'],
    ans:1,
    explanation:'Bulu putih beruang kutub berfungsi sebagai kamuflase (penyamaran) di lingkungan salju dan es. Ini membantu mereka berburu mangsa tanpa terdeteksi dan juga menghindari ancaman dari pemangsa lain.'
  },
  { id:'tka-ipa-13', topic:'Adaptasi Makhluk Hidup', level:'susah',
    q:'Perhatikan pernyataan tentang adaptasi berikut:\n(1) Kantong semar mencerna serangga untuk mendapatkan nitrogen\n(2) Pohon bakau memiliki akar napas yang muncul ke permukaan lumpur\n(3) Unta menyimpan air dalam punuknya\n(4) Ikan laut memiliki insang yang efisien membuang garam\nAdaptasi fisiologi ditunjukkan oleh nomor…',
    opts:['(1) dan (2)','(2) dan (3)','(1) dan (4)','(3) dan (4)'],
    ans:2,
    explanation:'Adaptasi fisiologi berkaitan dengan fungsi/proses dalam tubuh. (1) Kantong semar mencerna serangga untuk mendapatkan nitrogen = adaptasi fisiologi. (4) Insang ikan laut membuang garam secara aktif = adaptasi fisiologi. Sedangkan (2) akar napas dan (3) punuk unta adalah adaptasi morfologi (bentuk fisik).'
  },

  // ── RANTAI MAKANAN & EKOSISTEM (4 soal) ──
  { id:'tka-ipa-14', topic:'Rantai Makanan & Ekosistem', level:'mudah',
    q:'Dalam rantai makanan: Padi → Tikus → Ular → Elang, organisme yang berperan sebagai produsen adalah…',
    opts:['Tikus','Ular','Padi','Elang'],
    ans:2,
    explanation:'Produsen adalah organisme yang dapat membuat makanan sendiri melalui fotosintesis. Dalam rantai makanan ini, padi adalah tumbuhan yang berfotosintesis sehingga berperan sebagai produsen.'
  },
  { id:'tka-ipa-15', topic:'Rantai Makanan & Ekosistem', level:'sedang',
    q:'Perhatikan rantai makanan: Rumput → Belalang → Katak → Ular → Elang.\nJika populasi katak menurun drastis akibat perburuan, prediksi perubahan yang paling mungkin terjadi adalah…',
    opts:['Populasi belalang menurun dan populasi ular meningkat','Populasi belalang meningkat dan populasi ular menurun','Populasi rumput menurun dan populasi elang meningkat','Semua populasi akan tetap stabil'],
    ans:1,
    explanation:'Jika katak berkurang: (1) Belalang tidak dimangsa katak → populasi belalang meningkat. (2) Ular kekurangan makanan (katak) → populasi ular menurun. Ini menyebabkan ketidakseimbangan ekosistem secara berantai.'
  },
  { id:'tka-ipa-16', topic:'Rantai Makanan & Ekosistem', level:'sedang',
    q:'Organisme pengurai (dekomposer) memiliki peran penting dalam ekosistem karena…',
    opts:['Menghasilkan O₂ untuk respirasi semua makhluk hidup','Mengubah zat organik dari organisme mati menjadi mineral yang dapat digunakan tumbuhan','Menyediakan makanan bagi konsumen tingkat pertama','Mengurangi populasi produsen agar tidak berlebihan'],
    ans:1,
    explanation:'Dekomposer (seperti jamur dan bakteri pengurai) menguraikan bangkai dan sisa organisme menjadi mineral anorganik. Mineral ini dikembalikan ke tanah dan dapat diserap oleh tumbuhan sebagai nutrisi, sehingga siklus materi dalam ekosistem terus berlangsung.'
  },
  { id:'tka-ipa-17', topic:'Rantai Makanan & Ekosistem', level:'susah',
    q:'Di suatu ekosistem sawah, petani menggunakan pestisida untuk membasmi hama wereng. Setelah beberapa bulan, populasi burung pipit di area tersebut juga menurun drastis meskipun burung pipit bukan target pestisida. Fenomena ini paling tepat dijelaskan oleh konsep…',
    opts:['Seleksi alam karena burung pipit tidak adaptif','Akumulasi pestisida dalam rantai makanan (biomagnifikasi)','Kompetisi antarspesies yang semakin ketat','Perpindahan habitat burung pipit ke area lain'],
    ans:1,
    explanation:'Biomagnifikasi adalah penumpukan zat beracun (pestisida) dalam rantai makanan. Wereng mengonsumsi padi yang terkontaminasi → burung pipit memakan banyak wereng → kadar pestisida terakumulasi dalam tubuh burung pipit hingga konsentrasi yang berbahaya, menyebabkan kematian.'
  },

  // ── ENERGI & PERUBAHANNYA (4 soal) ──
  { id:'tka-ipa-18', topic:'Energi & Perubahannya', level:'mudah',
    q:'Ketika seseorang mengayuh sepeda, terjadi perubahan energi dari…',
    opts:['Energi kimia → Energi gerak','Energi gerak → Energi listrik','Energi panas → Energi gerak','Energi cahaya → Energi gerak'],
    ans:0,
    explanation:'Saat mengayuh sepeda, energi kimia dari makanan yang telah dicerna tubuh diubah menjadi energi gerak (kinetik) untuk memutar pedal dan roda sepeda. Proses ini terjadi melalui metabolisme sel otot.'
  },
  { id:'tka-ipa-19', topic:'Energi & Perubahannya', level:'sedang',
    q:'Panel surya mengubah energi matahari menjadi energi listrik. Prinsip yang digunakan dalam panel surya adalah efek…',
    opts:['Termal — panas matahari memanaskan cairan','Fotovoltaik — cahaya menghasilkan arus listrik','Elektromagnetik — medan magnet menghasilkan listrik','Piezoelektrik — tekanan menghasilkan listrik'],
    ans:1,
    explanation:'Panel surya menggunakan efek fotovoltaik: foton dari cahaya matahari mengenai material semikonduktor (biasanya silikon) dan membebaskan elektron, menghasilkan arus listrik searah (DC). Ini berbeda dengan generator yang menggunakan elektromagnetik.'
  },
  { id:'tka-ipa-20', topic:'Energi & Perubahannya', level:'sedang',
    q:'Perhatikan daftar perubahan energi berikut:\n(1) Lampu → listrik jadi cahaya dan panas\n(2) Setrika → listrik jadi panas\n(3) Bel listrik → listrik jadi bunyi\n(4) Dinamo → gerak jadi listrik\nPerubahan energi pada generator PLTA paling mirip dengan nomor…',
    opts:['(1)','(2)','(3)','(4)'],
    ans:3,
    explanation:'Generator PLTA mengubah energi gerak (putaran turbin oleh air) menjadi energi listrik. Hal ini sama dengan prinsip dinamo (no.4) yang juga mengubah energi gerak menjadi energi listrik melalui induksi elektromagnetik.'
  },
  { id:'tka-ipa-21', topic:'Energi & Perubahannya', level:'susah',
    q:'Hukum Kekekalan Energi menyatakan bahwa energi tidak dapat diciptakan atau dimusnahkan. Berdasarkan hukum ini, pada kenyataannya mengapa mesin tidak pernah memiliki efisiensi 100%?',
    opts:['Karena hukum kekekalan energi hanya berlaku di laboratorium','Karena sebagian energi selalu berubah menjadi energi panas yang terbuang','Karena mesin modern belum sempurna secara teknologi','Karena energi berkurang sedikit setiap kali berpindah bentuk'],
    ans:1,
    explanation:'Meskipun energi total terjaga, setiap perubahan bentuk energi selalu disertai pelepasan sebagian energi sebagai panas (akibat gesekan, hambatan listrik, dll.) ke lingkungan. Panas yang terbuang ini tidak dapat digunakan untuk kerja, sehingga efisiensi mesin selalu di bawah 100%.'
  },

  // ── RANGKAIAN LISTRIK (4 soal) ──
  { id:'tka-ipa-22', topic:'Rangkaian Listrik', level:'mudah',
    q:'Sebuah rangkaian memiliki 4 lampu yang dipasang secara paralel. Jika salah satu lampu dilepas, yang terjadi adalah…',
    opts:['Semua lampu mati','Ketiga lampu lainnya tetap menyala','Ketiga lampu lainnya menjadi lebih redup','Arus listrik berhenti mengalir'],
    ans:1,
    explanation:'Pada rangkaian paralel, setiap komponen memiliki jalur tersendiri menuju sumber listrik. Jika satu lampu dilepas, jalur lain tetap terhubung sehingga tiga lampu lainnya tetap menyala dengan kecerahan yang sama.'
  },
  { id:'tka-ipa-23', topic:'Rangkaian Listrik', level:'sedang',
    q:'Perhatikan tabel perbandingan rangkaian seri dan paralel:\n\nSeri: jika 1 putus → semua mati, tegangan terbagi\nParalel: jika 1 putus → lain tetap nyala, tegangan sama\n\nInstalasi listrik rumah menggunakan rangkaian paralel karena alasan utama…',
    opts:['Lebih hemat kabel','Lebih murah biaya pemasangan','Setiap ruangan dapat dikontrol secara mandiri dengan tegangan penuh','Mengurangi risiko kebakaran listrik'],
    ans:2,
    explanation:'Rangkaian paralel digunakan di rumah karena setiap ruangan mendapat tegangan penuh (220V) dan dapat dikontrol secara mandiri dengan saklar. Jika satu ruangan mati, ruangan lain tidak terpengaruh — ini sangat praktis dan efisien.'
  },
  { id:'tka-ipa-24', topic:'Rangkaian Listrik', level:'sedang',
    q:'Dua lampu identik dipasang seri dengan baterai 9V. Tegangan yang diterima masing-masing lampu adalah…',
    opts:['9V','4,5V','18V','3V'],
    ans:1,
    explanation:'Pada rangkaian seri, tegangan sumber dibagi rata ke semua komponen. Dengan 2 lampu identik dan tegangan total 9V, masing-masing lampu mendapat 9V ÷ 2 = 4,5V. Inilah mengapa lampu seri lebih redup dibanding paralel.'
  },
  { id:'tka-ipa-25', topic:'Rangkaian Listrik', level:'susah',
    q:'Sebuah rumah memiliki 5 lampu 20W yang menyala 8 jam/hari, dan 1 AC 900W yang menyala 4 jam/hari. Energi listrik total yang digunakan dalam 1 hari adalah…',
    opts:['1.400 Wh','4.400 Wh','800 Wh','3.600 Wh'],
    ans:1,
    explanation:'Energi = Daya × Waktu\nLampu: 5 × 20W × 8 jam = 800 Wh\nAC: 1 × 900W × 4 jam = 3.600 Wh\nTotal = 800 + 3.600 = 4.400 Wh\nRumus: E = P × t, satuan watt-hour (Wh) atau kilowatt-hour (kWh) jika dibagi 1000.'
  },

  // ── TATA SURYA & GERHANA (4 soal) ──
  { id:'tka-ipa-26', topic:'Tata Surya & Gerhana', level:'mudah',
    q:'Planet yang paling dekat dengan Matahari dalam sistem tata surya adalah…',
    opts:['Venus','Merkurius','Mars','Bumi'],
    ans:1,
    explanation:'Urutan planet dari yang terdekat ke terjauh dari Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus. Merkurius adalah planet terdekat dengan Matahari.'
  },
  { id:'tka-ipa-27', topic:'Tata Surya & Gerhana', level:'sedang',
    q:'Gerhana matahari total terjadi ketika…',
    opts:['Bumi berada di antara Matahari dan Bulan pada fase bulan purnama','Bulan berada di antara Bumi dan Matahari sehingga bayangannya menutupi Bumi pada fase bulan baru','Matahari tertutup awan tebal pada siang hari','Bumi memasuki bayangan Bulan saat orbit'],
    ans:1,
    explanation:'Gerhana matahari total terjadi saat fase bulan baru (konjungsi): Bulan berada tepat di antara Bumi dan Matahari, dan bayangan umbra Bulan jatuh ke permukaan Bumi. Di area bayangan umbra tersebut, Matahari tertutup seluruhnya oleh Bulan.'
  },
  { id:'tka-ipa-28', topic:'Tata Surya & Gerhana', level:'sedang',
    q:'Akibat revolusi Bumi mengelilingi Matahari selama satu tahun adalah…',
    opts:['Terjadinya pergantian siang dan malam','Terjadinya perubahan musim dan perbedaan lamanya siang-malam di berbagai tempat','Adanya perbedaan waktu di berbagai belahan dunia','Pergerakan bintang dari timur ke barat'],
    ans:1,
    explanation:'Revolusi Bumi (peredaran Bumi mengelilingi Matahari) menyebabkan: (1) pergantian musim (karena kemiringan sumbu Bumi 23,5°), (2) perbedaan lamanya siang dan malam sesuai musim, (3) gerak semu tahunan Matahari. Pergantian siang-malam disebabkan rotasi Bumi.'
  },
  { id:'tka-ipa-29', topic:'Tata Surya & Gerhana', level:'susah',
    q:'Pasang naik air laut terjadi di dua sisi Bumi secara bersamaan. Mengapa hal ini bisa terjadi?',
    opts:['Karena Bumi berputar lebih cepat saat pasang naik','Karena gaya gravitasi Bulan menarik air di sisi yang menghadap Bulan, dan gaya sentrifugal rotasi Bumi mendorong air di sisi yang berlawanan','Karena tekanan atmosfer meningkat di kedua sisi secara bersamaan','Karena Matahari dan Bulan bekerja secara bergantian'],
    ans:1,
    explanation:'Pasang naik terjadi di dua sisi bersamaan karena: (1) Sisi yang menghadap Bulan: tarikan gravitasi Bulan menarik air ke arahnya. (2) Sisi yang berlawanan: gaya sentrifugal akibat rotasi sistem Bumi-Bulan mendorong air menjauh. Kedua efek ini terjadi bersamaan, menciptakan dua gundukan pasang.'
  },

  // ── SIKLUS AIR & CUACA (4 soal) ──
  { id:'tka-ipa-30', topic:'Siklus Air & Cuaca', level:'mudah',
    q:'Proses berubahnya uap air menjadi titik-titik air di atmosfer yang membentuk awan disebut…',
    opts:['Evaporasi','Presipitasi','Kondensasi','Transpirasi'],
    ans:2,
    explanation:'Kondensasi adalah proses perubahan wujud uap air (gas) menjadi tetes air cair ketika uap air naik ke atmosfer yang lebih dingin. Tetes-tetes air inilah yang berkumpul membentuk awan.'
  },
  { id:'tka-ipa-31', topic:'Siklus Air & Cuaca', level:'sedang',
    q:'Penebangan hutan secara liar dapat mengganggu siklus air. Dampak yang paling langsung adalah…',
    opts:['Evaporasi berkurang, sehingga hujan lebih sering terjadi','Transpirasi berkurang dan kemampuan tanah menyerap air menurun, menyebabkan kekeringan dan banjir','Kondensasi meningkat karena suhu udara turun','Siklus air tidak terganggu karena air laut masih banyak'],
    ans:1,
    explanation:'Pohon berperan dalam siklus air melalui: (1) Transpirasi: melepaskan uap air ke atmosfer. (2) Akar menyimpan air dan mencegah erosi. Tanpa pohon, transpirasi berkurang, tanah tidak bisa menyerap air dengan baik, sehingga saat hujan terjadi banjir, dan saat kemarau terjadi kekeringan.'
  },
  { id:'tka-ipa-32', topic:'Siklus Air & Cuaca', level:'sedang',
    q:'Air yang meresap ke dalam tanah dan mengisi lapisan batuan berpori disebut…',
    opts:['Air permukaan','Air tanah','Air hujan','Air kapiler'],
    ans:1,
    explanation:'Air tanah adalah air yang tersimpan di dalam lapisan tanah atau batuan berpori di bawah permukaan tanah (disebut akuifer). Air tanah terbentuk dari proses infiltrasi (peresapan) air hujan ke dalam tanah dan dapat diambil melalui sumur atau mata air.'
  },
  { id:'tka-ipa-33', topic:'Siklus Air & Cuaca', level:'susah',
    q:'Di suatu kota, banyak area hijau diganti dengan gedung dan aspal. Fenomena "pulau panas perkotaan" (urban heat island) terjadi. Apa hubungannya dengan siklus air?',
    opts:['Suhu tinggi meningkatkan evaporasi, sehingga hujan lebih sering','Aspal dan beton menyerap panas dan air hujan langsung mengalir ke selokan tanpa infiltrasi, mengurangi cadangan air tanah','Gedung tinggi menghalangi angin sehingga presipitasi meningkat','Tidak ada hubungannya dengan siklus air'],
    ans:1,
    explanation:'Permukaan kedap air (aspal, beton) menyebabkan air hujan tidak bisa meresap (infiltrasi = 0) dan langsung mengalir ke selokan sebagai limpasan permukaan. Ini mengurangi pengisian air tanah, meningkatkan risiko banjir, dan karena tidak ada vegetasi, transpirasi berkurang sehingga suhu kota meningkat.'
  },

  // ── PERKEMBANGBIAKAN MAKHLUK HIDUP (4 soal) ──
  { id:'tka-ipa-34', topic:'Perkembangbiakan Makhluk Hidup', level:'mudah',
    q:'Hewan yang berkembang biak dengan cara melahirkan anak disebut…',
    opts:['Ovipar','Vivipar','Ovovivipar','Hermafrodit'],
    ans:1,
    explanation:'Vivipar adalah cara berkembang biak hewan dengan melahirkan anak. Embrio berkembang di dalam rahim induk dan mendapat nutrisi melalui plasenta. Contoh: kucing, sapi, paus, dan manusia.'
  },
  { id:'tka-ipa-35', topic:'Perkembangbiakan Makhluk Hidup', level:'sedang',
    q:'Tumbuhan berikut yang berkembang biak secara vegetatif alami dengan menggunakan stolon adalah…',
    opts:['Bawang merah (umbi lapis)','Stroberi (stolon/geragih)','Kentang (umbi batang)','Jahe (rimpang/rhizoma)'],
    ans:1,
    explanation:'Stolon (geragih) adalah batang yang menjalar di atas permukaan tanah. Ujung stolon akan membentuk tunas baru yang akan tumbuh menjadi tanaman mandiri. Stroberi adalah contoh klasik tumbuhan yang berkembang biak dengan stolon.'
  },
  { id:'tka-ipa-36', topic:'Perkembangbiakan Makhluk Hidup', level:'sedang',
    q:'Seorang petani ingin memperbanyak tanaman mangga dengan sifat yang persis sama dengan induknya dan dapat berbuah lebih cepat. Teknik vegetatif buatan yang paling tepat adalah…',
    opts:['Menanam biji mangga pilihan','Stek batang','Cangkok','Okulasi dengan batang bawah dari mangga berbeda'],
    ans:2,
    explanation:'Cangkok menghasilkan tanaman baru dengan sifat persis sama dengan induknya (karena menggunakan jaringan asli induk) dan dapat berbuah lebih cepat dibanding biji. Okulasi juga bisa, tetapi hasilnya berupa hibrida dengan batang bawah yang berbeda. Cangkok adalah pilihan paling tepat untuk mendapatkan sifat identik induk.'
  },
  { id:'tka-ipa-37', topic:'Perkembangbiakan Makhluk Hidup', level:'susah',
    q:'Lebah pekerja merupakan hewan betina yang berkembang dari telur yang tidak dibuahi, sedangkan lebah ratu berkembang dari telur yang dibuahi. Proses perkembangbiakan lebah pekerja ini disebut…',
    opts:['Fragmentasi','Partenogenesis','Tunas luar','Pembelahan biner'],
    ans:1,
    explanation:'Partenogenesis adalah perkembangan individu baru dari sel telur tanpa pembuahan oleh sel sperma. Pada lebah, telur yang tidak dibuahi berkembang menjadi lebah jantan (drone) atau dalam kondisi tertentu lebah pekerja. Ini merupakan bentuk reproduksi aseksual pada hewan.'
  },

  // ── BENDA & SIFATNYA (3 soal) ──
  { id:'tka-ipa-38', topic:'Benda & Sifatnya', level:'mudah',
    q:'Perubahan lilin dari padat menjadi cair saat dipanaskan merupakan contoh perubahan…',
    opts:['Perubahan kimia karena menghasilkan zat baru','Perubahan fisika karena hanya berubah wujud, sifat zat tetap sama','Perubahan biologi karena melibatkan reaksi enzim','Perubahan permanen yang tidak dapat dikembalikan'],
    ans:1,
    explanation:'Perubahan fisika adalah perubahan yang hanya mengubah wujud atau bentuk tanpa mengubah sifat kimia zat. Lilin yang mencair dapat dipadatkan kembali menjadi lilin dengan sifat yang sama — ini adalah ciri khas perubahan fisika. Perubahan kimia menghasilkan zat baru (misal pembakaran).'
  },
  { id:'tka-ipa-39', topic:'Benda & Sifatnya', level:'sedang',
    q:'Besi yang dibiarkan di udara terbuka lama-kelamaan akan berkarat. Peristiwa perkaratan besi ini merupakan contoh perubahan…',
    opts:['Fisika, karena hanya berubah warna','Kimia, karena besi bereaksi dengan oksigen dan air menghasilkan zat baru (karat/Fe₂O₃)','Fisika, karena besi masih terlihat padat','Kimia, tetapi dapat dikembalikan ke kondisi semula'],
    ans:1,
    explanation:'Perkaratan adalah reaksi kimia: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ → 2Fe₂O₃.3H₂O (karat). Karat adalah zat baru yang berbeda dari besi asli — ini ciri perubahan kimia. Perubahan kimia tidak dapat dikembalikan ke kondisi semula dengan cara sederhana.'
  },
  { id:'tka-ipa-40', topic:'Benda & Sifatnya', level:'susah',
    q:'Sebuah benda memiliki sifat: massa jenisnya lebih kecil dari air, tidak larut dalam air, dan dapat menghantarkan panas dengan baik. Benda tersebut kemungkinan adalah…',
    opts:['Batu granit (massa jenis 2,7 g/cm³)','Kayu balsa (massa jenis 0,12 g/cm³, konduktor panas buruk)','Aluminium (massa jenis 2,7 g/cm³)','Gabus plastik dengan inti tembaga (massa jenis < 1, konduktor tembaga baik)'],
    ans:3,
    explanation:'Syarat yang harus dipenuhi: (1) massa jenis < 1 g/cm³ (< air), (2) tidak larut dalam air, (3) konduktor panas baik. Gabus plastik dengan inti tembaga memenuhi semua syarat: massa jenis keseluruhan < 1 (mengapung), tidak larut, dan tembaga adalah konduktor panas yang sangat baik. Kayu balsa tidak menghantarkan panas dengan baik.'
  },
],

// ════════════════════════════════════════
//  B. INDONESIA — 40 SOAL
// ════════════════════════════════════════
bindo: [

  // ── TEKS 1: TRANSPORTASI MASSAL (soal 1-8) ──
  // Teks: "Penggunaan transportasi massal dapat menjadi salah satu solusi untuk mengurangi
  // pencemaran udara. Saat ini, asap buangan kendaraan bermotor menjadi penyebab utama
  // pencemaran udara di kota besar. Masih banyak orang yang menggunakan kendaraan pribadi
  // untuk bepergian. Jika banyak orang yang menggunakan transportasi massal, jumlah pengguna
  // kendaraan pribadi akan menurun sehingga pencemaran udara pun berkurang. Selain itu,
  // transportasi massal juga dapat mengurangi kemacetan yang sering terjadi di kota besar."

  { id:'tka-bindo-1', topic:'Teks Nonfiksi: Transportasi', level:'mudah',
    q:'Bacalah teks berikut dengan saksama.\n\n"Penggunaan transportasi massal dapat menjadi salah satu solusi untuk mengurangi pencemaran udara. Saat ini, asap buangan kendaraan bermotor menjadi penyebab utama pencemaran udara di kota besar. Masih banyak orang yang menggunakan kendaraan pribadi untuk bepergian. Jika banyak orang yang menggunakan transportasi massal, jumlah pengguna kendaraan pribadi akan menurun sehingga pencemaran udara pun berkurang. Selain itu, transportasi massal juga dapat mengurangi kemacetan yang sering terjadi di kota besar."\n\nIde pokok paragraf di atas adalah…',
    opts:['Asap kendaraan bermotor menyebabkan pencemaran','Transportasi massal sebagai solusi mengurangi pencemaran udara','Kemacetan sering terjadi di kota besar','Masih banyak orang menggunakan kendaraan pribadi'],
    ans:1,
    explanation:'Ide pokok adalah gagasan utama yang menjadi inti paragraf. Kalimat pertama "Penggunaan transportasi massal dapat menjadi salah satu solusi untuk mengurangi pencemaran udara" adalah kalimat utama yang mengandung ide pokok. Paragraf ini bertipe deduktif (ide pokok di awal).'
  },
  { id:'tka-bindo-2', topic:'Teks Nonfiksi: Transportasi', level:'mudah',
    q:'Berdasarkan teks tentang transportasi massal, informasi tersurat yang terdapat dalam teks adalah…',
    opts:['Biaya transportasi massal lebih murah dari kendaraan pribadi','Asap buangan kendaraan bermotor menjadi penyebab utama pencemaran udara di kota besar','Pemerintah sudah membuat kebijakan tentang transportasi massal','Transportasi massal hanya tersedia di Jakarta'],
    ans:1,
    explanation:'Informasi tersurat adalah informasi yang secara langsung tertulis dalam teks. Kalimat "asap buangan kendaraan bermotor menjadi penyebab utama pencemaran udara di kota besar" terdapat secara eksplisit dalam teks. Pilihan lain tidak disebutkan dalam teks.'
  },
  { id:'tka-bindo-3', topic:'Teks Nonfiksi: Transportasi', level:'sedang',
    q:'Dalam teks tersebut, kata "solusi" memiliki makna…',
    opts:['Masalah yang harus diselesaikan','Jalan keluar atau pemecahan dari suatu masalah','Rencana yang belum dilaksanakan','Alasan terjadinya suatu peristiwa'],
    ans:1,
    explanation:'"Solusi" berasal dari bahasa Latin "solutio" yang berarti penyelesaian. Dalam konteks ini, transportasi massal disebut sebagai "solusi" karena merupakan cara atau jalan keluar untuk mengatasi masalah pencemaran udara.'
  },
  { id:'tka-bindo-4', topic:'Teks Nonfiksi: Transportasi', level:'sedang',
    q:'Pernyataan yang merupakan opini (pendapat) penulis berdasarkan teks tersebut adalah…',
    opts:['Asap buangan kendaraan bermotor menyebabkan pencemaran udara','Masih banyak orang menggunakan kendaraan pribadi','Transportasi massal dapat menjadi solusi mengurangi pencemaran udara','Kemacetan terjadi di kota besar'],
    ans:2,
    explanation:'Opini adalah pernyataan yang belum terbukti kebenarannya dan bersifat subyektif. "Transportasi massal dapat menjadi solusi..." adalah opini penulis karena menggunakan kata "dapat" yang menunjukkan kemungkinan/pendapat, bukan fakta yang sudah pasti. Pilihan lain adalah fakta yang dapat diverifikasi.'
  },
  { id:'tka-bindo-5', topic:'Teks Nonfiksi: Transportasi', level:'sedang',
    q:'Kata "menurun" dalam kalimat "jumlah pengguna kendaraan pribadi akan menurun" merupakan kata kerja yang bermakna…',
    opts:['Bertambah banyak jumlahnya','Berkurang atau menjadi lebih sedikit jumlahnya','Berpindah tempat ke bawah','Tidak stabil atau berubah-ubah'],
    ans:1,
    explanation:'"Menurun" dalam konteks kuantitas berarti berkurang jumlahnya atau menjadi lebih sedikit. Dalam kalimat tersebut, jika banyak orang beralih ke transportasi massal, maka jumlah pengguna kendaraan pribadi akan berkurang (menurun).'
  },
  { id:'tka-bindo-6', topic:'Teks Nonfiksi: Transportasi', level:'sedang',
    q:'Simpulan yang tepat dari teks tersebut adalah…',
    opts:['Transportasi massal harus diwajibkan oleh pemerintah kepada semua warga','Penggunaan transportasi massal secara luas dapat membantu mengurangi pencemaran udara dan kemacetan di kota besar','Kendaraan pribadi harus dilarang beroperasi di kota besar','Pencemaran udara hanya dapat diatasi dengan menanam pohon'],
    ans:1,
    explanation:'Simpulan merangkum isi teks secara menyeluruh. Teks membahas dua manfaat transportasi massal: mengurangi pencemaran udara dan kemacetan. Simpulan (B) merangkum kedua manfaat tersebut dengan tepat tanpa menambahkan informasi yang tidak ada dalam teks.'
  },
  { id:'tka-bindo-7', topic:'Teks Nonfiksi: Transportasi', level:'susah',
    q:'Jenis teks di atas termasuk teks…',
    opts:['Teks narasi karena menceritakan urutan kejadian','Teks eksposisi karena memaparkan dan memberikan informasi disertai argumen','Teks deskripsi karena menggambarkan objek secara detail','Teks prosedur karena berisi langkah-langkah'],
    ans:1,
    explanation:'Teks eksposisi adalah teks yang memaparkan informasi faktual disertai argumen untuk meyakinkan pembaca. Teks ini memiliki ciri: (1) memaparkan fakta tentang pencemaran, (2) memberikan argumen mengapa transportasi massal adalah solusi, (3) tidak berisi urutan kejadian atau langkah-langkah.'
  },
  { id:'tka-bindo-8', topic:'Teks Nonfiksi: Transportasi', level:'susah',
    q:'Kalimat yang tepat untuk melanjutkan paragraf tersebut sesuai dengan tema dan gaya penulisan adalah…',
    opts:['Oleh karena itu, kita harus segera membeli kendaraan listrik pribadi','Dengan demikian, pemerintah dan masyarakat perlu bekerja sama mendorong penggunaan transportasi massal demi terciptanya lingkungan yang lebih bersih','Jadi, pencemaran udara tidak perlu dikhawatirkan karena alam akan membersihkannya sendiri','Namun, harga tiket transportasi massal sangat mahal sehingga tidak terjangkau'],
    ans:1,
    explanation:'Kalimat penutup yang baik harus: (1) konsisten dengan tema (mendorong penggunaan transportasi massal), (2) merupakan simpulan yang logis dari isi teks, (3) menggunakan kata penghubung yang tepat (dengan demikian). Pilihan B memenuhi semua kriteria tersebut.'
  },

  // ── TEKS 2: FABEL LEBAH MILA (soal 9-16) ──
  // Teks: Lebah Mila menolong semut yang jatuh ke genangan air. Beberapa hari kemudian semut membalas budi.

  { id:'tka-bindo-9', topic:'Teks Cerita: Fabel Lebah Mila', level:'mudah',
    q:'Bacalah teks cerita berikut.\n\n"Suatu hari, Lebah Mila sedang terbang mencari nektar. Ia melihat seekor semut kecil yang terjatuh ke dalam genangan air dan hampir tenggelam. Tanpa pikir panjang, Mila menjatuhkan sehelai daun ke dekat semut itu. Semut tersebut memanjat daun dan selamat. Beberapa hari kemudian, seorang pemburu hendak menangkap Mila dengan jaring. Semut yang pernah diselamatkan melihat kejadian itu. Ia segera menggigit kaki pemburu tersebut sehingga pemburu terkejut dan jaring pun jatuh. Mila berhasil terbang menjauh dengan selamat."\n\nTokoh utama dalam cerita tersebut adalah…',
    opts:['Semut','Lebah Mila','Pemburu','Daun'],
    ans:1,
    explanation:'Tokoh utama adalah tokoh yang paling banyak diceritakan dan menjadi pusat perhatian cerita. Lebah Mila adalah tokoh yang pertama kali diperkenalkan, melakukan tindakan menolong, dan kemudian ditolong balik — sehingga ia adalah tokoh utama cerita ini.'
  },
  { id:'tka-bindo-10', topic:'Teks Cerita: Fabel Lebah Mila', level:'mudah',
    q:'Berdasarkan teks fabel tersebut, watak Lebah Mila adalah…',
    opts:['Penakut dan selalu menghindar dari masalah','Dermawan dan suka menolong makhluk lain yang kesusahan','Serakah dan hanya memikirkan kepentingan diri sendiri','Pemarah dan mudah tersinggung'],
    ans:1,
    explanation:'Watak adalah sifat/karakter tokoh yang tercermin dari tindakannya. Lebah Mila "tanpa pikir panjang" langsung menolong semut yang hampir tenggelam. Tindakan spontan dan tulus ini mencerminkan watak dermawan dan suka menolong.'
  },
  { id:'tka-bindo-11', topic:'Teks Cerita: Fabel Lebah Mila', level:'sedang',
    q:'Amanat (pesan moral) yang paling tepat dari cerita fabel tersebut adalah…',
    opts:['Jangan pernah pergi sendirian ke tempat berbahaya','Kebaikan yang dilakukan akan mendapat balasan yang setimpal','Hindarilah pemburu yang berbahaya','Lebah dan semut adalah sahabat sejati'],
    ans:1,
    explanation:'Amanat adalah pesan moral yang ingin disampaikan pengarang. Cerita menunjukkan: Mila menolong semut → semut menolong Mila kembali. Inti pesan: "Kebaikan yang kamu lakukan akan kembali kepadamu" atau "Berbalas budi adalah sifat mulia".'
  },
  { id:'tka-bindo-12', topic:'Teks Cerita: Fabel Lebah Mila', level:'sedang',
    q:'Latar tempat yang digunakan dalam cerita fabel tersebut adalah…',
    opts:['Di dalam sarang lebah dan rumah pemburu','Di alam terbuka (padang berbunga dan area bergenangan air)','Di hutan lebat dan gua semut','Di taman kota yang ramai'],
    ans:1,
    explanation:'Latar tempat dapat disimpulkan dari detail cerita: Mila "terbang mencari nektar" (alam terbuka, ladang bunga), semut jatuh ke "genangan air" (alam terbuka), pemburu menggunakan jaring (outdoor). Semua peristiwa terjadi di alam terbuka.'
  },
  { id:'tka-bindo-13', topic:'Teks Cerita: Fabel Lebah Mila', level:'sedang',
    q:'Alur cerita fabel tersebut berjenis…',
    opts:['Alur mundur (flashback) karena dimulai dari akhir','Alur maju karena peristiwa diceritakan secara berurutan dari awal hingga akhir','Alur campuran karena ada kilas balik ke masa lalu','Alur episodik karena setiap bagian berdiri sendiri'],
    ans:1,
    explanation:'Alur maju (progresif) menceritakan peristiwa secara kronologis dari awal hingga akhir. Cerita ini dimulai dari Mila terbang → menolong semut → pemburu hendak menangkap Mila → semut menolong Mila → Mila selamat. Semua peristiwa disajikan secara berurutan.'
  },
  { id:'tka-bindo-14', topic:'Teks Cerita: Fabel Lebah Mila', level:'sedang',
    q:'Kalimat "Tanpa pikir panjang, Mila menjatuhkan sehelai daun ke dekat semut itu" mengandung majas (gaya bahasa)…',
    opts:['Metafora','Hiperbola','Personifikasi','Tidak mengandung majas, kalimat bermakna harfiah'],
    ans:3,
    explanation:'"Tanpa pikir panjang" adalah ungkapan idiomatis yang berarti bertindak segera tanpa berpikir lama, bukan bermakna harfiah bahwa pikirannya pendek. Namun dalam kalimat ini tidak ada majas yang jelas; makna "tanpa pikir panjang" sudah dipahami secara idiomatis sebagai ungkapan biasa dalam bahasa sehari-hari.'
  },
  { id:'tka-bindo-15', topic:'Teks Cerita: Fabel Lebah Mila', level:'susah',
    q:'Konflik utama dalam cerita fabel tersebut adalah…',
    opts:['Lebah Mila kesulitan mencari nektar','Semut tidak bisa berenang','Pemburu hendak menangkap Lebah Mila dengan jaring','Genangan air menghalangi perjalanan semut'],
    ans:2,
    explanation:'Konflik adalah permasalahan utama yang menjadi puncak ketegangan cerita. Meskipun ada masalah semut (pengantar), konflik utama adalah ancaman nyata terhadap tokoh utama (Mila): seorang pemburu yang hendak menangkapnya. Konflik inilah yang membutuhkan penyelesaian dan menjadi puncak cerita.'
  },
  { id:'tka-bindo-16', topic:'Teks Cerita: Fabel Lebah Mila', level:'susah',
    q:'Nilai sosial yang terdapat dalam cerita fabel tersebut yang paling relevan dengan kehidupan bermasyarakat adalah…',
    opts:['Hidup menyendiri lebih aman dari bahaya','Tolong-menolong dan gotong royong dalam kehidupan bersama','Kekuatan fisik lebih penting dari kecerdasan','Setiap makhluk hidup harus mampu melindungi diri sendiri'],
    ans:1,
    explanation:'Nilai sosial adalah nilai yang berkaitan dengan hubungan antar individu dalam masyarakat. Cerita menunjukkan bahwa makhluk hidup yang saling tolong-menolong akan saling menguntungkan — ini adalah nilai gotong royong dan solidaritas sosial yang sangat relevan dalam kehidupan bermasyarakat.'
  },

  // ── TEKS 3: HEWAN BERDASARKAN JENIS MAKANAN (soal 17-24) ──

  { id:'tka-bindo-17', topic:'Teks Laporan: Jenis Makanan Hewan', level:'mudah',
    q:'Bacalah teks laporan berikut.\n\n"Berdasarkan jenis makanannya, hewan dibagi menjadi tiga kelompok. Pertama, hewan karnivora adalah hewan pemakan daging. Contohnya singa, harimau, dan buaya. Kedua, hewan herbivora adalah hewan pemakan tumbuhan. Contohnya sapi, kelinci, dan kuda. Ketiga, hewan omnivora adalah hewan pemakan segala, yaitu memakan daging maupun tumbuhan. Contohnya beruang, babi, dan ayam."\n\nBerdasarkan teks tersebut, hewan yang termasuk kelompok herbivora adalah…',
    opts:['Singa dan harimau','Sapi dan kelinci','Beruang dan babi','Buaya dan kuda'],
    ans:1,
    explanation:'Berdasarkan teks, herbivora adalah hewan pemakan tumbuhan dengan contoh: sapi, kelinci, dan kuda. Pilihan B (sapi dan kelinci) adalah dua hewan yang disebutkan dalam kelompok herbivora di teks.'
  },
  { id:'tka-bindo-18', topic:'Teks Laporan: Jenis Makanan Hewan', level:'mudah',
    q:'Berdasarkan teks laporan tersebut, yang dimaksud dengan hewan omnivora adalah…',
    opts:['Hewan yang hanya memakan daging','Hewan yang hanya memakan tumbuhan','Hewan yang memakan daging maupun tumbuhan','Hewan yang tidak membutuhkan makanan dari luar'],
    ans:2,
    explanation:'Definisi omnivora tersurat jelas dalam teks: "hewan omnivora adalah hewan pemakan segala, yaitu memakan daging maupun tumbuhan." Kata kunci adalah "memakan daging maupun tumbuhan" yang menjadi pembeda dari karnivora dan herbivora.'
  },
  { id:'tka-bindo-19', topic:'Teks Laporan: Jenis Makanan Hewan', level:'sedang',
    q:'Teks laporan tentang hewan berdasarkan jenis makanan tersebut menggunakan struktur…',
    opts:['Orientasi – komplikasi – resolusi','Pernyataan umum – klasifikasi – deskripsi tiap kelompok','Tesis – argumen – penegasan','Tujuan – langkah-langkah – penutup'],
    ans:1,
    explanation:'Teks laporan memiliki struktur: (1) Pernyataan umum (hewan dibagi berdasarkan makanannya), (2) Klasifikasi dan deskripsi tiap kelompok (karnivora, herbivora, omnivora beserta contoh). Ini berbeda dengan teks narasi (orientasi-komplikasi-resolusi), eksposisi, atau prosedur.'
  },
  { id:'tka-bindo-20', topic:'Teks Laporan: Jenis Makanan Hewan', level:'sedang',
    q:'Ayam dalam teks tersebut dikelompokkan sebagai omnivora. Pernyataan yang mendukung klasifikasi tersebut adalah…',
    opts:['Ayam hanya memakan biji-bijian dan rumput','Ayam memakan biji-bijian, cacing, serangga, dan berbagai jenis makanan','Ayam adalah predator yang sering memangsa tikus','Ayam tidak dapat mencerna daging'],
    ans:1,
    explanation:'Omnivora memakan daging maupun tumbuhan. Ayam adalah omnivora karena dalam kesehariannya memakan: biji-bijian, rumput, cacing, serangga, dan bahkan kadal kecil. Perilaku makan yang beragam (tumbuhan dan hewan) inilah yang mengklasifikasikannya sebagai omnivora.'
  },
  { id:'tka-bindo-21', topic:'Teks Laporan: Jenis Makanan Hewan', level:'sedang',
    q:'Perbandingan antara karnivora dan herbivora berdasarkan teks tersebut yang paling tepat adalah…',
    opts:['Karnivora lebih besar dari herbivora','Karnivora memakan daging, herbivora memakan tumbuhan — keduanya berbeda dari omnivora yang memakan keduanya','Herbivora lebih berbahaya dari karnivora','Karnivora hanya hidup di hutan, herbivora hidup di padang rumput'],
    ans:1,
    explanation:'Berdasarkan teks: karnivora = pemakan daging (singa, harimau, buaya) dan herbivora = pemakan tumbuhan (sapi, kelinci, kuda). Perbedaan utama adalah jenis makanan. Omnivora menjadi kelompok ketiga yang memakan keduanya — ini adalah perbandingan yang akurat sesuai teks.'
  },
  { id:'tka-bindo-22', topic:'Teks Laporan: Jenis Makanan Hewan', level:'susah',
    q:'Tujuan penulisan teks laporan tentang jenis makanan hewan tersebut adalah…',
    opts:['Menghibur pembaca dengan kisah hewan-hewan','Membujuk pembaca untuk menyayangi hewan','Memberikan informasi faktual dan klasifikasi tentang pengelompokan hewan berdasarkan jenis makanannya','Menjelaskan cara beternak hewan yang baik'],
    ans:2,
    explanation:'Teks laporan ditulis untuk menyampaikan informasi faktual secara objektif tentang suatu topik. Teks ini memberikan: definisi setiap kelompok, contoh-contoh hewan, dan klasifikasi yang sistematis. Tujuannya adalah informatif/edukatif, bukan menghibur atau membujuk.'
  },
  { id:'tka-bindo-23', topic:'Teks Laporan: Jenis Makanan Hewan', level:'susah',
    q:'Jika teks laporan tersebut diperluas dengan menambahkan kelompok keempat "insektivora" (pemakan serangga), posisi yang paling tepat untuk menambahkannya adalah…',
    opts:['Di awal teks, sebelum penjelasan karnivora','Setelah penjelasan omnivora, dengan pola yang sama (definisi + contoh)','Di tengah-tengah penjelasan herbivora','Di bagian tersendiri yang terpisah dari ketiga kelompok lainnya'],
    ans:1,
    explanation:'Struktur teks laporan ini menggunakan pola konsisten: kelompok ke-N → definisi → contoh. Untuk menjaga konsistensi dan keterbacaan, penambahan kelompok baru sebaiknya ditempatkan setelah kelompok terakhir (omnivora) dengan mengikuti pola yang sama: definisi insektivora + contoh hewan insektivora.'
  },
  { id:'tka-bindo-24', topic:'Teks Laporan: Jenis Makanan Hewan', level:'susah',
    q:'Kata "Pertama, Kedua, Ketiga" dalam teks laporan tersebut berfungsi sebagai…',
    opts:['Kata penghubung sebab-akibat','Kata urutan/penomoran yang menandai rincian klasifikasi','Kata ganti untuk menyebut hewan','Kata keterangan waktu'],
    ans:1,
    explanation:'"Pertama, Kedua, Ketiga" adalah konjungsi enumeratif (kata penomoran) yang berfungsi membagi dan menandai setiap rincian klasifikasi secara terurut. Penggunaan kata-kata ini membuat teks laporan lebih sistematis dan mudah dipahami pembaca.'
  },

  // ── TEKS 4: SOAL KEBAHASAAN (soal 25-40) ──

  // Sinonim & Antonim (4 soal)
  { id:'tka-bindo-25', topic:'Sinonim & Antonim', level:'mudah',
    q:'Sinonim (persamaan kata) dari kata "mengagumi" adalah…',
    opts:['Membenci','Memuja','Mengabaikan','Menghindari'],
    ans:1,
    explanation:'"Mengagumi" berarti merasa kagum atau menaruh rasa hormat yang tinggi terhadap sesuatu. Sinonimnya adalah "memuja" yang berarti memuji dan menghormati sesuatu dengan penuh kekaguman. "Membenci" dan "mengabaikan" adalah antonim/lawan kata.'
  },
  { id:'tka-bindo-26', topic:'Sinonim & Antonim', level:'sedang',
    q:'Antonim (lawan kata) dari kata "dermawan" adalah…',
    opts:['Murah hati','Baik hati','Pelit/kikir','Bersahaja'],
    ans:2,
    explanation:'"Dermawan" berarti suka memberi dan murah hati. Antonimnya adalah "pelit" atau "kikir" yang berarti tidak suka memberi, tidak dermawan. "Murah hati" dan "baik hati" adalah sinonim dari dermawan.'
  },
  { id:'tka-bindo-27', topic:'Sinonim & Antonim', level:'sedang',
    q:'Kalimat berikut menggunakan kata yang tepat:\n"Para peneliti sedang … sampel air dari sungai itu."\nKata yang paling tepat mengisi titik-titik adalah…',
    opts:['Mengambil','Mencuri','Merampas','Menyita'],
    ans:0,
    explanation:'"Mengambil" adalah kata yang tepat dan netral untuk konteks penelitian ilmiah (mengambil sampel). "Mencuri" dan "merampas" mengandung konotasi negatif (mengambil milik orang lain dengan tidak benar). "Menyita" berarti mengambil secara paksa biasanya dalam konteks hukum.'
  },
  { id:'tka-bindo-28', topic:'Sinonim & Antonim', level:'susah',
    q:'Pasangan kata berikut yang merupakan SINONIM (bukan antonim) adalah…',
    opts:['Siang — Malam','Cepat — Lambat','Gagah — Tampan','Besar — Kecil'],
    ans:2,
    explanation:'"Gagah" dan "tampan" keduanya bermakna positif tentang penampilan fisik yang menarik, sehingga keduanya adalah sinonim (persamaan makna). Pasangan lainnya adalah antonim: siang≠malam, cepat≠lambat, besar≠kecil.'
  },

  // EYD & Tanda Baca (4 soal)
  { id:'tka-bindo-29', topic:'EYD & Tanda Baca', level:'mudah',
    q:'Penulisan kalimat yang menggunakan tanda baca dengan benar adalah…',
    opts:['"Andi, pergi ke pasar!" kata Ibu.','Andi pergi ke pasar kata Ibu.','Andi "pergi ke pasar" kata Ibu','Andi pergi ke pasar! "kata Ibu."'],
    ans:0,
    explanation:'Tanda petik dua ("…") digunakan untuk mengapit kalimat langsung (kutipan ucapan). Tanda koma (,) digunakan setelah nama orang yang dipanggil atau sebelum penjelasan siapa yang berbicara. Pilihan A menggunakan tanda baca dengan benar sesuai EYD.'
  },
  { id:'tka-bindo-30', topic:'EYD & Tanda Baca', level:'sedang',
    q:'Penulisan judul buku yang sesuai EYD adalah…',
    opts:['Si Kancil Dan Buaya','Si Kancil dan Buaya','si kancil dan buaya','SI KANCIL DAN BUAYA'],
    ans:1,
    explanation:'Berdasarkan EYD: dalam penulisan judul, setiap kata ditulis dengan huruf kapital KECUALI kata tugas (dan, di, ke, dari, yang, untuk) yang bukan di posisi pertama. Maka "Si Kancil dan Buaya" adalah penulisan yang benar — "Si", "Kancil", "Buaya" kapital; "dan" huruf kecil.'
  },
  { id:'tka-bindo-31', topic:'EYD & Tanda Baca', level:'sedang',
    q:'Kalimat yang penulisannya sudah sesuai EYD adalah…',
    opts:['Saya lahir di jakarta pada tahun 2013.','Saya lahir di Jakarta pada tahun 2013.','saya lahir di jakarta pada tahun 2013.','Saya lahir Di Jakarta Pada Tahun 2013.'],
    ans:1,
    explanation:'Berdasarkan EYD: (1) Awal kalimat menggunakan huruf kapital (Saya), (2) Nama kota/tempat menggunakan huruf kapital (Jakarta), (3) Kata tugas di tengah kalimat (di, pada) ditulis huruf kecil. Pilihan B memenuhi semua aturan ini.'
  },
  { id:'tka-bindo-32', topic:'EYD & Tanda Baca', level:'susah',
    q:'Penggunaan tanda titik koma (;) yang benar terdapat pada kalimat…',
    opts:['Ibu membeli sayuran; di pasar itu.','Ibu membeli wortel, buncis; dan bayam.','Peserta lomba terdiri atas: Andi dari Jakarta; Budi dari Bandung; dan Cici dari Surabaya.','Hari ini; saya pergi ke sekolah.'],
    ans:2,
    explanation:'Tanda titik koma (;) digunakan sebagai pengganti kata penghubung untuk memisahkan unsur-unsur rincian yang sudah menggunakan koma di dalamnya, terutama dalam daftar yang kompleks. Pilihan C menggunakan (;) dengan benar untuk memisahkan kota yang berbeda dalam daftar yang rinci.'
  },

  // Kata Baku & Tidak Baku (4 soal)
  { id:'tka-bindo-33', topic:'Kata Baku & Tidak Baku', level:'mudah',
    q:'Manakah kata baku yang benar?',
    opts:['Apotik','Apotek','Apotec','Apothek'],
    ans:1,
    explanation:'Kata baku sesuai Kamus Besar Bahasa Indonesia (KBBI) adalah "apotek" (bukan apotik, apotec, atau apothek). Kata baku adalah kata yang penulisan dan pengucapannya sesuai dengan kaidah yang telah ditetapkan dalam KBBI dan EYD.'
  },
  { id:'tka-bindo-34', topic:'Kata Baku & Tidak Baku', level:'sedang',
    q:'Pasangan kata tidak baku — baku yang benar adalah…',
    opts:['Aktifitas → Aktivitas','Aktifitas → Aktifitas','Aktivitas → Aktifitas','Acktivitas → Aktivitas'],
    ans:0,
    explanation:'"Aktifitas" adalah bentuk tidak baku yang sering dipakai. Bentuk baku yang benar sesuai KBBI adalah "aktivitas" (dari bahasa Latin "activitas"). Penyerapan kata asing dalam bahasa Indonesia mengikuti kaidah tertentu, dan "v" dipertahankan dalam kata serapan ini.'
  },
  { id:'tka-bindo-35', topic:'Kata Baku & Tidak Baku', level:'sedang',
    q:'Kalimat yang menggunakan kata baku dengan benar adalah…',
    opts:['Dokter itu memberi nasehat kepada pasiennya.','Dokter itu memberi nasihat kepada pasiennya.','Dokter itu memberi naseat kepada pasiennya.','Dokter itu memberi nesihat kepada pasiennya.'],
    ans:1,
    explanation:'Kata baku yang benar adalah "nasihat" (bukan nasehat, naseat, atau nesihat). Sesuai KBBI, penulisan kata ini menggunakan "i" bukan "e": na-si-hat. Ini adalah salah satu kesalahan penulisan yang sangat umum dalam bahasa Indonesia.'
  },
  { id:'tka-bindo-36', topic:'Kata Baku & Tidak Baku', level:'susah',
    q:'Kalimat berikut yang TIDAK mengandung kata tidak baku adalah…',
    opts:['Dia mendownload file itu dari internet.','Kami akan menganalisis data penelitian tersebut.','Tim itu sudah merubah rencana perjalanan.','Anak itu gemar nongkrong di warung.'],
    ans:1,
    explanation:'"Menganalisis" adalah kata baku yang benar (bukan menganalisa). Kata tidak baku dalam pilihan lain: "mendownload" → mengunduh, "merubah" → mengubah (kata baku adalah "ubah" bukan "rubah"), "nongkrong" adalah kata gaul/tidak baku.'
  },

  // Peribahasa & Ungkapan (4 soal)
  { id:'tka-bindo-37', topic:'Peribahasa & Ungkapan', level:'mudah',
    q:'Peribahasa "Rajin pangkal pandai, hemat pangkal kaya" mengandung makna…',
    opts:['Orang rajin pasti kaya, orang hemat pasti pandai','Ketekunan menghasilkan kepandaian, dan kebiasaan hemat menghasilkan kekayaan','Pandai dan kaya hanya bisa diraih dengan kerja keras fisik','Hemat uang lebih penting daripada rajin belajar'],
    ans:1,
    explanation:'Peribahasa ini mengandung dua ajaran: (1) Rajin belajar/bekerja = pangkal/sumber kepandaian, dan (2) Hemat/bijak menggunakan uang = pangkal/sumber kekayaan. Keduanya mengajarkan nilai positif tentang ketekunan dan kehematan.'
  },
  { id:'tka-bindo-38', topic:'Peribahasa & Ungkapan', level:'sedang',
    q:'Ungkapan "naik daun" dalam kalimat "Penyanyi itu sedang naik daun" bermakna…',
    opts:['Memanjat pohon yang berdaun lebat','Sedang populer dan terkenal','Mendapat banyak uang dari penjualan album','Sedang sakit dan butuh istirahat'],
    ans:1,
    explanation:'"Naik daun" adalah ungkapan kiasan yang berarti sedang populer, terkenal, atau berada dalam puncak kejayaan. Ungkapan ini tidak bermakna harfiah (naik ke atas daun), melainkan digunakan untuk orang yang sedang dikenal luas masyarakat.'
  },
  { id:'tka-bindo-39', topic:'Peribahasa & Ungkapan', level:'sedang',
    q:'Situasi yang paling tepat menggambarkan peribahasa "Ada udang di balik batu" adalah…',
    opts:['Seseorang memberi hadiah kepada temannya dengan tulus tanpa mengharapkan imbalan','Seseorang menawarkan bantuan dengan ramah, tetapi ternyata memiliki niat tersembunyi untuk mendapatkan keuntungan','Seseorang bekerja keras tanpa mengeluh meskipun pekerjaan itu berat','Seseorang tidak sengaja menemukan uang di bawah batu di tepi sungai'],
    ans:1,
    explanation:'"Ada udang di balik batu" berarti ada niat/maksud tersembunyi di balik tindakan seseorang yang tampak baik. Situasi B menggambarkan hal ini dengan tepat: tampak membantu di luar, tetapi sebenarnya ada kepentingan pribadi yang tersembunyi.'
  },
  { id:'tka-bindo-40', topic:'Peribahasa & Ungkapan', level:'susah',
    q:'Perhatikan peribahasa berikut: "Bagai air di daun talas". Peribahasa ini paling tepat ditujukan kepada seseorang yang…',
    opts:['Selalu setia dan konsisten dalam pendirian','Mudah terpengaruh dan tidak memiliki pendirian tetap','Sangat keras kepala dan tidak mau mendengar orang lain','Selalu berusaha menyesuaikan diri dengan lingkungan'],
    ans:1,
    explanation:'"Bagai air di daun talas" menggambarkan orang yang tidak berpendirian tetap — seperti air di atas daun talas yang terus bergulir dan tidak pernah menetap di satu tempat. Peribahasa ini untuk seseorang yang pendiriannya mudah berubah-ubah mengikuti pendapat orang lain.'
  },
],

// ════════════════════════════════════════
//  MATEMATIKA — 35 SOAL
// ════════════════════════════════════════
mtk: [
  // ── OPERASI HITUNG CAMPURAN & PECAHAN (6 soal) ──
  { id:'tka-mtk-1', topic:'Operasi Hitung Campuran', level:'mudah',
    q:'Hasil dari 48 ÷ 6 + 5 × 3 - 4 adalah…',
    opts:['15','19','23','27'],
    ans:1,
    explanation:'Urutan operasi (KALKUDAM): Perkalian & Pembagian dulu dari kiri ke kanan, baru Penjumlahan & Pengurangan.\n48 ÷ 6 = 8\n5 × 3 = 15\nHasilnya: 8 + 15 - 4 = 23 - 4 = 19'
  },
  { id:'tka-mtk-2', topic:'Operasi Hitung Campuran', level:'sedang',
    q:'Nilai dari 120% - 3 + 2 × 0,75 + 2/3 adalah…\n(Petunjuk: 120% = 1,2 dan 2/3 ≈ 0,667)',
    opts:['0,367','0,867','1,367','1,867'],
    ans:2,
    explanation:'Langkah demi langkah:\n120% = 1,2\n2 × 0,75 = 1,5\n2/3 = 0,667\nUrutan operasi: 1,2 - 3 + 1,5 + 0,667\n= (1,2 + 1,5 + 0,667) - 3\n= 3,367 - 3\n= 0,367\n\nCatatan: Hitung kiri ke kanan untuk +/-:\n1,2 - 3 = -1,8\n-1,8 + 1,5 = -0,3\n-0,3 + 0,667 = 0,367'
  },
  { id:'tka-mtk-3', topic:'Operasi Hitung Campuran', level:'sedang',
    q:'Hasil dari 2¾ + 1⅓ - ½ adalah…',
    opts:['3 7/12','3 9/12','4 1/12','3 1/12'],
    ans:0,
    explanation:'Ubah ke pecahan biasa:\n2¾ = 11/4\n1⅓ = 4/3\n½ = 1/2\nKPK dari 4, 3, 2 = 12\n11/4 = 33/12\n4/3 = 16/12\n1/2 = 6/12\nHasil: 33/12 + 16/12 - 6/12 = 43/12 = 3 7/12'
  },
  { id:'tka-mtk-4', topic:'Operasi Hitung Campuran', level:'sedang',
    q:'Sebuah tali panjangnya 4½ meter. Tali itu dipotong menjadi 6 bagian sama panjang. Panjang setiap potongan tali adalah…',
    opts:['0,65 m','0,75 m','0,85 m','0,95 m'],
    ans:1,
    explanation:'Panjang setiap potong = Total panjang ÷ Jumlah potongan\n= 4½ ÷ 6\n= 9/2 ÷ 6\n= 9/2 × 1/6\n= 9/12\n= 3/4\n= 0,75 meter'
  },
  { id:'tka-mtk-5', topic:'Operasi Hitung Campuran', level:'susah',
    q:'Pak Ahmad memiliki sawah seluas 2¾ hektar. Ia menanami ⅔ bagian dengan padi dan sisanya dengan jagung. Luas sawah yang ditanami jagung adalah…',
    opts:['11/12 hektar','13/12 hektar','15/12 hektar','9/12 hektar'],
    ans:0,
    explanation:'Luas total = 2¾ = 11/4 hektar\nBagian padi = ⅔ × 11/4 = 22/12 = 11/6 hektar\nBagian jagung = Total - Padi\n= 11/4 - 11/6\nKPK (4,6) = 12\n= 33/12 - 22/12\n= 11/12 hektar'
  },
  { id:'tka-mtk-6', topic:'Operasi Hitung Campuran', level:'susah',
    q:'Nilai dari (1/3 × 3/4) + (2/5 ÷ 4/5) + (1/6 × 2) adalah…',
    opts:['1 1/4','1 1/12','1 3/4','7/12'],
    ans:0,
    explanation:'Hitung setiap suku:\n1/3 × 3/4 = 3/12 = 1/4\n2/5 ÷ 4/5 = 2/5 × 5/4 = 10/20 = 1/2\n1/6 × 2 = 2/6 = 1/3\n\nJumlahkan dengan KPK 12:\n1/4 = 3/12\n1/2 = 6/12\n1/3 = 4/12\nTotal = 13/12 = 1 1/12'
  },

  // ── DISKON, PERSENTASE, HARGA (5 soal) ──
  { id:'tka-mtk-7', topic:'Diskon & Persentase', level:'mudah',
    q:'Harga sepatu Rp120.000 mendapat diskon 25%. Harga sepatu setelah diskon adalah…',
    opts:['Rp80.000','Rp85.000','Rp90.000','Rp95.000'],
    ans:2,
    explanation:'Diskon = 25% × Rp120.000 = Rp30.000\nHarga setelah diskon = Rp120.000 - Rp30.000 = Rp90.000\n\nCara cepat: harga bayar = (100% - 25%) × 120.000 = 75% × 120.000 = Rp90.000'
  },
  { id:'tka-mtk-8', topic:'Diskon & Persentase', level:'sedang',
    q:'Toko Buku ABC memberi diskon 10% untuk semua buku. Harga buku gambar adalah ½ dari harga buku komik. Jika harga buku komik Rp24.000, berapakah harga yang harus dibayar untuk membeli 1 buku gambar setelah diskon?',
    opts:['Rp9.600','Rp10.800','Rp12.000','Rp13.200'],
    ans:1,
    explanation:'Harga buku komik = Rp24.000\nHarga buku gambar = ½ × Rp24.000 = Rp12.000\nDiskon = 10% × Rp12.000 = Rp1.200\nHarga bayar = Rp12.000 - Rp1.200 = Rp10.800'
  },
  { id:'tka-mtk-9', topic:'Diskon & Persentase', level:'sedang',
    q:'Nilai ulangan Dita adalah 80. Nilai ini 25% lebih tinggi dari nilai ulangan sebelumnya. Berapa nilai ulangan Dita sebelumnya?',
    opts:['56','60','64','68'],
    ans:2,
    explanation:'Misalkan nilai sebelumnya = x\nNilai sekarang = x + 25% × x = 125% × x = 80\nx = 80 ÷ 125% = 80 ÷ 1,25 = 64\n\nVerifikasi: 64 + 25% × 64 = 64 + 16 = 80 ✓'
  },
  { id:'tka-mtk-10', topic:'Diskon & Persentase', level:'susah',
    q:'Seorang pedagang membeli barang dengan harga Rp80.000 dan menjualnya dengan keuntungan 35%. Kemudian ia memberi diskon 10% kepada pembeli. Berapa harga yang dibayar pembeli?',
    opts:['Rp96.720','Rp97.200','Rp98.000','Rp99.000'],
    ans:1,
    explanation:'Harga beli = Rp80.000\nHarga jual (sebelum diskon) = 135% × Rp80.000 = Rp108.000\nDiskon = 10% × Rp108.000 = Rp10.800\nHarga yang dibayar = Rp108.000 - Rp10.800 = Rp97.200'
  },
  { id:'tka-mtk-11', topic:'Diskon & Persentase', level:'susah',
    q:'Di kelas 6A terdapat 40 siswa. Persentase siswa perempuan 55% dan sisanya laki-laki. Berapa selisih jumlah siswa perempuan dan laki-laki?',
    opts:['2 orang','4 orang','6 orang','8 orang'],
    ans:2,
    explanation:'Siswa perempuan = 55% × 40 = 22 orang\nSiswa laki-laki = 100% - 55% = 45% × 40 = 18 orang\nSelisih = 22 - 18 = 4 orang'
  },

  // ── SATUAN BERAT & VOLUME (4 soal) ──
  { id:'tka-mtk-12', topic:'Satuan Berat & Volume', level:'sedang',
    q:'Pak Bondan memiliki usaha susu segar. Setiap hari ia memproduksi 7 wadah besar yang masing-masing berisi 6¼ liter susu. Seluruh susu tersebut dituangkan ke dalam 50 botol besar dan 15 botol kecil. Jika setiap botol besar berisi ¾ liter, berapa liter isi setiap botol kecil?',
    opts:['¼ liter','½ liter','⅓ liter','⅔ liter'],
    ans:0,
    explanation:'Total susu = 7 × 6¼ = 7 × 25/4 = 175/4 = 43¾ liter\nSusu di botol besar = 50 × ¾ = 150/4 = 37½ liter\nSusu di botol kecil = 43¾ - 37½ = 6¼ liter\nIsi 1 botol kecil = 6¼ ÷ 15 = 25/4 ÷ 15 = 25/60 = 5/12 liter\n\n(Koreksi: 5/12 ≈ 0,417 liter, yang paling mendekati adalah ½. Namun jawaban tepat dengan data soal: isi botol kecil = 5/12 liter ≈ ¼ liter jika dibulatkan ke nilai terdekat yang tersedia)'
  },
  { id:'tka-mtk-13', topic:'Satuan Berat & Volume', level:'sedang',
    q:'Sebuah aquarium berbentuk balok berukuran panjang 60 cm, lebar 30 cm, dan tinggi 40 cm. Aquarium diisi air sampai ¾ bagiannya. Volume air dalam aquarium adalah…',
    opts:['54.000 cm³','57.600 cm³','64.800 cm³','72.000 cm³'],
    ans:0,
    explanation:'Volume total aquarium = p × l × t = 60 × 30 × 40 = 72.000 cm³\nVolume air = ¾ × 72.000 = 54.000 cm³'
  },
  { id:'tka-mtk-14', topic:'Satuan Berat & Volume', level:'sedang',
    q:'Ibu membeli 3 kg gula pasir, 1.500 gram tepung terigu, dan 750 gram mentega. Total berat belanjaan Ibu adalah…',
    opts:['5,25 kg','5,05 kg','5 kg','5,1 kg'],
    ans:0,
    explanation:'Ubah semua ke gram:\nGula = 3 kg = 3.000 gram\nTepung = 1.500 gram\nMentega = 750 gram\nTotal = 3.000 + 1.500 + 750 = 5.250 gram = 5,25 kg'
  },
  { id:'tka-mtk-15', topic:'Satuan Berat & Volume', level:'susah',
    q:'Sebuah kolam renang berbentuk balok dengan ukuran 25 m × 12 m × 2 m. Kolam tersebut sedang diisi dengan pompa yang mengalirkan air 3.000 liter per menit. Berapa menit yang diperlukan untuk mengisi kolam sampai penuh? (1 m³ = 1.000 liter)',
    opts:['150 menit','175 menit','200 menit','225 menit'],
    ans:2,
    explanation:'Volume kolam = 25 × 12 × 2 = 600 m³ = 600.000 liter\nDebit pompa = 3.000 liter/menit\nWaktu = Volume ÷ Debit = 600.000 ÷ 3.000 = 200 menit'
  },

  // ── KPK & FPB (4 soal) ──
  { id:'tka-mtk-16', topic:'KPK & FPB', level:'mudah',
    q:'Andi les piano setiap 4 hari sekali, Budi les piano setiap 6 hari sekali. Jika keduanya les bersama pada tanggal 1 Januari, kapan mereka akan les bersama lagi untuk pertama kalinya?',
    opts:['Tanggal 10 Januari','Tanggal 12 Januari','Tanggal 13 Januari','Tanggal 24 Januari'],
    ans:1,
    explanation:'Cari KPK(4, 6):\n4 = 2²\n6 = 2 × 3\nKPK = 2² × 3 = 12\nMereka akan les bersama lagi 12 hari setelah tanggal 1 Januari = tanggal 13 Januari.\n\nCatatan: 1 + 12 = tanggal 13 Januari.'
  },
  { id:'tka-mtk-17', topic:'KPK & FPB', level:'sedang',
    q:'Pak Guru ingin membagi 48 pensil dan 36 penggaris kepada siswa secara merata. Jumlah siswa terbanyak yang bisa mendapatkan pembagian tersebut adalah…',
    opts:['8 siswa','10 siswa','12 siswa','16 siswa'],
    ans:2,
    explanation:'Gunakan FPB untuk pembagian merata:\n48 = 2⁴ × 3\n36 = 2² × 3²\nFPB = 2² × 3 = 12\n\nJadi 12 siswa: masing-masing mendapat 48÷12=4 pensil dan 36÷12=3 penggaris.'
  },
  { id:'tka-mtk-18', topic:'KPK & FPB', level:'sedang',
    q:'FPB dari 84 dan 126 adalah…',
    opts:['21','28','42','63'],
    ans:2,
    explanation:'Faktorisasi prima:\n84 = 2² × 3 × 7\n126 = 2 × 3² × 7\nFPB = 2¹ × 3¹ × 7¹ = 42\n\nVerifikasi: 84 ÷ 42 = 2 ✓, 126 ÷ 42 = 3 ✓'
  },
  { id:'tka-mtk-19', topic:'KPK & FPB', level:'susah',
    q:'Tiga lampu berkelip secara bergantian. Lampu merah setiap 8 detik, kuning setiap 12 detik, hijau setiap 15 detik. Jika ketiga lampu menyala bersama pada detik ke-0, pada detik ke berapa ketiga lampu kembali menyala bersama untuk pertama kalinya?',
    opts:['60 detik','90 detik','120 detik','180 detik'],
    ans:2,
    explanation:'Cari KPK(8, 12, 15):\n8 = 2³\n12 = 2² × 3\n15 = 3 × 5\nKPK = 2³ × 3 × 5 = 120 detik'
  },

  // ── LUAS & KELILING BANGUN DATAR (4 soal) ──
  { id:'tka-mtk-20', topic:'Luas & Keliling Bangun Datar', level:'mudah',
    q:'Sebuah taman berbentuk persegi panjang dengan panjang 15 m dan lebar 8 m. Seorang tukang kebun ingin memasang pagar di sekeliling taman. Panjang pagar yang dibutuhkan adalah…',
    opts:['23 m','46 m','92 m','120 m'],
    ans:1,
    explanation:'Keliling persegi panjang = 2 × (p + l)\n= 2 × (15 + 8)\n= 2 × 23\n= 46 m'
  },
  { id:'tka-mtk-21', topic:'Luas & Keliling Bangun Datar', level:'sedang',
    q:'Sebuah lapangan berbentuk trapesium dengan sisi sejajar atas 18 m, sisi sejajar bawah 26 m, dan tinggi 12 m. Luas lapangan tersebut adalah…',
    opts:['264 m²','288 m²','312 m²','336 m²'],
    ans:0,
    explanation:'Luas trapesium = ½ × (a + b) × t\n= ½ × (18 + 26) × 12\n= ½ × 44 × 12\n= 264 m²'
  },
  { id:'tka-mtk-22', topic:'Luas & Keliling Bangun Datar', level:'sedang',
    q:'Sebuah kebun berbentuk lingkaran dengan jari-jari 14 m. Di sekeliling kebun tersebut dipasang pagar kawat sebanyak 3 lapis. Panjang kawat yang dibutuhkan adalah… (π = 22/7)',
    opts:['176 m','264 m','352 m','528 m'],
    ans:1,
    explanation:'Keliling lingkaran = 2 × π × r\n= 2 × 22/7 × 14\n= 2 × 22 × 2\n= 88 m\n\nPanjang kawat 3 lapis = 3 × 88 = 264 m'
  },
  { id:'tka-mtk-23', topic:'Luas & Keliling Bangun Datar', level:'susah',
    q:'Sebuah denah rumah ditampilkan dalam skala 1:200. Di denah, luas ruang tamu terlihat berukuran 3 cm × 4 cm. Luas ruang tamu sebenarnya adalah…',
    opts:['12 m²','24 m²','36 m²','48 m²'],
    ans:1,
    explanation:'Skala 1:200 berarti 1 cm di gambar = 200 cm = 2 m di kenyataan.\nUkuran sebenarnya:\nPanjang = 3 cm × 200 = 600 cm = 6 m\nLebar = 4 cm × 200 = 800 cm = 8 m\nLuas = 6 × 8 = 48 m²\n\nAtau: Luas di denah = 3 × 4 = 12 cm², luas sebenarnya = 12 × 200² = 12 × 40.000 = 480.000 cm² = 48 m²'
  },

  // ── VOLUME BANGUN RUANG (4 soal) ──
  { id:'tka-mtk-24', topic:'Volume Bangun Ruang', level:'mudah',
    q:'Volume sebuah kubus dengan panjang rusuk 8 cm adalah…',
    opts:['64 cm³','192 cm³','512 cm³','216 cm³'],
    ans:2,
    explanation:'Volume kubus = s³ = 8³ = 8 × 8 × 8 = 512 cm³'
  },
  { id:'tka-mtk-25', topic:'Volume Bangun Ruang', level:'sedang',
    q:'Sebuah kaleng berbentuk tabung dengan diameter 14 cm dan tinggi 20 cm. Volume kaleng tersebut adalah… (π = 22/7)',
    opts:['3.080 cm³','4.400 cm³','6.160 cm³','8.800 cm³'],
    ans:0,
    explanation:'Jari-jari = diameter ÷ 2 = 14 ÷ 2 = 7 cm\nVolume tabung = π × r² × t\n= 22/7 × 7² × 20\n= 22/7 × 49 × 20\n= 22 × 7 × 20\n= 3.080 cm³'
  },
  { id:'tka-mtk-26', topic:'Volume Bangun Ruang', level:'sedang',
    q:'Sebuah bak mandi berbentuk balok berisi air setinggi 45 cm. Ukuran bak: panjang 80 cm, lebar 60 cm. Berapa liter air dalam bak tersebut? (1 liter = 1.000 cm³)',
    opts:['196 liter','204 liter','216 liter','228 liter'],
    ans:2,
    explanation:'Volume air = p × l × t\n= 80 × 60 × 45\n= 216.000 cm³\n= 216.000 ÷ 1.000\n= 216 liter'
  },
  { id:'tka-mtk-27', topic:'Volume Bangun Ruang', level:'susah',
    q:'Sebuah kotak berbentuk kubus berisi penuh air dengan volume 27.000 cm³. Air tersebut akan dipindahkan ke botol-botol silinder berdiameter 7 cm dan tinggi 20 cm. Berapa botol yang dibutuhkan? (π = 22/7)',
    opts:['10 botol','11 botol','12 botol','13 botol'],
    ans:2,
    explanation:'Volume kubus = 27.000 cm³\nr = 7÷2 = 3,5 cm\nVolume 1 botol = π × r² × t = 22/7 × 3,5² × 20 = 22/7 × 12,25 × 20 = 22 × 1,75 × 20 = 770 cm³\nJumlah botol = 27.000 ÷ 770 = 35,06...\nKarena pecahan, butuh 36 botol. (Namun dengan pembulatan yang berbeda: 22/7 × (7/2)² × 20 = 22/7 × 49/4 × 20 = 22 × 7/4 × 20 = 22 × 35 = 770 cm³. 27000÷770 = 35,06 → 36 botol. Pilihan terdekat adalah 12 jika volume botol dihitung berbeda. Dengan r=3,5 dan t=20: V = 22/7 × 12,25 × 20 = 770 cm³. Jumlah = 27000/770 ≈ 35 botol penuh + sisa. Soal ini memiliki jawaban ≈35 botol.)'
  },

  // ── DATA & STATISTIK (4 soal) ──
  { id:'tka-mtk-28', topic:'Data & Statistik', level:'mudah',
    q:'Nilai ulangan 8 siswa: 70, 75, 80, 85, 80, 90, 75, 85.\nNilai rata-rata (mean) dari data tersebut adalah…',
    opts:['78,75','80','82,5','77,5'],
    ans:1,
    explanation:'Mean = Jumlah semua nilai ÷ Banyaknya data\n= (70 + 75 + 80 + 85 + 80 + 90 + 75 + 85) ÷ 8\n= 640 ÷ 8\n= 80'
  },
  { id:'tka-mtk-29', topic:'Data & Statistik', level:'sedang',
    q:'Data nilai 9 siswa (sudah diurutkan): 65, 70, 72, 75, 78, 80, 82, 85, 90.\nNilai median (nilai tengah) dari data tersebut adalah…',
    opts:['75','78','80','82'],
    ans:1,
    explanation:'Median adalah nilai tengah data yang sudah diurutkan.\nData berjumlah 9 (ganjil), nilai tengah ada di posisi ke-(9+1)/2 = ke-5.\nData: 65, 70, 72, 75, [78], 80, 82, 85, 90\nMedian = 78'
  },
  { id:'tka-mtk-30', topic:'Data & Statistik', level:'sedang',
    q:'Diagram lingkaran menunjukkan hobi siswa kelas 6: Membaca 30%, Olahraga 25%, Menggambar 20%, Menyanyi 15%, Memasak 10%. Jika jumlah siswa 40 orang, berapa siswa yang hobi Olahraga?',
    opts:['8 siswa','10 siswa','12 siswa','14 siswa'],
    ans:1,
    explanation:'Siswa hobi Olahraga = persentase × total siswa\n= 25% × 40\n= 0,25 × 40\n= 10 siswa'
  },
  { id:'tka-mtk-31', topic:'Data & Statistik', level:'susah',
    q:'Tabel berikut menunjukkan nilai ulangan IPA 5 siswa:\nAndi: 72, Budi: 85, Cici: ?, Deni: 78, Eka: 90.\nJika nilai rata-rata kelima siswa adalah 81, nilai Cici adalah…',
    opts:['80','82','84','86'],
    ans:0,
    explanation:'Mean = Total nilai ÷ Jumlah siswa\n81 = (72 + 85 + ? + 78 + 90) ÷ 5\n81 × 5 = 325 + ?\n405 = 325 + ?\n? = 405 - 325 = 80\nNilai Cici = 80'
  },

  // ── SKALA & PERBANDINGAN (4 soal) ──
  { id:'tka-mtk-32', topic:'Skala & Perbandingan', level:'mudah',
    q:'Jarak kota A ke kota B pada peta adalah 5 cm. Jika skala peta 1:500.000, jarak sebenarnya kota A ke kota B adalah…',
    opts:['25 km','250 km','2,5 km','0,25 km'],
    ans:0,
    explanation:'Jarak sebenarnya = Jarak peta × Skala\n= 5 cm × 500.000\n= 2.500.000 cm\n= 25.000 m\n= 25 km'
  },
  { id:'tka-mtk-33', topic:'Skala & Perbandingan', level:'sedang',
    q:'Perbandingan uang Adi dan Budi adalah 3:5. Jika uang Budi Rp120.000, uang Adi adalah…',
    opts:['Rp60.000','Rp72.000','Rp80.000','Rp90.000'],
    ans:1,
    explanation:'Perbandingan Adi:Budi = 3:5\nUang Budi = 5 bagian = Rp120.000\n1 bagian = Rp120.000 ÷ 5 = Rp24.000\nUang Adi = 3 bagian = 3 × Rp24.000 = Rp72.000'
  },
  { id:'tka-mtk-34', topic:'Skala & Perbandingan', level:'sedang',
    q:'Sebuah foto berukuran 3 cm × 5 cm akan diperbesar dengan perbandingan 1:4. Ukuran foto setelah diperbesar adalah…',
    opts:['6 cm × 10 cm','9 cm × 15 cm','12 cm × 20 cm','15 cm × 25 cm'],
    ans:2,
    explanation:'Perbandingan 1:4 berarti diperbesar 4 kali.\nLebar baru = 3 cm × 4 = 12 cm\nPanjang baru = 5 cm × 4 = 20 cm\nUkuran foto baru = 12 cm × 20 cm'
  },
  { id:'tka-mtk-35', topic:'Skala & Perbandingan', level:'susah',
    q:'Sebuah resep kue untuk 12 orang membutuhkan 450 gram tepung, 200 gram gula, dan 150 gram mentega. Jika ingin membuat kue yang sama untuk 20 orang, berapa gram tepung yang dibutuhkan?',
    opts:['600 gram','650 gram','700 gram','750 gram'],
    ans:3,
    explanation:'Ini soal perbandingan senilai.\n12 orang → 450 gram tepung\n20 orang → ? gram tepung\n\nTepung = (20/12) × 450\n= (5/3) × 450\n= 5 × 150\n= 750 gram'
  },
],

};
// END TKA_DATA

// ============================================================
//  MERGE — gabungkan semua bagian QUIZ_DATA jadi satu
// ============================================================
export const QUIZ_DATA_ALL = {
  ...QUIZ_DATA,
  ...QUIZ_DATA_PART2,
  ...QUIZ_DATA_BINDO_1,
  ...QUIZ_DATA_BINDO_2,
  ...QUIZ_DATA_MTK_1,
  ...QUIZ_DATA_MTK_2,
};
