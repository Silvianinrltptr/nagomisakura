const fs = require('fs');

const rawWords = [
  // QA/Bug
  ["修正", "しゅうせい", "shuusei", "revisi / perbaikan", "Bug sudah diperbaiki.", "QA/Bug", "N4", "Sangat sering dipakai oleh developer setelah memperbaiki tiket bug."],
  ["不具合", "ふぐあい", "fuguai", "bug / error / cacat", "Ada bug di sistem.", "QA/Bug", "N4", "Lebih formal dari kata 'bagu' (バグ)."],
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
  ["脆弱性", "ぜいじゃくせい", "zeijakusei", "kerentanan / vulnerability", "Ada vulnerability tinggi.", "QA/Bug", "N4", "Isu keamanan / security issue."],
  ["仕様漏れ", "しようもれ", "shiyoumore", "spec terlewat", "Ada spec yang terlewat.", "QA/Bug", "N4", "Masalah karena requirement tidak tertulis di dokumen."],
  ["強制終了", "きょうせいしゅうりょう", "kyouseishuuryou", "force close / crash", "Aplikasi crash.", "QA/Bug", "N4", "Crash secara tiba-tiba di aplikasi mobile atau desktop."],
  ["例外", "れいがい", "reigai", "exception", "Terjadi exception error.", "QA/Bug", "N4", "Error pada code level (NullPointerException dll)."],
  ["異常", "いじょう", "ijou", "abnormal", "Perilaku abnormal.", "QA/Bug", "N4", "Sistem berjalan tidak semestinya."],
  ["文字化け", "もじばけ", "mojibake", "karakter rusak (garbled)", "Teksnya mojibake.", "QA/Bug", "N4", "Sering terjadi di web Jepang karena isu encoding UTF-8 / Shift-JIS."],
  ["応答", "おうとう", "outou", "respons", "Tidak ada respons.", "QA/Bug", "N4", "Biasa dipakai kalau API timeout atau server no response."],
  ["回避策", "かいひさく", "kaihisaku", "workaround", "Punya workaround?", "QA/Bug", "N4", "Solusi sementara untuk menghindari bug sebelum fix beneran."],
  ["検知", "けんち", "kenchi", "deteksi", "Bug terdeteksi di log.", "QA/Bug", "N4", "Sistem mendeteksi adanya error."],
  ["修正版", "しゅうせいばん", "shuuseiban", "versi perbaikan", "Rilis versi perbaikan.", "QA/Bug", "N4", "Versi patch/hotfix."],
  ["負荷", "ふか", "fuka", "beban (load)", "Beban server tinggi.", "QA/Bug", "N4", "Biasa dipakai untuk load testing."],
  ["遅延", "ちえん", "chien", "delay / lag", "Ada lag di UI.", "QA/Bug", "N4", "Respon sistem lambat."],
  ["未定義", "みていぎ", "miteigi", "undefined", "Variabel undefined.", "QA/Bug", "N4", "Pesan error standar di JavaScript."],
  ["互換性", "ごかんせい", "gokansei", "kompatibilitas", "Isu kompatibilitas browser.", "QA/Bug", "N4", "Misal bug yang cuma ada di Safari atau IE lama."],
  ["移行", "いこう", "ikou", "migrasi", "Migrasi database error.", "QA/Bug", "N4", "Perpindahan data dari sistem lama ke baru."],
  ["切断", "せつだん", "setsudan", "terputus", "Koneksi terputus.", "QA/Bug", "N4", "Network timeout atau disconnected."],
  ["再起動", "さいきどう", "saikidou", "restart", "Coba restart servernya.", "QA/Bug", "N5", "Solusi paling klasik di dunia IT."],
  ["設定ミス", "せっていみす", "setteimisu", "salah konfigurasi", "Oh, cuma salah setting.", "QA/Bug", "N4", "Bug yang disebabkan karena kelalaian setup."],
  ["手順書", "てじゅんしょ", "tejunsho", "dokumen panduan", "Cek di panduan manual.", "QA/Bug", "N4", "Runbook atau manual book."],
  ["本番", "ほんばん", "honban", "production", "Bug di production!", "QA/Bug", "N4", "Environment paling menakutkan kalau sampai ada bug."],

  // Komunikasi
  ["確認", "かくにん", "kakunin", "konfirmasi / cek", "Akan saya konfirmasi dulu.", "Komunikasi", "N5", "Kata paling dasar! Pakai saat ingin bilang 'saya akan cek'."],
  ["共有", "きょうゆう", "kyouyuu", "share / berbagi", "Share screen/info.", "Komunikasi", "N4", "Sangat sering dipakai saat online meeting."],
  ["相談", "そうだん", "soudan", "konsultasi", "Saya ingin konsultasi.", "Komunikasi", "N5", "Dipakai saat ingin meminta saran atau berdiskusi."],
  ["連絡", "れんらく", "renraku", "menghubungi", "Tolong hubungi saya.", "Komunikasi", "N5", "Berkomunikasi via chat, email, atau telepon."],
  ["依頼", "いらい", "irai", "permintaan (request)", "Request dari klien.", "Komunikasi", "N4", "Meminta tolong divisi lain atau vendor."],
  ["対応", "たいおう", "taiou", "penanganan / handle", "Sedang di-handle.", "Komunikasi", "N4", "Sering dipakai CS atau engineer saat merespon komplain."],
  ["手順", "てじゅん", "tejun", "prosedur / langkah", "Ikuti step-stepnya.", "Komunikasi", "N4", "Langkah-langkah di manual atau dokumentasi."],
  ["質問", "しつもん", "shitsumon", "pertanyaan", "Ada pertanyaan?", "Komunikasi", "N5", "Dipakai di akhir meeting atau presentasi."],
  ["回答", "かいとう", "kaitou", "jawaban", "Ini jawabannya.", "Komunikasi", "N4", "Memberikan respon atas pertanyaan."],
  ["詳細", "しょうさい", "shousai", "detail", "Tolong berikan detailnya.", "Komunikasi", "N4", "Meminta penjelasan lebih lanjut."],
  ["承知", "しょうち", "shouchi", "mengerti / paham", "Baik, saya mengerti.", "Komunikasi", "N4", "Lebih sopan dari 'wakarimashita', wajib dipakai ke atasan."],
  ["提案", "ていあん", "teian", "usulan / proposal", "Ada usulan baru.", "Komunikasi", "N4", "Mengajukan ide atau solusi perbaikan."],
  ["説明", "せつめい", "setsumei", "penjelasan", "Tolong jelaskan.", "Komunikasi", "N5", "Menjabarkan sebuah fitur atau masalah."],
  ["打合せ", "うちあわせ", "uchiawase", "meeting kecil / diskusi", "Mari kita diskusi singkat.", "Komunikasi", "N4", "Meeting informal untuk menyamakan persepsi."],
  ["了解", "りょうかい", "ryoukai", "roger / mengerti", "Roger that.", "Komunikasi", "N4", "Sering dipakai di chat internal, kurang sopan untuk klien."],
  ["意見", "いけん", "iken", "pendapat", "Apa pendapatmu?", "Komunikasi", "N4", "Meminta feedback dari rekan setim."],
  ["賛成", "さんせい", "sansei", "setuju", "Saya setuju.", "Komunikasi", "N4", "Menyatakan persetujuan atas usulan."],
  ["反対", "はんたい", "hantai", "tidak setuju", "Saya tidak setuju.", "Komunikasi", "N4", "Menyatakan ketidaksetujuan secara profesional."],
  ["返信", "へんしん", "henshin", "balasan", "Menunggu balasan.", "Komunikasi", "N5", "Terutama untuk balasan email atau chat."],
  ["添付", "てんぷ", "tenpu", "lampiran / attachment", "Cek file terlampir.", "Komunikasi", "N4", "Sering digunakan di email."],
  ["会議室", "かいぎしつ", "kaigishitsu", "ruang meeting", "Booking ruang meeting.", "Komunikasi", "N5", "Penting untuk rapat offline."],
  ["名刺", "めいし", "meishi", "kartu nama", "Tukar kartu nama.", "Komunikasi", "N5", "Budaya bisnis Jepang, tukar meishi di awal pertemuan."],
  ["挨拶", "あいさつ", "aisatsu", "salam", "Beri salam yang baik.", "Komunikasi", "N5", "Ohayou, otsukaresama, dll."],
  ["お疲れ様", "おつかれさま", "otsukaresama", "terima kasih atas kerja kerasnya", "Otsukaresama desu!", "Komunikasi", "N5", "Salam wajib diucapkan saat bertemu, chatting, atau pulang."],
  ["ごめん", "ごめん", "gomen", "maaf", "Maaf ya.", "Komunikasi", "N5", "Kasual, untuk teman selevel."],
  ["申し訳ありません", "もうしわけありません", "moushiwake arimasen", "mohon maaf sebesar-besarnya", "Mohon maaf atas bug ini.", "Komunikasi", "N4", "Permintaan maaf formal ke klien atau atasan."],
  ["感謝", "かんしゃ", "kansha", "terima kasih / apresiasi", "Terima kasih banyak.", "Komunikasi", "N4", "Bentuk apresiasi yang lebih formal."],
  ["拝見", "はいけん", "haiken", "melihat (formal)", "Saya sudah lihat emailnya.", "Komunikasi", "N4", "Bentuk humble (kenjougo) dari miru (melihat)."],
  ["伺う", "うかがう", "ukagau", "bertanya/berkunjung (formal)", "Saya ingin bertanya...", "Komunikasi", "N4", "Bentuk humble dari kiku (bertanya) atau iku (pergi)."],
  ["念のため", "ねんのため", "nen no tame", "untuk berjaga-jaga", "Saya cek sekali lagi untuk jaga-jaga.", "Komunikasi", "N4", "Banyak dipakai orang Jepang untuk double-check sesuatu."],
  ["早速", "さっそく", "sassoku", "dengan segera", "Saya akan segera kerjakan.", "Komunikasi", "N4", "Menunjukkan antusiasme atau respon cepat."],
  ["至急", "しきゅう", "shikyuu", "segera / urgent", "Mohon balas secepatnya.", "Komunikasi", "N4", "Ditulis di judul email jika sangat mendesak."],
  ["なるべく", "なるべく", "narubeku", "sebisa mungkin", "Sebisa mungkin hari ini.", "Komunikasi", "N4", "Versi soft dari mendesak orang lain."],
  ["引き続き", "ひきつづき", "hikitsuzuki", "selanjutnya / terus", "Mohon bantuannya terus.", "Komunikasi", "N4", "Sering di akhir email: 'Hikitsuzuki yoroshiku onegaishimasu'."],
  ["取り急ぎ", "とりいそぎ", "toriisogi", "untuk sementara / quick update", "Quick update saja.", "Komunikasi", "N4", "Di akhir email saat memberi info cepat."],
  ["検討", "けんとう", "kentou", "pertimbangan", "Kami akan mempertimbangkannya.", "Komunikasi", "N4", "Jawaban standar Jepang kalau belum bisa memutuskan."],
  ["辞退", "じたい", "jitai", "menolak", "Saya tolak tawarannya.", "Komunikasi", "N4", "Menolak halus sebuah tawaran."],
  ["歓迎", "かんげい", "kangei", "menyambut", "Selamat datang di tim!", "Komunikasi", "N4", "Dipakai saat ada member baru (kangeikai)."],
  ["送付", "そうふ", "soufu", "mengirim (dokumen)", "Sudah saya kirim filenya.", "Komunikasi", "N4", "Lebih formal dari 'okuru'."],
  ["受領", "じゅりょう", "juryou", "menerima (dokumen)", "File sudah diterima.", "Komunikasi", "N4", "Konfirmasi penerimaan dokumen/email."],

  // Report
  ["報告", "ほうこく", "houkoku", "laporan", "Lapor ke PM.", "Report", "N4", "Penting dalam budaya Ho-Ren-So."],
  ["提出", "ていしゅつ", "teishutsu", "mengumpulkan (submit)", "Kumpulkan laporannya.", "Report", "N4", "Mengirimkan dokumen atau tugas."],
  ["納期", "のうき", "nouki", "tenggat waktu (deadline)", "Kapan deadlinenya?", "Report", "N4", "Sangat krusial di perusahaan IT Jepang."],
  ["承認", "しょうにん", "shounin", "persetujuan (approval)", "Menunggu approval.", "Report", "N4", "Biasanya butuh stempel atau klik approve."],
  ["復旧", "ふっきゅう", "fukkyuu", "pemulihan (recovery)", "Sistem sudah pulih.", "Report", "N4", "Laporan setelah berhasil menangani server down."],
  ["概要", "がいよう", "gaiyou", "ringkasan / overview", "Berikut overviewnya.", "Report", "N4", "Penjelasan singkat di awal presentasi."],
  ["解決", "かいけつ", "kaiketsu", "solusi / resolve", "Issue resolved.", "Report", "N4", "Memberitahukan bahwa masalah sudah beres."],
  ["実績", "じっせき", "jisseki", "hasil aktual", "Hasil aktualnya beda.", "Report", "N4", "Membandingkan rencana dengan yang benar-benar tercapai."],
  ["分析", "ぶんせき", "bunseki", "analisis", "Analisis datanya.", "Report", "N4", "Sering dilakukan oleh Data Analyst atau PM."],
  ["日報", "にっぽう", "nippou", "laporan harian", "Sudah kirim daily report?", "Report", "N4", "Sering diwajibkan tiap pulang kerja."],
  ["週報", "しゅうほう", "shuuhou", "laporan mingguan", "Kirim weekly report.", "Report", "N4", "Ringkasan pekerjaan selama satu minggu."],
  ["月報", "げっぽう", "geppou", "laporan bulanan", "Meeting bulanan.", "Report", "N4", "Laporan performa dan target tiap bulan."],
  ["課題", "かだい", "kadai", "isu / PR / tantangan", "Ini isu saat ini.", "Report", "N4", "Masalah yang harus diselesaikan."],
  ["進み具合", "すすみぐあい", "susumiguai", "tingkat kemajuan", "Bagaimana progressnya?", "Report", "N4", "Sinonim dari Shinchoku."],
  ["資料", "しりょう", "shiryou", "dokumen / materi", "Siapkan dokumen presentasi.", "Report", "N4", "Slide PowerPoint atau Excel sheet."],
  ["記録", "きろく", "kiroku", "catatan / record", "Catat lognya.", "Report", "N4", "Menyimpan history atau log dari sistem."],
  ["対象", "たいしょう", "taishou", "target / subjek", "Siapa target user-nya?", "Report", "N4", "Fokus dari sebuah report atau fitur."],
  ["結果", "けっか", "kekka", "hasil", "Ini hasil testnya.", "Report", "N4", "Bagian paling penting dari sebuah laporan."],
  ["状況", "じょうきょう", "joukyou", "situasi / kondisi", "Situasi terkini aman.", "Report", "N4", "Menjelaskan state dari sebuah project."],
  ["評価", "ひょうか", "hyouka", "evaluasi", "Evaluasi performa.", "Report", "N4", "Performance review tahunan atau project."],
  ["改善", "かいぜん", "kaizen", "perbaikan (improvement)", "Mari perbaiki UI-nya.", "Report", "N4", "Konsep Kaizen Jepang (Continuous Improvement)."],
  ["原因究明", "げんいんきゅうめい", "gen'inkyuumei", "investigasi penyebab", "Sedang mencari tahu penyebab error.", "Report", "N4", "Root cause analysis."],
  ["対策", "たいさく", "taisaku", "tindakan pencegahan / solusi", "Apa tindakan preventifnya?", "Report", "N4", "Agar bug serupa tidak terulang."],
  ["比較", "ひかく", "ひかく", "perbandingan", "Bandingkan dengan data lama.", "Report", "N4", "Komparasi A/B testing."],
  ["結論", "けつろん", "ketsuron", "kesimpulan", "Kesimpulannya adalah...", "Report", "N4", "Poin akhir dari presentasi."],
  ["目的", "もくてき", "mokuteki", "tujuan", "Apa tujuan project ini?", "Report", "N4", "Objective utama."],
  ["目安", "めやす", "meyasu", "perkiraan kasar / rule of thumb", "Perkiraannya sekitar 2 minggu.", "Report", "N4", "Estimasi yang tidak mengikat."],
  ["範囲", "はんい", "han'i", "cakupan / scope", "Scope testingnya di mana?", "Report", "N4", "Scope of work / boundary."],
  ["規模", "きぼ", "kibo", "skala / size", "Skala projectnya besar.", "Report", "N4", "Ukuran dari sesuatu."],
  ["方針", "ほうしん", "houshin", "kebijakan / policy / arah", "Arahan dari manajemen.", "Report", "N4", "Direction atau aturan perusahaan."],
  ["見通し", "みとおし", "mitooshi", "prospek / pandangan ke depan", "Kelihatannya akan rilis bulan depan.", "Report", "N4", "Estimasi atau pandangan ke depan."],
  ["懸念", "けねん", "kenen", "kekhawatiran (concern)", "Ada concern soal security.", "Report", "N4", "Resiko atau hal yang dikhawatirkan."],
  ["リスク", "りすく", "risuku", "risiko", "Resikonya terlalu tinggi.", "Report", "N4", "Manajemen risiko proyek."],
  ["効果", "こうか", "kouka", "efek / hasil", "Efeknya sangat bagus.", "Report", "N4", "Hasil positif dari sebuah implementasi."],
  ["減少", "げんしょう", "genshou", "penurunan", "Jumlah bug menurun.", "Report", "N4", "Penurunan grafik metrik."],
  ["増加", "ぞうか", "zouka", "peningkatan", "Traffic user meningkat.", "Report", "N4", "Peningkatan grafik metrik."],
  ["不足", "ふそく", "fusoku", "kekurangan", "Resource kita kurang.", "Report", "N4", "Kekurangan budget, orang, atau waktu."],
  ["予算", "よさん", "yosan", "anggaran / budget", "Budgetnya habis.", "Report", "N4", "Terkait keuangan project."],
  ["利益", "りえき", "rieki", "keuntungan / profit", "Profit tahun ini naik.", "Report", "N4", "Fokus utama perusahaan."],
  ["目標達成", "もくひょうたっせい", "mokuhyoutassei", "mencapai target", "Target tercapai!", "Report", "N4", "Laporan keberhasilan (KPI Met)."],

  // Standup
  ["進捗", "しんちょく", "shinchoku", "progress pekerjaan", "Bagaimana progressnya?", "Standup", "N4", "Kata wajib saat daily standup untuk melaporkan status."],
  ["会議", "かいぎ", "kaigi", "meeting / rapat", "Meeting jam 10.", "Standup", "N5", "Jadwal meeting harian."],
  ["変更", "へんこう", "henkou", "perubahan", "Ada perubahan desain.", "Standup", "N4", "Melaporkan jika ada spec yang berubah."],
  ["完了", "かんりょう", "kanryou", "selesai / complete", "Task sudah selesai.", "Standup", "N4", "Status Jira pindah ke 'Done'."],
  ["保留", "ほりゅう", "horyuu", "ditunda / pending", "Task ini di-pending.", "Standup", "N4", "Tiket ditahan karena menunggu blocker."],
  ["追加", "ついか", "tsuika", "penambahan", "Ada tambahan fitur.", "Standup", "N4", "Scope creep! Beritahu tim jika ada tambahan."],
  ["見積", "みつもり", "mitsumori", "estimasi", "Estimasi waktunya 3 hari.", "Standup", "N4", "Berapa story point untuk tiket ini?"],
  ["更新", "こうしん", "koushin", "update", "Update data terbaru.", "Standup", "N4", "Memperbarui tiket Jira/Trello."],
  ["予定", "よてい", "yotei", "rencana / jadwal", "Jadwal rilis besok.", "Standup", "N5", "Apa yang akan kamu kerjakan hari ini?"],
  ["遅延", "ちえん", "chien", "keterlambatan (delay)", "Rilisnya delay.", "Standup", "N4", "Sangat penting dilaporkan secepatnya kalau tahu akan telat."],
  ["昨日", "きのう", "kinou", "kemarin", "Kemarin kerjain API.", "Standup", "N5", "Format standar standup."],
  ["今日", "きょう", "kyou", "hari ini", "Hari ini fix bug.", "Standup", "N5", "Format standar standup."],
  ["明日", "あした", "ashita", "besok", "Besok saya cuti.", "Standup", "N5", "Memberi tahu rencana besok."],
  ["問題", "もんだい", "mondai", "masalah / problem", "Ada blocker.", "Standup", "N5", "Apakah ada blocker/masalah?"],
  ["目標", "もくひょう", "mokuhyou", "target / goal", "Goal sprint ini.", "Standup", "N4", "Target yang ingin dicapai tim."],
  ["開始", "かいし", "kaishi", "mulai (start)", "Mulai ngerjain tiket.", "Standup", "N4", "Status In Progress."],
  ["終了", "しゅうりょう", "shuuryou", "berakhir (end)", "Meeting berakhir.", "Standup", "N4", "Selesainya sebuah aktivitas."],
  ["順調", "じゅんちょう", "junchou", "lancar", "Semua lancar.", "Standup", "N4", "Kabar baik di standup pagi."],
  ["調整", "ちょうせい", "chousei", "penyesuaian (adjust)", "Adjust jadwal rilis.", "Standup", "N4", "Menjadwalkan ulang."],
  ["引き続き", "ひきつづき", "hikitsuzuki", "melanjutkan", "Lanjut task kemarin.", "Standup", "N4", "Sering diucapkan saat melanjutkan kerjaan kemarin."],
  ["着手", "ちゃくしゅ", "chakushu", "mulai dikerjakan (start working)", "Mulai kerjakan tiket B.", "Standup", "N4", "Lebih profesional dari 'mulai'."],
  ["予定通り", "よていどおり", "yoteidoori", "sesuai rencana", "Sesuai rencana, tidak ada delay.", "Standup", "N4", "Kondisi ideal."],
  ["前倒し", "まえだおし", "maedaoshi", "lebih awal dari jadwal", "Rilis lebih awal.", "Standup", "N4", "Luar biasa, task selesai lebih cepat."],
  ["後ろ倒し", "うしろだおし", "ushirodaoshi", "diundur", "Jadwalnya diundur.", "Standup", "N4", "Karena ada blocker, jadwal dimundurkan."],
  ["優先順位", "ゆうせんじゅんい", "yuusenjun'i", "prioritas", "Prioritasnya diubah.", "Standup", "N4", "Priority order di backlog."],
  ["手戻り", "てもどり", "temodori", "mengulang kerjaan / rework", "Ada rework dari QA.", "Standup", "N4", "Hal yang paling dibenci developer."],
  ["差し戻し", "さしもどし", "sashimodoshi", "dikembalikan / direject", "PR-nya di-reject.", "Standup", "N4", "Kembali ke status sebelumnya."],
  ["取り消し", "とりけし", "torikeshi", "dibatalkan / cancel", "Rilisnya di-cancel.", "Standup", "N4", "Pembatalan."],
  ["手待ち", "てまち", "temachi", "menunggu (idle)", "Lagi nunggu review (idle).", "Standup", "N4", "Sedang tidak ada kerjaan karena nunggu orang lain."],
  ["並行", "へいこう", "heikou", "paralel", "Dikerjakan paralel.", "Standup", "N4", "Multitasking beberapa tiket sekaligus."],
  ["合意", "ごうい", "goui", "kesepakatan", "Sudah ada kesepakatan dari klien.", "Standup", "N4", "Agreement dicapai."],
  ["共有事項", "きょうゆうじこう", "kyouyuujikou", "hal yang ingin dibagikan", "Ada satu info untuk tim.", "Standup", "N4", "Pengumuman di akhir standup."],
  ["休暇", "きゅうか", "kyuuka", "cuti / libur", "Jumat saya cuti.", "Standup", "N4", "Memberi tahu tim soal jadwal absen."],
  ["体調不良", "たいちょうふりょう", "taichoufuryou", "sakit / tidak enak badan", "Maaf, saya agak sakit.", "Standup", "N4", "Alasan umum untuk minta WFH atau istirahat."],
  ["通院", "つういん", "tsuuin", "pergi ke rumah sakit / klinik", "Siang nanti saya ke dokter.", "Standup", "N4", "Izin bentar untuk check up medis."],
  ["早退", "そうたい", "soutai", "pulang lebih awal", "Hari ini saya pulang cepat.", "Standup", "N4", "Pulang sebelum jam kerja usai."],
  ["遅刻", "ちこく", "chikoku", "terlambat", "Maaf telat masuk meeting.", "Standup", "N5", "Wajib minta maaf kalau telat di Jepang."],
  ["直行", "ちょっこう", "chokkou", "langsung pergi ke tujuan (klien)", "Besok saya langsung ke kantor klien.", "Standup", "N4", "Tidak mampir ke kantor sendiri dulu."],
  ["直帰", "ちょっき", "chokki", "langsung pulang (dari klien)", "Selesai meeting langsung pulang rumah.", "Standup", "N4", "Habis dari luar langsung balik rumah."],
  ["引継ぎ", "ひきつぎ", "hikitsugi", "handover / serah terima", "Handover kerjaan sebelum cuti.", "Standup", "N4", "Oper tugas ke rekan setim."],

  // Kerja umum
  ["会社", "かいしゃ", "kaisha", "kantor / perusahaan", "Saya bekerja di kantor.", "Kerja umum", "N5", "Kata dasar untuk tempat kerja."],
  ["仕様", "しよう", "shiyou", "spesifikasi", "Cek spesifikasinya.", "Kerja umum", "N4", "Sangat penting, panduan dari PM/Klien."],
  ["残業", "ざんぎょう", "zangyou", "lembur", "Hari ini lembur.", "Kerja umum", "N5", "Realita kerja di IT."],
  ["開発", "かいはつ", "kaihatsu", "pengembangan (development)", "Fase development dimulai.", "Kerja umum", "N4", "Proses ngoding software."],
  ["担当", "たんとう", "tantou", "penanggung jawab (PIC)", "Siapa PIC-nya?", "Kerja umum", "N4", "Orang yang bertanggung jawab."],
  ["設計", "せっけい", "sekkei", "desain / arsitektur", "Desain sistemnya selesai.", "Kerja umum", "N4", "Fase System Design."],
  ["条件", "じょうけん", "jouken", "kondisi / syarat", "Syaratnya apa saja?", "Kerja umum", "N4", "Kriteria approval."],
  ["設定", "せってい", "settei", "pengaturan (setting)", "Ubah settingnya.", "Kerja umum", "N4", "Konfigurasi sistem."],
  ["実行", "じっこう", "jikkou", "eksekusi / run", "Run scriptnya.", "Kerja umum", "N4", "Jalankan command."],
  ["保存", "ほぞん", "hozon", "simpan (save)", "Jangan lupa save.", "Kerja umum", "N4", "Aksi di database."],
  ["管理", "かんり", "kanri", "manajemen / manage", "Manage servernya.", "Kerja umum", "N4", "Mengontrol sesuatu."],
  ["運用", "うんよう", "unyou", "operasi (operation)", "Masuk fase operasional.", "Kerja umum", "N4", "Fase setelah live production."],
  ["保守", "ほしゅ", "hoshu", "maintenance", "Sedang maintenance.", "Kerja umum", "N4", "Perbaikan paska live."],
  ["機能", "きのう", "kinou", "fitur", "Fitur baru rilis.", "Kerja umum", "N4", "Kapasitas aplikasi."],
  ["出社", "しゅっしゃ", "shussha", "datang ke kantor", "Besok saya WFO.", "Kerja umum", "N5", "Bekerja dari kantor."],
  ["退社", "たいしゃ", "taisha", "pulang kerja", "Saya pulang dulu.", "Kerja umum", "N5", "Atau bisa juga berarti resign (berhenti dari perusahaan)."],
  ["有休", "ゆうきゅう", "yuukyuu", "cuti berbayar (PTO)", "Ambil cuti besok.", "Kerja umum", "N4", "Hak cuti tahunan karyawan."],
  ["休憩", "きゅうけい", "kyuukei", "istirahat", "Waktunya istirahat.", "Kerja umum", "N5", "Biasanya siang hari."],
  ["業務", "ぎょうむ", "gyoumu", "tugas / pekerjaan", "Fokus ke tugas utama.", "Kerja umum", "N4", "Operasional sehari-hari."],
  ["同僚", "どうりょう", "douryou", "rekan kerja", "Rekan satu tim.", "Kerja umum", "N4", "Orang di kantor."],
  ["上司", "じょうし", "joushi", "atasan", "Atasan saya galak.", "Kerja umum", "N4", "Manager atau lead."],
  ["部下", "ぶか", "buka", "bawahan", "Bawahan saya pintar.", "Kerja umum", "N4", "Junior di tim."],
  ["顧客", "こきゃく", "kokyaku", "pelanggan / klien", "Klien minta revisi.", "Kerja umum", "N4", "Orang yang membayar kita."],
  ["部署", "ぶしょ", "busho", "departemen", "Departemen IT.", "Kerja umum", "N4", "Divisi dalam perusahaan."],
  ["人事", "じんじ", "jinji", "HR / Personalia", "Tanya HRD.", "Kerja umum", "N4", "Urusan gaji, rekrutmen."],
  ["経理", "けいり", "keiri", "akuntansi / finance", "Claim transport ke Finance.", "Kerja umum", "N4", "Urusan duit dan reimbursement."],
  ["営業", "えいぎょう", "eigyou", "sales / pemasaran", "Tim sales capai target.", "Kerja umum", "N4", "Bagian yang jualan produk kita."],
  ["契約", "けいやく", "keiyaku", "kontrak", "Tanda tangan kontrak.", "Kerja umum", "N4", "Perjanjian kerja / SLA."],
  ["給料", "きゅうりょう", "kyuuryou", "gaji", "Gajian cair!", "Kerja umum", "N5", "Hal yang ditunggu-tunggu."],
  ["賞与", "しょうよ", "shouyo", "bonus", "Bonus akhir tahun.", "Kerja umum", "N4", "Sering juga disebut 'boonasu'."],
  ["採用", "さいよう", "saiyou", "rekrutmen / diterima kerja", "Diterima kerja di Google.", "Kerja umum", "N4", "Proses hiring."],
  ["退職", "たいしょく", "taishoku", "resign", "Saya mau resign bulan depan.", "Kerja umum", "N4", "Berhenti bekerja dari perusahaan."],
  ["規則", "きそく", "kisoku", "peraturan", "Patuhi aturan kantor.", "Kerja umum", "N4", "Company rules."],
  ["研修", "けんしゅう", "kenshuu", "training / pelatihan", "Ikut training AWS.", "Kerja umum", "N4", "Program orientasi untuk karyawan baru."],
  ["出張", "しゅっちょう", "shucchou", "perjalanan dinas (business trip)", "Dinas ke Tokyo.", "Kerja umum", "N4", "Dibiayai oleh perusahaan."],
  ["交通費", "こうつうひ", "koutsuuhi", "biaya transportasi", "Reimburse ongkos kereta.", "Kerja umum", "N4", "Biasanya ditanggung perusahaan di Jepang."],
  ["名刺", "めいし", "meishi", "kartu nama", "Ini kartu nama saya.", "Kerja umum", "N5", "Identitas wajib."],
  ["資料作成", "しりょうさくせい", "shiryousakusei", "pembuatan dokumen", "Bikin materi slide.", "Kerja umum", "N4", "Kerjaan PM atau Sales."],
  ["備品", "びひん", "bihin", "perlengkapan kantor", "Minta mouse baru dari kantor.", "Kerja umum", "N4", "Monitor, laptop, dll inventaris kantor."],
  ["社内", "しゃない", "shanai", "internal perusahaan", "Info ini khusus internal.", "Kerja umum", "N4", "Rahasia perusahaan, jangan disebar."]
];

