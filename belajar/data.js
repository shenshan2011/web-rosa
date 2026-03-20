// ============================================================
//  data.js — BelajarCeria | Semua data materi, flashcard & kuis
// ============================================================

// ---------- DAFTAR TOPIK PER MAPEL ----------
const TOPIC_LIST = {
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
const MATERI_CONTENT = {

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
const QUIZ_DATA = {
  'ipa-1': [
    {
      q: 'Kupu-kupu mengalami metamorfosis jenis apa?',
      opts: ['Tidak sempurna','Sempurna','Parsial','Langsung'],
      ans: 1,
      hint: 'Pikirkan apakah bentuk ulat dan kupu-kupu SAMA atau BERBEDA.',
      explanation: 'Kupu-kupu mengalami metamorfosis SEMPURNA karena bentuk larva (ulat) sangat berbeda dari dewasa (kupu-kupu). Melalui 4 tahap: Telur → Larva → Pupa → Imago.'
    },
    {
      q: 'Urutan metamorfosis sempurna yang benar adalah...',
      opts: ['Telur→Nimfa→Imago','Telur→Larva→Pupa→Imago','Telur→Pupa→Larva→Imago','Larva→Telur→Pupa'],
      ans: 1,
      hint: 'Metamorfosis sempurna melewati 4 tahap. Urutan setelah larva adalah...?',
      explanation: 'Metamorfosis sempurna: Telur → Larva → Pupa (kepompong) → Imago (dewasa). Ini yang membedakannya dari tidak sempurna yang tidak ada tahap pupa.'
    },
    {
      q: 'Hewan berikut yang metamorfosisnya TIDAK SEMPURNA adalah...',
      opts: ['Kupu-kupu','Nyamuk','Belalang','Katak'],
      ans: 2,
      hint: 'Hewan metamorfosis tidak sempurna tidak punya tahap kepompong. Mana yang punya nimfa?',
      explanation: 'Belalang mengalami metamorfosis TIDAK SEMPURNA: Telur → Nimfa → Belalang dewasa. Kupu-kupu, nyamuk, dan katak mengalami metamorfosis sempurna.'
    },
    {
      q: 'Nimfa adalah...',
      opts: ['Tahap kepompong','Anak hewan mirip dewasa tapi lebih kecil','Anak hewan berbeda dari dewasa','Nama lain larva'],
      ans: 1,
      hint: 'Nimfa ada pada metamorfosis TIDAK sempurna. Apakah bentuknya mirip atau beda dengan dewasa?',
      explanation: 'Nimfa adalah anak hewan pada metamorfosis tidak sempurna. Bentuknya mirip hewan dewasa tetapi lebih kecil dan belum memiliki sayap sempurna.'
    },
    {
      q: 'Jentik-jentik adalah larva dari...',
      opts: ['Kupu-kupu','Lebah','Nyamuk','Lalat'],
      ans: 2,
      hint: 'Hewan pengisap darah ini bertelur di air yang diam. Larvanya hidup di air.',
      explanation: 'Jentik-jentik (larva nyamuk) hidup di air yang diam (kolam, genangan). Setelah menjadi pupa, nyamuk dewasa muncul ke permukaan air.'
    },
  ],
  'ipa-2': [
    {
      q: 'Ayam berkembang biak secara...',
      opts: ['Vivipar','Ovipar','Ovovivipar','Tunas'],
      ans: 1,
      hint: 'Ayam mengeluarkan sesuatu yang perlu dierami sebelum menetas.',
      explanation: 'Ayam adalah contoh hewan Ovipar (bertelur). Embrio berkembang di dalam telur di luar tubuh induk.'
    },
    {
      q: 'Hewan yang berkembang biak dengan tunas adalah...',
      opts: ['Amoeba','Hydra','Planaria','Ular'],
      ans: 1,
      hint: 'Hewan kecil ini hidup di air tawar dan tunas tumbuh di bagian tubuhnya.',
      explanation: 'Hydra berkembang biak dengan tunas. Tunas tumbuh di bagian tubuh induk, kemudian melepaskan diri menjadi individu baru.'
    },
    {
      q: 'Kucing termasuk hewan...',
      opts: ['Ovipar','Ovovivipar','Vivipar','Membelah diri'],
      ans: 2,
      hint: 'Kucing melahirkan anak yang sudah bisa bergerak, bukan bertelur.',
      explanation: 'Kucing adalah contoh Vivipar — melahirkan anak. Embrio berkembang dalam rahim induk dan mendapat nutrisi langsung dari induk.'
    },
    {
      q: 'Ular tertentu adalah contoh hewan...',
      opts: ['Ovipar','Vivipar','Ovovivipar','Partenogenesis'],
      ans: 2,
      hint: 'Telur ular berkembang di dalam tubuh induk, namun bayi lahir hidup-hidup.',
      explanation: 'Ular (beberapa jenis) adalah Ovovivipar: telur berkembang di dalam tubuh induk tetapi tidak mendapat nutrisi dari induk. Bayi lahir hidup-hidup dari telur yang menetas di dalam tubuh.'
    },
    {
      q: 'Planaria berkembang biak dengan cara...',
      opts: ['Tunas','Partenogenesis','Fragmentasi','Membelah diri'],
      ans: 2,
      hint: 'Planaria (cacing pipih) bisa dipotong dan tiap potongannya bisa tumbuh menjadi individu baru.',
      explanation: 'Planaria (cacing pipih) berkembang biak secara vegetatif dengan Fragmentasi. Jika tubuhnya terpotong, setiap potongan mampu tumbuh dan berkembang menjadi individu baru.'
    },
  ],
  'ipa-3': [
    {
      q: 'Jahe berkembang biak dengan...',
      opts: ['Stolon','Rhizoma','Umbi Lapis','Tunas'],
      ans: 1,
      hint: 'Bagian yang biasa kita makan dari jahe adalah batangnya yang berada di...',
      explanation: 'Jahe berkembang biak dengan Rhizoma — batang yang menjalar di BAWAH tanah. Berbeda dengan stolon yang menjalar di atas tanah.'
    },
    {
      q: 'Cara vegetatif buatan dengan mengupas kulit batang disebut...',
      opts: ['Stek','Okulasi','Cangkok','Merunduk'],
      ans: 2,
      hint: 'Cara ini mengupas kulit batang dan membungkusnya dengan tanah lembab.',
      explanation: 'Cangkok = mengupas sebagian kulit batang lalu membungkusnya dengan tanah basah/sabut kelapa. Akar akan tumbuh di bagian yang dikupas sebelum cabang dipotong.'
    },
    {
      q: 'Stroberi berkembang biak dengan...',
      opts: ['Rhizoma','Tunas','Stolon','Umbi Batang'],
      ans: 2,
      hint: 'Kamu bisa melihat "sulur" panjang yang tumbuh dari tanaman stroberi yang menjalar di atas tanah.',
      explanation: 'Stroberi berkembang biak dengan Stolon — batang yang menjalar di atas tanah. Ujung stolon akan tumbuh akar dan menjadi tanaman baru.'
    },
    {
      q: 'Kentang berkembang biak dengan...',
      opts: ['Umbi Akar','Umbi Lapis','Rhizoma','Umbi Batang'],
      ans: 3,
      hint: 'Bagian kentang yang kita makan adalah batang yang membengkak di dalam tanah.',
      explanation: 'Kentang berkembang biak dengan Umbi Batang — batang yang tumbuh di bawah tanah dan membengkak menyimpan cadangan makanan. Berbeda dengan umbi akar (wortel) dan umbi lapis (bawang).'
    },
    {
      q: 'Bawang merah berkembang biak dengan...',
      opts: ['Umbi Akar','Rhizoma','Umbi Lapis','Spora'],
      ans: 2,
      hint: 'Coba kupas bawang merah — kamu akan melihat lapisan-lapisan di dalamnya.',
      explanation: 'Bawang merah berkembang biak dengan Umbi Lapis — struktur yang berlapis-lapis. Tunas baru tumbuh di antara lapisan-lapisan tersebut.'
    },
  ],
  'ipa-4': [
    {
      q: 'Energi angin diubah menjadi listrik menggunakan...',
      opts: ['Panel surya','Kincir angin/Turbin angin','PLTA','Biogas'],
      ans: 1,
      hint: 'Alat ini berputar karena hembusan angin dan menggerakkan generator.',
      explanation: 'Turbin angin (kincir angin modern) mengubah energi gerak angin menjadi energi listrik melalui generator. Indonesia memiliki beberapa pembangkit listrik tenaga angin.'
    },
    {
      q: 'Yang BUKAN termasuk energi terbarukan adalah...',
      opts: ['Matahari','Angin','Minyak Bumi','Panas Bumi'],
      ans: 2,
      hint: 'Sumber energi ini terbentuk dari sisa-sisa makhluk hidup jutaan tahun lalu dan tidak bisa diperbaharui.',
      explanation: 'Minyak bumi adalah bahan bakar fosil — terbentuk dari sisa organisme selama jutaan tahun. Ia TIDAK DAPAT diperbaharui dan lama-kelamaan akan habis.'
    },
    {
      q: 'PLTA singkatan dari...',
      opts: ['Pabrik Listrik Tenaga Angin','Pembangkit Listrik Tenaga Air','Pusat Listrik Tenaga Alam','Pembangkit Listrik Tenaga Atom'],
      ans: 1,
      hint: 'Bendungan besar dibangun untuk menampung dan mengalirkan... apa?',
      explanation: 'PLTA = Pembangkit Listrik Tenaga Air. Air yang mengalir dari bendungan menggerakkan turbin yang kemudian menghasilkan listrik.'
    },
    {
      q: 'Panel surya mengubah energi apa menjadi listrik?',
      opts: ['Angin','Panas bumi','Matahari/Cahaya','Air'],
      ans: 2,
      hint: 'Panel ini dipasang di atap rumah dan bekerja paling baik di siang hari yang cerah.',
      explanation: 'Panel surya (solar panel) mengubah energi cahaya matahari menjadi energi listrik melalui efek fotovoltaik. Semakin banyak cahaya matahari, semakin besar listrik yang dihasilkan.'
    },
    {
      q: 'Apa kelemahan utama energi terbarukan?',
      opts: ['Menghasilkan banyak polusi','Biaya awal mahal dan tergantung kondisi alam','Cepat habis','Berbahaya bagi lingkungan'],
      ans: 1,
      hint: 'Bayangkan panel surya saat mendung, atau kincir angin saat tidak ada angin...',
      explanation: 'Kelemahan utama energi terbarukan: (1) Biaya instalasi awal yang tinggi, dan (2) Bergantung pada kondisi alam yang tidak selalu tersedia (matahari bisa tertutup awan, angin bisa tidak bertiup).'
    },
  ],
  'ipa-7': [
    {
      q: 'Lampu hiasan natal menggunakan rangkaian...',
      opts: ['Paralel','Seri','Campuran','Tunggal'],
      ans: 1,
      hint: 'Jika satu lampu natal mati, semua lampu lain juga mati. Rangkaian apa yang seperti itu?',
      explanation: 'Lampu natal menggunakan rangkaian seri (satu jalur). Itu sebabnya jika satu lampu mati, seluruh rangkaian menjadi gelap.'
    },
    {
      q: 'Instalasi listrik di rumah menggunakan rangkaian...',
      opts: ['Seri','Paralel','Tunggal','Berganda'],
      ans: 1,
      hint: 'Saat mati lampu di kamar, lampu dapur masih menyala. Rangkaian apa ini?',
      explanation: 'Listrik rumah menggunakan rangkaian paralel sehingga tiap ruangan memiliki jalur sendiri. Jika satu ruangan mati (atau lampu putus), ruangan lain tetap menyala.'
    },
    {
      q: 'Pada rangkaian SERI, jika satu lampu padam maka...',
      opts: ['Lampu lain lebih terang','Lampu lain tetap nyala','Semua lampu padam','Tidak ada perubahan'],
      ans: 2,
      hint: 'Pada rangkaian seri hanya ada SATU jalur. Apa yang terjadi jika jalur itu terputus?',
      explanation: 'Pada rangkaian seri, arus listrik hanya melewati satu jalur. Jika satu komponen putus/mati, jalur terputus dan semua komponen lain ikut mati.'
    },
    {
      q: 'Keunggulan rangkaian PARALEL dibanding seri adalah...',
      opts: ['Lebih hemat kabel','Jika satu putus yang lain tetap nyala','Lebih murah','Lampu lebih redup'],
      ans: 1,
      hint: 'Bayangkan listrik rumahmu. Apa yang terjadi jika satu lampu mati?',
      explanation: 'Keunggulan utama rangkaian paralel: jika satu komponen mati, komponen lain TIDAK TERPENGARUH karena masing-masing memiliki jalur sendiri ke sumber listrik.'
    },
    {
      q: 'Lampu pada rangkaian paralel lebih terang dari seri karena...',
      opts: ['Lebih banyak kabel','Setiap lampu mendapat tegangan penuh','Lebih banyak lampu','Lebih hemat energi'],
      ans: 1,
      hint: 'Pada rangkaian seri, tegangan DIBAGI ke semua komponen. Pada paralel...?',
      explanation: 'Pada rangkaian paralel, setiap cabang mendapat tegangan penuh dari sumber listrik. Sedangkan pada seri, tegangan terbagi rata ke semua komponen sehingga tiap lampu mendapat tegangan lebih kecil.'
    },
  ],
  'ipa-9': [
    {
      q: 'Proses penguapan air laut oleh panas matahari disebut...',
      opts: ['Kondensasi','Evaporasi','Presipitasi','Infiltrasi'],
      ans: 1,
      hint: 'Kata ini berasal dari bahasa latin "evaporare" yang berarti menguap.',
      explanation: 'Evaporasi adalah proses penguapan air dari permukaan (laut, danau, sungai) akibat panas matahari. Uap air ini kemudian naik ke atmosfer.'
    },
    {
      q: 'Hujan adalah contoh dari proses...',
      opts: ['Evaporasi','Kondensasi','Presipitasi','Infiltrasi'],
      ans: 2,
      hint: 'Proses ini adalah saat air "jatuh" dari awan ke permukaan bumi.',
      explanation: 'Presipitasi adalah proses jatuhnya air dari atmosfer ke permukaan bumi dalam berbagai bentuk: hujan, salju, atau hujan es. Ini adalah tahap ketiga dalam siklus hidrologi.'
    },
    {
      q: 'Uap air berubah menjadi awan adalah proses...',
      opts: ['Evaporasi','Transpirasi','Presipitasi','Kondensasi'],
      ans: 3,
      hint: 'Saat uap air naik ke atmosfer, suhunya turun dan uap air berubah wujud menjadi...',
      explanation: 'Kondensasi adalah proses berubahnya uap air menjadi tetes air cair saat suhunya turun. Tetes-tetes air kecil ini berkumpul membentuk awan.'
    },
    {
      q: 'Air hujan yang meresap masuk ke dalam tanah disebut...',
      opts: ['Run off','Evaporasi','Kondensasi','Infiltrasi'],
      ans: 3,
      hint: 'Air ini kemudian menjadi sumber air tanah dan sumur.',
      explanation: 'Infiltrasi adalah proses masuknya air ke dalam tanah melalui pori-pori tanah. Air infiltrasi menjadi air tanah yang menjadi sumber sumur dan mata air.'
    },
    {
      q: 'Penguapan air melalui daun tumbuhan disebut...',
      opts: ['Evaporasi','Transpirasi','Kondensasi','Presipitasi'],
      ans: 1,
      hint: 'Proses ini terjadi melalui lubang-lubang kecil di daun yang disebut stomata.',
      explanation: 'Transpirasi adalah penguapan air yang terjadi melalui daun tumbuhan (stomata/mulut daun). Ini berbeda dengan evaporasi yang terjadi dari permukaan air.'
    },
  ],
  'bindo-1': [
    {
      q: '"Ada gula ada semut" bermakna...',
      opts: ['Semut sangat suka gula','Di mana ada kesenangan banyak orang berkumpul','Kita harus berbagi dengan sesama','Jangan menjadi orang yang serakah'],
      ans: 1,
      hint: 'Pikirkan mengapa semut selalu datang ketika ada makanan manis.',
      explanation: '"Ada gula ada semut" berarti di mana ada kesenangan, keuntungan, atau kenikmatan, pasti banyak orang yang datang mengerubunginya.'
    },
    {
      q: '"Air beriak tanda tak dalam" menggambarkan orang yang...',
      opts: ['Rajin dan tekun belajar','Banyak bicara tapi pengetahuannya dangkal','Sangat pandai dan bijaksana','Rendah hati dan sabar'],
      ans: 1,
      hint: 'Air yang dalam biasanya... tenang. Air yang dangkal biasanya... berisik.',
      explanation: '"Air beriak tanda tak dalam" — air yang banyak beriak (berisik) biasanya berasal dari air yang dangkal. Peribahasa ini menggambarkan orang yang banyak bicara tetapi pengetahuannya dangkal.'
    },
    {
      q: '"Nasi sudah menjadi bubur" berarti...',
      opts: ['Makanan yang sudah rusak','Kejadian yang tidak bisa diubah lagi','Harus berhati-hati dalam bertindak','Segala sesuatu bisa diperbaiki'],
      ans: 1,
      hint: 'Dapatkah bubur dikembalikan menjadi nasi lagi?',
      explanation: '"Nasi sudah menjadi bubur" berarti sesuatu yang sudah terjadi dan TIDAK DAPAT diubah/diperbaiki lagi. Kita harus menerimanya dan melanjutkan hidup.'
    },
    {
      q: '"Seperti katak dalam tempurung" menggambarkan...',
      opts: ['Orang yang cepat bergerak','Orang yang wawasannya sempit','Orang yang pemalu','Orang yang rajin belajar'],
      ans: 1,
      hint: 'Katak yang hidup di dalam tempurung tidak bisa melihat dunia di luar tempurung itu.',
      explanation: '"Seperti katak dalam tempurung" menggambarkan orang yang wawasannya sempit, tidak mau mencari tahu atau belajar hal baru, sehingga pengetahuannya terbatas.'
    },
    {
      q: '"Buah jatuh tak jauh dari pohonnya" bermakna...',
      opts: ['Buah yang jatuh di bawah pohon','Sifat anak biasanya mirip orang tuanya','Anak harus dekat dengan orang tua','Setiap hasil ada asal-usulnya'],
      ans: 1,
      hint: 'Bayangkan buah yang jatuh — di mana ia mendarat relatif terhadap pohonnya?',
      explanation: '"Buah jatuh tak jauh dari pohonnya" berarti sifat, perangai, atau bakat seorang anak biasanya menyerupai orang tuanya.'
    },
  ],
  'bindo-3': [
    {
      q: 'Ide pokok atau gagasan utama suatu cerita disebut...',
      opts: ['Alur','Tema','Amanat','Latar'],
      ans: 1,
      hint: 'Ini adalah pondasi atau dasar dari seluruh cerita yang ditulis pengarang.',
      explanation: 'Tema adalah ide pokok atau gagasan utama yang menjadi dasar sebuah cerita. Semua unsur lain (tokoh, alur, latar) dikembangkan dari tema.'
    },
    {
      q: 'Tokoh yang berperan sebagai penentang protagonis disebut...',
      opts: ['Tritagonis','Protagonis','Antagonis','Figuran'],
      ans: 2,
      hint: 'Dalam cerita, ini adalah "musuh" atau "penjahat" yang menghalangi tokoh utama.',
      explanation: 'Antagonis adalah tokoh yang berperan sebagai penentang atau musuh protagonis (tokoh utama). Antagonis menciptakan konflik dalam cerita.'
    },
    {
      q: 'Pesan moral yang ingin disampaikan pengarang disebut...',
      opts: ['Tema','Alur','Amanat','Latar'],
      ans: 2,
      hint: 'Ini adalah "pelajaran hidup" yang kita dapat setelah membaca cerita.',
      explanation: 'Amanat adalah pesan moral atau pelajaran hidup yang ingin disampaikan pengarang melalui ceritanya. Biasanya tersirat dan baru dipahami setelah membaca keseluruhan cerita.'
    },
    {
      q: 'Cerita yang menggunakan kata "aku" sebagai pencerita menggunakan sudut pandang...',
      opts: ['Orang ketiga','Orang kedua','Orang pertama','Campuran'],
      ans: 2,
      hint: 'Siapa yang menggunakan kata "aku"? Orang ke berapa itu?',
      explanation: 'Sudut pandang orang pertama menggunakan kata "aku" atau "saya" sebagai pencerita. Pembaca seolah-olah ikut merasakan kejadian yang dialami tokoh "aku".'
    },
    {
      q: 'Alur yang menceritakan kejadian dari masa kini ke masa lalu disebut...',
      opts: ['Alur maju','Alur campuran','Alur mundur','Alur linear'],
      ans: 2,
      hint: 'Bayangkan sebuah film yang dimulai dengan adegan masa kini, lalu menampilkan kenangan masa lalu.',
      explanation: 'Alur mundur (flashback) adalah alur cerita yang dimulai dari masa sekarang/akhir, kemudian menceritakan kembali kejadian di masa lalu.'
    },
  ],
  'bindo-4': [
    {
      q: 'Ide pokok pada paragraf DEDUKTIF terletak di...',
      opts: ['Akhir paragraf','Tengah paragraf','Awal paragraf','Seluruh paragraf'],
      ans: 2,
      hint: 'Deduktif = dari umum ke khusus. Yang umum ada di awal atau akhir?',
      explanation: 'Paragraf Deduktif memiliki pola dari umum ke khusus. Kalimat utama (yang mengandung ide pokok) ada di AWAL, diikuti kalimat-kalimat penjelas.'
    },
    {
      q: 'Paragraf yang ide pokoknya di akhir disebut...',
      opts: ['Deduktif','Induktif','Ineratif','Campuran'],
      ans: 1,
      hint: 'Paragraf ini punya pola dari khusus (contoh/rincian) ke umum (kesimpulan).',
      explanation: 'Paragraf Induktif memiliki pola dari khusus ke umum. Kalimat-kalimat penjelas ada di awal, dan kesimpulan/kalimat utama ada di AKHIR paragraf.'
    },
    {
      q: 'Kalimat yang berisi rincian/contoh untuk mendukung ide pokok disebut...',
      opts: ['Kalimat utama','Kalimat pokok','Kalimat penjelas','Kalimat inti'],
      ans: 2,
      hint: 'Kalimat ini "membantu" kalimat utama dengan memberikan bukti, contoh, atau rincian.',
      explanation: 'Kalimat penjelas berfungsi untuk mendukung, merinci, dan memberikan bukti/contoh bagi kalimat utama yang mengandung ide pokok.'
    },
    {
      q: 'Ide pokok biasanya ditemukan dalam...',
      opts: ['Semua kalimat','Kalimat pertama saja','Kalimat utama','Kalimat terpanjang'],
      ans: 2,
      hint: 'Ada satu kalimat khusus yang menjadi "bos" dari semua kalimat lain dalam paragraf.',
      explanation: 'Ide pokok terdapat dalam kalimat utama. Kalimat utama adalah kalimat yang bersifat umum dan menjadi pokok bahasan, sementara kalimat lain menjelaskan/mendukungnya.'
    },
    {
      q: 'Paragraf campuran memiliki kalimat utama di...',
      opts: ['Awal saja','Akhir saja','Tengah','Awal DAN Akhir'],
      ans: 3,
      hint: 'Disebut "campuran" karena menggabungkan ciri deduktif dan induktif.',
      explanation: 'Paragraf campuran (deduktif-induktif) memiliki kalimat utama di AWAL (umum) dan diulang/dipertegas kembali di AKHIR paragraf, dengan kalimat penjelas di tengah.'
    },
  ],
  'mtk-2': [
    {
      q: '½ + ⅓ = ...',
      opts: ['2/6','5/6','2/3','3/5'],
      ans: 1,
      hint: 'Samakan penyebut dulu. KPK dari 2 dan 3 adalah 6. Jadi ½ = ?/6 dan ⅓ = ?/6',
      explanation: 'KPK(2,3)=6. ½ = 3/6, ⅓ = 2/6. Maka 3/6 + 2/6 = 5/6.'
    },
    {
      q: '½ × ⅔ = ...',
      opts: ['1/3','2/6 (belum disederhanakan)','1/4','4/6'],
      ans: 0,
      hint: 'Perkalian pecahan: kalikan pembilang dengan pembilang, penyebut dengan penyebut.',
      explanation: '½ × ⅔ = (1×2)/(2×3) = 2/6 = 1/3 (disederhanakan dengan membagi 2).'
    },
    {
      q: '½ ÷ ¼ = ...',
      opts: ['1/8','4','2','1/4'],
      ans: 2,
      hint: 'Pembagian pecahan = kalikan dengan kebalikan pembagi. Kebalikan ¼ adalah...?',
      explanation: '½ ÷ ¼ = ½ × 4/1 = 4/2 = 2. Ingat: a/b ÷ c/d = a/b × d/c (balik pecahan pembagi).'
    },
    {
      q: '1½ diubah ke pecahan biasa menjadi...',
      opts: ['2/3','3/2','4/2','1/2'],
      ans: 1,
      hint: 'Rumus: a b/c = (a×c + b) / c. Jadi 1½ = (1×2 + 1) / 2 = ?',
      explanation: '1½ = (1×2 + 1)/2 = (2+1)/2 = 3/2. Selalu ubah pecahan campuran ke pecahan biasa sebelum menghitung.'
    },
    {
      q: '2¾ - 1½ = ...',
      opts: ['1¾','1¼','1½','2¼'],
      ans: 1,
      hint: 'Ubah keduanya ke pecahan biasa dulu: 2¾ = 11/4 dan 1½ = 3/2 = 6/4. Lalu kurangi.',
      explanation: '2¾ = 11/4, 1½ = 3/2 = 6/4. Selisih = 11/4 − 6/4 = 5/4 = 1¼.'
    },
  ],
  'mtk-3': [
    {
      q: 'KPK dari 4 dan 6 adalah...',
      opts: ['12','24','6','8'],
      ans: 0,
      hint: 'Tuliskan kelipatannya: 4, 8, 12... dan 6, 12... Mana yang pertama sama?',
      explanation: 'Kelipatan 4: 4, 8, 12. Kelipatan 6: 6, 12. Kelipatan persekutuan terkecilnya = 12.'
    },
    {
      q: 'KPK dari 3 dan 5 adalah...',
      opts: ['8','15','30','10'],
      ans: 1,
      hint: '3 dan 5 keduanya prima. KPK dari dua bilangan prima = ...',
      explanation: 'KPK(3,5) = 15. Karena 3 dan 5 adalah bilangan prima (tidak memiliki faktor persekutuan selain 1), KPK-nya adalah 3 × 5 = 15.'
    },
    {
      q: 'Dalam mencari KPK dengan faktorisasi prima, pangkat yang diambil adalah...',
      opts: ['Terendah','Tertinggi','Semua sama','Rata-rata'],
      ans: 1,
      hint: 'KPK harus bisa membagi SEMUA bilangan, jadi pangkat harus cukup besar.',
      explanation: 'Untuk KPK, kita ambil semua faktor prima yang ada dengan pangkat TERTINGGI. Ini memastikan hasilnya adalah kelipatan dari semua bilangan yang dicari KPK-nya.'
    },
    {
      q: 'Andi les setiap 3 hari, Budi les setiap 4 hari. Mereka bertemu setiap...',
      opts: ['7 hari','10 hari','12 hari','8 hari'],
      ans: 2,
      hint: 'Ini adalah soal "jadwal bertemu" yang diselesaikan dengan mencari KPK.',
      explanation: 'KPK(3,4): faktorisasi: 3 = 3, 4 = 2². KPK = 2² × 3 = 12. Andi dan Budi les bersama setiap 12 hari.'
    },
    {
      q: 'KPK dari 6 dan 8 adalah...',
      opts: ['24','16','48','12'],
      ans: 0,
      hint: 'Faktorisasi: 6 = 2×3, 8 = 2³. KPK = ambil semua faktor dengan pangkat tertinggi.',
      explanation: '6 = 2 × 3, 8 = 2³. KPK = 2³ × 3 = 8 × 3 = 24.'
    },
  ],
  'mtk-4': [
    {
      q: 'FPB dari 12 dan 16 adalah...',
      opts: ['4','8','2','6'],
      ans: 0,
      hint: 'Faktorisasi: 12 = 2²×3, 16 = 2⁴. Ambil faktor yang SAMA dengan pangkat TERENDAH.',
      explanation: '12 = 2² × 3, 16 = 2⁴. Faktor yang sama: 2. Pangkat terendah: 2². FPB = 2² = 4.'
    },
    {
      q: 'FPB dari 6 dan 9 adalah...',
      opts: ['3','6','18','9'],
      ans: 0,
      hint: 'Faktorisasi: 6 = 2×3, 9 = 3². Faktor apa yang ada di keduanya?',
      explanation: '6 = 2 × 3, 9 = 3². Faktor yang sama: 3 (pangkat terendah = 1). FPB = 3.'
    },
    {
      q: 'Dalam mencari FPB, pangkat yang diambil adalah...',
      opts: ['Tertinggi','Terendah','Semua','Rata-rata'],
      ans: 1,
      hint: 'FPB adalah faktor terbesar yang BISA MEMBAGI kedua bilangan.',
      explanation: 'Untuk FPB, kita hanya ambil faktor prima yang SAMA dengan pangkat TERENDAH. Ini menghasilkan bilangan yang dapat membagi habis semua bilangan tersebut.'
    },
    {
      q: '36 kue dan 48 permen dibagi rata ke beberapa anak. Jumlah anak terbanyak adalah...',
      opts: ['6 anak','12 anak','4 anak','8 anak'],
      ans: 1,
      hint: 'Ini soal "pembagian merata" — gunakan FPB. FPB dari 36 dan 48 adalah...?',
      explanation: '36 = 2² × 3², 48 = 2⁴ × 3. FPB = 2² × 3 = 12. Jadi kue dan permen dibagi ke 12 anak: tiap anak dapat 3 kue (36÷12) dan 4 permen (48÷12).'
    },
    {
      q: 'FPB dari 8 dan 12 adalah...',
      opts: ['2','4','6','8'],
      ans: 1,
      hint: 'Faktorisasi: 8 = 2³, 12 = 2²×3. Faktor yang sama?',
      explanation: '8 = 2³, 12 = 2² × 3. Faktor yang sama: 2, pangkat terendah = 2. FPB = 2² = 4.'
    },
  ],
  'mtk-5': [
    {
      q: 'Nilai 60, 70, 80, 90. Mean = ...',
      opts: ['70','75','80','85'],
      ans: 1,
      hint: 'Jumlahkan semua nilai, lalu bagi dengan banyaknya data (4).',
      explanation: '(60+70+80+90) ÷ 4 = 300 ÷ 4 = 75. Mean adalah nilai rata-rata dari seluruh data.'
    },
    {
      q: 'Rumus mean yang benar adalah...',
      opts: ['Nilai terbesar + terkecil','Jumlah semua data ÷ banyaknya data','Nilai yang paling sering muncul','Nilai tengah setelah diurutkan'],
      ans: 1,
      hint: 'Mean = "rata-rata". Bagaimana cara menghitung rata-rata nilai?',
      explanation: 'Mean = Σ data / n = (Jumlah semua data) ÷ (Banyaknya data). Bukan nilai terbesar/terkecil, itu adalah range.'
    },
    {
      q: 'Data: 2, 3, 3, 5, 7. Modusnya adalah...',
      opts: ['2','3','5','7'],
      ans: 1,
      hint: 'Modus = nilai yang paling SERING MUNCUL. Hitung kemunculan tiap angka.',
      explanation: 'Dalam data 2, 3, 3, 5, 7: angka 2 muncul 1x, angka 3 muncul 2x, angka 5 muncul 1x, angka 7 muncul 1x. Modus = 3 (paling sering muncul).'
    },
    {
      q: 'Data: 4, 6, 8, 10, 12 (sudah urut). Mediannya adalah...',
      opts: ['6','8','10','9'],
      ans: 1,
      hint: 'Median = nilai TENGAH. Data ada 5 angka, nilai tengah ada di posisi ke berapa?',
      explanation: 'Median dari 5 data adalah nilai di posisi ke-3 (tengah). Data: 4, 6, [8], 10, 12. Mediannya = 8.'
    },
    {
      q: 'Nilai: 50, 60, 70. Mean = ...',
      opts: ['55','60','65','70'],
      ans: 1,
      hint: 'Jumlah: 50+60+70 = 180. Bagi dengan banyaknya data (3).',
      explanation: '(50+60+70) ÷ 3 = 180 ÷ 3 = 60. Mean tepat di tengah karena selisih antar data sama (10).'
    },
  ],
  'mtk-6': [
    {
      q: 'Keliling persegi sisi 9 cm adalah...',
      opts: ['27 cm','36 cm','18 cm','81 cm'],
      ans: 1,
      hint: 'Persegi memiliki 4 sisi yang sama panjang. K = 4 × sisi.',
      explanation: 'K persegi = 4 × s = 4 × 9 = 36 cm. Ingat: persegi memiliki 4 sisi yang sama panjang.'
    },
    {
      q: 'Keliling persegi panjang p=12, l=8 adalah...',
      opts: ['40 cm','96 cm','20 cm','32 cm'],
      ans: 0,
      hint: 'K = 2 × (panjang + lebar). Hitung penjumlahan dalam kurung dulu.',
      explanation: 'K persegi panjang = 2 × (p + l) = 2 × (12 + 8) = 2 × 20 = 40 cm.'
    },
    {
      q: 'Keliling lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)',
      opts: ['22 cm','44 cm','154 cm','66 cm'],
      ans: 1,
      hint: 'K = 2 × π × r. Masukkan nilai π = 22/7 dan r = 7.',
      explanation: 'K = 2 × 22/7 × 7 = 2 × 22 = 44 cm. Perhatikan 22/7 × 7 = 22, sehingga tinggal dikalikan 2.'
    },
    {
      q: 'Keliling segitiga dengan sisi 5 cm, 6 cm, 7 cm adalah...',
      opts: ['17 cm','18 cm','19 cm','20 cm'],
      ans: 1,
      hint: 'Keliling segitiga = jumlah ketiga sisinya.',
      explanation: 'K segitiga = a + b + c = 5 + 6 + 7 = 18 cm. Untuk segitiga, cukup jumlahkan semua sisinya.'
    },
    {
      q: 'Sebuah lapangan berbentuk persegi panjang p=50m, l=30m. Jika Toni berlari 3 putaran, jarak tempuhnya...',
      opts: ['240 m','480 m','720 m','960 m'],
      ans: 2,
      hint: 'Hitung keliling lapangan dulu, lalu kalikan dengan 3.',
      explanation: 'K = 2 × (50+30) = 2 × 80 = 160 m. Jarak 3 putaran = 160 × 3 = 480 m.'
    },
  ],
  'mtk-7': [
    {
      q: 'Luas segitiga alas 8 cm, tinggi 6 cm adalah...',
      opts: ['48 cm²','24 cm²','14 cm²','28 cm²'],
      ans: 1,
      hint: 'L = ½ × alas × tinggi. Jangan lupa dibagi 2!',
      explanation: 'L segitiga = ½ × a × t = ½ × 8 × 6 = ½ × 48 = 24 cm².'
    },
    {
      q: 'Luas persegi panjang p=15, l=8 adalah...',
      opts: ['46 cm²','23 cm²','120 cm²','30 cm²'],
      ans: 2,
      hint: 'L = panjang × lebar. Kalikan langsung.',
      explanation: 'L persegi panjang = p × l = 15 × 8 = 120 cm².'
    },
    {
      q: 'Rumus luas lingkaran adalah...',
      opts: ['2πr','πd','πr²','2πd'],
      ans: 2,
      hint: 'Rumus luas = π × ... (bukan diameter, tapi jari-jari yang dikuadratkan).',
      explanation: 'L lingkaran = π × r² (phi dikali jari-jari kuadrat). Berbeda dengan keliling (2πr) yang menggunakan r tanpa kuadrat.'
    },
    {
      q: 'Luas trapesium dengan a=10, b=14, t=6 adalah...',
      opts: ['90 cm²','72 cm²','144 cm²','60 cm²'],
      ans: 1,
      hint: 'L = ½ × (sisi sejajar atas + sisi sejajar bawah) × tinggi.',
      explanation: 'L trapesium = ½ × (a+b) × t = ½ × (10+14) × 6 = ½ × 24 × 6 = 72 cm².'
    },
    {
      q: 'Luas persegi sisi 7 cm adalah...',
      opts: ['14 cm²','28 cm²','49 cm²','56 cm²'],
      ans: 2,
      hint: 'L = s × s = s². Kalikan sisi dengan dirinya sendiri.',
      explanation: 'L persegi = s² = 7 × 7 = 49 cm².'
    },
  ],
  'mtk-8': [
    {
      q: 'Volume kubus dengan rusuk 5 cm adalah...',
      opts: ['25 cm³','75 cm³','125 cm³','150 cm³'],
      ans: 2,
      hint: 'V kubus = s³. Kalikan rusuk sebanyak 3 kali.',
      explanation: 'V kubus = s³ = 5 × 5 × 5 = 125 cm³.'
    },
    {
      q: 'Volume balok p=10, l=5, t=4 adalah...',
      opts: ['150 cm³','190 cm³','200 cm³','250 cm³'],
      ans: 2,
      hint: 'V = panjang × lebar × tinggi. Kalikan ketiganya.',
      explanation: 'V balok = p × l × t = 10 × 5 × 4 = 200 cm³.'
    },
    {
      q: 'Rumus volume tabung adalah...',
      opts: ['πr²','2πrh','πr²t','4/3πr³'],
      ans: 2,
      hint: 'Volume tabung = luas alas × tinggi. Luas alas lingkaran = πr².',
      explanation: 'V tabung = πr²t (luas alas × tinggi). Alas tabung adalah lingkaran dengan luas πr².'
    },
    {
      q: 'Volume tabung r=7, t=10 adalah... (π=22/7)',
      opts: ['770 cm³','1540 cm³','2200 cm³','440 cm³'],
      ans: 1,
      hint: 'V = π × r² × t = 22/7 × 7² × 10. Hitung 7² = 49 dulu.',
      explanation: 'V = 22/7 × 49 × 10 = 22 × 7 × 10 = 1540 cm³. (22/7 × 49 = 22 × 7 = 154, lalu × 10 = 1540).'
    },
    {
      q: 'Sebuah aquarium berbentuk balok: p=50cm, l=30cm, t=40cm. Volumenya...',
      opts: ['4.500 cm³','60.000 cm³','120.000 cm³','6.000 cm³'],
      ans: 1,
      hint: 'V = p × l × t. Kalikan ketiga ukurannya.',
      explanation: 'V = 50 × 30 × 40 = 60.000 cm³.'
    },
  ],
  'mtk-9': [
    {
      q: 'Nilai Andi 85, nilai Budi 72. Selisih nilainya adalah...',
      opts: ['12','13','14','15'],
      ans: 1,
      hint: 'Selisih = nilai besar − nilai kecil.',
      explanation: 'Selisih = 85 − 72 = 13. Andi mendapat nilai 13 poin lebih tinggi dari Budi.'
    },
    {
      q: 'Suhu pagi 18°C, suhu siang 34°C. Selisih suhu adalah...',
      opts: ['14°C','16°C','18°C','20°C'],
      ans: 1,
      hint: 'Kurangi suhu yang lebih tinggi dengan yang lebih rendah.',
      explanation: 'Selisih suhu = 34°C − 18°C = 16°C. Suhu siang 16 derajat lebih tinggi dari pagi.'
    },
    {
      q: 'Kebun Pak Budi 450 m², kebun Pak Andi 280 m². Selisih luas kebun mereka...',
      opts: ['160 m²','170 m²','180 m²','190 m²'],
      ans: 1,
      hint: 'Selisih = luas yang lebih besar − luas yang lebih kecil.',
      explanation: 'Selisih luas = 450 − 280 = 170 m². Kebun Pak Budi 170 m² lebih luas dari kebun Pak Andi.'
    },
    {
      q: 'Kata kunci dalam soal SELISIH adalah...',
      opts: ['"Berapakah jumlah"','\"Berapa lebih banyak/besar\" atau \"perbedaan\"','\"Berapakah hasil kali\"','\"Berapa bagian masing-masing\"'],
      ans: 1,
      hint: 'Selisih artinya PERBEDAAN dua nilai.',
      explanation: 'Kata kunci soal selisih: "berapa lebih banyak/besar/panjang", "perbedaan", "selisih", "lebih ... dari". Ini menandakan kita harus mengurangi nilai besar dengan nilai kecil.'
    },
    {
      q: 'Tinggi pohon mangga 4,5 m, pohon jambu 2,8 m. Selisih tinggi keduanya...',
      opts: ['1,5 m','1,7 m','2,0 m','1,3 m'],
      ans: 1,
      hint: '4,5 − 2,8 = ? Kurangi dari belakang: 5 − 8 tidak bisa, pinjam dulu.',
      explanation: 'Selisih = 4,5 − 2,8 = 1,7 m. Pohon mangga 1,7 meter lebih tinggi dari pohon jambu.'
    },
  ],
};

// Topik yang tidak ada kuis lengkap: kembalikan array kosong agar app.js tidak error
['ipa-5','ipa-6','ipa-8','ipa-10','ipa-11','ipa-12',
 'bindo-2','bindo-5','bindo-6','bindo-7','bindo-8',
 'mtk-1'].forEach(id => {
  if (!QUIZ_DATA[id]) QUIZ_DATA[id] = [];
});
