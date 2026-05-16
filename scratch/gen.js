const fs = require('fs');

const categories = ["QA/Bug", "Komunikasi", "Report", "Standup", "Kerja umum"];
const levels = ["N5", "N4"];

const rawWords = [
  // QA/Bug (20 words)
  ["修正", "しゅうせい", "shuusei", "revisi / perbaikan", "Bug sudah diperbaiki.", "QA/Bug", "N4", "Sangat sering dipakai oleh developer setelah memperbaiki tiket bug."],
  ["不具合", "ふぐあい", "fuguai", "bug / error / cacat", "Ada bug di sistem.", "QA/Bug", "N4", "Lebih formal dari kata 'bagu' (バグ). Sering dipakai di tiket Jira Jepang."],
  ["環境", "かんきょう", "kankyou", "environment / lingkungan", "Environment stagging.", "QA/Bug", "N4", "Digunakan untuk menyebut environment development, staging, atau production."],
  ["実装", "じっそう", "jissou", "implementasi", "Fitur sudah diimplementasi.", "QA/Bug", "N4", "Dipakai saat developer selesai ngoding sebuah fitur."],
  ["稼働", "かどう", "kadou", "beroperasi / running", "Server sudah running.", "QA/Bug", "N4", "Biasa digunakan untuk mendeskripsikan server atau sistem yang sedang berjalan."],
  ["試験", "しけん", "shiken", "pengujian / testing", "Testing sudah selesai.", "QA/Bug", "N4", "Bisa diganti juga dengan kata 'tesuto' (テスト)."],
  ["再現", "さいげん", "saigen", "reproduksi (bug)", "Bug bisa direproduksi.", "QA/Bug", "N4", "Sangat penting di QA: memastikan bug bisa direproduksi atau tidak."],
  ["原因", "げんいん", "gen'in", "penyebab", "Penyebabnya sudah diketahui.", "QA/Bug", "N4", "Dipakai saat melakukan Root Cause Analysis."],
  ["削除", "さくじょ", "sakujo", "penghapusan", "Hapus data test.", "QA/Bug", "N4", "Operasi delete/hapus pada database atau UI."],
  ["制限", "せいげん", "seigen", "batasan / limit", "Ada limit 5MB.", "QA/Bug", "N4", "Sering muncul di spesifikasi sistem atau pesan error."],
  ["接続", "せつぞく", "setsuzoku", "koneksi", "Koneksi ke DB gagal.", "QA/Bug", "N4", "Misalnya koneksi internet atau koneksi database."],
  ["入力", "にゅうりょく", "nyuuryoku", "input", "Input data user.", "QA/Bug", "N4", "Digunakan untuk form pengisian data."],
  ["出力", "しゅつりょく", "shutsuryoku", "output", "Outputnya error.", "QA/Bug", "N4", "Hasil dari sebuah proses atau report."],
  ["画面", "がめん", "gamen", "layar / screen", "Screen UI rusak.", "QA/Bug", "N5", "Kata umum untuk menyebut tampilan aplikasi."],
  ["権限", "けんげん", "kengen", "hak akses (permission)", "Tidak ada permission.", "QA/Bug", "N4", "Terkait dengan Role-Based Access Control (RBAC)."],
  ["状態", "じょうたい", "joutai", "status / state", "Statusnya error.", "QA/Bug", "N4", "Menanyakan atau melaporkan kondisi sistem saat ini."],
  ["発生", "はっせい", "hassei", "terjadi (occur)", "Error occur.", "QA/Bug", "N4", "Biasa dipakai saat ada insiden atau error yang mendadak muncul."],
  ["障害", "しょうがい", "shougai", "gangguan / system down", "Sistem sedang down.", "QA/Bug", "N4", "Kata yang paling dihindari, berarti ada major issue di production."],
  ["影響", "えいきょう", "eikyou", "dampak / impact", "Apa dampaknya?", "QA/Bug", "N4", "Menanyakan scope dari sebuah bug."],
  ["確認中", "かくにんちゅう", "kakuninchuu", "sedang dicek", "Masih sedang dicek.", "QA/Bug", "N5", "Status tiket saat QA atau developer sedang menginvestigasi."],

  // Komunikasi (20 words)
  ["確認", "かくにん", "kakunin", "konfirmasi / cek", "Akan saya konfirmasi dulu.", "Komunikasi", "N5", "Kata paling dasar! Pakai saat ingin bilang \"saya akan cek/konfirmasi\" ke atasan atau tim."],
  ["共有", "きょうゆう", "kyouyuu", "share / berbagi", "Share screen/info.", "Komunikasi", "N4", "Sangat sering dipakai saat online meeting di Zoom/Meet."],
  ["相談", "そうだん", "soudan", "konsultasi", "Saya ingin konsultasi.", "Komunikasi", "N5", "Dipakai saat ingin meminta saran atau berdiskusi sebelum mengambil keputusan."],
  ["連絡", "れんらく", "renraku", "menghubungi", "Tolong hubungi saya.", "Komunikasi", "N5", "Berkomunikasi via chat, email, atau telepon."],
  ["依頼", "いらい", "irai", "permintaan (request)", "Request dari klien.", "Komunikasi", "N4", "Meminta tolong divisi lain atau vendor."],
  ["対応", "たいおう", "taiou", "penanganan / handle", "Sedang di-handle.", "Komunikasi", "N4", "Sering dipakai CS atau engineer saat merespon komplain."],
  ["手順", "てじゅん", "tejun", "prosedur / langkah", "Ikuti step-stepnya.", "Komunikasi", "N4", "Langkah-langkah di manual atau dokumentasi."],
  ["質問", "しつもん", "shitsumon", "pertanyaan", "Ada pertanyaan?", "Komunikasi", "N5", "Dipakai di akhir meeting atau presentasi."],
  ["回答", "かいとう", "kaitou", "jawaban", "Ini jawabannya.", "Komunikasi", "N4", "Memberikan respon atas pertanyaan yang diajukan."],
  ["詳細", "しょうさい", "shousai", "detail", "Tolong berikan detailnya.", "Komunikasi", "N4", "Meminta penjelasan lebih lanjut agar tidak ada miss komunikasi."],
  ["承知", "しょうち", "shouchi", "mengerti / paham", "Baik, saya mengerti.", "Komunikasi", "N4", "Lebih sopan dari 'wakarimashita', wajib dipakai ke atasan atau klien."],
  ["提案", "ていあん", "teian", "usulan / proposal", "Ada usulan baru.", "Komunikasi", "N4", "Mengajukan ide atau solusi perbaikan."],
  ["説明", "せつめい", "setsumei", "penjelasan", "Tolong jelaskan.", "Komunikasi", "N5", "Menjabarkan sebuah fitur atau masalah."],
  ["打合せ", "うちあわせ", "uchiawase", "meeting kecil / diskusi", "Mari kita diskusi singkat.", "Komunikasi", "N4", "Meeting informal untuk menyamakan persepsi."],
  ["了解", "りょうかい", "ryoukai", "roger / mengerti", "Roger that.", "Komunikasi", "N4", "Sering dipakai di chat internal, tapi kurang sopan jika ke klien."],
  ["意見", "いけん", "iken", "pendapat", "Apa pendapatmu?", "Komunikasi", "N4", "Meminta feedback dari rekan setim."],
  ["賛成", "さんせい", "sansei", "setuju", "Saya setuju.", "Komunikasi", "N4", "Menyatakan persetujuan atas sebuah usulan."],
  ["反対", "はんたい", "hantai", "tidak setuju", "Saya tidak setuju.", "Komunikasi", "N4", "Menyatakan ketidaksetujuan secara profesional."],
  ["返信", "へんしん", "henshin", "balasan", "Menunggu balasan.", "Komunikasi", "N5", "Terutama untuk balasan email atau chat."],
  ["添付", "てんぷ", "tenpu", "lampiran / attachment", "Cek file terlampir.", "Komunikasi", "N4", "Sering digunakan di email untuk menyebut file yang di-attach."],

  // Report (20 words)
  ["報告", "ほうこく", "houkoku", "laporan", "Lapor ke PM.", "Report", "N4", "Penting dalam budaya Ho-Ren-So (Lapor, Hubungi, Konsultasi)."],
  ["提出", "ていしゅつ", "teishutsu", "mengumpulkan (submit)", "Kumpulkan laporannya.", "Report", "N4", "Mengirimkan dokumen atau tugas yang sudah selesai."],
  ["納期", "のうき", "nouki", "tenggat waktu (deadline)", "Kapan deadlinenya?", "Report", "N4", "Sangat krusial di perusahaan IT Jepang. Jangan sampai telat!"],
  ["承認", "しょうにん", "shounin", "persetujuan (approval)", "Menunggu approval.", "Report", "N4", "Biasanya butuh hanko (stempel) atau klik approve di sistem."],
  ["復旧", "ふっきゅう", "fukkyuu", "pemulihan (recovery)", "Sistem sudah pulih.", "Report", "N4", "Laporan setelah berhasil menangani server down."],
  ["概要", "がいよう", "gaiyou", "ringkasan / overview", "Berikut overviewnya.", "Report", "N4", "Penjelasan singkat di awal presentasi atau dokumen."],
  ["解決", "かいけつ", "kaiketsu", "solusi / resolve", "Issue resolved.", "Report", "N4", "Memberitahukan bahwa masalah sudah beres."],
  ["実績", "じっせき", "jisseki", "hasil aktual", "Hasil aktualnya beda.", "Report", "N4", "Membandingkan rencana dengan yang benar-benar tercapai."],
  ["分析", "ぶんせき", "bunseki", "analisis", "Analisis datanya.", "Report", "N4", "Sering dilakukan oleh Data Analyst atau PM."],
  ["日報", "にっぽう", "nippou", "laporan harian", "Sudah kirim daily report?", "Report", "N4", "Banyak perusahaan Jepang mewajibkan karyawannya menulis ini tiap pulang kerja."],
  ["週報", "しゅうほう", "shuuhou", "laporan mingguan", "Kirim weekly report.", "Report", "N4", "Ringkasan pekerjaan selama satu minggu."],
  ["月報", "げっぽう", "geppou", "laporan bulanan", "Meeting bulanan.", "Report", "N4", "Laporan performa dan target tiap bulan."],
  ["課題", "かだい", "kadai", "isu / PR / tantangan", "Ini isu saat ini.", "Report", "N4", "Masalah yang harus diselesaikan (task/issue)."],
  ["進み具合", "すすみぐあい", "susumiguai", "tingkat kemajuan", "Bagaimana progressnya?", "Report", "N4", "Sinonim dari Shinchoku (進捗)."],
  ["資料", "しりょう", "shiryou", "dokumen / materi", "Siapkan dokumen presentasi.", "Report", "N4", "Slide PowerPoint atau Excel sheet."],
  ["記録", "きろく", "kiroku", "catatan / record", "Catat lognya.", "Report", "N4", "Menyimpan history atau log dari sistem."],
  ["対象", "たいしょう", "taishou", "target / subjek", "Siapa target user-nya?", "Report", "N4", "Fokus dari sebuah report atau fitur."],
  ["結果", "けっか", "kekka", "hasil", "Ini hasil testnya.", "Report", "N4", "Bagian paling penting dari sebuah laporan."],
  ["状況", "じょうきょう", "joukyou", "situasi / kondisi", "Situasi terkini aman.", "Report", "N4", "Menjelaskan state dari sebuah project."],
  ["評価", "ひょうか", "hyouka", "evaluasi", "Evaluasi performa.", "Report", "N4", "Performance review tahunan atau project."],

  // Standup (20 words)
  ["進捗", "しんちょく", "shinchoku", "progress pekerjaan", "Bagaimana progressnya?", "Standup", "N4", "Kata wajib saat daily standup untuk melaporkan status tiket."],
  ["会議", "かいぎ", "kaigi", "meeting / rapat", "Meeting jam 10.", "Standup", "N5", "Gunakan untuk menyebut jadwal meeting harian atau mingguan."],
  ["変更", "へんこう", "henkou", "perubahan", "Ada perubahan desain.", "Standup", "N4", "Melaporkan jika ada spec yang berubah."],
  ["完了", "かんりょう", "kanryou", "selesai / complete", "Task sudah selesai.", "Standup", "N4", "Status Jira pindah ke 'Done'."],
  ["保留", "ほりゅう", "horyuu", "ditunda / pending", "Task ini di-pending.", "Standup", "N4", "Tiket ditahan karena menunggu blocker lain."],
  ["追加", "ついか", "tsuika", "penambahan", "Ada tambahan fitur.", "Standup", "N4", "Scope creep! Beritahu tim jika ada tambahan kerjaan."],
  ["見積", "みつもり", "mitsumori", "estimasi", "Estimasi waktunya 3 hari.", "Standup", "N4", "Berapa story point atau jam untuk tiket ini?"],
  ["更新", "こうしん", "koushin", "update", "Update data terbaru.", "Standup", "N4", "Memperbarui dokumentasi atau tiket."],
  ["予定", "よてい", "yotei", "rencana / jadwal", "Jadwal rilis besok.", "Standup", "N5", "Apa yang akan kamu kerjakan hari ini?"],
  ["遅延", "ちえん", "chien", "keterlambatan (delay)", "Rilisnya delay.", "Standup", "N4", "Sangat penting dilaporkan secepatnya kalau tahu akan telat."],
  ["昨日", "きのう", "kinou", "kemarin", "Kemarin kerjain API.", "Standup", "N5", "Format standar standup: Apa yang dikerjakan kemarin."],
  ["今日", "きょう", "kyou", "hari ini", "Hari ini fix bug.", "Standup", "N5", "Format standar standup: Apa yang akan dikerjakan hari ini."],
  ["明日", "あした", "ashita", "besok", "Besok saya cuti.", "Standup", "N5", "Memberi tahu rencana untuk besok."],
  ["問題", "もんだい", "mondai", "masalah / problem", "Ada blocker.", "Standup", "N5", "Format standar standup: Apakah ada blocker/masalah?"],
  ["目標", "もくひょう", "mokuhyou", "target / goal", "Goal sprint ini.", "Standup", "N4", "Target yang ingin dicapai tim."],
  ["開始", "かいし", "kaishi", "mulai (start)", "Mulai ngerjain tiket.", "Standup", "N4", "Status In Progress."],
  ["終了", "しゅうりょう", "shuuryou", "berakhir (end)", "Meeting berakhir.", "Standup", "N4", "Selesainya sebuah aktivitas."],
  ["順調", "じゅんちょう", "junchou", "lancar", "Semua lancar.", "Standup", "N4", "Kabar baik di standup pagi."],
  ["調整", "ちょうせい", "chousei", "penyesuaian (adjust)", "Adjust jadwal rilis.", "Standup", "N4", "Menjadwalkan ulang atau menegosiasikan scope."],
  ["引き続き", "ひきつづき", "hikitsuzuki", "melanjutkan", "Lanjut task kemarin.", "Standup", "N4", "Sering diucapkan: \"Hari ini saya melanjutkan task kemarin\"."],

  // Kerja umum (20 words)
  ["会社", "かいしゃ", "kaisha", "kantor / perusahaan", "Saya bekerja di kantor.", "Kerja umum", "N5", "Kata dasar untuk menyebut tempat kerja/kantor."],
  ["仕様", "しよう", "shiyou", "spesifikasi", "Cek spesifikasinya.", "Kerja umum", "N4", "Sangat penting! Kalau bingung bug atau bukan, tanyakan 'Kore wa shiyou desu ka?'"],
  ["残業", "ざんぎょう", "zangyou", "lembur", "Hari ini lembur.", "Kerja umum", "N5", "Realita kerja di IT, hati-hati jangan sampai kebanyakan lembur (karoushi)."],
  ["開発", "かいはつ", "kaihatsu", "pengembangan (development)", "Fase development dimulai.", "Kerja umum", "N4", "Proses pembuatan software dari awal."],
  ["担当", "たんとう", "tantou", "penanggung jawab (PIC)", "Siapa PIC-nya?", "Kerja umum", "N4", "Menunjuk orang yang bertanggung jawab atas suatu modul."],
  ["設計", "せっけい", "sekkei", "desain / arsitektur", "Desain sistemnya selesai.", "Kerja umum", "N4", "Fase sebelum coding (System Design)."],
  ["条件", "じょうけん", "jouken", "kondisi / syarat", "Syaratnya apa saja?", "Kerja umum", "N4", "Kriteria agar sebuah tiket bisa di-approve."],
  ["設定", "せってい", "settei", "pengaturan (setting)", "Ubah settingnya.", "Kerja umum", "N4", "Konfigurasi aplikasi atau server."],
  ["実行", "じっこう", "jikkou", "eksekusi / run", "Run scriptnya.", "Kerja umum", "N4", "Menjalankan program atau command line."],
  ["保存", "ほぞん", "hozon", "simpan (save)", "Jangan lupa save.", "Kerja umum", "N4", "Ctrl+S!"],
  ["管理", "かんり", "kanri", "manajemen / manage", "Manage servernya.", "Kerja umum", "N4", "Tugas seorang admin atau manajer."],
  ["運用", "うんよう", "unyou", "operasi (operation)", "Masuk fase operasional.", "Kerja umum", "N4", "Setelah rilis, aplikasi masuk fase operasional (DevOps)."],
  ["保守", "ほしゅ", "hoshu", "maintenance", "Sedang maintenance.", "Kerja umum", "N4", "Pemeliharaan rutin atau perbaikan minor paska rilis."],
  ["機能", "きのう", "kinou", "fitur", "Fitur baru rilis.", "Kerja umum", "N4", "Apa saja yang bisa dilakukan oleh aplikasi."],
  ["出社", "しゅっしゃ", "shussha", "datang ke kantor", "Besok saya WFO.", "Kerja umum", "N5", "Bekerja dari kantor (Work From Office)."],
  ["退社", "たいしゃ", "taisha", "pulang kerja", "Saya pulang dulu.", "Kerja umum", "N5", "Meninggalkan kantor di akhir hari."],
  ["有休", "ゆうきゅう", "yuukyuu", "cuti berbayar (PTO)", "Ambil cuti besok.", "Kerja umum", "N4", "Hak cuti karyawan (Paid Time Off)."],
  ["休憩", "きゅうけい", "kyuukei", "istirahat", "Waktunya istirahat.", "Kerja umum", "N5", "Biasanya jam 12 sampai jam 1 siang."],
  ["業務", "ぎょうむ", "gyoumu", "tugas / pekerjaan", "Fokus ke tugas utama.", "Kerja umum", "N4", "Pekerjaan sehari-hari."],
  ["同僚", "どうりょう", "douryou", "rekan kerja", "Rekan satu tim.", "Kerja umum", "N4", "Orang-orang yang bekerja di perusahaan yang sama."]
];

