export type Category = "QA/Bug" | "Komunikasi" | "Report" | "Standup" | "Kerja umum";
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

export const VOCABULARY_DATA: Vocabulary[] = [
  {
    "id": "1",
    "kanji": "修正",
    "hiragana": "しゅうせい",
    "romaji": "shuusei",
    "meaning": "revisi / perbaikan",
    "shortExample": "Bug sudah diperbaiki.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Sangat sering dipakai oleh developer setelah memperbaiki tiket bug.",
    "examples": [
      {
        "jp": "不具合を修正しました。",
        "hiragana": "ふぐあいを しゅうせいしました。",
        "id": "Bug/cacat (pada sistem) sudah diperbaiki."
      },
      {
        "jp": "コードを修正します。",
        "hiragana": "こーどを しゅうせいします。",
        "id": "Saya akan memperbaiki kodenya."
      },
      {
        "jp": "修正内容を共有します。",
        "hiragana": "しゅうせい ないようを きょうゆうします。",
        "id": "Saya akan membagikan detail perbaikannya."
      }
    ]
  },
  {
    "id": "2",
    "kanji": "不具合",
    "hiragana": "ふぐあい",
    "romaji": "fuguai",
    "meaning": "bug / error / cacat",
    "shortExample": "Ada bug di sistem.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Lebih formal dari kata 'bagu' (バグ). Sering dipakai di tiket Jira Jepang.",
    "examples": [
      {
        "jp": "システムに不具合があります。",
        "hiragana": "しすてむに ふぐあいがあります。",
        "id": "Ada bug/error di dalam sistem."
      },
      {
        "jp": "不具合を調査しています。",
        "hiragana": "ふぐあいを ちょうさしています。",
        "id": "Saya sedang menyelidiki bug tersebut."
      },
      {
        "jp": "今日の不具合について話しましょう。",
        "hiragana": "きょうの ふぐあいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang bug / error / cacat hari ini."
      }
    ]
  },
  {
    "id": "3",
    "kanji": "環境",
    "hiragana": "かんきょう",
    "romaji": "kankyou",
    "meaning": "environment / lingkungan",
    "shortExample": "Environment stagging.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Digunakan untuk menyebut environment development, staging, atau production.",
    "examples": [
      {
        "jp": "環境をお願いします。",
        "hiragana": "かんきょうを おねがいします。",
        "id": "Tolong terkait environment / lingkungan."
      },
      {
        "jp": "環境は終わりましたか？",
        "hiragana": "かんきょうは おわりましたか？",
        "id": "Apakah environment / lingkungan sudah selesai?"
      },
      {
        "jp": "今日の環境について話しましょう。",
        "hiragana": "きょうの かんきょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang environment / lingkungan hari ini."
      }
    ]
  },
  {
    "id": "4",
    "kanji": "実装",
    "hiragana": "じっそう",
    "romaji": "jissou",
    "meaning": "implementasi",
    "shortExample": "Fitur sudah diimplementasi.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Dipakai saat developer selesai ngoding sebuah fitur.",
    "examples": [
      {
        "jp": "実装をお願いします。",
        "hiragana": "じっそうを おねがいします。",
        "id": "Tolong terkait implementasi."
      },
      {
        "jp": "実装は終わりましたか？",
        "hiragana": "じっそうは おわりましたか？",
        "id": "Apakah implementasi sudah selesai?"
      },
      {
        "jp": "今日の実装について話しましょう。",
        "hiragana": "きょうの じっそうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang implementasi hari ini."
      }
    ]
  },
  {
    "id": "5",
    "kanji": "稼働",
    "hiragana": "かどう",
    "romaji": "kadou",
    "meaning": "beroperasi / running",
    "shortExample": "Server sudah running.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Biasa digunakan untuk mendeskripsikan server atau sistem yang sedang berjalan.",
    "examples": [
      {
        "jp": "稼働をお願いします。",
        "hiragana": "かどうを おねがいします。",
        "id": "Tolong terkait beroperasi / running."
      },
      {
        "jp": "稼働は終わりましたか？",
        "hiragana": "かどうは おわりましたか？",
        "id": "Apakah beroperasi / running sudah selesai?"
      },
      {
        "jp": "今日の稼働について話しましょう。",
        "hiragana": "きょうの かどうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang beroperasi / running hari ini."
      }
    ]
  },
  {
    "id": "6",
    "kanji": "試験",
    "hiragana": "しけん",
    "romaji": "shiken",
    "meaning": "pengujian / testing",
    "shortExample": "Testing sudah selesai.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Bisa diganti juga dengan kata 'tesuto' (テスト).",
    "examples": [
      {
        "jp": "試験をお願いします。",
        "hiragana": "しけんを おねがいします。",
        "id": "Tolong terkait pengujian / testing."
      },
      {
        "jp": "試験は終わりましたか？",
        "hiragana": "しけんは おわりましたか？",
        "id": "Apakah pengujian / testing sudah selesai?"
      },
      {
        "jp": "今日の試験について話しましょう。",
        "hiragana": "きょうの しけんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pengujian / testing hari ini."
      }
    ]
  },
  {
    "id": "7",
    "kanji": "再現",
    "hiragana": "さいげん",
    "romaji": "saigen",
    "meaning": "reproduksi (bug)",
    "shortExample": "Bug bisa direproduksi.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Sangat penting di QA: memastikan bug bisa direproduksi atau tidak.",
    "examples": [
      {
        "jp": "再現をお願いします。",
        "hiragana": "さいげんを おねがいします。",
        "id": "Tolong terkait reproduksi (bug)."
      },
      {
        "jp": "再現は終わりましたか？",
        "hiragana": "さいげんは おわりましたか？",
        "id": "Apakah reproduksi (bug) sudah selesai?"
      },
      {
        "jp": "今日の再現について話しましょう。",
        "hiragana": "きょうの さいげんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang reproduksi (bug) hari ini."
      }
    ]
  },
  {
    "id": "8",
    "kanji": "原因",
    "hiragana": "げんいん",
    "romaji": "gen'in",
    "meaning": "penyebab",
    "shortExample": "Penyebabnya sudah diketahui.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Dipakai saat melakukan Root Cause Analysis.",
    "examples": [
      {
        "jp": "原因をお願いします。",
        "hiragana": "げんいんを おねがいします。",
        "id": "Tolong terkait penyebab."
      },
      {
        "jp": "原因は終わりましたか？",
        "hiragana": "げんいんは おわりましたか？",
        "id": "Apakah penyebab sudah selesai?"
      },
      {
        "jp": "今日の原因について話しましょう。",
        "hiragana": "きょうの げんいんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penyebab hari ini."
      }
    ]
  },
  {
    "id": "9",
    "kanji": "削除",
    "hiragana": "さくじょ",
    "romaji": "sakujo",
    "meaning": "penghapusan",
    "shortExample": "Hapus data test.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Operasi delete/hapus pada database atau UI.",
    "examples": [
      {
        "jp": "削除をお願いします。",
        "hiragana": "さくじょを おねがいします。",
        "id": "Tolong terkait penghapusan."
      },
      {
        "jp": "削除は終わりましたか？",
        "hiragana": "さくじょは おわりましたか？",
        "id": "Apakah penghapusan sudah selesai?"
      },
      {
        "jp": "今日の削除について話しましょう。",
        "hiragana": "きょうの さくじょについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penghapusan hari ini."
      }
    ]
  },
  {
    "id": "10",
    "kanji": "制限",
    "hiragana": "せいげん",
    "romaji": "seigen",
    "meaning": "batasan / limit",
    "shortExample": "Ada limit 5MB.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Sering muncul di spesifikasi sistem atau pesan error.",
    "examples": [
      {
        "jp": "制限をお願いします。",
        "hiragana": "せいげんを おねがいします。",
        "id": "Tolong terkait batasan / limit."
      },
      {
        "jp": "制限は終わりましたか？",
        "hiragana": "せいげんは おわりましたか？",
        "id": "Apakah batasan / limit sudah selesai?"
      },
      {
        "jp": "今日の制限について話しましょう。",
        "hiragana": "きょうの せいげんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang batasan / limit hari ini."
      }
    ]
  },
  {
    "id": "11",
    "kanji": "接続",
    "hiragana": "せつぞく",
    "romaji": "setsuzoku",
    "meaning": "koneksi",
    "shortExample": "Koneksi ke DB gagal.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Misalnya koneksi internet atau koneksi database.",
    "examples": [
      {
        "jp": "接続をお願いします。",
        "hiragana": "せつぞくを おねがいします。",
        "id": "Tolong terkait koneksi."
      },
      {
        "jp": "接続は終わりましたか？",
        "hiragana": "せつぞくは おわりましたか？",
        "id": "Apakah koneksi sudah selesai?"
      },
      {
        "jp": "今日の接続について話しましょう。",
        "hiragana": "きょうの せつぞくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang koneksi hari ini."
      }
    ]
  },
  {
    "id": "12",
    "kanji": "入力",
    "hiragana": "にゅうりょく",
    "romaji": "nyuuryoku",
    "meaning": "input",
    "shortExample": "Input data user.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Digunakan untuk form pengisian data.",
    "examples": [
      {
        "jp": "入力をお願いします。",
        "hiragana": "にゅうりょくを おねがいします。",
        "id": "Tolong terkait input."
      },
      {
        "jp": "入力は終わりましたか？",
        "hiragana": "にゅうりょくは おわりましたか？",
        "id": "Apakah input sudah selesai?"
      },
      {
        "jp": "今日の入力について話しましょう。",
        "hiragana": "きょうの にゅうりょくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang input hari ini."
      }
    ]
  },
  {
    "id": "13",
    "kanji": "出力",
    "hiragana": "しゅつりょく",
    "romaji": "shutsuryoku",
    "meaning": "output",
    "shortExample": "Outputnya error.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Hasil dari sebuah proses atau report.",
    "examples": [
      {
        "jp": "出力をお願いします。",
        "hiragana": "しゅつりょくを おねがいします。",
        "id": "Tolong terkait output."
      },
      {
        "jp": "出力は終わりましたか？",
        "hiragana": "しゅつりょくは おわりましたか？",
        "id": "Apakah output sudah selesai?"
      },
      {
        "jp": "今日の出力について話しましょう。",
        "hiragana": "きょうの しゅつりょくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang output hari ini."
      }
    ]
  },
  {
    "id": "14",
    "kanji": "画面",
    "hiragana": "がめん",
    "romaji": "gamen",
    "meaning": "layar / screen",
    "shortExample": "Screen UI rusak.",
    "category": "QA/Bug",
    "level": "N5",
    "tip": "Kata umum untuk menyebut tampilan aplikasi.",
    "examples": [
      {
        "jp": "画面をお願いします。",
        "hiragana": "がめんを おねがいします。",
        "id": "Tolong terkait layar / screen."
      },
      {
        "jp": "画面は終わりましたか？",
        "hiragana": "がめんは おわりましたか？",
        "id": "Apakah layar / screen sudah selesai?"
      },
      {
        "jp": "今日の画面について話しましょう。",
        "hiragana": "きょうの がめんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang layar / screen hari ini."
      }
    ]
  },
  {
    "id": "15",
    "kanji": "権限",
    "hiragana": "けんげん",
    "romaji": "kengen",
    "meaning": "hak akses (permission)",
    "shortExample": "Tidak ada permission.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Terkait dengan Role-Based Access Control (RBAC).",
    "examples": [
      {
        "jp": "権限をお願いします。",
        "hiragana": "けんげんを おねがいします。",
        "id": "Tolong terkait hak akses (permission)."
      },
      {
        "jp": "権限は終わりましたか？",
        "hiragana": "けんげんは おわりましたか？",
        "id": "Apakah hak akses (permission) sudah selesai?"
      },
      {
        "jp": "今日の権限について話しましょう。",
        "hiragana": "きょうの けんげんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang hak akses (permission) hari ini."
      }
    ]
  },
  {
    "id": "16",
    "kanji": "状態",
    "hiragana": "じょうたい",
    "romaji": "joutai",
    "meaning": "status / state",
    "shortExample": "Statusnya error.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Menanyakan atau melaporkan kondisi sistem saat ini.",
    "examples": [
      {
        "jp": "状態をお願いします。",
        "hiragana": "じょうたいを おねがいします。",
        "id": "Tolong terkait status / state."
      },
      {
        "jp": "状態は終わりましたか？",
        "hiragana": "じょうたいは おわりましたか？",
        "id": "Apakah status / state sudah selesai?"
      },
      {
        "jp": "今日の状態について話しましょう。",
        "hiragana": "きょうの じょうたいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang status / state hari ini."
      }
    ]
  },
  {
    "id": "17",
    "kanji": "発生",
    "hiragana": "はっせい",
    "romaji": "hassei",
    "meaning": "terjadi (occur)",
    "shortExample": "Error occur.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Biasa dipakai saat ada insiden atau error yang mendadak muncul.",
    "examples": [
      {
        "jp": "発生をお願いします。",
        "hiragana": "はっせいを おねがいします。",
        "id": "Tolong terkait terjadi (occur)."
      },
      {
        "jp": "発生は終わりましたか？",
        "hiragana": "はっせいは おわりましたか？",
        "id": "Apakah terjadi (occur) sudah selesai?"
      },
      {
        "jp": "今日の発生について話しましょう。",
        "hiragana": "きょうの はっせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang terjadi (occur) hari ini."
      }
    ]
  },
  {
    "id": "18",
    "kanji": "障害",
    "hiragana": "しょうがい",
    "romaji": "shougai",
    "meaning": "gangguan / system down",
    "shortExample": "Sistem sedang down.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Kata yang paling dihindari, berarti ada major issue di production.",
    "examples": [
      {
        "jp": "障害をお願いします。",
        "hiragana": "しょうがいを おねがいします。",
        "id": "Tolong terkait gangguan / system down."
      },
      {
        "jp": "障害は終わりましたか？",
        "hiragana": "しょうがいは おわりましたか？",
        "id": "Apakah gangguan / system down sudah selesai?"
      },
      {
        "jp": "今日の障害について話しましょう。",
        "hiragana": "きょうの しょうがいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang gangguan / system down hari ini."
      }
    ]
  },
  {
    "id": "19",
    "kanji": "影響",
    "hiragana": "えいきょう",
    "romaji": "eikyou",
    "meaning": "dampak / impact",
    "shortExample": "Apa dampaknya?",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Menanyakan scope dari sebuah bug.",
    "examples": [
      {
        "jp": "影響をお願いします。",
        "hiragana": "えいきょうを おねがいします。",
        "id": "Tolong terkait dampak / impact."
      },
      {
        "jp": "影響は終わりましたか？",
        "hiragana": "えいきょうは おわりましたか？",
        "id": "Apakah dampak / impact sudah selesai?"
      },
      {
        "jp": "今日の影響について話しましょう。",
        "hiragana": "きょうの えいきょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang dampak / impact hari ini."
      }
    ]
  },
  {
    "id": "20",
    "kanji": "確認中",
    "hiragana": "かくにんちゅう",
    "romaji": "kakuninchuu",
    "meaning": "sedang dicek",
    "shortExample": "Masih sedang dicek.",
    "category": "QA/Bug",
    "level": "N5",
    "tip": "Status tiket saat QA atau developer sedang menginvestigasi.",
    "examples": [
      {
        "jp": "確認中をお願いします。",
        "hiragana": "かくにんちゅうを おねがいします。",
        "id": "Tolong terkait sedang dicek."
      },
      {
        "jp": "確認中は終わりましたか？",
        "hiragana": "かくにんちゅうは おわりましたか？",
        "id": "Apakah sedang dicek sudah selesai?"
      },
      {
        "jp": "今日の確認中について話しましょう。",
        "hiragana": "きょうの かくにんちゅうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang sedang dicek hari ini."
      }
    ]
  },
  {
    "id": "21",
    "kanji": "確認",
    "hiragana": "かくにん",
    "romaji": "kakunin",
    "meaning": "konfirmasi / cek",
    "shortExample": "Akan saya konfirmasi dulu.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Kata paling dasar! Pakai saat ingin bilang \"saya akan cek/konfirmasi\" ke atasan atau tim.",
    "examples": [
      {
        "jp": "こちら確認します。",
        "hiragana": "こちら かくにんします。",
        "id": "Saya akan cek bagian ini."
      },
      {
        "jp": "仕様を確認しました。",
        "hiragana": "しようを かくにんしました。",
        "id": "Saya sudah mengonfirmasi spesifikasinya."
      },
      {
        "jp": "今日の確認について話しましょう。",
        "hiragana": "きょうの かくにんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang konfirmasi / cek hari ini."
      }
    ]
  },
  {
    "id": "22",
    "kanji": "共有",
    "hiragana": "きょうゆう",
    "romaji": "kyouyuu",
    "meaning": "share / berbagi",
    "shortExample": "Share screen/info.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sangat sering dipakai saat online meeting di Zoom/Meet.",
    "examples": [
      {
        "jp": "共有をお願いします。",
        "hiragana": "きょうゆうを おねがいします。",
        "id": "Tolong terkait share / berbagi."
      },
      {
        "jp": "共有は終わりましたか？",
        "hiragana": "きょうゆうは おわりましたか？",
        "id": "Apakah share / berbagi sudah selesai?"
      },
      {
        "jp": "今日の共有について話しましょう。",
        "hiragana": "きょうの きょうゆうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang share / berbagi hari ini."
      }
    ]
  },
  {
    "id": "23",
    "kanji": "相談",
    "hiragana": "そうだん",
    "romaji": "soudan",
    "meaning": "konsultasi",
    "shortExample": "Saya ingin konsultasi.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Dipakai saat ingin meminta saran atau berdiskusi sebelum mengambil keputusan.",
    "examples": [
      {
        "jp": "相談をお願いします。",
        "hiragana": "そうだんを おねがいします。",
        "id": "Tolong terkait konsultasi."
      },
      {
        "jp": "相談は終わりましたか？",
        "hiragana": "そうだんは おわりましたか？",
        "id": "Apakah konsultasi sudah selesai?"
      },
      {
        "jp": "今日の相談について話しましょう。",
        "hiragana": "きょうの そうだんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang konsultasi hari ini."
      }
    ]
  },
  {
    "id": "24",
    "kanji": "連絡",
    "hiragana": "れんらく",
    "romaji": "renraku",
    "meaning": "menghubungi",
    "shortExample": "Tolong hubungi saya.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Berkomunikasi via chat, email, atau telepon.",
    "examples": [
      {
        "jp": "連絡をお願いします。",
        "hiragana": "れんらくを おねがいします。",
        "id": "Tolong terkait menghubungi."
      },
      {
        "jp": "連絡は終わりましたか？",
        "hiragana": "れんらくは おわりましたか？",
        "id": "Apakah menghubungi sudah selesai?"
      },
      {
        "jp": "今日の連絡について話しましょう。",
        "hiragana": "きょうの れんらくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang menghubungi hari ini."
      }
    ]
  },
  {
    "id": "25",
    "kanji": "依頼",
    "hiragana": "いらい",
    "romaji": "irai",
    "meaning": "permintaan (request)",
    "shortExample": "Request dari klien.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Meminta tolong divisi lain atau vendor.",
    "examples": [
      {
        "jp": "依頼をお願いします。",
        "hiragana": "いらいを おねがいします。",
        "id": "Tolong terkait permintaan (request)."
      },
      {
        "jp": "依頼は終わりましたか？",
        "hiragana": "いらいは おわりましたか？",
        "id": "Apakah permintaan (request) sudah selesai?"
      },
      {
        "jp": "今日の依頼について話しましょう。",
        "hiragana": "きょうの いらいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang permintaan (request) hari ini."
      }
    ]
  },
  {
    "id": "26",
    "kanji": "対応",
    "hiragana": "たいおう",
    "romaji": "taiou",
    "meaning": "penanganan / handle",
    "shortExample": "Sedang di-handle.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sering dipakai CS atau engineer saat merespon komplain.",
    "examples": [
      {
        "jp": "対応をお願いします。",
        "hiragana": "たいおうを おねがいします。",
        "id": "Tolong terkait penanganan / handle."
      },
      {
        "jp": "対応は終わりましたか？",
        "hiragana": "たいおうは おわりましたか？",
        "id": "Apakah penanganan / handle sudah selesai?"
      },
      {
        "jp": "今日の対応について話しましょう。",
        "hiragana": "きょうの たいおうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penanganan / handle hari ini."
      }
    ]
  },
  {
    "id": "27",
    "kanji": "手順",
    "hiragana": "てじゅん",
    "romaji": "tejun",
    "meaning": "prosedur / langkah",
    "shortExample": "Ikuti step-stepnya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Langkah-langkah di manual atau dokumentasi.",
    "examples": [
      {
        "jp": "手順をお願いします。",
        "hiragana": "てじゅんを おねがいします。",
        "id": "Tolong terkait prosedur / langkah."
      },
      {
        "jp": "手順は終わりましたか？",
        "hiragana": "てじゅんは おわりましたか？",
        "id": "Apakah prosedur / langkah sudah selesai?"
      },
      {
        "jp": "今日の手順について話しましょう。",
        "hiragana": "きょうの てじゅんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang prosedur / langkah hari ini."
      }
    ]
  },
  {
    "id": "28",
    "kanji": "質問",
    "hiragana": "しつもん",
    "romaji": "shitsumon",
    "meaning": "pertanyaan",
    "shortExample": "Ada pertanyaan?",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Dipakai di akhir meeting atau presentasi.",
    "examples": [
      {
        "jp": "質問をお願いします。",
        "hiragana": "しつもんを おねがいします。",
        "id": "Tolong terkait pertanyaan."
      },
      {
        "jp": "質問は終わりましたか？",
        "hiragana": "しつもんは おわりましたか？",
        "id": "Apakah pertanyaan sudah selesai?"
      },
      {
        "jp": "今日の質問について話しましょう。",
        "hiragana": "きょうの しつもんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pertanyaan hari ini."
      }
    ]
  },
  {
    "id": "29",
    "kanji": "回答",
    "hiragana": "かいとう",
    "romaji": "kaitou",
    "meaning": "jawaban",
    "shortExample": "Ini jawabannya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Memberikan respon atas pertanyaan yang diajukan.",
    "examples": [
      {
        "jp": "回答をお願いします。",
        "hiragana": "かいとうを おねがいします。",
        "id": "Tolong terkait jawaban."
      },
      {
        "jp": "回答は終わりましたか？",
        "hiragana": "かいとうは おわりましたか？",
        "id": "Apakah jawaban sudah selesai?"
      },
      {
        "jp": "今日の回答について話しましょう。",
        "hiragana": "きょうの かいとうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang jawaban hari ini."
      }
    ]
  },
  {
    "id": "30",
    "kanji": "詳細",
    "hiragana": "しょうさい",
    "romaji": "shousai",
    "meaning": "detail",
    "shortExample": "Tolong berikan detailnya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Meminta penjelasan lebih lanjut agar tidak ada miss komunikasi.",
    "examples": [
      {
        "jp": "詳細をお願いします。",
        "hiragana": "しょうさいを おねがいします。",
        "id": "Tolong terkait detail."
      },
      {
        "jp": "詳細は終わりましたか？",
        "hiragana": "しょうさいは おわりましたか？",
        "id": "Apakah detail sudah selesai?"
      },
      {
        "jp": "今日の詳細について話しましょう。",
        "hiragana": "きょうの しょうさいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang detail hari ini."
      }
    ]
  },
  {
    "id": "31",
    "kanji": "承知",
    "hiragana": "しょうち",
    "romaji": "shouchi",
    "meaning": "mengerti / paham",
    "shortExample": "Baik, saya mengerti.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Lebih sopan dari 'wakarimashita', wajib dipakai ke atasan atau klien.",
    "examples": [
      {
        "jp": "承知をお願いします。",
        "hiragana": "しょうちを おねがいします。",
        "id": "Tolong terkait mengerti / paham."
      },
      {
        "jp": "承知は終わりましたか？",
        "hiragana": "しょうちは おわりましたか？",
        "id": "Apakah mengerti / paham sudah selesai?"
      },
      {
        "jp": "今日の承知について話しましょう。",
        "hiragana": "きょうの しょうちについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mengerti / paham hari ini."
      }
    ]
  },
  {
    "id": "32",
    "kanji": "提案",
    "hiragana": "ていあん",
    "romaji": "teian",
    "meaning": "usulan / proposal",
    "shortExample": "Ada usulan baru.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Mengajukan ide atau solusi perbaikan.",
    "examples": [
      {
        "jp": "提案をお願いします。",
        "hiragana": "ていあんを おねがいします。",
        "id": "Tolong terkait usulan / proposal."
      },
      {
        "jp": "提案は終わりましたか？",
        "hiragana": "ていあんは おわりましたか？",
        "id": "Apakah usulan / proposal sudah selesai?"
      },
      {
        "jp": "今日の提案について話しましょう。",
        "hiragana": "きょうの ていあんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang usulan / proposal hari ini."
      }
    ]
  },
  {
    "id": "33",
    "kanji": "説明",
    "hiragana": "せつめい",
    "romaji": "setsumei",
    "meaning": "penjelasan",
    "shortExample": "Tolong jelaskan.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Menjabarkan sebuah fitur atau masalah.",
    "examples": [
      {
        "jp": "説明をお願いします。",
        "hiragana": "せつめいを おねがいします。",
        "id": "Tolong terkait penjelasan."
      },
      {
        "jp": "説明は終わりましたか？",
        "hiragana": "せつめいは おわりましたか？",
        "id": "Apakah penjelasan sudah selesai?"
      },
      {
        "jp": "今日の説明について話しましょう。",
        "hiragana": "きょうの せつめいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penjelasan hari ini."
      }
    ]
  },
  {
    "id": "34",
    "kanji": "打合せ",
    "hiragana": "うちあわせ",
    "romaji": "uchiawase",
    "meaning": "meeting kecil / diskusi",
    "shortExample": "Mari kita diskusi singkat.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Meeting informal untuk menyamakan persepsi.",
    "examples": [
      {
        "jp": "打合せをお願いします。",
        "hiragana": "うちあわせを おねがいします。",
        "id": "Tolong terkait meeting kecil / diskusi."
      },
      {
        "jp": "打合せは終わりましたか？",
        "hiragana": "うちあわせは おわりましたか？",
        "id": "Apakah meeting kecil / diskusi sudah selesai?"
      },
      {
        "jp": "今日の打合せについて話しましょう。",
        "hiragana": "きょうの うちあわせについて はなしましょう。",
        "id": "Mari kita bicarakan tentang meeting kecil / diskusi hari ini."
      }
    ]
  },
  {
    "id": "35",
    "kanji": "了解",
    "hiragana": "りょうかい",
    "romaji": "ryoukai",
    "meaning": "roger / mengerti",
    "shortExample": "Roger that.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sering dipakai di chat internal, tapi kurang sopan jika ke klien.",
    "examples": [
      {
        "jp": "了解をお願いします。",
        "hiragana": "りょうかいを おねがいします。",
        "id": "Tolong terkait roger / mengerti."
      },
      {
        "jp": "了解は終わりましたか？",
        "hiragana": "りょうかいは おわりましたか？",
        "id": "Apakah roger / mengerti sudah selesai?"
      },
      {
        "jp": "今日の了解について話しましょう。",
        "hiragana": "きょうの りょうかいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang roger / mengerti hari ini."
      }
    ]
  },
  {
    "id": "36",
    "kanji": "意見",
    "hiragana": "いけん",
    "romaji": "iken",
    "meaning": "pendapat",
    "shortExample": "Apa pendapatmu?",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Meminta feedback dari rekan setim.",
    "examples": [
      {
        "jp": "意見をお願いします。",
        "hiragana": "いけんを おねがいします。",
        "id": "Tolong terkait pendapat."
      },
      {
        "jp": "意見は終わりましたか？",
        "hiragana": "いけんは おわりましたか？",
        "id": "Apakah pendapat sudah selesai?"
      },
      {
        "jp": "今日の意見について話しましょう。",
        "hiragana": "きょうの いけんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pendapat hari ini."
      }
    ]
  },
  {
    "id": "37",
    "kanji": "賛成",
    "hiragana": "さんせい",
    "romaji": "sansei",
    "meaning": "setuju",
    "shortExample": "Saya setuju.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Menyatakan persetujuan atas sebuah usulan.",
    "examples": [
      {
        "jp": "賛成をお願いします。",
        "hiragana": "さんせいを おねがいします。",
        "id": "Tolong terkait setuju."
      },
      {
        "jp": "賛成は終わりましたか？",
        "hiragana": "さんせいは おわりましたか？",
        "id": "Apakah setuju sudah selesai?"
      },
      {
        "jp": "今日の賛成について話しましょう。",
        "hiragana": "きょうの さんせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang setuju hari ini."
      }
    ]
  },
  {
    "id": "38",
    "kanji": "反対",
    "hiragana": "はんたい",
    "romaji": "hantai",
    "meaning": "tidak setuju",
    "shortExample": "Saya tidak setuju.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Menyatakan ketidaksetujuan secara profesional.",
    "examples": [
      {
        "jp": "反対をお願いします。",
        "hiragana": "はんたいを おねがいします。",
        "id": "Tolong terkait tidak setuju."
      },
      {
        "jp": "反対は終わりましたか？",
        "hiragana": "はんたいは おわりましたか？",
        "id": "Apakah tidak setuju sudah selesai?"
      },
      {
        "jp": "今日の反対について話しましょう。",
        "hiragana": "きょうの はんたいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang tidak setuju hari ini."
      }
    ]
  },
  {
    "id": "39",
    "kanji": "返信",
    "hiragana": "へんしん",
    "romaji": "henshin",
    "meaning": "balasan",
    "shortExample": "Menunggu balasan.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Terutama untuk balasan email atau chat.",
    "examples": [
      {
        "jp": "返信をお願いします。",
        "hiragana": "へんしんを おねがいします。",
        "id": "Tolong terkait balasan."
      },
      {
        "jp": "返信は終わりましたか？",
        "hiragana": "へんしんは おわりましたか？",
        "id": "Apakah balasan sudah selesai?"
      },
      {
        "jp": "今日の返信について話しましょう。",
        "hiragana": "きょうの へんしんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang balasan hari ini."
      }
    ]
  },
  {
    "id": "40",
    "kanji": "添付",
    "hiragana": "てんぷ",
    "romaji": "tenpu",
    "meaning": "lampiran / attachment",
    "shortExample": "Cek file terlampir.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sering digunakan di email untuk menyebut file yang di-attach.",
    "examples": [
      {
        "jp": "添付をお願いします。",
        "hiragana": "てんぷを おねがいします。",
        "id": "Tolong terkait lampiran / attachment."
      },
      {
        "jp": "添付は終わりましたか？",
        "hiragana": "てんぷは おわりましたか？",
        "id": "Apakah lampiran / attachment sudah selesai?"
      },
      {
        "jp": "今日の添付について話しましょう。",
        "hiragana": "きょうの てんぷについて はなしましょう。",
        "id": "Mari kita bicarakan tentang lampiran / attachment hari ini."
      }
    ]
  },
  {
    "id": "41",
    "kanji": "報告",
    "hiragana": "ほうこく",
    "romaji": "houkoku",
    "meaning": "laporan",
    "shortExample": "Lapor ke PM.",
    "category": "Report",
    "level": "N4",
    "tip": "Penting dalam budaya Ho-Ren-So (Lapor, Hubungi, Konsultasi).",
    "examples": [
      {
        "jp": "報告をお願いします。",
        "hiragana": "ほうこくを おねがいします。",
        "id": "Tolong terkait laporan."
      },
      {
        "jp": "報告は終わりましたか？",
        "hiragana": "ほうこくは おわりましたか？",
        "id": "Apakah laporan sudah selesai?"
      },
      {
        "jp": "今日の報告について話しましょう。",
        "hiragana": "きょうの ほうこくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang laporan hari ini."
      }
    ]
  },
  {
    "id": "42",
    "kanji": "提出",
    "hiragana": "ていしゅつ",
    "romaji": "teishutsu",
    "meaning": "mengumpulkan (submit)",
    "shortExample": "Kumpulkan laporannya.",
    "category": "Report",
    "level": "N4",
    "tip": "Mengirimkan dokumen atau tugas yang sudah selesai.",
    "examples": [
      {
        "jp": "提出をお願いします。",
        "hiragana": "ていしゅつを おねがいします。",
        "id": "Tolong terkait mengumpulkan (submit)."
      },
      {
        "jp": "提出は終わりましたか？",
        "hiragana": "ていしゅつは おわりましたか？",
        "id": "Apakah mengumpulkan (submit) sudah selesai?"
      },
      {
        "jp": "今日の提出について話しましょう。",
        "hiragana": "きょうの ていしゅつについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mengumpulkan (submit) hari ini."
      }
    ]
  },
  {
    "id": "43",
    "kanji": "納期",
    "hiragana": "のうき",
    "romaji": "nouki",
    "meaning": "tenggat waktu (deadline)",
    "shortExample": "Kapan deadlinenya?",
    "category": "Report",
    "level": "N4",
    "tip": "Sangat krusial di perusahaan IT Jepang. Jangan sampai telat!",
    "examples": [
      {
        "jp": "納期をお願いします。",
        "hiragana": "のうきを おねがいします。",
        "id": "Tolong terkait tenggat waktu (deadline)."
      },
      {
        "jp": "納期は終わりましたか？",
        "hiragana": "のうきは おわりましたか？",
        "id": "Apakah tenggat waktu (deadline) sudah selesai?"
      },
      {
        "jp": "今日の納期について話しましょう。",
        "hiragana": "きょうの のうきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang tenggat waktu (deadline) hari ini."
      }
    ]
  },
  {
    "id": "44",
    "kanji": "承認",
    "hiragana": "しょうにん",
    "romaji": "shounin",
    "meaning": "persetujuan (approval)",
    "shortExample": "Menunggu approval.",
    "category": "Report",
    "level": "N4",
    "tip": "Biasanya butuh hanko (stempel) atau klik approve di sistem.",
    "examples": [
      {
        "jp": "承認をお願いします。",
        "hiragana": "しょうにんを おねがいします。",
        "id": "Tolong terkait persetujuan (approval)."
      },
      {
        "jp": "承認は終わりましたか？",
        "hiragana": "しょうにんは おわりましたか？",
        "id": "Apakah persetujuan (approval) sudah selesai?"
      },
      {
        "jp": "今日の承認について話しましょう。",
        "hiragana": "きょうの しょうにんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang persetujuan (approval) hari ini."
      }
    ]
  },
  {
    "id": "45",
    "kanji": "復旧",
    "hiragana": "ふっきゅう",
    "romaji": "fukkyuu",
    "meaning": "pemulihan (recovery)",
    "shortExample": "Sistem sudah pulih.",
    "category": "Report",
    "level": "N4",
    "tip": "Laporan setelah berhasil menangani server down.",
    "examples": [
      {
        "jp": "復旧をお願いします。",
        "hiragana": "ふっきゅうを おねがいします。",
        "id": "Tolong terkait pemulihan (recovery)."
      },
      {
        "jp": "復旧は終わりましたか？",
        "hiragana": "ふっきゅうは おわりましたか？",
        "id": "Apakah pemulihan (recovery) sudah selesai?"
      },
      {
        "jp": "今日の復旧について話しましょう。",
        "hiragana": "きょうの ふっきゅうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pemulihan (recovery) hari ini."
      }
    ]
  },
  {
    "id": "46",
    "kanji": "概要",
    "hiragana": "がいよう",
    "romaji": "gaiyou",
    "meaning": "ringkasan / overview",
    "shortExample": "Berikut overviewnya.",
    "category": "Report",
    "level": "N4",
    "tip": "Penjelasan singkat di awal presentasi atau dokumen.",
    "examples": [
      {
        "jp": "概要をお願いします。",
        "hiragana": "がいようを おねがいします。",
        "id": "Tolong terkait ringkasan / overview."
      },
      {
        "jp": "概要は終わりましたか？",
        "hiragana": "がいようは おわりましたか？",
        "id": "Apakah ringkasan / overview sudah selesai?"
      },
      {
        "jp": "今日の概要について話しましょう。",
        "hiragana": "きょうの がいようについて はなしましょう。",
        "id": "Mari kita bicarakan tentang ringkasan / overview hari ini."
      }
    ]
  },
  {
    "id": "47",
    "kanji": "解決",
    "hiragana": "かいけつ",
    "romaji": "kaiketsu",
    "meaning": "solusi / resolve",
    "shortExample": "Issue resolved.",
    "category": "Report",
    "level": "N4",
    "tip": "Memberitahukan bahwa masalah sudah beres.",
    "examples": [
      {
        "jp": "解決をお願いします。",
        "hiragana": "かいけつを おねがいします。",
        "id": "Tolong terkait solusi / resolve."
      },
      {
        "jp": "解決は終わりましたか？",
        "hiragana": "かいけつは おわりましたか？",
        "id": "Apakah solusi / resolve sudah selesai?"
      },
      {
        "jp": "今日の解決について話しましょう。",
        "hiragana": "きょうの かいけつについて はなしましょう。",
        "id": "Mari kita bicarakan tentang solusi / resolve hari ini."
      }
    ]
  },
  {
    "id": "48",
    "kanji": "実績",
    "hiragana": "じっせき",
    "romaji": "jisseki",
    "meaning": "hasil aktual",
    "shortExample": "Hasil aktualnya beda.",
    "category": "Report",
    "level": "N4",
    "tip": "Membandingkan rencana dengan yang benar-benar tercapai.",
    "examples": [
      {
        "jp": "実績をお願いします。",
        "hiragana": "じっせきを おねがいします。",
        "id": "Tolong terkait hasil aktual."
      },
      {
        "jp": "実績は終わりましたか？",
        "hiragana": "じっせきは おわりましたか？",
        "id": "Apakah hasil aktual sudah selesai?"
      },
      {
        "jp": "今日の実績について話しましょう。",
        "hiragana": "きょうの じっせきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang hasil aktual hari ini."
      }
    ]
  },
  {
    "id": "49",
    "kanji": "分析",
    "hiragana": "ぶんせき",
    "romaji": "bunseki",
    "meaning": "analisis",
    "shortExample": "Analisis datanya.",
    "category": "Report",
    "level": "N4",
    "tip": "Sering dilakukan oleh Data Analyst atau PM.",
    "examples": [
      {
        "jp": "分析をお願いします。",
        "hiragana": "ぶんせきを おねがいします。",
        "id": "Tolong terkait analisis."
      },
      {
        "jp": "分析は終わりましたか？",
        "hiragana": "ぶんせきは おわりましたか？",
        "id": "Apakah analisis sudah selesai?"
      },
      {
        "jp": "今日の分析について話しましょう。",
        "hiragana": "きょうの ぶんせきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang analisis hari ini."
      }
    ]
  },
  {
    "id": "50",
    "kanji": "日報",
    "hiragana": "にっぽう",
    "romaji": "nippou",
    "meaning": "laporan harian",
    "shortExample": "Sudah kirim daily report?",
    "category": "Report",
    "level": "N4",
    "tip": "Banyak perusahaan Jepang mewajibkan karyawannya menulis ini tiap pulang kerja.",
    "examples": [
      {
        "jp": "日報をお願いします。",
        "hiragana": "にっぽうを おねがいします。",
        "id": "Tolong terkait laporan harian."
      },
      {
        "jp": "日報は終わりましたか？",
        "hiragana": "にっぽうは おわりましたか？",
        "id": "Apakah laporan harian sudah selesai?"
      },
      {
        "jp": "今日の日報について話しましょう。",
        "hiragana": "きょうの にっぽうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang laporan harian hari ini."
      }
    ]
  },
  {
    "id": "51",
    "kanji": "週報",
    "hiragana": "しゅうほう",
    "romaji": "shuuhou",
    "meaning": "laporan mingguan",
    "shortExample": "Kirim weekly report.",
    "category": "Report",
    "level": "N4",
    "tip": "Ringkasan pekerjaan selama satu minggu.",
    "examples": [
      {
        "jp": "週報をお願いします。",
        "hiragana": "しゅうほうを おねがいします。",
        "id": "Tolong terkait laporan mingguan."
      },
      {
        "jp": "週報は終わりましたか？",
        "hiragana": "しゅうほうは おわりましたか？",
        "id": "Apakah laporan mingguan sudah selesai?"
      },
      {
        "jp": "今日の週報について話しましょう。",
        "hiragana": "きょうの しゅうほうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang laporan mingguan hari ini."
      }
    ]
  },
  {
    "id": "52",
    "kanji": "月報",
    "hiragana": "げっぽう",
    "romaji": "geppou",
    "meaning": "laporan bulanan",
    "shortExample": "Meeting bulanan.",
    "category": "Report",
    "level": "N4",
    "tip": "Laporan performa dan target tiap bulan.",
    "examples": [
      {
        "jp": "月報をお願いします。",
        "hiragana": "げっぽうを おねがいします。",
        "id": "Tolong terkait laporan bulanan."
      },
      {
        "jp": "月報は終わりましたか？",
        "hiragana": "げっぽうは おわりましたか？",
        "id": "Apakah laporan bulanan sudah selesai?"
      },
      {
        "jp": "今日の月報について話しましょう。",
        "hiragana": "きょうの げっぽうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang laporan bulanan hari ini."
      }
    ]
  },
  {
    "id": "53",
    "kanji": "課題",
    "hiragana": "かだい",
    "romaji": "kadai",
    "meaning": "isu / PR / tantangan",
    "shortExample": "Ini isu saat ini.",
    "category": "Report",
    "level": "N4",
    "tip": "Masalah yang harus diselesaikan (task/issue).",
    "examples": [
      {
        "jp": "課題をお願いします。",
        "hiragana": "かだいを おねがいします。",
        "id": "Tolong terkait isu / PR / tantangan."
      },
      {
        "jp": "課題は終わりましたか？",
        "hiragana": "かだいは おわりましたか？",
        "id": "Apakah isu / PR / tantangan sudah selesai?"
      },
      {
        "jp": "今日の課題について話しましょう。",
        "hiragana": "きょうの かだいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang isu / PR / tantangan hari ini."
      }
    ]
  },
  {
    "id": "54",
    "kanji": "進み具合",
    "hiragana": "すすみぐあい",
    "romaji": "susumiguai",
    "meaning": "tingkat kemajuan",
    "shortExample": "Bagaimana progressnya?",
    "category": "Report",
    "level": "N4",
    "tip": "Sinonim dari Shinchoku (進捗).",
    "examples": [
      {
        "jp": "進み具合をお願いします。",
        "hiragana": "すすみぐあいを おねがいします。",
        "id": "Tolong terkait tingkat kemajuan."
      },
      {
        "jp": "進み具合は終わりましたか？",
        "hiragana": "すすみぐあいは おわりましたか？",
        "id": "Apakah tingkat kemajuan sudah selesai?"
      },
      {
        "jp": "今日の進み具合について話しましょう。",
        "hiragana": "きょうの すすみぐあいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang tingkat kemajuan hari ini."
      }
    ]
  },
  {
    "id": "55",
    "kanji": "資料",
    "hiragana": "しりょう",
    "romaji": "shiryou",
    "meaning": "dokumen / materi",
    "shortExample": "Siapkan dokumen presentasi.",
    "category": "Report",
    "level": "N4",
    "tip": "Slide PowerPoint atau Excel sheet.",
    "examples": [
      {
        "jp": "資料をお願いします。",
        "hiragana": "しりょうを おねがいします。",
        "id": "Tolong terkait dokumen / materi."
      },
      {
        "jp": "資料は終わりましたか？",
        "hiragana": "しりょうは おわりましたか？",
        "id": "Apakah dokumen / materi sudah selesai?"
      },
      {
        "jp": "今日の資料について話しましょう。",
        "hiragana": "きょうの しりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang dokumen / materi hari ini."
      }
    ]
  },
  {
    "id": "56",
    "kanji": "記録",
    "hiragana": "きろく",
    "romaji": "kiroku",
    "meaning": "catatan / record",
    "shortExample": "Catat lognya.",
    "category": "Report",
    "level": "N4",
    "tip": "Menyimpan history atau log dari sistem.",
    "examples": [
      {
        "jp": "記録をお願いします。",
        "hiragana": "きろくを おねがいします。",
        "id": "Tolong terkait catatan / record."
      },
      {
        "jp": "記録は終わりましたか？",
        "hiragana": "きろくは おわりましたか？",
        "id": "Apakah catatan / record sudah selesai?"
      },
      {
        "jp": "今日の記録について話しましょう。",
        "hiragana": "きょうの きろくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang catatan / record hari ini."
      }
    ]
  },
  {
    "id": "57",
    "kanji": "対象",
    "hiragana": "たいしょう",
    "romaji": "taishou",
    "meaning": "target / subjek",
    "shortExample": "Siapa target user-nya?",
    "category": "Report",
    "level": "N4",
    "tip": "Fokus dari sebuah report atau fitur.",
    "examples": [
      {
        "jp": "対象をお願いします。",
        "hiragana": "たいしょうを おねがいします。",
        "id": "Tolong terkait target / subjek."
      },
      {
        "jp": "対象は終わりましたか？",
        "hiragana": "たいしょうは おわりましたか？",
        "id": "Apakah target / subjek sudah selesai?"
      },
      {
        "jp": "今日の対象について話しましょう。",
        "hiragana": "きょうの たいしょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang target / subjek hari ini."
      }
    ]
  },
  {
    "id": "58",
    "kanji": "結果",
    "hiragana": "けっか",
    "romaji": "kekka",
    "meaning": "hasil",
    "shortExample": "Ini hasil testnya.",
    "category": "Report",
    "level": "N4",
    "tip": "Bagian paling penting dari sebuah laporan.",
    "examples": [
      {
        "jp": "結果をお願いします。",
        "hiragana": "けっかを おねがいします。",
        "id": "Tolong terkait hasil."
      },
      {
        "jp": "結果は終わりましたか？",
        "hiragana": "けっかは おわりましたか？",
        "id": "Apakah hasil sudah selesai?"
      },
      {
        "jp": "今日の結果について話しましょう。",
        "hiragana": "きょうの けっかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang hasil hari ini."
      }
    ]
  },
  {
    "id": "59",
    "kanji": "状況",
    "hiragana": "じょうきょう",
    "romaji": "joukyou",
    "meaning": "situasi / kondisi",
    "shortExample": "Situasi terkini aman.",
    "category": "Report",
    "level": "N4",
    "tip": "Menjelaskan state dari sebuah project.",
    "examples": [
      {
        "jp": "状況をお願いします。",
        "hiragana": "じょうきょうを おねがいします。",
        "id": "Tolong terkait situasi / kondisi."
      },
      {
        "jp": "状況は終わりましたか？",
        "hiragana": "じょうきょうは おわりましたか？",
        "id": "Apakah situasi / kondisi sudah selesai?"
      },
      {
        "jp": "今日の状況について話しましょう。",
        "hiragana": "きょうの じょうきょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang situasi / kondisi hari ini."
      }
    ]
  },
  {
    "id": "60",
    "kanji": "評価",
    "hiragana": "ひょうか",
    "romaji": "hyouka",
    "meaning": "evaluasi",
    "shortExample": "Evaluasi performa.",
    "category": "Report",
    "level": "N4",
    "tip": "Performance review tahunan atau project.",
    "examples": [
      {
        "jp": "評価をお願いします。",
        "hiragana": "ひょうかを おねがいします。",
        "id": "Tolong terkait evaluasi."
      },
      {
        "jp": "評価は終わりましたか？",
        "hiragana": "ひょうかは おわりましたか？",
        "id": "Apakah evaluasi sudah selesai?"
      },
      {
        "jp": "今日の評価について話しましょう。",
        "hiragana": "きょうの ひょうかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang evaluasi hari ini."
      }
    ]
  },
  {
    "id": "61",
    "kanji": "進捗",
    "hiragana": "しんちょく",
    "romaji": "shinchoku",
    "meaning": "progress pekerjaan",
    "shortExample": "Bagaimana progressnya?",
    "category": "Standup",
    "level": "N4",
    "tip": "Kata wajib saat daily standup untuk melaporkan status tiket.",
    "examples": [
      {
        "jp": "進捗を共有します。",
        "hiragana": "しんちょくを きょうゆうします。",
        "id": "Saya akan membagikan progress pekerjaan."
      },
      {
        "jp": "現在の進捗はどうですか？",
        "hiragana": "げんざいの しんちょくは どうですか？",
        "id": "Bagaimana progress saat ini?"
      },
      {
        "jp": "今日の進捗について話しましょう。",
        "hiragana": "きょうの しんちょくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang progress pekerjaan hari ini."
      }
    ]
  },
  {
    "id": "62",
    "kanji": "会議",
    "hiragana": "かいぎ",
    "romaji": "kaigi",
    "meaning": "meeting / rapat",
    "shortExample": "Meeting jam 10.",
    "category": "Standup",
    "level": "N5",
    "tip": "Gunakan untuk menyebut jadwal meeting harian atau mingguan.",
    "examples": [
      {
        "jp": "会議は10時からです。",
        "hiragana": "かいぎは じゅうじからです。",
        "id": "Meeting dimulai dari jam 10."
      },
      {
        "jp": "会議室を予約しました。",
        "hiragana": "かいぎしつを よやくしました。",
        "id": "Saya sudah memesan ruang meeting."
      },
      {
        "jp": "今日の会議について話しましょう。",
        "hiragana": "きょうの かいぎについて はなしましょう。",
        "id": "Mari kita bicarakan tentang meeting / rapat hari ini."
      }
    ]
  },
  {
    "id": "63",
    "kanji": "変更",
    "hiragana": "へんこう",
    "romaji": "henkou",
    "meaning": "perubahan",
    "shortExample": "Ada perubahan desain.",
    "category": "Standup",
    "level": "N4",
    "tip": "Melaporkan jika ada spec yang berubah.",
    "examples": [
      {
        "jp": "変更をお願いします。",
        "hiragana": "へんこうを おねがいします。",
        "id": "Tolong terkait perubahan."
      },
      {
        "jp": "変更は終わりましたか？",
        "hiragana": "へんこうは おわりましたか？",
        "id": "Apakah perubahan sudah selesai?"
      },
      {
        "jp": "今日の変更について話しましょう。",
        "hiragana": "きょうの へんこうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang perubahan hari ini."
      }
    ]
  },
  {
    "id": "64",
    "kanji": "完了",
    "hiragana": "かんりょう",
    "romaji": "kanryou",
    "meaning": "selesai / complete",
    "shortExample": "Task sudah selesai.",
    "category": "Standup",
    "level": "N4",
    "tip": "Status Jira pindah ke 'Done'.",
    "examples": [
      {
        "jp": "完了をお願いします。",
        "hiragana": "かんりょうを おねがいします。",
        "id": "Tolong terkait selesai / complete."
      },
      {
        "jp": "完了は終わりましたか？",
        "hiragana": "かんりょうは おわりましたか？",
        "id": "Apakah selesai / complete sudah selesai?"
      },
      {
        "jp": "今日の完了について話しましょう。",
        "hiragana": "きょうの かんりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang selesai / complete hari ini."
      }
    ]
  },
  {
    "id": "65",
    "kanji": "保留",
    "hiragana": "ほりゅう",
    "romaji": "horyuu",
    "meaning": "ditunda / pending",
    "shortExample": "Task ini di-pending.",
    "category": "Standup",
    "level": "N4",
    "tip": "Tiket ditahan karena menunggu blocker lain.",
    "examples": [
      {
        "jp": "保留をお願いします。",
        "hiragana": "ほりゅうを おねがいします。",
        "id": "Tolong terkait ditunda / pending."
      },
      {
        "jp": "保留は終わりましたか？",
        "hiragana": "ほりゅうは おわりましたか？",
        "id": "Apakah ditunda / pending sudah selesai?"
      },
      {
        "jp": "今日の保留について話しましょう。",
        "hiragana": "きょうの ほりゅうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang ditunda / pending hari ini."
      }
    ]
  },
  {
    "id": "66",
    "kanji": "追加",
    "hiragana": "ついか",
    "romaji": "tsuika",
    "meaning": "penambahan",
    "shortExample": "Ada tambahan fitur.",
    "category": "Standup",
    "level": "N4",
    "tip": "Scope creep! Beritahu tim jika ada tambahan kerjaan.",
    "examples": [
      {
        "jp": "追加をお願いします。",
        "hiragana": "ついかを おねがいします。",
        "id": "Tolong terkait penambahan."
      },
      {
        "jp": "追加は終わりましたか？",
        "hiragana": "ついかは おわりましたか？",
        "id": "Apakah penambahan sudah selesai?"
      },
      {
        "jp": "今日の追加について話しましょう。",
        "hiragana": "きょうの ついかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penambahan hari ini."
      }
    ]
  },
  {
    "id": "67",
    "kanji": "見積",
    "hiragana": "みつもり",
    "romaji": "mitsumori",
    "meaning": "estimasi",
    "shortExample": "Estimasi waktunya 3 hari.",
    "category": "Standup",
    "level": "N4",
    "tip": "Berapa story point atau jam untuk tiket ini?",
    "examples": [
      {
        "jp": "見積をお願いします。",
        "hiragana": "みつもりを おねがいします。",
        "id": "Tolong terkait estimasi."
      },
      {
        "jp": "見積は終わりましたか？",
        "hiragana": "みつもりは おわりましたか？",
        "id": "Apakah estimasi sudah selesai?"
      },
      {
        "jp": "今日の見積について話しましょう。",
        "hiragana": "きょうの みつもりについて はなしましょう。",
        "id": "Mari kita bicarakan tentang estimasi hari ini."
      }
    ]
  },
  {
    "id": "68",
    "kanji": "更新",
    "hiragana": "こうしん",
    "romaji": "koushin",
    "meaning": "update",
    "shortExample": "Update data terbaru.",
    "category": "Standup",
    "level": "N4",
    "tip": "Memperbarui dokumentasi atau tiket.",
    "examples": [
      {
        "jp": "更新をお願いします。",
        "hiragana": "こうしんを おねがいします。",
        "id": "Tolong terkait update."
      },
      {
        "jp": "更新は終わりましたか？",
        "hiragana": "こうしんは おわりましたか？",
        "id": "Apakah update sudah selesai?"
      },
      {
        "jp": "今日の更新について話しましょう。",
        "hiragana": "きょうの こうしんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang update hari ini."
      }
    ]
  },
  {
    "id": "69",
    "kanji": "予定",
    "hiragana": "よてい",
    "romaji": "yotei",
    "meaning": "rencana / jadwal",
    "shortExample": "Jadwal rilis besok.",
    "category": "Standup",
    "level": "N5",
    "tip": "Apa yang akan kamu kerjakan hari ini?",
    "examples": [
      {
        "jp": "予定をお願いします。",
        "hiragana": "よていを おねがいします。",
        "id": "Tolong terkait rencana / jadwal."
      },
      {
        "jp": "予定は終わりましたか？",
        "hiragana": "よていは おわりましたか？",
        "id": "Apakah rencana / jadwal sudah selesai?"
      },
      {
        "jp": "今日の予定について話しましょう。",
        "hiragana": "きょうの よていについて はなしましょう。",
        "id": "Mari kita bicarakan tentang rencana / jadwal hari ini."
      }
    ]
  },
  {
    "id": "70",
    "kanji": "遅延",
    "hiragana": "ちえん",
    "romaji": "chien",
    "meaning": "keterlambatan (delay)",
    "shortExample": "Rilisnya delay.",
    "category": "Standup",
    "level": "N4",
    "tip": "Sangat penting dilaporkan secepatnya kalau tahu akan telat.",
    "examples": [
      {
        "jp": "遅延をお願いします。",
        "hiragana": "ちえんを おねがいします。",
        "id": "Tolong terkait keterlambatan (delay)."
      },
      {
        "jp": "遅延は終わりましたか？",
        "hiragana": "ちえんは おわりましたか？",
        "id": "Apakah keterlambatan (delay) sudah selesai?"
      },
      {
        "jp": "今日の遅延について話しましょう。",
        "hiragana": "きょうの ちえんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang keterlambatan (delay) hari ini."
      }
    ]
  },
  {
    "id": "71",
    "kanji": "昨日",
    "hiragana": "きのう",
    "romaji": "kinou",
    "meaning": "kemarin",
    "shortExample": "Kemarin kerjain API.",
    "category": "Standup",
    "level": "N5",
    "tip": "Format standar standup: Apa yang dikerjakan kemarin.",
    "examples": [
      {
        "jp": "昨日をお願いします。",
        "hiragana": "きのうを おねがいします。",
        "id": "Tolong terkait kemarin."
      },
      {
        "jp": "昨日は終わりましたか？",
        "hiragana": "きのうは おわりましたか？",
        "id": "Apakah kemarin sudah selesai?"
      },
      {
        "jp": "今日の昨日について話しましょう。",
        "hiragana": "きょうの きのうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kemarin hari ini."
      }
    ]
  },
  {
    "id": "72",
    "kanji": "今日",
    "hiragana": "きょう",
    "romaji": "kyou",
    "meaning": "hari ini",
    "shortExample": "Hari ini fix bug.",
    "category": "Standup",
    "level": "N5",
    "tip": "Format standar standup: Apa yang akan dikerjakan hari ini.",
    "examples": [
      {
        "jp": "今日をお願いします。",
        "hiragana": "きょうを おねがいします。",
        "id": "Tolong terkait hari ini."
      },
      {
        "jp": "今日は終わりましたか？",
        "hiragana": "きょうは おわりましたか？",
        "id": "Apakah hari ini sudah selesai?"
      },
      {
        "jp": "今日の今日について話しましょう。",
        "hiragana": "きょうの きょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang hari ini hari ini."
      }
    ]
  },
  {
    "id": "73",
    "kanji": "明日",
    "hiragana": "あした",
    "romaji": "ashita",
    "meaning": "besok",
    "shortExample": "Besok saya cuti.",
    "category": "Standup",
    "level": "N5",
    "tip": "Memberi tahu rencana untuk besok.",
    "examples": [
      {
        "jp": "明日をお願いします。",
        "hiragana": "あしたを おねがいします。",
        "id": "Tolong terkait besok."
      },
      {
        "jp": "明日は終わりましたか？",
        "hiragana": "あしたは おわりましたか？",
        "id": "Apakah besok sudah selesai?"
      },
      {
        "jp": "今日の明日について話しましょう。",
        "hiragana": "きょうの あしたについて はなしましょう。",
        "id": "Mari kita bicarakan tentang besok hari ini."
      }
    ]
  },
  {
    "id": "74",
    "kanji": "問題",
    "hiragana": "もんだい",
    "romaji": "mondai",
    "meaning": "masalah / problem",
    "shortExample": "Ada blocker.",
    "category": "Standup",
    "level": "N5",
    "tip": "Format standar standup: Apakah ada blocker/masalah?",
    "examples": [
      {
        "jp": "問題をお願いします。",
        "hiragana": "もんだいを おねがいします。",
        "id": "Tolong terkait masalah / problem."
      },
      {
        "jp": "問題は終わりましたか？",
        "hiragana": "もんだいは おわりましたか？",
        "id": "Apakah masalah / problem sudah selesai?"
      },
      {
        "jp": "今日の問題について話しましょう。",
        "hiragana": "きょうの もんだいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang masalah / problem hari ini."
      }
    ]
  },
  {
    "id": "75",
    "kanji": "目標",
    "hiragana": "もくひょう",
    "romaji": "mokuhyou",
    "meaning": "target / goal",
    "shortExample": "Goal sprint ini.",
    "category": "Standup",
    "level": "N4",
    "tip": "Target yang ingin dicapai tim.",
    "examples": [
      {
        "jp": "目標をお願いします。",
        "hiragana": "もくひょうを おねがいします。",
        "id": "Tolong terkait target / goal."
      },
      {
        "jp": "目標は終わりましたか？",
        "hiragana": "もくひょうは おわりましたか？",
        "id": "Apakah target / goal sudah selesai?"
      },
      {
        "jp": "今日の目標について話しましょう。",
        "hiragana": "きょうの もくひょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang target / goal hari ini."
      }
    ]
  },
  {
    "id": "76",
    "kanji": "開始",
    "hiragana": "かいし",
    "romaji": "kaishi",
    "meaning": "mulai (start)",
    "shortExample": "Mulai ngerjain tiket.",
    "category": "Standup",
    "level": "N4",
    "tip": "Status In Progress.",
    "examples": [
      {
        "jp": "開始をお願いします。",
        "hiragana": "かいしを おねがいします。",
        "id": "Tolong terkait mulai (start)."
      },
      {
        "jp": "開始は終わりましたか？",
        "hiragana": "かいしは おわりましたか？",
        "id": "Apakah mulai (start) sudah selesai?"
      },
      {
        "jp": "今日の開始について話しましょう。",
        "hiragana": "きょうの かいしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mulai (start) hari ini."
      }
    ]
  },
  {
    "id": "77",
    "kanji": "終了",
    "hiragana": "しゅうりょう",
    "romaji": "shuuryou",
    "meaning": "berakhir (end)",
    "shortExample": "Meeting berakhir.",
    "category": "Standup",
    "level": "N4",
    "tip": "Selesainya sebuah aktivitas.",
    "examples": [
      {
        "jp": "終了をお願いします。",
        "hiragana": "しゅうりょうを おねがいします。",
        "id": "Tolong terkait berakhir (end)."
      },
      {
        "jp": "終了は終わりましたか？",
        "hiragana": "しゅうりょうは おわりましたか？",
        "id": "Apakah berakhir (end) sudah selesai?"
      },
      {
        "jp": "今日の終了について話しましょう。",
        "hiragana": "きょうの しゅうりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang berakhir (end) hari ini."
      }
    ]
  },
  {
    "id": "78",
    "kanji": "順調",
    "hiragana": "じゅんちょう",
    "romaji": "junchou",
    "meaning": "lancar",
    "shortExample": "Semua lancar.",
    "category": "Standup",
    "level": "N4",
    "tip": "Kabar baik di standup pagi.",
    "examples": [
      {
        "jp": "順調をお願いします。",
        "hiragana": "じゅんちょうを おねがいします。",
        "id": "Tolong terkait lancar."
      },
      {
        "jp": "順調は終わりましたか？",
        "hiragana": "じゅんちょうは おわりましたか？",
        "id": "Apakah lancar sudah selesai?"
      },
      {
        "jp": "今日の順調について話しましょう。",
        "hiragana": "きょうの じゅんちょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang lancar hari ini."
      }
    ]
  },
  {
    "id": "79",
    "kanji": "調整",
    "hiragana": "ちょうせい",
    "romaji": "chousei",
    "meaning": "penyesuaian (adjust)",
    "shortExample": "Adjust jadwal rilis.",
    "category": "Standup",
    "level": "N4",
    "tip": "Menjadwalkan ulang atau menegosiasikan scope.",
    "examples": [
      {
        "jp": "調整をお願いします。",
        "hiragana": "ちょうせいを おねがいします。",
        "id": "Tolong terkait penyesuaian (adjust)."
      },
      {
        "jp": "調整は終わりましたか？",
        "hiragana": "ちょうせいは おわりましたか？",
        "id": "Apakah penyesuaian (adjust) sudah selesai?"
      },
      {
        "jp": "今日の調整について話しましょう。",
        "hiragana": "きょうの ちょうせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penyesuaian (adjust) hari ini."
      }
    ]
  },
  {
    "id": "80",
    "kanji": "引き続き",
    "hiragana": "ひきつづき",
    "romaji": "hikitsuzuki",
    "meaning": "melanjutkan",
    "shortExample": "Lanjut task kemarin.",
    "category": "Standup",
    "level": "N4",
    "tip": "Sering diucapkan: \"Hari ini saya melanjutkan task kemarin\".",
    "examples": [
      {
        "jp": "引き続きをお願いします。",
        "hiragana": "ひきつづきを おねがいします。",
        "id": "Tolong terkait melanjutkan."
      },
      {
        "jp": "引き続きは終わりましたか？",
        "hiragana": "ひきつづきは おわりましたか？",
        "id": "Apakah melanjutkan sudah selesai?"
      },
      {
        "jp": "今日の引き続きについて話しましょう。",
        "hiragana": "きょうの ひきつづきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang melanjutkan hari ini."
      }
    ]
  },
  {
    "id": "81",
    "kanji": "会社",
    "hiragana": "かいしゃ",
    "romaji": "kaisha",
    "meaning": "kantor / perusahaan",
    "shortExample": "Saya bekerja di kantor.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Kata dasar untuk menyebut tempat kerja/kantor.",
    "examples": [
      {
        "jp": "会社で働いています。",
        "hiragana": "かいしゃで はたらいています。",
        "id": "Saya sedang bekerja di perusahaan."
      },
      {
        "jp": "私の会社はIT企業です。",
        "hiragana": "わたしの かいしゃは アイティー きぎょうです。",
        "id": "Perusahaan saya adalah perusahaan IT."
      },
      {
        "jp": "今日の会社について話しましょう。",
        "hiragana": "きょうの かいしゃについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kantor / perusahaan hari ini."
      }
    ]
  },
  {
    "id": "82",
    "kanji": "仕様",
    "hiragana": "しよう",
    "romaji": "shiyou",
    "meaning": "spesifikasi",
    "shortExample": "Cek spesifikasinya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Sangat penting! Kalau bingung bug atau bukan, tanyakan 'Kore wa shiyou desu ka?'",
    "examples": [
      {
        "jp": "仕様をお願いします。",
        "hiragana": "しようを おねがいします。",
        "id": "Tolong terkait spesifikasi."
      },
      {
        "jp": "仕様は終わりましたか？",
        "hiragana": "しようは おわりましたか？",
        "id": "Apakah spesifikasi sudah selesai?"
      },
      {
        "jp": "今日の仕様について話しましょう。",
        "hiragana": "きょうの しようについて はなしましょう。",
        "id": "Mari kita bicarakan tentang spesifikasi hari ini."
      }
    ]
  },
  {
    "id": "83",
    "kanji": "残業",
    "hiragana": "ざんぎょう",
    "romaji": "zangyou",
    "meaning": "lembur",
    "shortExample": "Hari ini lembur.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Realita kerja di IT, hati-hati jangan sampai kebanyakan lembur (karoushi).",
    "examples": [
      {
        "jp": "残業をお願いします。",
        "hiragana": "ざんぎょうを おねがいします。",
        "id": "Tolong terkait lembur."
      },
      {
        "jp": "残業は終わりましたか？",
        "hiragana": "ざんぎょうは おわりましたか？",
        "id": "Apakah lembur sudah selesai?"
      },
      {
        "jp": "今日の残業について話しましょう。",
        "hiragana": "きょうの ざんぎょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang lembur hari ini."
      }
    ]
  },
  {
    "id": "84",
    "kanji": "開発",
    "hiragana": "かいはつ",
    "romaji": "kaihatsu",
    "meaning": "pengembangan (development)",
    "shortExample": "Fase development dimulai.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Proses pembuatan software dari awal.",
    "examples": [
      {
        "jp": "開発をお願いします。",
        "hiragana": "かいはつを おねがいします。",
        "id": "Tolong terkait pengembangan (development)."
      },
      {
        "jp": "開発は終わりましたか？",
        "hiragana": "かいはつは おわりましたか？",
        "id": "Apakah pengembangan (development) sudah selesai?"
      },
      {
        "jp": "今日の開発について話しましょう。",
        "hiragana": "きょうの かいはつについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pengembangan (development) hari ini."
      }
    ]
  },
  {
    "id": "85",
    "kanji": "担当",
    "hiragana": "たんとう",
    "romaji": "tantou",
    "meaning": "penanggung jawab (PIC)",
    "shortExample": "Siapa PIC-nya?",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Menunjuk orang yang bertanggung jawab atas suatu modul.",
    "examples": [
      {
        "jp": "担当をお願いします。",
        "hiragana": "たんとうを おねがいします。",
        "id": "Tolong terkait penanggung jawab (PIC)."
      },
      {
        "jp": "担当は終わりましたか？",
        "hiragana": "たんとうは おわりましたか？",
        "id": "Apakah penanggung jawab (PIC) sudah selesai?"
      },
      {
        "jp": "今日の担当について話しましょう。",
        "hiragana": "きょうの たんとうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penanggung jawab (PIC) hari ini."
      }
    ]
  },
  {
    "id": "86",
    "kanji": "設計",
    "hiragana": "せっけい",
    "romaji": "sekkei",
    "meaning": "desain / arsitektur",
    "shortExample": "Desain sistemnya selesai.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Fase sebelum coding (System Design).",
    "examples": [
      {
        "jp": "設計をお願いします。",
        "hiragana": "せっけいを おねがいします。",
        "id": "Tolong terkait desain / arsitektur."
      },
      {
        "jp": "設計は終わりましたか？",
        "hiragana": "せっけいは おわりましたか？",
        "id": "Apakah desain / arsitektur sudah selesai?"
      },
      {
        "jp": "今日の設計について話しましょう。",
        "hiragana": "きょうの せっけいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang desain / arsitektur hari ini."
      }
    ]
  },
  {
    "id": "87",
    "kanji": "条件",
    "hiragana": "じょうけん",
    "romaji": "jouken",
    "meaning": "kondisi / syarat",
    "shortExample": "Syaratnya apa saja?",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Kriteria agar sebuah tiket bisa di-approve.",
    "examples": [
      {
        "jp": "条件をお願いします。",
        "hiragana": "じょうけんを おねがいします。",
        "id": "Tolong terkait kondisi / syarat."
      },
      {
        "jp": "条件は終わりましたか？",
        "hiragana": "じょうけんは おわりましたか？",
        "id": "Apakah kondisi / syarat sudah selesai?"
      },
      {
        "jp": "今日の条件について話しましょう。",
        "hiragana": "きょうの じょうけんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kondisi / syarat hari ini."
      }
    ]
  },
  {
    "id": "88",
    "kanji": "設定",
    "hiragana": "せってい",
    "romaji": "settei",
    "meaning": "pengaturan (setting)",
    "shortExample": "Ubah settingnya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Konfigurasi aplikasi atau server.",
    "examples": [
      {
        "jp": "設定をお願いします。",
        "hiragana": "せっていを おねがいします。",
        "id": "Tolong terkait pengaturan (setting)."
      },
      {
        "jp": "設定は終わりましたか？",
        "hiragana": "せっていは おわりましたか？",
        "id": "Apakah pengaturan (setting) sudah selesai?"
      },
      {
        "jp": "今日の設定について話しましょう。",
        "hiragana": "きょうの せっていについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pengaturan (setting) hari ini."
      }
    ]
  },
  {
    "id": "89",
    "kanji": "実行",
    "hiragana": "じっこう",
    "romaji": "jikkou",
    "meaning": "eksekusi / run",
    "shortExample": "Run scriptnya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Menjalankan program atau command line.",
    "examples": [
      {
        "jp": "実行をお願いします。",
        "hiragana": "じっこうを おねがいします。",
        "id": "Tolong terkait eksekusi / run."
      },
      {
        "jp": "実行は終わりましたか？",
        "hiragana": "じっこうは おわりましたか？",
        "id": "Apakah eksekusi / run sudah selesai?"
      },
      {
        "jp": "今日の実行について話しましょう。",
        "hiragana": "きょうの じっこうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang eksekusi / run hari ini."
      }
    ]
  },
  {
    "id": "90",
    "kanji": "保存",
    "hiragana": "ほぞん",
    "romaji": "hozon",
    "meaning": "simpan (save)",
    "shortExample": "Jangan lupa save.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Ctrl+S!",
    "examples": [
      {
        "jp": "保存をお願いします。",
        "hiragana": "ほぞんを おねがいします。",
        "id": "Tolong terkait simpan (save)."
      },
      {
        "jp": "保存は終わりましたか？",
        "hiragana": "ほぞんは おわりましたか？",
        "id": "Apakah simpan (save) sudah selesai?"
      },
      {
        "jp": "今日の保存について話しましょう。",
        "hiragana": "きょうの ほぞんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang simpan (save) hari ini."
      }
    ]
  },
  {
    "id": "91",
    "kanji": "管理",
    "hiragana": "かんり",
    "romaji": "kanri",
    "meaning": "manajemen / manage",
    "shortExample": "Manage servernya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Tugas seorang admin atau manajer.",
    "examples": [
      {
        "jp": "管理をお願いします。",
        "hiragana": "かんりを おねがいします。",
        "id": "Tolong terkait manajemen / manage."
      },
      {
        "jp": "管理は終わりましたか？",
        "hiragana": "かんりは おわりましたか？",
        "id": "Apakah manajemen / manage sudah selesai?"
      },
      {
        "jp": "今日の管理について話しましょう。",
        "hiragana": "きょうの かんりについて はなしましょう。",
        "id": "Mari kita bicarakan tentang manajemen / manage hari ini."
      }
    ]
  },
  {
    "id": "92",
    "kanji": "運用",
    "hiragana": "うんよう",
    "romaji": "unyou",
    "meaning": "operasi (operation)",
    "shortExample": "Masuk fase operasional.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Setelah rilis, aplikasi masuk fase operasional (DevOps).",
    "examples": [
      {
        "jp": "運用をお願いします。",
        "hiragana": "うんようを おねがいします。",
        "id": "Tolong terkait operasi (operation)."
      },
      {
        "jp": "運用は終わりましたか？",
        "hiragana": "うんようは おわりましたか？",
        "id": "Apakah operasi (operation) sudah selesai?"
      },
      {
        "jp": "今日の運用について話しましょう。",
        "hiragana": "きょうの うんようについて はなしましょう。",
        "id": "Mari kita bicarakan tentang operasi (operation) hari ini."
      }
    ]
  },
  {
    "id": "93",
    "kanji": "保守",
    "hiragana": "ほしゅ",
    "romaji": "hoshu",
    "meaning": "maintenance",
    "shortExample": "Sedang maintenance.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Pemeliharaan rutin atau perbaikan minor paska rilis.",
    "examples": [
      {
        "jp": "保守をお願いします。",
        "hiragana": "ほしゅを おねがいします。",
        "id": "Tolong terkait maintenance."
      },
      {
        "jp": "保守は終わりましたか？",
        "hiragana": "ほしゅは おわりましたか？",
        "id": "Apakah maintenance sudah selesai?"
      },
      {
        "jp": "今日の保守について話しましょう。",
        "hiragana": "きょうの ほしゅについて はなしましょう。",
        "id": "Mari kita bicarakan tentang maintenance hari ini."
      }
    ]
  },
  {
    "id": "94",
    "kanji": "機能",
    "hiragana": "きのう",
    "romaji": "kinou",
    "meaning": "fitur",
    "shortExample": "Fitur baru rilis.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Apa saja yang bisa dilakukan oleh aplikasi.",
    "examples": [
      {
        "jp": "機能をお願いします。",
        "hiragana": "きのうを おねがいします。",
        "id": "Tolong terkait fitur."
      },
      {
        "jp": "機能は終わりましたか？",
        "hiragana": "きのうは おわりましたか？",
        "id": "Apakah fitur sudah selesai?"
      },
      {
        "jp": "今日の機能について話しましょう。",
        "hiragana": "きょうの きのうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang fitur hari ini."
      }
    ]
  },
  {
    "id": "95",
    "kanji": "出社",
    "hiragana": "しゅっしゃ",
    "romaji": "shussha",
    "meaning": "datang ke kantor",
    "shortExample": "Besok saya WFO.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Bekerja dari kantor (Work From Office).",
    "examples": [
      {
        "jp": "出社をお願いします。",
        "hiragana": "しゅっしゃを おねがいします。",
        "id": "Tolong terkait datang ke kantor."
      },
      {
        "jp": "出社は終わりましたか？",
        "hiragana": "しゅっしゃは おわりましたか？",
        "id": "Apakah datang ke kantor sudah selesai?"
      },
      {
        "jp": "今日の出社について話しましょう。",
        "hiragana": "きょうの しゅっしゃについて はなしましょう。",
        "id": "Mari kita bicarakan tentang datang ke kantor hari ini."
      }
    ]
  },
  {
    "id": "96",
    "kanji": "退社",
    "hiragana": "たいしゃ",
    "romaji": "taisha",
    "meaning": "pulang kerja",
    "shortExample": "Saya pulang dulu.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Meninggalkan kantor di akhir hari.",
    "examples": [
      {
        "jp": "退社をお願いします。",
        "hiragana": "たいしゃを おねがいします。",
        "id": "Tolong terkait pulang kerja."
      },
      {
        "jp": "退社は終わりましたか？",
        "hiragana": "たいしゃは おわりましたか？",
        "id": "Apakah pulang kerja sudah selesai?"
      },
      {
        "jp": "今日の退社について話しましょう。",
        "hiragana": "きょうの たいしゃについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pulang kerja hari ini."
      }
    ]
  },
  {
    "id": "97",
    "kanji": "有休",
    "hiragana": "ゆうきゅう",
    "romaji": "yuukyuu",
    "meaning": "cuti berbayar (PTO)",
    "shortExample": "Ambil cuti besok.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Hak cuti karyawan (Paid Time Off).",
    "examples": [
      {
        "jp": "有休をお願いします。",
        "hiragana": "ゆうきゅうを おねがいします。",
        "id": "Tolong terkait cuti berbayar (PTO)."
      },
      {
        "jp": "有休は終わりましたか？",
        "hiragana": "ゆうきゅうは おわりましたか？",
        "id": "Apakah cuti berbayar (PTO) sudah selesai?"
      },
      {
        "jp": "今日の有休について話しましょう。",
        "hiragana": "きょうの ゆうきゅうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang cuti berbayar (PTO) hari ini."
      }
    ]
  },
  {
    "id": "98",
    "kanji": "休憩",
    "hiragana": "きゅうけい",
    "romaji": "kyuukei",
    "meaning": "istirahat",
    "shortExample": "Waktunya istirahat.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Biasanya jam 12 sampai jam 1 siang.",
    "examples": [
      {
        "jp": "休憩をお願いします。",
        "hiragana": "きゅうけいを おねがいします。",
        "id": "Tolong terkait istirahat."
      },
      {
        "jp": "休憩は終わりましたか？",
        "hiragana": "きゅうけいは おわりましたか？",
        "id": "Apakah istirahat sudah selesai?"
      },
      {
        "jp": "今日の休憩について話しましょう。",
        "hiragana": "きょうの きゅうけいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang istirahat hari ini."
      }
    ]
  },
  {
    "id": "99",
    "kanji": "業務",
    "hiragana": "ぎょうむ",
    "romaji": "gyoumu",
    "meaning": "tugas / pekerjaan",
    "shortExample": "Fokus ke tugas utama.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Pekerjaan sehari-hari.",
    "examples": [
      {
        "jp": "業務をお願いします。",
        "hiragana": "ぎょうむを おねがいします。",
        "id": "Tolong terkait tugas / pekerjaan."
      },
      {
        "jp": "業務は終わりましたか？",
        "hiragana": "ぎょうむは おわりましたか？",
        "id": "Apakah tugas / pekerjaan sudah selesai?"
      },
      {
        "jp": "今日の業務について話しましょう。",
        "hiragana": "きょうの ぎょうむについて はなしましょう。",
        "id": "Mari kita bicarakan tentang tugas / pekerjaan hari ini."
      }
    ]
  },
  {
    "id": "100",
    "kanji": "同僚",
    "hiragana": "どうりょう",
    "romaji": "douryou",
    "meaning": "rekan kerja",
    "shortExample": "Rekan satu tim.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Orang-orang yang bekerja di perusahaan yang sama.",
    "examples": [
      {
        "jp": "同僚をお願いします。",
        "hiragana": "どうりょうを おねがいします。",
        "id": "Tolong terkait rekan kerja."
      },
      {
        "jp": "同僚は終わりましたか？",
        "hiragana": "どうりょうは おわりましたか？",
        "id": "Apakah rekan kerja sudah selesai?"
      },
      {
        "jp": "今日の同僚について話しましょう。",
        "hiragana": "きょうの どうりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang rekan kerja hari ini."
      }
    ]
  }
];
