import json
import random

categories = ["QA/Bug", "Komunikasi", "Report", "Standup", "Kerja umum"]
levels = ["N5", "N4"]

base_words = [
    ("会社", "かいしゃ", "kaisha", "kantor / perusahaan", "Saya bekerja di kantor.", "Kerja umum", "N5", [
        ("会社で働いています。", "かいしゃで はたらいています。", "Saya sedang bekerja di perusahaan."),
        ("会社に行きます。", "かいしゃに いきます。", "Saya pergi ke kantor."),
        ("私の会社はIT企業です。", "わたしの かいしゃは アイティー きぎょうです。", "Perusahaan saya adalah perusahaan IT.")
    ], "Kata dasar untuk menyebut tempat kerja/kantor."),
    ("確認", "かくにん", "kakunin", "konfirmasi / cek", "Akan saya konfirmasi dulu.", "Komunikasi", "N5", [
        ("こちら確認します。", "こちら かくにんします。", "Saya akan cek bagian ini."),
        ("確認をお願いします。", "かくにんを おねがいします。", "Mohon konfirmasinya."),
        ("仕様を確認しました。", "しようを かくにんしました。", "Saya sudah mengonfirmasi spesifikasinya.")
    ], "Kata paling dasar! Pakai saat ingin bilang \"saya akan cek/konfirmasi\" ke atasan atau tim."),
    ("修正", "しゅうせい", "shuusei", "revisi / perbaikan", "Bug sudah diperbaiki.", "QA/Bug", "N4", [
        ("不具合を修正しました。", "ふぐあいを しゅうせいしました。", "Bug/cacat (pada sistem) sudah diperbaiki."),
        ("コードを修正します。", "こーどを しゅうせいします。", "Saya akan memperbaiki kodenya."),
        ("修正内容を共有します。", "しゅうせい ないようを きょうゆうします。", "Saya akan membagikan detail perbaikannya.")
    ], "Sangat sering dipakai oleh developer setelah memperbaiki tiket bug."),
    ("進捗", "しんちょく", "shinchoku", "progress pekerjaan", "Bagaimana progressnya?", "Standup", "N4", [
        ("進捗を共有します。", "しんちょくを きょうゆうします。", "Saya akan membagikan progress pekerjaan."),
        ("現在の進捗はどうですか？", "げんざいの しんちょくは どうですか？", "Bagaimana progress saat ini?"),
        ("進捗は順調です。", "しんちょくは じゅんちょうです。", "Progressnya berjalan lancar.")
    ], "Kata wajib saat daily standup untuk melaporkan status tiket."),
    ("会議", "かいぎ", "kaigi", "meeting / rapat", "Meeting jam 10.", "Standup", "N5", [
        ("会議は10時からです。", "かいぎは じゅうじからです。", "Meeting dimulai dari jam 10."),
        ("会議室を予約しました。", "かいぎしつを よやくしました。", "Saya sudah memesan ruang meeting."),
        ("次の会議で話し合いましょう。", "つぎの かいぎで はなしあいましょう。", "Mari kita diskusikan di meeting selanjutnya.")
    ], "Gunakan untuk menyebut jadwal meeting harian atau mingguan."),
    ("報告", "ほうこく", "houkoku", "laporan", "Lapor ke PM.", "Report", "N4", [
        ("マネージャーに報告します。", "まねーじゃーに ほうこくします。", "Saya akan melaporkan ke manajer."),
        ("バグの報告があります。", "ばぐの ほうこくが あります。", "Ada laporan tentang bug."),
        ("日次報告を送りました。", "にちじ ほうこくを おくりました。", "Saya sudah mengirim laporan harian.")
    ], "Penting dalam budaya Ho-Ren-So (Lapor, Hubungi, Konsultasi)."),
    ("不具合", "ふぐあい", "fuguai", "bug / error / cacat", "Ada bug di sistem.", "QA/Bug", "N4", [
        ("システムに不具合があります。", "しすてむに ふぐあいがあります。", "Ada bug/error di dalam sistem."),
        ("不具合を調査しています。", "ふぐあいを ちょうさしています。", "Saya sedang menyelidiki bug tersebut."),
        ("この不具合は再現可能です。", "この ふぐあいは さいげん かのうです。", "Bug ini bisa direproduksi.")
    ], "Lebih formal dari kata 'bagu' (バグ). Sering dipakai di tiket Jira Jepang."),
    ("仕様", "しよう", "shiyou", "spesifikasi", "Cek spesifikasinya.", "Kerja umum", "N4", [
        ("仕様書を確認してください。", "しようしょを かくにんしてください。", "Tolong periksa dokumen spesifikasinya."),
        ("これは仕様ですか？", "これは しようですか？", "Apakah ini sesuai spesifikasi? (Bukan bug?)"),
        ("仕様変更がありました。", "しよう へんこうが ありました。", "Terdapat perubahan spesifikasi.")
    ], "Sangat penting! Kalau bingung bug atau bukan, tanyakan 'Kore wa shiyou desu ka?'"),
    ("共有", "きょうゆう", "kyouyuu", "share / berbagi", "Share screen/info.", "Komunikasi", "N4", [
        ("画面を共有します。", "がめんを きょうゆうします。", "Saya akan share screen (layar)."),
        ("情報をチームに共有します。", "じょうほうを ちーむに きょうゆうします。", "Saya akan membagikan informasinya ke tim."),
        ("資料を共有してくれますか？", "しりょうを きょうゆうして くれますか？", "Bisa tolong bagikan dokumennya?")
    ], "Sangat sering dipakai saat online meeting di Zoom/Meet."),
    ("残業", "ざんぎょう", "zangyou", "lembur", "Hari ini lembur.", "Kerja umum", "N5", [
        ("今日は残業します。", "きょうは ざんぎょうします。", "Hari ini saya akan lembur."),
        ("残業代は出ますか？", "ざんぎょうだいは でますか？", "Apakah ada uang lembur?"),
        ("残業しないで帰ります。", "ざんぎょう しないで かえります。", "Saya akan pulang tanpa lembur.")
    ], "Realita kerja di IT, hati-hati jangan sampai kebanyakan lembur (karoushi).")
]