function generateExamples(kanji, hiragana, id_meaning) {
  // Let's create 3 examples for each word dynamically
  return [
    {
      jp: `${kanji}をお願いします。`,
      hiragana: `${hiragana}を おねがいします。`,
      id: `Tolong terkait ${id_meaning}.`
    },
    {
      jp: `${kanji}は終わりましたか？`,
      hiragana: `${hiragana}は おわりましたか？`,
      id: `Apakah ${id_meaning} sudah selesai?`
    },
    {
      jp: `今日の${kanji}について話しましょう。`,
      hiragana: `きょうの ${hiragana}について はなしましょう。`,
      id: `Mari kita bicarakan tentang ${id_meaning} hari ini.`
    }
  ];
}

const vocabularies = rawWords.map((row, index) => {
  const [kanji, hiragana, romaji, meaning, shortExample, category, level, tip] = row;
  const examples = generateExamples(kanji, hiragana, meaning);
  
  // Customizing some examples to make them look more natural
  if (index === 0) { // 修正
    examples[0] = { jp: "不具合を修正しました。", hiragana: "ふぐあいを しゅうせいしました。", id: "Bug/cacat (pada sistem) sudah diperbaiki." };
    examples[1] = { jp: "コードを修正します。", hiragana: "こーどを しゅうせいします。", id: "Saya akan memperbaiki kodenya." };
    examples[2] = { jp: "修正内容を共有します。", hiragana: "しゅうせい ないようを きょうゆうします。", id: "Saya akan membagikan detail perbaikannya." };
  } else if (kanji === "確認") {
    examples[0] = { jp: "こちら確認します。", hiragana: "こちら かくにんします。", id: "Saya akan cek bagian ini." };
    examples[1] = { jp: "仕様を確認しました。", hiragana: "しようを かくにんしました。", id: "Saya sudah mengonfirmasi spesifikasinya." };
  } else if (kanji === "会社") {
    examples[0] = { jp: "会社で働いています。", hiragana: "かいしゃで はたらいています。", id: "Saya sedang bekerja di perusahaan." };
    examples[1] = { jp: "私の会社はIT企業です。", hiragana: "わたしの かいしゃは アイティー きぎょうです。", id: "Perusahaan saya adalah perusahaan IT." };
  } else if (kanji === "進捗") {
    examples[0] = { jp: "進捗を共有します。", hiragana: "しんちょくを きょうゆうします。", id: "Saya akan membagikan progress pekerjaan." };
    examples[1] = { jp: "現在の進捗はどうですか？", hiragana: "げんざいの しんちょくは どうですか？", id: "Bagaimana progress saat ini?" };
  } else if (kanji === "不具合") {
    examples[0] = { jp: "システムに不具合があります。", hiragana: "しすてむに ふぐあいがあります。", id: "Ada bug/error di dalam sistem." };
    examples[1] = { jp: "不具合を調査しています。", hiragana: "ふぐあいを ちょうさしています。", id: "Saya sedang menyelidiki bug tersebut." };
  } else if (kanji === "会議") {
    examples[0] = { jp: "会議は10時からです。", hiragana: "かいぎは じゅうじからです。", id: "Meeting dimulai dari jam 10." };
    examples[1] = { jp: "会議室を予約しました。", hiragana: "かいぎしつを よやくしました。", id: "Saya sudah memesan ruang meeting." };
  }

  return {
    id: (index + 1).toString(),
    kanji,
    hiragana,
    romaji,
    meaning,
    shortExample,
    category,
    level,
    tip,
    examples
  };
});

const tsCode = `export type Category = "QA/Bug" | "Komunikasi" | "Report" | "Standup" | "Kerja umum";
export type Level = "N5" | "N4";

export interface Example {
  jp: string;
  hiragana: string;
  id: string;
}

export interface Vocabulary {
  id: string;
  kanji: string;
  hiragana: string;
  romaji: string;
  meaning: string;
  shortExample: string;
  category: Category;
  level: Level;
  tip: string;
  examples: Example[];
}

export const VOCABULARY_DATA: Vocabulary[] = ${JSON.stringify(vocabularies, null, 2)};
`;

fs.writeFileSync('/Users/mac/code/silvi/nagomisakura/app/data/vocabulary.ts', tsCode);
console.log("Successfully wrote 100 vocabularies.");