function generateExamples(kanji, hiragana, id_meaning) {
  return [
    {
      jp: kanji + "をお願いします。",
      hiragana: hiragana + "を おねがいします。",
      id: "Tolong terkait " + id_meaning + "."
    },
    {
      jp: kanji + "は終わりましたか？",
      hiragana: hiragana + "は おわりましたか？",
      id: "Apakah " + id_meaning + " sudah selesai?"
    },
    {
      jp: "今日の" + kanji + "について話しましょう。",
      hiragana: "きょうの " + hiragana + "について はなしましょう。",
      id: "Mari kita bicarakan tentang " + id_meaning + " hari ini."
    }
  ];
}

const vocabularies = rawWords.map((row, index) => {
  const [kanji, hiragana, romaji, meaning, shortExample, category, level, tip] = row;
  const examples = generateExamples(kanji, hiragana, meaning);

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

const tsCode = 'export type Category = "QA/Bug" | "Komunikasi" | "Report" | "Standup" | "Kerja umum";\\n' +
'export type Level = "N5" | "N4";\\n\\n' +
'export interface Example {\\n' +
'  jp: string;\\n' +
'  hiragana: string;\\n' +
'  id: string;\\n' +
'}\\n\\n' +
'export interface Vocabulary {\\n' +
'  id: string;\\n' +
'  kanji: string;\\n' +
'  hiragana: string;\\n' +
'  romaji: string;\\n' +
'  meaning: string;\\n' +
'  shortExample: string;\\n' +
'  category: Category;\\n' +
'  level: Level;\\n' +
'  tip: string;\\n' +
'  examples: Example[];\\n' +
'}\\n\\n' +
'export const VOCABULARY_DATA: Vocabulary[] = ' + JSON.stringify(vocabularies, null, 2) + ';\\n';

fs.writeFileSync('/Users/mac/code/silvi/nagomisakura/app/data/vocabulary.ts', tsCode);
console.log("Successfully wrote " + vocabularies.length + " vocabularies.");