# We need 100 items. Let's add more base words related to IT/Kaisha.
extra_words = [
    ("相談", "そうだん", "soudan", "konsultasi", "Saya ingin konsultasi.", "Komunikasi", "N5"),
    ("連絡", "れんらく", "renraku", "menghubungi", "Tolong hubungi saya.", "Komunikasi", "N5"),
    ("提出", "ていしゅつ", "teishutsu", "mengumpulkan (submit)", "Kumpulkan laporannya.", "Report", "N4"),
    ("開発", "かいはつ", "kaihatsu", "pengembangan (development)", "Fase development dimulai.", "Kerja umum", "N4"),
    ("環境", "かんきょう", "kankyou", "environment / lingkungan", "Environment stagging.", "QA/Bug", "N4"),
    ("実装", "じっそう", "jissou", "implementasi", "Fitur sudah diimplementasi.", "QA/Bug", "N4"),
    ("担当", "たんとう", "tantou", "penanggung jawab (PIC)", "Siapa PIC-nya?", "Kerja umum", "N4"),
    ("納期", "のうき", "nouki", "tenggat waktu (deadline)", "Kapan deadlinenya?", "Report", "N4"),
    ("変更", "へんこう", "henkou", "perubahan", "Ada perubahan desain.", "Standup", "N4"),
    ("完了", "かんりょう", "kanryou", "selesai / complete", "Task sudah selesai.", "Standup", "N4"),
    ("承認", "しょうにん", "shounin", "persetujuan (approval)", "Menunggu approval.", "Report", "N4"),
    ("依頼", "いらい", "irai", "permintaan (request)", "Request dari klien.", "Komunikasi", "N4"),
    ("設計", "せっけい", "sekkei", "desain / arsitektur", "Desain sistemnya selesai.", "Kerja umum", "N4"),
    ("稼働", "かどう", "kadou", "beroperasi / running", "Server sudah running.", "QA/Bug", "N4"),
    ("試験", "しけん", "shiken", "pengujian / testing", "Testing sudah selesai.", "QA/Bug", "N4"),
    ("再現", "さいげん", "saigen", "reproduksi (bug)", "Bug bisa direproduksi.", "QA/Bug", "N4"),
    ("原因", "げんいん", "gen'in", "penyebab", "Penyebabnya sudah diketahui.", "QA/Bug", "N4"),
    ("対応", "たいおう", "taiou", "penanganan / handle", "Sedang di-handle.", "Komunikasi", "N4"),
    ("保留", "ほりゅう", "horyuu", "ditunda / pending", "Task ini di-pending.", "Standup", "N4"),
    ("追加", "ついか", "tsuika", "penambahan", "Ada tambahan fitur.", "Standup", "N4"),
    ("削除", "さくじょ", "sakujo", "penghapusan", "Hapus data test.", "QA/Bug", "N4"),
    ("復旧", "ふっきゅう", "fukkyuu", "pemulihan (recovery)", "Sistem sudah pulih.", "Report", "N4"),
    ("見積", "みつもり", "mitsumori", "estimasi", "Estimasi waktunya 3 hari.", "Standup", "N4"),
    ("詳細", "しょうさい", "shousai", "detail", "Tolong berikan detailnya.", "Komunikasi", "N4"),
    ("概要", "がいよう", "gaiyou", "ringkasan / overview", "Berikut overviewnya.", "Report", "N4"),
    ("対象", "たいしょう", "taishou", "target / subjek", "Siapa target user-nya?", "Kerja umum", "N4"),
    ("条件", "じょうけん", "jouken", "kondisi / syarat", "Syaratnya apa saja?", "Kerja umum", "N4"),
    ("制限", "せいげん", "seigen", "batasan / limit", "Ada limit 5MB.", "QA/Bug", "N4"),
    ("接続", "せつぞく", "setsuzoku", "koneksi", "Koneksi ke DB gagal.", "QA/Bug", "N4"),
    ("設定", "せってい", "settei", "pengaturan (setting)", "Ubah settingnya.", "Kerja umum", "N4"),
    ("入力", "にゅうりょく", "nyuuryoku", "input", "Input data user.", "QA/Bug", "N4"),
    ("出力", "しゅつりょく", "shutsuryoku", "output", "Outputnya error.", "QA/Bug", "N4"),
    ("実行", "じっこう", "jikkou", "eksekusi / run", "Run scriptnya.", "Kerja umum", "N4"),
    ("保存", "ほぞん", "hozon", "simpan (save)", "Jangan lupa save.", "Kerja umum", "N4"),
    ("更新", "こうしん", "koushin", "update", "Update data terbaru.", "Standup", "N4"),
    ("管理", "かんり", "kanri", "manajemen / manage", "Manage servernya.", "Kerja umum", "N4"),
    ("運用", "うんよう", "unyou", "operasi (operation)", "Masuk fase operasional.", "Kerja umum", "N4"),
    ("保守", "ほしゅ", "hoshu", "maintenance", "Sedang maintenance.", "Kerja umum", "N4"),
    ("画面", "がめん", "gamen", "layar / screen", "Screen UI rusak.", "QA/Bug", "N5"),
    ("機能", "きのう", "kinou", "fitur", "Fitur baru rilis.", "Kerja umum", "N4"),
    ("権限", "けんげん", "kengen", "hak akses (permission)", "Tidak ada permission.", "QA/Bug", "N4"),
    ("手順", "てじゅん", "tejun", "prosedur / langkah", "Ikuti step-stepnya.", "Komunikasi", "N4"),
    ("状態", "じょうたい", "joutai", "status / state", "Statusnya error.", "QA/Bug", "N4"),
    ("発生", "はっせい", "hassei", "terjadi (occur)", "Error occur.", "QA/Bug", "N4"),
    ("解決", "かいけつ", "kaiketsu", "solusi / resolve", "Issue resolved.", "Report", "N4"),
    ("質問", "しつもん", "shitsumon", "pertanyaan", "Ada pertanyaan?", "Komunikasi", "N5"),
    ("回答", "かいとう", "kaitou", "jawaban", "Ini jawabannya.", "Komunikasi", "N4"),
    ("予定", "よてい", "yotei", "rencana / jadwal", "Jadwal rilis besok.", "Standup", "N5"),
    ("実績", "じっせき", "jisseki", "hasil aktual", "Hasil aktualnya beda.", "Report", "N4"),
    ("分析", "ぶんんせき", "bunseki", "analisis", "Analisis datanya.", "Report", "N4")
]

# We will generate 100 items total. We have 10 base with full examples, 50 extra. Let's make it 100 by duplicating some with slight variations or just creating 100 unique ones using a generator logic.
# Wait, let's just write a script that fills in the rest with generic IT words and examples.

# Since writing out 100 full unique entries accurately in Japanese takes time, let me script 100 words.
# I'll output this to app/data/vocabulary.ts
