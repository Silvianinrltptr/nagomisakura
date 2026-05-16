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
        "jp": "修正をお願いします。",
        "hiragana": "しゅうせいを おねがいします。",
        "id": "Tolong terkait revisi / perbaikan."
      },
      {
        "jp": "修正は終わりましたか？",
        "hiragana": "しゅうせいは おわりましたか？",
        "id": "Apakah revisi / perbaikan sudah selesai?"
      },
      {
        "jp": "今日の修正について話しましょう。",
        "hiragana": "きょうの しゅうせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang revisi / perbaikan hari ini."
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
    "tip": "Lebih formal dari kata 'bagu' (バグ).",
    "examples": [
      {
        "jp": "不具合をお願いします。",
        "hiragana": "ふぐあいを おねがいします。",
        "id": "Tolong terkait bug / error / cacat."
      },
      {
        "jp": "不具合は終わりましたか？",
        "hiragana": "ふぐあいは おわりましたか？",
        "id": "Apakah bug / error / cacat sudah selesai?"
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
    "kanji": "脆弱性",
    "hiragana": "ぜいじゃくせい",
    "romaji": "zeijakusei",
    "meaning": "kerentanan / vulnerability",
    "shortExample": "Ada vulnerability tinggi.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Isu keamanan / security issue.",
    "examples": [
      {
        "jp": "脆弱性をお願いします。",
        "hiragana": "ぜいじゃくせいを おねがいします。",
        "id": "Tolong terkait kerentanan / vulnerability."
      },
      {
        "jp": "脆弱性は終わりましたか？",
        "hiragana": "ぜいじゃくせいは おわりましたか？",
        "id": "Apakah kerentanan / vulnerability sudah selesai?"
      },
      {
        "jp": "今日の脆弱性について話しましょう。",
        "hiragana": "きょうの ぜいじゃくせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kerentanan / vulnerability hari ini."
      }
    ]
  },
  {
    "id": "22",
    "kanji": "仕様漏れ",
    "hiragana": "しようもれ",
    "romaji": "shiyoumore",
    "meaning": "spec terlewat",
    "shortExample": "Ada spec yang terlewat.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Masalah karena requirement tidak tertulis di dokumen.",
    "examples": [
      {
        "jp": "仕様漏れをお願いします。",
        "hiragana": "しようもれを おねがいします。",
        "id": "Tolong terkait spec terlewat."
      },
      {
        "jp": "仕様漏れは終わりましたか？",
        "hiragana": "しようもれは おわりましたか？",
        "id": "Apakah spec terlewat sudah selesai?"
      },
      {
        "jp": "今日の仕様漏れについて話しましょう。",
        "hiragana": "きょうの しようもれについて はなしましょう。",
        "id": "Mari kita bicarakan tentang spec terlewat hari ini."
      }
    ]
  },
  {
    "id": "23",
    "kanji": "強制終了",
    "hiragana": "きょうせいしゅうりょう",
    "romaji": "kyouseishuuryou",
    "meaning": "force close / crash",
    "shortExample": "Aplikasi crash.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Crash secara tiba-tiba di aplikasi mobile atau desktop.",
    "examples": [
      {
        "jp": "強制終了をお願いします。",
        "hiragana": "きょうせいしゅうりょうを おねがいします。",
        "id": "Tolong terkait force close / crash."
      },
      {
        "jp": "強制終了は終わりましたか？",
        "hiragana": "きょうせいしゅうりょうは おわりましたか？",
        "id": "Apakah force close / crash sudah selesai?"
      },
      {
        "jp": "今日の強制終了について話しましょう。",
        "hiragana": "きょうの きょうせいしゅうりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang force close / crash hari ini."
      }
    ]
  },
  {
    "id": "24",
    "kanji": "例外",
    "hiragana": "れいがい",
    "romaji": "reigai",
    "meaning": "exception",
    "shortExample": "Terjadi exception error.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Error pada code level (NullPointerException dll).",
    "examples": [
      {
        "jp": "例外をお願いします。",
        "hiragana": "れいがいを おねがいします。",
        "id": "Tolong terkait exception."
      },
      {
        "jp": "例外は終わりましたか？",
        "hiragana": "れいがいは おわりましたか？",
        "id": "Apakah exception sudah selesai?"
      },
      {
        "jp": "今日の例外について話しましょう。",
        "hiragana": "きょうの れいがいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang exception hari ini."
      }
    ]
  },
  {
    "id": "25",
    "kanji": "異常",
    "hiragana": "いじょう",
    "romaji": "ijou",
    "meaning": "abnormal",
    "shortExample": "Perilaku abnormal.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Sistem berjalan tidak semestinya.",
    "examples": [
      {
        "jp": "異常をお願いします。",
        "hiragana": "いじょうを おねがいします。",
        "id": "Tolong terkait abnormal."
      },
      {
        "jp": "異常は終わりましたか？",
        "hiragana": "いじょうは おわりましたか？",
        "id": "Apakah abnormal sudah selesai?"
      },
      {
        "jp": "今日の異常について話しましょう。",
        "hiragana": "きょうの いじょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang abnormal hari ini."
      }
    ]
  },
  {
    "id": "26",
    "kanji": "文字化け",
    "hiragana": "もじばけ",
    "romaji": "mojibake",
    "meaning": "karakter rusak (garbled)",
    "shortExample": "Teksnya mojibake.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Sering terjadi di web Jepang karena isu encoding UTF-8 / Shift-JIS.",
    "examples": [
      {
        "jp": "文字化けをお願いします。",
        "hiragana": "もじばけを おねがいします。",
        "id": "Tolong terkait karakter rusak (garbled)."
      },
      {
        "jp": "文字化けは終わりましたか？",
        "hiragana": "もじばけは おわりましたか？",
        "id": "Apakah karakter rusak (garbled) sudah selesai?"
      },
      {
        "jp": "今日の文字化けについて話しましょう。",
        "hiragana": "きょうの もじばけについて はなしましょう。",
        "id": "Mari kita bicarakan tentang karakter rusak (garbled) hari ini."
      }
    ]
  },
  {
    "id": "27",
    "kanji": "応答",
    "hiragana": "おうとう",
    "romaji": "outou",
    "meaning": "respons",
    "shortExample": "Tidak ada respons.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Biasa dipakai kalau API timeout atau server no response.",
    "examples": [
      {
        "jp": "応答をお願いします。",
        "hiragana": "おうとうを おねがいします。",
        "id": "Tolong terkait respons."
      },
      {
        "jp": "応答は終わりましたか？",
        "hiragana": "おうとうは おわりましたか？",
        "id": "Apakah respons sudah selesai?"
      },
      {
        "jp": "今日の応答について話しましょう。",
        "hiragana": "きょうの おうとうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang respons hari ini."
      }
    ]
  },
  {
    "id": "28",
    "kanji": "回避策",
    "hiragana": "かいひさく",
    "romaji": "kaihisaku",
    "meaning": "workaround",
    "shortExample": "Punya workaround?",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Solusi sementara untuk menghindari bug sebelum fix beneran.",
    "examples": [
      {
        "jp": "回避策をお願いします。",
        "hiragana": "かいひさくを おねがいします。",
        "id": "Tolong terkait workaround."
      },
      {
        "jp": "回避策は終わりましたか？",
        "hiragana": "かいひさくは おわりましたか？",
        "id": "Apakah workaround sudah selesai?"
      },
      {
        "jp": "今日の回避策について話しましょう。",
        "hiragana": "きょうの かいひさくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang workaround hari ini."
      }
    ]
  },
  {
    "id": "29",
    "kanji": "検知",
    "hiragana": "けんち",
    "romaji": "kenchi",
    "meaning": "deteksi",
    "shortExample": "Bug terdeteksi di log.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Sistem mendeteksi adanya error.",
    "examples": [
      {
        "jp": "検知をお願いします。",
        "hiragana": "けんちを おねがいします。",
        "id": "Tolong terkait deteksi."
      },
      {
        "jp": "検知は終わりましたか？",
        "hiragana": "けんちは おわりましたか？",
        "id": "Apakah deteksi sudah selesai?"
      },
      {
        "jp": "今日の検知について話しましょう。",
        "hiragana": "きょうの けんちについて はなしましょう。",
        "id": "Mari kita bicarakan tentang deteksi hari ini."
      }
    ]
  },
  {
    "id": "30",
    "kanji": "修正版",
    "hiragana": "しゅうせいばん",
    "romaji": "shuuseiban",
    "meaning": "versi perbaikan",
    "shortExample": "Rilis versi perbaikan.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Versi patch/hotfix.",
    "examples": [
      {
        "jp": "修正版をお願いします。",
        "hiragana": "しゅうせいばんを おねがいします。",
        "id": "Tolong terkait versi perbaikan."
      },
      {
        "jp": "修正版は終わりましたか？",
        "hiragana": "しゅうせいばんは おわりましたか？",
        "id": "Apakah versi perbaikan sudah selesai?"
      },
      {
        "jp": "今日の修正版について話しましょう。",
        "hiragana": "きょうの しゅうせいばんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang versi perbaikan hari ini."
      }
    ]
  },
  {
    "id": "31",
    "kanji": "負荷",
    "hiragana": "ふか",
    "romaji": "fuka",
    "meaning": "beban (load)",
    "shortExample": "Beban server tinggi.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Biasa dipakai untuk load testing.",
    "examples": [
      {
        "jp": "負荷をお願いします。",
        "hiragana": "ふかを おねがいします。",
        "id": "Tolong terkait beban (load)."
      },
      {
        "jp": "負荷は終わりましたか？",
        "hiragana": "ふかは おわりましたか？",
        "id": "Apakah beban (load) sudah selesai?"
      },
      {
        "jp": "今日の負荷について話しましょう。",
        "hiragana": "きょうの ふかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang beban (load) hari ini."
      }
    ]
  },
  {
    "id": "32",
    "kanji": "遅延",
    "hiragana": "ちえん",
    "romaji": "chien",
    "meaning": "delay / lag",
    "shortExample": "Ada lag di UI.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Respon sistem lambat.",
    "examples": [
      {
        "jp": "遅延をお願いします。",
        "hiragana": "ちえんを おねがいします。",
        "id": "Tolong terkait delay / lag."
      },
      {
        "jp": "遅延は終わりましたか？",
        "hiragana": "ちえんは おわりましたか？",
        "id": "Apakah delay / lag sudah selesai?"
      },
      {
        "jp": "今日の遅延について話しましょう。",
        "hiragana": "きょうの ちえんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang delay / lag hari ini."
      }
    ]
  },
  {
    "id": "33",
    "kanji": "未定義",
    "hiragana": "みていぎ",
    "romaji": "miteigi",
    "meaning": "undefined",
    "shortExample": "Variabel undefined.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Pesan error standar di JavaScript.",
    "examples": [
      {
        "jp": "未定義をお願いします。",
        "hiragana": "みていぎを おねがいします。",
        "id": "Tolong terkait undefined."
      },
      {
        "jp": "未定義は終わりましたか？",
        "hiragana": "みていぎは おわりましたか？",
        "id": "Apakah undefined sudah selesai?"
      },
      {
        "jp": "今日の未定義について話しましょう。",
        "hiragana": "きょうの みていぎについて はなしましょう。",
        "id": "Mari kita bicarakan tentang undefined hari ini."
      }
    ]
  },
  {
    "id": "34",
    "kanji": "互換性",
    "hiragana": "ごかんせい",
    "romaji": "gokansei",
    "meaning": "kompatibilitas",
    "shortExample": "Isu kompatibilitas browser.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Misal bug yang cuma ada di Safari atau IE lama.",
    "examples": [
      {
        "jp": "互換性をお願いします。",
        "hiragana": "ごかんせいを おねがいします。",
        "id": "Tolong terkait kompatibilitas."
      },
      {
        "jp": "互換性は終わりましたか？",
        "hiragana": "ごかんせいは おわりましたか？",
        "id": "Apakah kompatibilitas sudah selesai?"
      },
      {
        "jp": "今日の互換性について話しましょう。",
        "hiragana": "きょうの ごかんせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kompatibilitas hari ini."
      }
    ]
  },
  {
    "id": "35",
    "kanji": "移行",
    "hiragana": "いこう",
    "romaji": "ikou",
    "meaning": "migrasi",
    "shortExample": "Migrasi database error.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Perpindahan data dari sistem lama ke baru.",
    "examples": [
      {
        "jp": "移行をお願いします。",
        "hiragana": "いこうを おねがいします。",
        "id": "Tolong terkait migrasi."
      },
      {
        "jp": "移行は終わりましたか？",
        "hiragana": "いこうは おわりましたか？",
        "id": "Apakah migrasi sudah selesai?"
      },
      {
        "jp": "今日の移行について話しましょう。",
        "hiragana": "きょうの いこうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang migrasi hari ini."
      }
    ]
  },
  {
    "id": "36",
    "kanji": "切断",
    "hiragana": "せつだん",
    "romaji": "setsudan",
    "meaning": "terputus",
    "shortExample": "Koneksi terputus.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Network timeout atau disconnected.",
    "examples": [
      {
        "jp": "切断をお願いします。",
        "hiragana": "せつだんを おねがいします。",
        "id": "Tolong terkait terputus."
      },
      {
        "jp": "切断は終わりましたか？",
        "hiragana": "せつだんは おわりましたか？",
        "id": "Apakah terputus sudah selesai?"
      },
      {
        "jp": "今日の切断について話しましょう。",
        "hiragana": "きょうの せつだんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang terputus hari ini."
      }
    ]
  },
  {
    "id": "37",
    "kanji": "再起動",
    "hiragana": "さいきどう",
    "romaji": "saikidou",
    "meaning": "restart",
    "shortExample": "Coba restart servernya.",
    "category": "QA/Bug",
    "level": "N5",
    "tip": "Solusi paling klasik di dunia IT.",
    "examples": [
      {
        "jp": "再起動をお願いします。",
        "hiragana": "さいきどうを おねがいします。",
        "id": "Tolong terkait restart."
      },
      {
        "jp": "再起動は終わりましたか？",
        "hiragana": "さいきどうは おわりましたか？",
        "id": "Apakah restart sudah selesai?"
      },
      {
        "jp": "今日の再起動について話しましょう。",
        "hiragana": "きょうの さいきどうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang restart hari ini."
      }
    ]
  },
  {
    "id": "38",
    "kanji": "設定ミス",
    "hiragana": "せっていみす",
    "romaji": "setteimisu",
    "meaning": "salah konfigurasi",
    "shortExample": "Oh, cuma salah setting.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Bug yang disebabkan karena kelalaian setup.",
    "examples": [
      {
        "jp": "設定ミスをお願いします。",
        "hiragana": "せっていみすを おねがいします。",
        "id": "Tolong terkait salah konfigurasi."
      },
      {
        "jp": "設定ミスは終わりましたか？",
        "hiragana": "せっていみすは おわりましたか？",
        "id": "Apakah salah konfigurasi sudah selesai?"
      },
      {
        "jp": "今日の設定ミスについて話しましょう。",
        "hiragana": "きょうの せっていみすについて はなしましょう。",
        "id": "Mari kita bicarakan tentang salah konfigurasi hari ini."
      }
    ]
  },
  {
    "id": "39",
    "kanji": "手順書",
    "hiragana": "てじゅんしょ",
    "romaji": "tejunsho",
    "meaning": "dokumen panduan",
    "shortExample": "Cek di panduan manual.",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Runbook atau manual book.",
    "examples": [
      {
        "jp": "手順書をお願いします。",
        "hiragana": "てじゅんしょを おねがいします。",
        "id": "Tolong terkait dokumen panduan."
      },
      {
        "jp": "手順書は終わりましたか？",
        "hiragana": "てじゅんしょは おわりましたか？",
        "id": "Apakah dokumen panduan sudah selesai?"
      },
      {
        "jp": "今日の手順書について話しましょう。",
        "hiragana": "きょうの てじゅんしょについて はなしましょう。",
        "id": "Mari kita bicarakan tentang dokumen panduan hari ini."
      }
    ]
  },
  {
    "id": "40",
    "kanji": "本番",
    "hiragana": "ほんばん",
    "romaji": "honban",
    "meaning": "production",
    "shortExample": "Bug di production!",
    "category": "QA/Bug",
    "level": "N4",
    "tip": "Environment paling menakutkan kalau sampai ada bug.",
    "examples": [
      {
        "jp": "本番をお願いします。",
        "hiragana": "ほんばんを おねがいします。",
        "id": "Tolong terkait production."
      },
      {
        "jp": "本番は終わりましたか？",
        "hiragana": "ほんばんは おわりましたか？",
        "id": "Apakah production sudah selesai?"
      },
      {
        "jp": "今日の本番について話しましょう。",
        "hiragana": "きょうの ほんばんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang production hari ini."
      }
    ]
  },
  {
    "id": "41",
    "kanji": "確認",
    "hiragana": "かくにん",
    "romaji": "kakunin",
    "meaning": "konfirmasi / cek",
    "shortExample": "Akan saya konfirmasi dulu.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Kata paling dasar! Pakai saat ingin bilang 'saya akan cek'.",
    "examples": [
      {
        "jp": "確認をお願いします。",
        "hiragana": "かくにんを おねがいします。",
        "id": "Tolong terkait konfirmasi / cek."
      },
      {
        "jp": "確認は終わりましたか？",
        "hiragana": "かくにんは おわりましたか？",
        "id": "Apakah konfirmasi / cek sudah selesai?"
      },
      {
        "jp": "今日の確認について話しましょう。",
        "hiragana": "きょうの かくにんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang konfirmasi / cek hari ini."
      }
    ]
  },
  {
    "id": "42",
    "kanji": "共有",
    "hiragana": "きょうゆう",
    "romaji": "kyouyuu",
    "meaning": "share / berbagi",
    "shortExample": "Share screen/info.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sangat sering dipakai saat online meeting.",
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
    "id": "43",
    "kanji": "相談",
    "hiragana": "そうだん",
    "romaji": "soudan",
    "meaning": "konsultasi",
    "shortExample": "Saya ingin konsultasi.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Dipakai saat ingin meminta saran atau berdiskusi.",
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
    "id": "44",
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
    "id": "45",
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
    "id": "46",
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
    "id": "47",
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
    "id": "48",
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
    "id": "49",
    "kanji": "回答",
    "hiragana": "かいとう",
    "romaji": "kaitou",
    "meaning": "jawaban",
    "shortExample": "Ini jawabannya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Memberikan respon atas pertanyaan.",
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
    "id": "50",
    "kanji": "詳細",
    "hiragana": "しょうさい",
    "romaji": "shousai",
    "meaning": "detail",
    "shortExample": "Tolong berikan detailnya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Meminta penjelasan lebih lanjut.",
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
    "id": "51",
    "kanji": "承知",
    "hiragana": "しょうち",
    "romaji": "shouchi",
    "meaning": "mengerti / paham",
    "shortExample": "Baik, saya mengerti.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Lebih sopan dari 'wakarimashita', wajib dipakai ke atasan.",
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
    "id": "52",
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
    "id": "53",
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
    "id": "54",
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
    "id": "55",
    "kanji": "了解",
    "hiragana": "りょうかい",
    "romaji": "ryoukai",
    "meaning": "roger / mengerti",
    "shortExample": "Roger that.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sering dipakai di chat internal, kurang sopan untuk klien.",
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
    "id": "56",
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
    "id": "57",
    "kanji": "賛成",
    "hiragana": "さんせい",
    "romaji": "sansei",
    "meaning": "setuju",
    "shortExample": "Saya setuju.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Menyatakan persetujuan atas usulan.",
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
    "id": "58",
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
    "id": "59",
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
    "id": "60",
    "kanji": "添付",
    "hiragana": "てんぷ",
    "romaji": "tenpu",
    "meaning": "lampiran / attachment",
    "shortExample": "Cek file terlampir.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sering digunakan di email.",
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
    "id": "61",
    "kanji": "会議室",
    "hiragana": "かいぎしつ",
    "romaji": "kaigishitsu",
    "meaning": "ruang meeting",
    "shortExample": "Booking ruang meeting.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Penting untuk rapat offline.",
    "examples": [
      {
        "jp": "会議室をお願いします。",
        "hiragana": "かいぎしつを おねがいします。",
        "id": "Tolong terkait ruang meeting."
      },
      {
        "jp": "会議室は終わりましたか？",
        "hiragana": "かいぎしつは おわりましたか？",
        "id": "Apakah ruang meeting sudah selesai?"
      },
      {
        "jp": "今日の会議室について話しましょう。",
        "hiragana": "きょうの かいぎしつについて はなしましょう。",
        "id": "Mari kita bicarakan tentang ruang meeting hari ini."
      }
    ]
  },
  {
    "id": "62",
    "kanji": "名刺",
    "hiragana": "めいし",
    "romaji": "meishi",
    "meaning": "kartu nama",
    "shortExample": "Tukar kartu nama.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Budaya bisnis Jepang, tukar meishi di awal pertemuan.",
    "examples": [
      {
        "jp": "名刺をお願いします。",
        "hiragana": "めいしを おねがいします。",
        "id": "Tolong terkait kartu nama."
      },
      {
        "jp": "名刺は終わりましたか？",
        "hiragana": "めいしは おわりましたか？",
        "id": "Apakah kartu nama sudah selesai?"
      },
      {
        "jp": "今日の名刺について話しましょう。",
        "hiragana": "きょうの めいしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kartu nama hari ini."
      }
    ]
  },
  {
    "id": "63",
    "kanji": "挨拶",
    "hiragana": "あいさつ",
    "romaji": "aisatsu",
    "meaning": "salam",
    "shortExample": "Beri salam yang baik.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Ohayou, otsukaresama, dll.",
    "examples": [
      {
        "jp": "挨拶をお願いします。",
        "hiragana": "あいさつを おねがいします。",
        "id": "Tolong terkait salam."
      },
      {
        "jp": "挨拶は終わりましたか？",
        "hiragana": "あいさつは おわりましたか？",
        "id": "Apakah salam sudah selesai?"
      },
      {
        "jp": "今日の挨拶について話しましょう。",
        "hiragana": "きょうの あいさつについて はなしましょう。",
        "id": "Mari kita bicarakan tentang salam hari ini."
      }
    ]
  },
  {
    "id": "64",
    "kanji": "お疲れ様",
    "hiragana": "おつかれさま",
    "romaji": "otsukaresama",
    "meaning": "terima kasih atas kerja kerasnya",
    "shortExample": "Otsukaresama desu!",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Salam wajib diucapkan saat bertemu, chatting, atau pulang.",
    "examples": [
      {
        "jp": "お疲れ様をお願いします。",
        "hiragana": "おつかれさまを おねがいします。",
        "id": "Tolong terkait terima kasih atas kerja kerasnya."
      },
      {
        "jp": "お疲れ様は終わりましたか？",
        "hiragana": "おつかれさまは おわりましたか？",
        "id": "Apakah terima kasih atas kerja kerasnya sudah selesai?"
      },
      {
        "jp": "今日のお疲れ様について話しましょう。",
        "hiragana": "きょうの おつかれさまについて はなしましょう。",
        "id": "Mari kita bicarakan tentang terima kasih atas kerja kerasnya hari ini."
      }
    ]
  },
  {
    "id": "65",
    "kanji": "ごめん",
    "hiragana": "ごめん",
    "romaji": "gomen",
    "meaning": "maaf",
    "shortExample": "Maaf ya.",
    "category": "Komunikasi",
    "level": "N5",
    "tip": "Kasual, untuk teman selevel.",
    "examples": [
      {
        "jp": "ごめんをお願いします。",
        "hiragana": "ごめんを おねがいします。",
        "id": "Tolong terkait maaf."
      },
      {
        "jp": "ごめんは終わりましたか？",
        "hiragana": "ごめんは おわりましたか？",
        "id": "Apakah maaf sudah selesai?"
      },
      {
        "jp": "今日のごめんについて話しましょう。",
        "hiragana": "きょうの ごめんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang maaf hari ini."
      }
    ]
  },
  {
    "id": "66",
    "kanji": "申し訳ありません",
    "hiragana": "もうしわけありません",
    "romaji": "moushiwake arimasen",
    "meaning": "mohon maaf sebesar-besarnya",
    "shortExample": "Mohon maaf atas bug ini.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Permintaan maaf formal ke klien atau atasan.",
    "examples": [
      {
        "jp": "申し訳ありませんをお願いします。",
        "hiragana": "もうしわけありませんを おねがいします。",
        "id": "Tolong terkait mohon maaf sebesar-besarnya."
      },
      {
        "jp": "申し訳ありませんは終わりましたか？",
        "hiragana": "もうしわけありませんは おわりましたか？",
        "id": "Apakah mohon maaf sebesar-besarnya sudah selesai?"
      },
      {
        "jp": "今日の申し訳ありませんについて話しましょう。",
        "hiragana": "きょうの もうしわけありませんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mohon maaf sebesar-besarnya hari ini."
      }
    ]
  },
  {
    "id": "67",
    "kanji": "感謝",
    "hiragana": "かんしゃ",
    "romaji": "kansha",
    "meaning": "terima kasih / apresiasi",
    "shortExample": "Terima kasih banyak.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Bentuk apresiasi yang lebih formal.",
    "examples": [
      {
        "jp": "感謝をお願いします。",
        "hiragana": "かんしゃを おねがいします。",
        "id": "Tolong terkait terima kasih / apresiasi."
      },
      {
        "jp": "感謝は終わりましたか？",
        "hiragana": "かんしゃは おわりましたか？",
        "id": "Apakah terima kasih / apresiasi sudah selesai?"
      },
      {
        "jp": "今日の感謝について話しましょう。",
        "hiragana": "きょうの かんしゃについて はなしましょう。",
        "id": "Mari kita bicarakan tentang terima kasih / apresiasi hari ini."
      }
    ]
  },
  {
    "id": "68",
    "kanji": "拝見",
    "hiragana": "はいけん",
    "romaji": "haiken",
    "meaning": "melihat (formal)",
    "shortExample": "Saya sudah lihat emailnya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Bentuk humble (kenjougo) dari miru (melihat).",
    "examples": [
      {
        "jp": "拝見をお願いします。",
        "hiragana": "はいけんを おねがいします。",
        "id": "Tolong terkait melihat (formal)."
      },
      {
        "jp": "拝見は終わりましたか？",
        "hiragana": "はいけんは おわりましたか？",
        "id": "Apakah melihat (formal) sudah selesai?"
      },
      {
        "jp": "今日の拝見について話しましょう。",
        "hiragana": "きょうの はいけんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang melihat (formal) hari ini."
      }
    ]
  },
  {
    "id": "69",
    "kanji": "伺う",
    "hiragana": "うかがう",
    "romaji": "ukagau",
    "meaning": "bertanya/berkunjung (formal)",
    "shortExample": "Saya ingin bertanya...",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Bentuk humble dari kiku (bertanya) atau iku (pergi).",
    "examples": [
      {
        "jp": "伺うをお願いします。",
        "hiragana": "うかがうを おねがいします。",
        "id": "Tolong terkait bertanya/berkunjung (formal)."
      },
      {
        "jp": "伺うは終わりましたか？",
        "hiragana": "うかがうは おわりましたか？",
        "id": "Apakah bertanya/berkunjung (formal) sudah selesai?"
      },
      {
        "jp": "今日の伺うについて話しましょう。",
        "hiragana": "きょうの うかがうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang bertanya/berkunjung (formal) hari ini."
      }
    ]
  },
  {
    "id": "70",
    "kanji": "念のため",
    "hiragana": "ねんのため",
    "romaji": "nen no tame",
    "meaning": "untuk berjaga-jaga",
    "shortExample": "Saya cek sekali lagi untuk jaga-jaga.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Banyak dipakai orang Jepang untuk double-check sesuatu.",
    "examples": [
      {
        "jp": "念のためをお願いします。",
        "hiragana": "ねんのためを おねがいします。",
        "id": "Tolong terkait untuk berjaga-jaga."
      },
      {
        "jp": "念のためは終わりましたか？",
        "hiragana": "ねんのためは おわりましたか？",
        "id": "Apakah untuk berjaga-jaga sudah selesai?"
      },
      {
        "jp": "今日の念のためについて話しましょう。",
        "hiragana": "きょうの ねんのためについて はなしましょう。",
        "id": "Mari kita bicarakan tentang untuk berjaga-jaga hari ini."
      }
    ]
  },
  {
    "id": "71",
    "kanji": "早速",
    "hiragana": "さっそく",
    "romaji": "sassoku",
    "meaning": "dengan segera",
    "shortExample": "Saya akan segera kerjakan.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Menunjukkan antusiasme atau respon cepat.",
    "examples": [
      {
        "jp": "早速をお願いします。",
        "hiragana": "さっそくを おねがいします。",
        "id": "Tolong terkait dengan segera."
      },
      {
        "jp": "早速は終わりましたか？",
        "hiragana": "さっそくは おわりましたか？",
        "id": "Apakah dengan segera sudah selesai?"
      },
      {
        "jp": "今日の早速について話しましょう。",
        "hiragana": "きょうの さっそくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang dengan segera hari ini."
      }
    ]
  },
  {
    "id": "72",
    "kanji": "至急",
    "hiragana": "しきゅう",
    "romaji": "shikyuu",
    "meaning": "segera / urgent",
    "shortExample": "Mohon balas secepatnya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Ditulis di judul email jika sangat mendesak.",
    "examples": [
      {
        "jp": "至急をお願いします。",
        "hiragana": "しきゅうを おねがいします。",
        "id": "Tolong terkait segera / urgent."
      },
      {
        "jp": "至急は終わりましたか？",
        "hiragana": "しきゅうは おわりましたか？",
        "id": "Apakah segera / urgent sudah selesai?"
      },
      {
        "jp": "今日の至急について話しましょう。",
        "hiragana": "きょうの しきゅうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang segera / urgent hari ini."
      }
    ]
  },
  {
    "id": "73",
    "kanji": "なるべく",
    "hiragana": "なるべく",
    "romaji": "narubeku",
    "meaning": "sebisa mungkin",
    "shortExample": "Sebisa mungkin hari ini.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Versi soft dari mendesak orang lain.",
    "examples": [
      {
        "jp": "なるべくをお願いします。",
        "hiragana": "なるべくを おねがいします。",
        "id": "Tolong terkait sebisa mungkin."
      },
      {
        "jp": "なるべくは終わりましたか？",
        "hiragana": "なるべくは おわりましたか？",
        "id": "Apakah sebisa mungkin sudah selesai?"
      },
      {
        "jp": "今日のなるべくについて話しましょう。",
        "hiragana": "きょうの なるべくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang sebisa mungkin hari ini."
      }
    ]
  },
  {
    "id": "74",
    "kanji": "引き続き",
    "hiragana": "ひきつづき",
    "romaji": "hikitsuzuki",
    "meaning": "selanjutnya / terus",
    "shortExample": "Mohon bantuannya terus.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Sering di akhir email: 'Hikitsuzuki yoroshiku onegaishimasu'.",
    "examples": [
      {
        "jp": "引き続きをお願いします。",
        "hiragana": "ひきつづきを おねがいします。",
        "id": "Tolong terkait selanjutnya / terus."
      },
      {
        "jp": "引き続きは終わりましたか？",
        "hiragana": "ひきつづきは おわりましたか？",
        "id": "Apakah selanjutnya / terus sudah selesai?"
      },
      {
        "jp": "今日の引き続きについて話しましょう。",
        "hiragana": "きょうの ひきつづきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang selanjutnya / terus hari ini."
      }
    ]
  },
  {
    "id": "75",
    "kanji": "取り急ぎ",
    "hiragana": "とりいそぎ",
    "romaji": "toriisogi",
    "meaning": "untuk sementara / quick update",
    "shortExample": "Quick update saja.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Di akhir email saat memberi info cepat.",
    "examples": [
      {
        "jp": "取り急ぎをお願いします。",
        "hiragana": "とりいそぎを おねがいします。",
        "id": "Tolong terkait untuk sementara / quick update."
      },
      {
        "jp": "取り急ぎは終わりましたか？",
        "hiragana": "とりいそぎは おわりましたか？",
        "id": "Apakah untuk sementara / quick update sudah selesai?"
      },
      {
        "jp": "今日の取り急ぎについて話しましょう。",
        "hiragana": "きょうの とりいそぎについて はなしましょう。",
        "id": "Mari kita bicarakan tentang untuk sementara / quick update hari ini."
      }
    ]
  },
  {
    "id": "76",
    "kanji": "検討",
    "hiragana": "けんとう",
    "romaji": "kentou",
    "meaning": "pertimbangan",
    "shortExample": "Kami akan mempertimbangkannya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Jawaban standar Jepang kalau belum bisa memutuskan.",
    "examples": [
      {
        "jp": "検討をお願いします。",
        "hiragana": "けんとうを おねがいします。",
        "id": "Tolong terkait pertimbangan."
      },
      {
        "jp": "検討は終わりましたか？",
        "hiragana": "けんとうは おわりましたか？",
        "id": "Apakah pertimbangan sudah selesai?"
      },
      {
        "jp": "今日の検討について話しましょう。",
        "hiragana": "きょうの けんとうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pertimbangan hari ini."
      }
    ]
  },
  {
    "id": "77",
    "kanji": "辞退",
    "hiragana": "じたい",
    "romaji": "jitai",
    "meaning": "menolak",
    "shortExample": "Saya tolak tawarannya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Menolak halus sebuah tawaran.",
    "examples": [
      {
        "jp": "辞退をお願いします。",
        "hiragana": "じたいを おねがいします。",
        "id": "Tolong terkait menolak."
      },
      {
        "jp": "辞退は終わりましたか？",
        "hiragana": "じたいは おわりましたか？",
        "id": "Apakah menolak sudah selesai?"
      },
      {
        "jp": "今日の辞退について話しましょう。",
        "hiragana": "きょうの じたいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang menolak hari ini."
      }
    ]
  },
  {
    "id": "78",
    "kanji": "歓迎",
    "hiragana": "かんげい",
    "romaji": "kangei",
    "meaning": "menyambut",
    "shortExample": "Selamat datang di tim!",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Dipakai saat ada member baru (kangeikai).",
    "examples": [
      {
        "jp": "歓迎をお願いします。",
        "hiragana": "かんげいを おねがいします。",
        "id": "Tolong terkait menyambut."
      },
      {
        "jp": "歓迎は終わりましたか？",
        "hiragana": "かんげいは おわりましたか？",
        "id": "Apakah menyambut sudah selesai?"
      },
      {
        "jp": "今日の歓迎について話しましょう。",
        "hiragana": "きょうの かんげいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang menyambut hari ini."
      }
    ]
  },
  {
    "id": "79",
    "kanji": "送付",
    "hiragana": "そうふ",
    "romaji": "soufu",
    "meaning": "mengirim (dokumen)",
    "shortExample": "Sudah saya kirim filenya.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Lebih formal dari 'okuru'.",
    "examples": [
      {
        "jp": "送付をお願いします。",
        "hiragana": "そうふを おねがいします。",
        "id": "Tolong terkait mengirim (dokumen)."
      },
      {
        "jp": "送付は終わりましたか？",
        "hiragana": "そうふは おわりましたか？",
        "id": "Apakah mengirim (dokumen) sudah selesai?"
      },
      {
        "jp": "今日の送付について話しましょう。",
        "hiragana": "きょうの そうふについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mengirim (dokumen) hari ini."
      }
    ]
  },
  {
    "id": "80",
    "kanji": "受領",
    "hiragana": "じゅりょう",
    "romaji": "juryou",
    "meaning": "menerima (dokumen)",
    "shortExample": "File sudah diterima.",
    "category": "Komunikasi",
    "level": "N4",
    "tip": "Konfirmasi penerimaan dokumen/email.",
    "examples": [
      {
        "jp": "受領をお願いします。",
        "hiragana": "じゅりょうを おねがいします。",
        "id": "Tolong terkait menerima (dokumen)."
      },
      {
        "jp": "受領は終わりましたか？",
        "hiragana": "じゅりょうは おわりましたか？",
        "id": "Apakah menerima (dokumen) sudah selesai?"
      },
      {
        "jp": "今日の受領について話しましょう。",
        "hiragana": "きょうの じゅりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang menerima (dokumen) hari ini."
      }
    ]
  },
  {
    "id": "81",
    "kanji": "報告",
    "hiragana": "ほうこく",
    "romaji": "houkoku",
    "meaning": "laporan",
    "shortExample": "Lapor ke PM.",
    "category": "Report",
    "level": "N4",
    "tip": "Penting dalam budaya Ho-Ren-So.",
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
    "id": "82",
    "kanji": "提出",
    "hiragana": "ていしゅつ",
    "romaji": "teishutsu",
    "meaning": "mengumpulkan (submit)",
    "shortExample": "Kumpulkan laporannya.",
    "category": "Report",
    "level": "N4",
    "tip": "Mengirimkan dokumen atau tugas.",
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
    "id": "83",
    "kanji": "納期",
    "hiragana": "のうき",
    "romaji": "nouki",
    "meaning": "tenggat waktu (deadline)",
    "shortExample": "Kapan deadlinenya?",
    "category": "Report",
    "level": "N4",
    "tip": "Sangat krusial di perusahaan IT Jepang.",
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
    "id": "84",
    "kanji": "承認",
    "hiragana": "しょうにん",
    "romaji": "shounin",
    "meaning": "persetujuan (approval)",
    "shortExample": "Menunggu approval.",
    "category": "Report",
    "level": "N4",
    "tip": "Biasanya butuh stempel atau klik approve.",
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
    "id": "85",
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
    "id": "86",
    "kanji": "概要",
    "hiragana": "がいよう",
    "romaji": "gaiyou",
    "meaning": "ringkasan / overview",
    "shortExample": "Berikut overviewnya.",
    "category": "Report",
    "level": "N4",
    "tip": "Penjelasan singkat di awal presentasi.",
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
    "id": "87",
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
    "id": "88",
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
    "id": "89",
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
    "id": "90",
    "kanji": "日報",
    "hiragana": "にっぽう",
    "romaji": "nippou",
    "meaning": "laporan harian",
    "shortExample": "Sudah kirim daily report?",
    "category": "Report",
    "level": "N4",
    "tip": "Sering diwajibkan tiap pulang kerja.",
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
    "id": "91",
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
    "id": "92",
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
    "id": "93",
    "kanji": "課題",
    "hiragana": "かだい",
    "romaji": "kadai",
    "meaning": "isu / PR / tantangan",
    "shortExample": "Ini isu saat ini.",
    "category": "Report",
    "level": "N4",
    "tip": "Masalah yang harus diselesaikan.",
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
    "id": "94",
    "kanji": "進み具合",
    "hiragana": "すすみぐあい",
    "romaji": "susumiguai",
    "meaning": "tingkat kemajuan",
    "shortExample": "Bagaimana progressnya?",
    "category": "Report",
    "level": "N4",
    "tip": "Sinonim dari Shinchoku.",
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
    "id": "95",
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
    "id": "96",
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
    "id": "97",
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
    "id": "98",
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
    "id": "99",
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
    "id": "100",
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
    "id": "101",
    "kanji": "改善",
    "hiragana": "かいぜん",
    "romaji": "kaizen",
    "meaning": "perbaikan (improvement)",
    "shortExample": "Mari perbaiki UI-nya.",
    "category": "Report",
    "level": "N4",
    "tip": "Konsep Kaizen Jepang (Continuous Improvement).",
    "examples": [
      {
        "jp": "改善をお願いします。",
        "hiragana": "かいぜんを おねがいします。",
        "id": "Tolong terkait perbaikan (improvement)."
      },
      {
        "jp": "改善は終わりましたか？",
        "hiragana": "かいぜんは おわりましたか？",
        "id": "Apakah perbaikan (improvement) sudah selesai?"
      },
      {
        "jp": "今日の改善について話しましょう。",
        "hiragana": "きょうの かいぜんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang perbaikan (improvement) hari ini."
      }
    ]
  },
  {
    "id": "102",
    "kanji": "原因究明",
    "hiragana": "げんいんきゅうめい",
    "romaji": "gen'inkyuumei",
    "meaning": "investigasi penyebab",
    "shortExample": "Sedang mencari tahu penyebab error.",
    "category": "Report",
    "level": "N4",
    "tip": "Root cause analysis.",
    "examples": [
      {
        "jp": "原因究明をお願いします。",
        "hiragana": "げんいんきゅうめいを おねがいします。",
        "id": "Tolong terkait investigasi penyebab."
      },
      {
        "jp": "原因究明は終わりましたか？",
        "hiragana": "げんいんきゅうめいは おわりましたか？",
        "id": "Apakah investigasi penyebab sudah selesai?"
      },
      {
        "jp": "今日の原因究明について話しましょう。",
        "hiragana": "きょうの げんいんきゅうめいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang investigasi penyebab hari ini."
      }
    ]
  },
  {
    "id": "103",
    "kanji": "対策",
    "hiragana": "たいさく",
    "romaji": "taisaku",
    "meaning": "tindakan pencegahan / solusi",
    "shortExample": "Apa tindakan preventifnya?",
    "category": "Report",
    "level": "N4",
    "tip": "Agar bug serupa tidak terulang.",
    "examples": [
      {
        "jp": "対策をお願いします。",
        "hiragana": "たいさくを おねがいします。",
        "id": "Tolong terkait tindakan pencegahan / solusi."
      },
      {
        "jp": "対策は終わりましたか？",
        "hiragana": "たいさくは おわりましたか？",
        "id": "Apakah tindakan pencegahan / solusi sudah selesai?"
      },
      {
        "jp": "今日の対策について話しましょう。",
        "hiragana": "きょうの たいさくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang tindakan pencegahan / solusi hari ini."
      }
    ]
  },
  {
    "id": "104",
    "kanji": "比較",
    "hiragana": "ひかく",
    "romaji": "ひかく",
    "meaning": "perbandingan",
    "shortExample": "Bandingkan dengan data lama.",
    "category": "Report",
    "level": "N4",
    "tip": "Komparasi A/B testing.",
    "examples": [
      {
        "jp": "比較をお願いします。",
        "hiragana": "ひかくを おねがいします。",
        "id": "Tolong terkait perbandingan."
      },
      {
        "jp": "比較は終わりましたか？",
        "hiragana": "ひかくは おわりましたか？",
        "id": "Apakah perbandingan sudah selesai?"
      },
      {
        "jp": "今日の比較について話しましょう。",
        "hiragana": "きょうの ひかくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang perbandingan hari ini."
      }
    ]
  },
  {
    "id": "105",
    "kanji": "結論",
    "hiragana": "けつろん",
    "romaji": "ketsuron",
    "meaning": "kesimpulan",
    "shortExample": "Kesimpulannya adalah...",
    "category": "Report",
    "level": "N4",
    "tip": "Poin akhir dari presentasi.",
    "examples": [
      {
        "jp": "結論をお願いします。",
        "hiragana": "けつろんを おねがいします。",
        "id": "Tolong terkait kesimpulan."
      },
      {
        "jp": "結論は終わりましたか？",
        "hiragana": "けつろんは おわりましたか？",
        "id": "Apakah kesimpulan sudah selesai?"
      },
      {
        "jp": "今日の結論について話しましょう。",
        "hiragana": "きょうの けつろんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kesimpulan hari ini."
      }
    ]
  },
  {
    "id": "106",
    "kanji": "目的",
    "hiragana": "もくてき",
    "romaji": "mokuteki",
    "meaning": "tujuan",
    "shortExample": "Apa tujuan project ini?",
    "category": "Report",
    "level": "N4",
    "tip": "Objective utama.",
    "examples": [
      {
        "jp": "目的をお願いします。",
        "hiragana": "もくてきを おねがいします。",
        "id": "Tolong terkait tujuan."
      },
      {
        "jp": "目的は終わりましたか？",
        "hiragana": "もくてきは おわりましたか？",
        "id": "Apakah tujuan sudah selesai?"
      },
      {
        "jp": "今日の目的について話しましょう。",
        "hiragana": "きょうの もくてきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang tujuan hari ini."
      }
    ]
  },
  {
    "id": "107",
    "kanji": "目安",
    "hiragana": "めやす",
    "romaji": "meyasu",
    "meaning": "perkiraan kasar / rule of thumb",
    "shortExample": "Perkiraannya sekitar 2 minggu.",
    "category": "Report",
    "level": "N4",
    "tip": "Estimasi yang tidak mengikat.",
    "examples": [
      {
        "jp": "目安をお願いします。",
        "hiragana": "めやすを おねがいします。",
        "id": "Tolong terkait perkiraan kasar / rule of thumb."
      },
      {
        "jp": "目安は終わりましたか？",
        "hiragana": "めやすは おわりましたか？",
        "id": "Apakah perkiraan kasar / rule of thumb sudah selesai?"
      },
      {
        "jp": "今日の目安について話しましょう。",
        "hiragana": "きょうの めやすについて はなしましょう。",
        "id": "Mari kita bicarakan tentang perkiraan kasar / rule of thumb hari ini."
      }
    ]
  },
  {
    "id": "108",
    "kanji": "範囲",
    "hiragana": "はんい",
    "romaji": "han'i",
    "meaning": "cakupan / scope",
    "shortExample": "Scope testingnya di mana?",
    "category": "Report",
    "level": "N4",
    "tip": "Scope of work / boundary.",
    "examples": [
      {
        "jp": "範囲をお願いします。",
        "hiragana": "はんいを おねがいします。",
        "id": "Tolong terkait cakupan / scope."
      },
      {
        "jp": "範囲は終わりましたか？",
        "hiragana": "はんいは おわりましたか？",
        "id": "Apakah cakupan / scope sudah selesai?"
      },
      {
        "jp": "今日の範囲について話しましょう。",
        "hiragana": "きょうの はんいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang cakupan / scope hari ini."
      }
    ]
  },
  {
    "id": "109",
    "kanji": "規模",
    "hiragana": "きぼ",
    "romaji": "kibo",
    "meaning": "skala / size",
    "shortExample": "Skala projectnya besar.",
    "category": "Report",
    "level": "N4",
    "tip": "Ukuran dari sesuatu.",
    "examples": [
      {
        "jp": "規模をお願いします。",
        "hiragana": "きぼを おねがいします。",
        "id": "Tolong terkait skala / size."
      },
      {
        "jp": "規模は終わりましたか？",
        "hiragana": "きぼは おわりましたか？",
        "id": "Apakah skala / size sudah selesai?"
      },
      {
        "jp": "今日の規模について話しましょう。",
        "hiragana": "きょうの きぼについて はなしましょう。",
        "id": "Mari kita bicarakan tentang skala / size hari ini."
      }
    ]
  },
  {
    "id": "110",
    "kanji": "方針",
    "hiragana": "ほうしん",
    "romaji": "houshin",
    "meaning": "kebijakan / policy / arah",
    "shortExample": "Arahan dari manajemen.",
    "category": "Report",
    "level": "N4",
    "tip": "Direction atau aturan perusahaan.",
    "examples": [
      {
        "jp": "方針をお願いします。",
        "hiragana": "ほうしんを おねがいします。",
        "id": "Tolong terkait kebijakan / policy / arah."
      },
      {
        "jp": "方針は終わりましたか？",
        "hiragana": "ほうしんは おわりましたか？",
        "id": "Apakah kebijakan / policy / arah sudah selesai?"
      },
      {
        "jp": "今日の方針について話しましょう。",
        "hiragana": "きょうの ほうしんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kebijakan / policy / arah hari ini."
      }
    ]
  },
  {
    "id": "111",
    "kanji": "見通し",
    "hiragana": "みとおし",
    "romaji": "mitooshi",
    "meaning": "prospek / pandangan ke depan",
    "shortExample": "Kelihatannya akan rilis bulan depan.",
    "category": "Report",
    "level": "N4",
    "tip": "Estimasi atau pandangan ke depan.",
    "examples": [
      {
        "jp": "見通しをお願いします。",
        "hiragana": "みとおしを おねがいします。",
        "id": "Tolong terkait prospek / pandangan ke depan."
      },
      {
        "jp": "見通しは終わりましたか？",
        "hiragana": "みとおしは おわりましたか？",
        "id": "Apakah prospek / pandangan ke depan sudah selesai?"
      },
      {
        "jp": "今日の見通しについて話しましょう。",
        "hiragana": "きょうの みとおしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang prospek / pandangan ke depan hari ini."
      }
    ]
  },
  {
    "id": "112",
    "kanji": "懸念",
    "hiragana": "けねん",
    "romaji": "kenen",
    "meaning": "kekhawatiran (concern)",
    "shortExample": "Ada concern soal security.",
    "category": "Report",
    "level": "N4",
    "tip": "Resiko atau hal yang dikhawatirkan.",
    "examples": [
      {
        "jp": "懸念をお願いします。",
        "hiragana": "けねんを おねがいします。",
        "id": "Tolong terkait kekhawatiran (concern)."
      },
      {
        "jp": "懸念は終わりましたか？",
        "hiragana": "けねんは おわりましたか？",
        "id": "Apakah kekhawatiran (concern) sudah selesai?"
      },
      {
        "jp": "今日の懸念について話しましょう。",
        "hiragana": "きょうの けねんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kekhawatiran (concern) hari ini."
      }
    ]
  },
  {
    "id": "113",
    "kanji": "リスク",
    "hiragana": "りすく",
    "romaji": "risuku",
    "meaning": "risiko",
    "shortExample": "Resikonya terlalu tinggi.",
    "category": "Report",
    "level": "N4",
    "tip": "Manajemen risiko proyek.",
    "examples": [
      {
        "jp": "リスクをお願いします。",
        "hiragana": "りすくを おねがいします。",
        "id": "Tolong terkait risiko."
      },
      {
        "jp": "リスクは終わりましたか？",
        "hiragana": "りすくは おわりましたか？",
        "id": "Apakah risiko sudah selesai?"
      },
      {
        "jp": "今日のリスクについて話しましょう。",
        "hiragana": "きょうの りすくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang risiko hari ini."
      }
    ]
  },
  {
    "id": "114",
    "kanji": "効果",
    "hiragana": "こうか",
    "romaji": "kouka",
    "meaning": "efek / hasil",
    "shortExample": "Efeknya sangat bagus.",
    "category": "Report",
    "level": "N4",
    "tip": "Hasil positif dari sebuah implementasi.",
    "examples": [
      {
        "jp": "効果をお願いします。",
        "hiragana": "こうかを おねがいします。",
        "id": "Tolong terkait efek / hasil."
      },
      {
        "jp": "効果は終わりましたか？",
        "hiragana": "こうかは おわりましたか？",
        "id": "Apakah efek / hasil sudah selesai?"
      },
      {
        "jp": "今日の効果について話しましょう。",
        "hiragana": "きょうの こうかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang efek / hasil hari ini."
      }
    ]
  },
  {
    "id": "115",
    "kanji": "減少",
    "hiragana": "げんしょう",
    "romaji": "genshou",
    "meaning": "penurunan",
    "shortExample": "Jumlah bug menurun.",
    "category": "Report",
    "level": "N4",
    "tip": "Penurunan grafik metrik.",
    "examples": [
      {
        "jp": "減少をお願いします。",
        "hiragana": "げんしょうを おねがいします。",
        "id": "Tolong terkait penurunan."
      },
      {
        "jp": "減少は終わりましたか？",
        "hiragana": "げんしょうは おわりましたか？",
        "id": "Apakah penurunan sudah selesai?"
      },
      {
        "jp": "今日の減少について話しましょう。",
        "hiragana": "きょうの げんしょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang penurunan hari ini."
      }
    ]
  },
  {
    "id": "116",
    "kanji": "増加",
    "hiragana": "ぞうか",
    "romaji": "zouka",
    "meaning": "peningkatan",
    "shortExample": "Traffic user meningkat.",
    "category": "Report",
    "level": "N4",
    "tip": "Peningkatan grafik metrik.",
    "examples": [
      {
        "jp": "増加をお願いします。",
        "hiragana": "ぞうかを おねがいします。",
        "id": "Tolong terkait peningkatan."
      },
      {
        "jp": "増加は終わりましたか？",
        "hiragana": "ぞうかは おわりましたか？",
        "id": "Apakah peningkatan sudah selesai?"
      },
      {
        "jp": "今日の増加について話しましょう。",
        "hiragana": "きょうの ぞうかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang peningkatan hari ini."
      }
    ]
  },
  {
    "id": "117",
    "kanji": "不足",
    "hiragana": "ふそく",
    "romaji": "fusoku",
    "meaning": "kekurangan",
    "shortExample": "Resource kita kurang.",
    "category": "Report",
    "level": "N4",
    "tip": "Kekurangan budget, orang, atau waktu.",
    "examples": [
      {
        "jp": "不足をお願いします。",
        "hiragana": "ふそくを おねがいします。",
        "id": "Tolong terkait kekurangan."
      },
      {
        "jp": "不足は終わりましたか？",
        "hiragana": "ふそくは おわりましたか？",
        "id": "Apakah kekurangan sudah selesai?"
      },
      {
        "jp": "今日の不足について話しましょう。",
        "hiragana": "きょうの ふそくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kekurangan hari ini."
      }
    ]
  },
  {
    "id": "118",
    "kanji": "予算",
    "hiragana": "よさん",
    "romaji": "yosan",
    "meaning": "anggaran / budget",
    "shortExample": "Budgetnya habis.",
    "category": "Report",
    "level": "N4",
    "tip": "Terkait keuangan project.",
    "examples": [
      {
        "jp": "予算をお願いします。",
        "hiragana": "よさんを おねがいします。",
        "id": "Tolong terkait anggaran / budget."
      },
      {
        "jp": "予算は終わりましたか？",
        "hiragana": "よさんは おわりましたか？",
        "id": "Apakah anggaran / budget sudah selesai?"
      },
      {
        "jp": "今日の予算について話しましょう。",
        "hiragana": "きょうの よさんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang anggaran / budget hari ini."
      }
    ]
  },
  {
    "id": "119",
    "kanji": "利益",
    "hiragana": "りえき",
    "romaji": "rieki",
    "meaning": "keuntungan / profit",
    "shortExample": "Profit tahun ini naik.",
    "category": "Report",
    "level": "N4",
    "tip": "Fokus utama perusahaan.",
    "examples": [
      {
        "jp": "利益をお願いします。",
        "hiragana": "りえきを おねがいします。",
        "id": "Tolong terkait keuntungan / profit."
      },
      {
        "jp": "利益は終わりましたか？",
        "hiragana": "りえきは おわりましたか？",
        "id": "Apakah keuntungan / profit sudah selesai?"
      },
      {
        "jp": "今日の利益について話しましょう。",
        "hiragana": "きょうの りえきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang keuntungan / profit hari ini."
      }
    ]
  },
  {
    "id": "120",
    "kanji": "目標達成",
    "hiragana": "もくひょうたっせい",
    "romaji": "mokuhyoutassei",
    "meaning": "mencapai target",
    "shortExample": "Target tercapai!",
    "category": "Report",
    "level": "N4",
    "tip": "Laporan keberhasilan (KPI Met).",
    "examples": [
      {
        "jp": "目標達成をお願いします。",
        "hiragana": "もくひょうたっせいを おねがいします。",
        "id": "Tolong terkait mencapai target."
      },
      {
        "jp": "目標達成は終わりましたか？",
        "hiragana": "もくひょうたっせいは おわりましたか？",
        "id": "Apakah mencapai target sudah selesai?"
      },
      {
        "jp": "今日の目標達成について話しましょう。",
        "hiragana": "きょうの もくひょうたっせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mencapai target hari ini."
      }
    ]
  },
  {
    "id": "121",
    "kanji": "進捗",
    "hiragana": "しんちょく",
    "romaji": "shinchoku",
    "meaning": "progress pekerjaan",
    "shortExample": "Bagaimana progressnya?",
    "category": "Standup",
    "level": "N4",
    "tip": "Kata wajib saat daily standup untuk melaporkan status.",
    "examples": [
      {
        "jp": "進捗をお願いします。",
        "hiragana": "しんちょくを おねがいします。",
        "id": "Tolong terkait progress pekerjaan."
      },
      {
        "jp": "進捗は終わりましたか？",
        "hiragana": "しんちょくは おわりましたか？",
        "id": "Apakah progress pekerjaan sudah selesai?"
      },
      {
        "jp": "今日の進捗について話しましょう。",
        "hiragana": "きょうの しんちょくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang progress pekerjaan hari ini."
      }
    ]
  },
  {
    "id": "122",
    "kanji": "会議",
    "hiragana": "かいぎ",
    "romaji": "kaigi",
    "meaning": "meeting / rapat",
    "shortExample": "Meeting jam 10.",
    "category": "Standup",
    "level": "N5",
    "tip": "Jadwal meeting harian.",
    "examples": [
      {
        "jp": "会議をお願いします。",
        "hiragana": "かいぎを おねがいします。",
        "id": "Tolong terkait meeting / rapat."
      },
      {
        "jp": "会議は終わりましたか？",
        "hiragana": "かいぎは おわりましたか？",
        "id": "Apakah meeting / rapat sudah selesai?"
      },
      {
        "jp": "今日の会議について話しましょう。",
        "hiragana": "きょうの かいぎについて はなしましょう。",
        "id": "Mari kita bicarakan tentang meeting / rapat hari ini."
      }
    ]
  },
  {
    "id": "123",
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
    "id": "124",
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
    "id": "125",
    "kanji": "保留",
    "hiragana": "ほりゅう",
    "romaji": "horyuu",
    "meaning": "ditunda / pending",
    "shortExample": "Task ini di-pending.",
    "category": "Standup",
    "level": "N4",
    "tip": "Tiket ditahan karena menunggu blocker.",
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
    "id": "126",
    "kanji": "追加",
    "hiragana": "ついか",
    "romaji": "tsuika",
    "meaning": "penambahan",
    "shortExample": "Ada tambahan fitur.",
    "category": "Standup",
    "level": "N4",
    "tip": "Scope creep! Beritahu tim jika ada tambahan.",
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
    "id": "127",
    "kanji": "見積",
    "hiragana": "みつもり",
    "romaji": "mitsumori",
    "meaning": "estimasi",
    "shortExample": "Estimasi waktunya 3 hari.",
    "category": "Standup",
    "level": "N4",
    "tip": "Berapa story point untuk tiket ini?",
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
    "id": "128",
    "kanji": "更新",
    "hiragana": "こうしん",
    "romaji": "koushin",
    "meaning": "update",
    "shortExample": "Update data terbaru.",
    "category": "Standup",
    "level": "N4",
    "tip": "Memperbarui tiket Jira/Trello.",
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
    "id": "129",
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
    "id": "130",
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
    "id": "131",
    "kanji": "昨日",
    "hiragana": "きのう",
    "romaji": "kinou",
    "meaning": "kemarin",
    "shortExample": "Kemarin kerjain API.",
    "category": "Standup",
    "level": "N5",
    "tip": "Format standar standup.",
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
    "id": "132",
    "kanji": "今日",
    "hiragana": "きょう",
    "romaji": "kyou",
    "meaning": "hari ini",
    "shortExample": "Hari ini fix bug.",
    "category": "Standup",
    "level": "N5",
    "tip": "Format standar standup.",
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
    "id": "133",
    "kanji": "明日",
    "hiragana": "あした",
    "romaji": "ashita",
    "meaning": "besok",
    "shortExample": "Besok saya cuti.",
    "category": "Standup",
    "level": "N5",
    "tip": "Memberi tahu rencana besok.",
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
    "id": "134",
    "kanji": "問題",
    "hiragana": "もんだい",
    "romaji": "mondai",
    "meaning": "masalah / problem",
    "shortExample": "Ada blocker.",
    "category": "Standup",
    "level": "N5",
    "tip": "Apakah ada blocker/masalah?",
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
    "id": "135",
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
    "id": "136",
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
    "id": "137",
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
    "id": "138",
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
    "id": "139",
    "kanji": "調整",
    "hiragana": "ちょうせい",
    "romaji": "chousei",
    "meaning": "penyesuaian (adjust)",
    "shortExample": "Adjust jadwal rilis.",
    "category": "Standup",
    "level": "N4",
    "tip": "Menjadwalkan ulang.",
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
    "id": "140",
    "kanji": "引き続き",
    "hiragana": "ひきつづき",
    "romaji": "hikitsuzuki",
    "meaning": "melanjutkan",
    "shortExample": "Lanjut task kemarin.",
    "category": "Standup",
    "level": "N4",
    "tip": "Sering diucapkan saat melanjutkan kerjaan kemarin.",
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
    "id": "141",
    "kanji": "着手",
    "hiragana": "ちゃくしゅ",
    "romaji": "chakushu",
    "meaning": "mulai dikerjakan (start working)",
    "shortExample": "Mulai kerjakan tiket B.",
    "category": "Standup",
    "level": "N4",
    "tip": "Lebih profesional dari 'mulai'.",
    "examples": [
      {
        "jp": "着手をお願いします。",
        "hiragana": "ちゃくしゅを おねがいします。",
        "id": "Tolong terkait mulai dikerjakan (start working)."
      },
      {
        "jp": "着手は終わりましたか？",
        "hiragana": "ちゃくしゅは おわりましたか？",
        "id": "Apakah mulai dikerjakan (start working) sudah selesai?"
      },
      {
        "jp": "今日の着手について話しましょう。",
        "hiragana": "きょうの ちゃくしゅについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mulai dikerjakan (start working) hari ini."
      }
    ]
  },
  {
    "id": "142",
    "kanji": "予定通り",
    "hiragana": "よていどおり",
    "romaji": "yoteidoori",
    "meaning": "sesuai rencana",
    "shortExample": "Sesuai rencana, tidak ada delay.",
    "category": "Standup",
    "level": "N4",
    "tip": "Kondisi ideal.",
    "examples": [
      {
        "jp": "予定通りをお願いします。",
        "hiragana": "よていどおりを おねがいします。",
        "id": "Tolong terkait sesuai rencana."
      },
      {
        "jp": "予定通りは終わりましたか？",
        "hiragana": "よていどおりは おわりましたか？",
        "id": "Apakah sesuai rencana sudah selesai?"
      },
      {
        "jp": "今日の予定通りについて話しましょう。",
        "hiragana": "きょうの よていどおりについて はなしましょう。",
        "id": "Mari kita bicarakan tentang sesuai rencana hari ini."
      }
    ]
  },
  {
    "id": "143",
    "kanji": "前倒し",
    "hiragana": "まえだおし",
    "romaji": "maedaoshi",
    "meaning": "lebih awal dari jadwal",
    "shortExample": "Rilis lebih awal.",
    "category": "Standup",
    "level": "N4",
    "tip": "Luar biasa, task selesai lebih cepat.",
    "examples": [
      {
        "jp": "前倒しをお願いします。",
        "hiragana": "まえだおしを おねがいします。",
        "id": "Tolong terkait lebih awal dari jadwal."
      },
      {
        "jp": "前倒しは終わりましたか？",
        "hiragana": "まえだおしは おわりましたか？",
        "id": "Apakah lebih awal dari jadwal sudah selesai?"
      },
      {
        "jp": "今日の前倒しについて話しましょう。",
        "hiragana": "きょうの まえだおしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang lebih awal dari jadwal hari ini."
      }
    ]
  },
  {
    "id": "144",
    "kanji": "後ろ倒し",
    "hiragana": "うしろだおし",
    "romaji": "ushirodaoshi",
    "meaning": "diundur",
    "shortExample": "Jadwalnya diundur.",
    "category": "Standup",
    "level": "N4",
    "tip": "Karena ada blocker, jadwal dimundurkan.",
    "examples": [
      {
        "jp": "後ろ倒しをお願いします。",
        "hiragana": "うしろだおしを おねがいします。",
        "id": "Tolong terkait diundur."
      },
      {
        "jp": "後ろ倒しは終わりましたか？",
        "hiragana": "うしろだおしは おわりましたか？",
        "id": "Apakah diundur sudah selesai?"
      },
      {
        "jp": "今日の後ろ倒しについて話しましょう。",
        "hiragana": "きょうの うしろだおしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang diundur hari ini."
      }
    ]
  },
  {
    "id": "145",
    "kanji": "優先順位",
    "hiragana": "ゆうせんじゅんい",
    "romaji": "yuusenjun'i",
    "meaning": "prioritas",
    "shortExample": "Prioritasnya diubah.",
    "category": "Standup",
    "level": "N4",
    "tip": "Priority order di backlog.",
    "examples": [
      {
        "jp": "優先順位をお願いします。",
        "hiragana": "ゆうせんじゅんいを おねがいします。",
        "id": "Tolong terkait prioritas."
      },
      {
        "jp": "優先順位は終わりましたか？",
        "hiragana": "ゆうせんじゅんいは おわりましたか？",
        "id": "Apakah prioritas sudah selesai?"
      },
      {
        "jp": "今日の優先順位について話しましょう。",
        "hiragana": "きょうの ゆうせんじゅんいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang prioritas hari ini."
      }
    ]
  },
  {
    "id": "146",
    "kanji": "手戻り",
    "hiragana": "てもどり",
    "romaji": "temodori",
    "meaning": "mengulang kerjaan / rework",
    "shortExample": "Ada rework dari QA.",
    "category": "Standup",
    "level": "N4",
    "tip": "Hal yang paling dibenci developer.",
    "examples": [
      {
        "jp": "手戻りをお願いします。",
        "hiragana": "てもどりを おねがいします。",
        "id": "Tolong terkait mengulang kerjaan / rework."
      },
      {
        "jp": "手戻りは終わりましたか？",
        "hiragana": "てもどりは おわりましたか？",
        "id": "Apakah mengulang kerjaan / rework sudah selesai?"
      },
      {
        "jp": "今日の手戻りについて話しましょう。",
        "hiragana": "きょうの てもどりについて はなしましょう。",
        "id": "Mari kita bicarakan tentang mengulang kerjaan / rework hari ini."
      }
    ]
  },
  {
    "id": "147",
    "kanji": "差し戻し",
    "hiragana": "さしもどし",
    "romaji": "sashimodoshi",
    "meaning": "dikembalikan / direject",
    "shortExample": "PR-nya di-reject.",
    "category": "Standup",
    "level": "N4",
    "tip": "Kembali ke status sebelumnya.",
    "examples": [
      {
        "jp": "差し戻しをお願いします。",
        "hiragana": "さしもどしを おねがいします。",
        "id": "Tolong terkait dikembalikan / direject."
      },
      {
        "jp": "差し戻しは終わりましたか？",
        "hiragana": "さしもどしは おわりましたか？",
        "id": "Apakah dikembalikan / direject sudah selesai?"
      },
      {
        "jp": "今日の差し戻しについて話しましょう。",
        "hiragana": "きょうの さしもどしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang dikembalikan / direject hari ini."
      }
    ]
  },
  {
    "id": "148",
    "kanji": "取り消し",
    "hiragana": "とりけし",
    "romaji": "torikeshi",
    "meaning": "dibatalkan / cancel",
    "shortExample": "Rilisnya di-cancel.",
    "category": "Standup",
    "level": "N4",
    "tip": "Pembatalan.",
    "examples": [
      {
        "jp": "取り消しをお願いします。",
        "hiragana": "とりけしを おねがいします。",
        "id": "Tolong terkait dibatalkan / cancel."
      },
      {
        "jp": "取り消しは終わりましたか？",
        "hiragana": "とりけしは おわりましたか？",
        "id": "Apakah dibatalkan / cancel sudah selesai?"
      },
      {
        "jp": "今日の取り消しについて話しましょう。",
        "hiragana": "きょうの とりけしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang dibatalkan / cancel hari ini."
      }
    ]
  },
  {
    "id": "149",
    "kanji": "手待ち",
    "hiragana": "てまち",
    "romaji": "temachi",
    "meaning": "menunggu (idle)",
    "shortExample": "Lagi nunggu review (idle).",
    "category": "Standup",
    "level": "N4",
    "tip": "Sedang tidak ada kerjaan karena nunggu orang lain.",
    "examples": [
      {
        "jp": "手待ちをお願いします。",
        "hiragana": "てまちを おねがいします。",
        "id": "Tolong terkait menunggu (idle)."
      },
      {
        "jp": "手待ちは終わりましたか？",
        "hiragana": "てまちは おわりましたか？",
        "id": "Apakah menunggu (idle) sudah selesai?"
      },
      {
        "jp": "今日の手待ちについて話しましょう。",
        "hiragana": "きょうの てまちについて はなしましょう。",
        "id": "Mari kita bicarakan tentang menunggu (idle) hari ini."
      }
    ]
  },
  {
    "id": "150",
    "kanji": "並行",
    "hiragana": "へいこう",
    "romaji": "heikou",
    "meaning": "paralel",
    "shortExample": "Dikerjakan paralel.",
    "category": "Standup",
    "level": "N4",
    "tip": "Multitasking beberapa tiket sekaligus.",
    "examples": [
      {
        "jp": "並行をお願いします。",
        "hiragana": "へいこうを おねがいします。",
        "id": "Tolong terkait paralel."
      },
      {
        "jp": "並行は終わりましたか？",
        "hiragana": "へいこうは おわりましたか？",
        "id": "Apakah paralel sudah selesai?"
      },
      {
        "jp": "今日の並行について話しましょう。",
        "hiragana": "きょうの へいこうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang paralel hari ini."
      }
    ]
  },
  {
    "id": "151",
    "kanji": "合意",
    "hiragana": "ごうい",
    "romaji": "goui",
    "meaning": "kesepakatan",
    "shortExample": "Sudah ada kesepakatan dari klien.",
    "category": "Standup",
    "level": "N4",
    "tip": "Agreement dicapai.",
    "examples": [
      {
        "jp": "合意をお願いします。",
        "hiragana": "ごういを おねがいします。",
        "id": "Tolong terkait kesepakatan."
      },
      {
        "jp": "合意は終わりましたか？",
        "hiragana": "ごういは おわりましたか？",
        "id": "Apakah kesepakatan sudah selesai?"
      },
      {
        "jp": "今日の合意について話しましょう。",
        "hiragana": "きょうの ごういについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kesepakatan hari ini."
      }
    ]
  },
  {
    "id": "152",
    "kanji": "共有事項",
    "hiragana": "きょうゆうじこう",
    "romaji": "kyouyuujikou",
    "meaning": "hal yang ingin dibagikan",
    "shortExample": "Ada satu info untuk tim.",
    "category": "Standup",
    "level": "N4",
    "tip": "Pengumuman di akhir standup.",
    "examples": [
      {
        "jp": "共有事項をお願いします。",
        "hiragana": "きょうゆうじこうを おねがいします。",
        "id": "Tolong terkait hal yang ingin dibagikan."
      },
      {
        "jp": "共有事項は終わりましたか？",
        "hiragana": "きょうゆうじこうは おわりましたか？",
        "id": "Apakah hal yang ingin dibagikan sudah selesai?"
      },
      {
        "jp": "今日の共有事項について話しましょう。",
        "hiragana": "きょうの きょうゆうじこうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang hal yang ingin dibagikan hari ini."
      }
    ]
  },
  {
    "id": "153",
    "kanji": "休暇",
    "hiragana": "きゅうか",
    "romaji": "kyuuka",
    "meaning": "cuti / libur",
    "shortExample": "Jumat saya cuti.",
    "category": "Standup",
    "level": "N4",
    "tip": "Memberi tahu tim soal jadwal absen.",
    "examples": [
      {
        "jp": "休暇をお願いします。",
        "hiragana": "きゅうかを おねがいします。",
        "id": "Tolong terkait cuti / libur."
      },
      {
        "jp": "休暇は終わりましたか？",
        "hiragana": "きゅうかは おわりましたか？",
        "id": "Apakah cuti / libur sudah selesai?"
      },
      {
        "jp": "今日の休暇について話しましょう。",
        "hiragana": "きょうの きゅうかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang cuti / libur hari ini."
      }
    ]
  },
  {
    "id": "154",
    "kanji": "体調不良",
    "hiragana": "たいちょうふりょう",
    "romaji": "taichoufuryou",
    "meaning": "sakit / tidak enak badan",
    "shortExample": "Maaf, saya agak sakit.",
    "category": "Standup",
    "level": "N4",
    "tip": "Alasan umum untuk minta WFH atau istirahat.",
    "examples": [
      {
        "jp": "体調不良をお願いします。",
        "hiragana": "たいちょうふりょうを おねがいします。",
        "id": "Tolong terkait sakit / tidak enak badan."
      },
      {
        "jp": "体調不良は終わりましたか？",
        "hiragana": "たいちょうふりょうは おわりましたか？",
        "id": "Apakah sakit / tidak enak badan sudah selesai?"
      },
      {
        "jp": "今日の体調不良について話しましょう。",
        "hiragana": "きょうの たいちょうふりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang sakit / tidak enak badan hari ini."
      }
    ]
  },
  {
    "id": "155",
    "kanji": "通院",
    "hiragana": "つういん",
    "romaji": "tsuuin",
    "meaning": "pergi ke rumah sakit / klinik",
    "shortExample": "Siang nanti saya ke dokter.",
    "category": "Standup",
    "level": "N4",
    "tip": "Izin bentar untuk check up medis.",
    "examples": [
      {
        "jp": "通院をお願いします。",
        "hiragana": "つういんを おねがいします。",
        "id": "Tolong terkait pergi ke rumah sakit / klinik."
      },
      {
        "jp": "通院は終わりましたか？",
        "hiragana": "つういんは おわりましたか？",
        "id": "Apakah pergi ke rumah sakit / klinik sudah selesai?"
      },
      {
        "jp": "今日の通院について話しましょう。",
        "hiragana": "きょうの つういんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pergi ke rumah sakit / klinik hari ini."
      }
    ]
  },
  {
    "id": "156",
    "kanji": "早退",
    "hiragana": "そうたい",
    "romaji": "soutai",
    "meaning": "pulang lebih awal",
    "shortExample": "Hari ini saya pulang cepat.",
    "category": "Standup",
    "level": "N4",
    "tip": "Pulang sebelum jam kerja usai.",
    "examples": [
      {
        "jp": "早退をお願いします。",
        "hiragana": "そうたいを おねがいします。",
        "id": "Tolong terkait pulang lebih awal."
      },
      {
        "jp": "早退は終わりましたか？",
        "hiragana": "そうたいは おわりましたか？",
        "id": "Apakah pulang lebih awal sudah selesai?"
      },
      {
        "jp": "今日の早退について話しましょう。",
        "hiragana": "きょうの そうたいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pulang lebih awal hari ini."
      }
    ]
  },
  {
    "id": "157",
    "kanji": "遅刻",
    "hiragana": "ちこく",
    "romaji": "chikoku",
    "meaning": "terlambat",
    "shortExample": "Maaf telat masuk meeting.",
    "category": "Standup",
    "level": "N5",
    "tip": "Wajib minta maaf kalau telat di Jepang.",
    "examples": [
      {
        "jp": "遅刻をお願いします。",
        "hiragana": "ちこくを おねがいします。",
        "id": "Tolong terkait terlambat."
      },
      {
        "jp": "遅刻は終わりましたか？",
        "hiragana": "ちこくは おわりましたか？",
        "id": "Apakah terlambat sudah selesai?"
      },
      {
        "jp": "今日の遅刻について話しましょう。",
        "hiragana": "きょうの ちこくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang terlambat hari ini."
      }
    ]
  },
  {
    "id": "158",
    "kanji": "直行",
    "hiragana": "ちょっこう",
    "romaji": "chokkou",
    "meaning": "langsung pergi ke tujuan (klien)",
    "shortExample": "Besok saya langsung ke kantor klien.",
    "category": "Standup",
    "level": "N4",
    "tip": "Tidak mampir ke kantor sendiri dulu.",
    "examples": [
      {
        "jp": "直行をお願いします。",
        "hiragana": "ちょっこうを おねがいします。",
        "id": "Tolong terkait langsung pergi ke tujuan (klien)."
      },
      {
        "jp": "直行は終わりましたか？",
        "hiragana": "ちょっこうは おわりましたか？",
        "id": "Apakah langsung pergi ke tujuan (klien) sudah selesai?"
      },
      {
        "jp": "今日の直行について話しましょう。",
        "hiragana": "きょうの ちょっこうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang langsung pergi ke tujuan (klien) hari ini."
      }
    ]
  },
  {
    "id": "159",
    "kanji": "直帰",
    "hiragana": "ちょっき",
    "romaji": "chokki",
    "meaning": "langsung pulang (dari klien)",
    "shortExample": "Selesai meeting langsung pulang rumah.",
    "category": "Standup",
    "level": "N4",
    "tip": "Habis dari luar langsung balik rumah.",
    "examples": [
      {
        "jp": "直帰をお願いします。",
        "hiragana": "ちょっきを おねがいします。",
        "id": "Tolong terkait langsung pulang (dari klien)."
      },
      {
        "jp": "直帰は終わりましたか？",
        "hiragana": "ちょっきは おわりましたか？",
        "id": "Apakah langsung pulang (dari klien) sudah selesai?"
      },
      {
        "jp": "今日の直帰について話しましょう。",
        "hiragana": "きょうの ちょっきについて はなしましょう。",
        "id": "Mari kita bicarakan tentang langsung pulang (dari klien) hari ini."
      }
    ]
  },
  {
    "id": "160",
    "kanji": "引継ぎ",
    "hiragana": "ひきつぎ",
    "romaji": "hikitsugi",
    "meaning": "handover / serah terima",
    "shortExample": "Handover kerjaan sebelum cuti.",
    "category": "Standup",
    "level": "N4",
    "tip": "Oper tugas ke rekan setim.",
    "examples": [
      {
        "jp": "引継ぎをお願いします。",
        "hiragana": "ひきつぎを おねがいします。",
        "id": "Tolong terkait handover / serah terima."
      },
      {
        "jp": "引継ぎは終わりましたか？",
        "hiragana": "ひきつぎは おわりましたか？",
        "id": "Apakah handover / serah terima sudah selesai?"
      },
      {
        "jp": "今日の引継ぎについて話しましょう。",
        "hiragana": "きょうの ひきつぎについて はなしましょう。",
        "id": "Mari kita bicarakan tentang handover / serah terima hari ini."
      }
    ]
  },
  {
    "id": "161",
    "kanji": "会社",
    "hiragana": "かいしゃ",
    "romaji": "kaisha",
    "meaning": "kantor / perusahaan",
    "shortExample": "Saya bekerja di kantor.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Kata dasar untuk tempat kerja.",
    "examples": [
      {
        "jp": "会社をお願いします。",
        "hiragana": "かいしゃを おねがいします。",
        "id": "Tolong terkait kantor / perusahaan."
      },
      {
        "jp": "会社は終わりましたか？",
        "hiragana": "かいしゃは おわりましたか？",
        "id": "Apakah kantor / perusahaan sudah selesai?"
      },
      {
        "jp": "今日の会社について話しましょう。",
        "hiragana": "きょうの かいしゃについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kantor / perusahaan hari ini."
      }
    ]
  },
  {
    "id": "162",
    "kanji": "仕様",
    "hiragana": "しよう",
    "romaji": "shiyou",
    "meaning": "spesifikasi",
    "shortExample": "Cek spesifikasinya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Sangat penting, panduan dari PM/Klien.",
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
    "id": "163",
    "kanji": "残業",
    "hiragana": "ざんぎょう",
    "romaji": "zangyou",
    "meaning": "lembur",
    "shortExample": "Hari ini lembur.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Realita kerja di IT.",
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
    "id": "164",
    "kanji": "開発",
    "hiragana": "かいはつ",
    "romaji": "kaihatsu",
    "meaning": "pengembangan (development)",
    "shortExample": "Fase development dimulai.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Proses ngoding software.",
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
    "id": "165",
    "kanji": "担当",
    "hiragana": "たんとう",
    "romaji": "tantou",
    "meaning": "penanggung jawab (PIC)",
    "shortExample": "Siapa PIC-nya?",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Orang yang bertanggung jawab.",
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
    "id": "166",
    "kanji": "設計",
    "hiragana": "せっけい",
    "romaji": "sekkei",
    "meaning": "desain / arsitektur",
    "shortExample": "Desain sistemnya selesai.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Fase System Design.",
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
    "id": "167",
    "kanji": "条件",
    "hiragana": "じょうけん",
    "romaji": "jouken",
    "meaning": "kondisi / syarat",
    "shortExample": "Syaratnya apa saja?",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Kriteria approval.",
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
    "id": "168",
    "kanji": "設定",
    "hiragana": "せってい",
    "romaji": "settei",
    "meaning": "pengaturan (setting)",
    "shortExample": "Ubah settingnya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Konfigurasi sistem.",
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
    "id": "169",
    "kanji": "実行",
    "hiragana": "じっこう",
    "romaji": "jikkou",
    "meaning": "eksekusi / run",
    "shortExample": "Run scriptnya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Jalankan command.",
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
    "id": "170",
    "kanji": "保存",
    "hiragana": "ほぞん",
    "romaji": "hozon",
    "meaning": "simpan (save)",
    "shortExample": "Jangan lupa save.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Aksi di database.",
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
    "id": "171",
    "kanji": "管理",
    "hiragana": "かんり",
    "romaji": "kanri",
    "meaning": "manajemen / manage",
    "shortExample": "Manage servernya.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Mengontrol sesuatu.",
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
    "id": "172",
    "kanji": "運用",
    "hiragana": "うんよう",
    "romaji": "unyou",
    "meaning": "operasi (operation)",
    "shortExample": "Masuk fase operasional.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Fase setelah live production.",
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
    "id": "173",
    "kanji": "保守",
    "hiragana": "ほしゅ",
    "romaji": "hoshu",
    "meaning": "maintenance",
    "shortExample": "Sedang maintenance.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Perbaikan paska live.",
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
    "id": "174",
    "kanji": "機能",
    "hiragana": "きのう",
    "romaji": "kinou",
    "meaning": "fitur",
    "shortExample": "Fitur baru rilis.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Kapasitas aplikasi.",
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
    "id": "175",
    "kanji": "出社",
    "hiragana": "しゅっしゃ",
    "romaji": "shussha",
    "meaning": "datang ke kantor",
    "shortExample": "Besok saya WFO.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Bekerja dari kantor.",
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
    "id": "176",
    "kanji": "退社",
    "hiragana": "たいしゃ",
    "romaji": "taisha",
    "meaning": "pulang kerja",
    "shortExample": "Saya pulang dulu.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Atau bisa juga berarti resign (berhenti dari perusahaan).",
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
    "id": "177",
    "kanji": "有休",
    "hiragana": "ゆうきゅう",
    "romaji": "yuukyuu",
    "meaning": "cuti berbayar (PTO)",
    "shortExample": "Ambil cuti besok.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Hak cuti tahunan karyawan.",
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
    "id": "178",
    "kanji": "休憩",
    "hiragana": "きゅうけい",
    "romaji": "kyuukei",
    "meaning": "istirahat",
    "shortExample": "Waktunya istirahat.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Biasanya siang hari.",
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
    "id": "179",
    "kanji": "業務",
    "hiragana": "ぎょうむ",
    "romaji": "gyoumu",
    "meaning": "tugas / pekerjaan",
    "shortExample": "Fokus ke tugas utama.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Operasional sehari-hari.",
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
    "id": "180",
    "kanji": "同僚",
    "hiragana": "どうりょう",
    "romaji": "douryou",
    "meaning": "rekan kerja",
    "shortExample": "Rekan satu tim.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Orang di kantor.",
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
  },
  {
    "id": "181",
    "kanji": "上司",
    "hiragana": "じょうし",
    "romaji": "joushi",
    "meaning": "atasan",
    "shortExample": "Atasan saya galak.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Manager atau lead.",
    "examples": [
      {
        "jp": "上司をお願いします。",
        "hiragana": "じょうしを おねがいします。",
        "id": "Tolong terkait atasan."
      },
      {
        "jp": "上司は終わりましたか？",
        "hiragana": "じょうしは おわりましたか？",
        "id": "Apakah atasan sudah selesai?"
      },
      {
        "jp": "今日の上司について話しましょう。",
        "hiragana": "きょうの じょうしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang atasan hari ini."
      }
    ]
  },
  {
    "id": "182",
    "kanji": "部下",
    "hiragana": "ぶか",
    "romaji": "buka",
    "meaning": "bawahan",
    "shortExample": "Bawahan saya pintar.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Junior di tim.",
    "examples": [
      {
        "jp": "部下をお願いします。",
        "hiragana": "ぶかを おねがいします。",
        "id": "Tolong terkait bawahan."
      },
      {
        "jp": "部下は終わりましたか？",
        "hiragana": "ぶかは おわりましたか？",
        "id": "Apakah bawahan sudah selesai?"
      },
      {
        "jp": "今日の部下について話しましょう。",
        "hiragana": "きょうの ぶかについて はなしましょう。",
        "id": "Mari kita bicarakan tentang bawahan hari ini."
      }
    ]
  },
  {
    "id": "183",
    "kanji": "顧客",
    "hiragana": "こきゃく",
    "romaji": "kokyaku",
    "meaning": "pelanggan / klien",
    "shortExample": "Klien minta revisi.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Orang yang membayar kita.",
    "examples": [
      {
        "jp": "顧客をお願いします。",
        "hiragana": "こきゃくを おねがいします。",
        "id": "Tolong terkait pelanggan / klien."
      },
      {
        "jp": "顧客は終わりましたか？",
        "hiragana": "こきゃくは おわりましたか？",
        "id": "Apakah pelanggan / klien sudah selesai?"
      },
      {
        "jp": "今日の顧客について話しましょう。",
        "hiragana": "きょうの こきゃくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pelanggan / klien hari ini."
      }
    ]
  },
  {
    "id": "184",
    "kanji": "部署",
    "hiragana": "ぶしょ",
    "romaji": "busho",
    "meaning": "departemen",
    "shortExample": "Departemen IT.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Divisi dalam perusahaan.",
    "examples": [
      {
        "jp": "部署をお願いします。",
        "hiragana": "ぶしょを おねがいします。",
        "id": "Tolong terkait departemen."
      },
      {
        "jp": "部署は終わりましたか？",
        "hiragana": "ぶしょは おわりましたか？",
        "id": "Apakah departemen sudah selesai?"
      },
      {
        "jp": "今日の部署について話しましょう。",
        "hiragana": "きょうの ぶしょについて はなしましょう。",
        "id": "Mari kita bicarakan tentang departemen hari ini."
      }
    ]
  },
  {
    "id": "185",
    "kanji": "人事",
    "hiragana": "じんじ",
    "romaji": "jinji",
    "meaning": "HR / Personalia",
    "shortExample": "Tanya HRD.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Urusan gaji, rekrutmen.",
    "examples": [
      {
        "jp": "人事をお願いします。",
        "hiragana": "じんじを おねがいします。",
        "id": "Tolong terkait HR / Personalia."
      },
      {
        "jp": "人事は終わりましたか？",
        "hiragana": "じんじは おわりましたか？",
        "id": "Apakah HR / Personalia sudah selesai?"
      },
      {
        "jp": "今日の人事について話しましょう。",
        "hiragana": "きょうの じんじについて はなしましょう。",
        "id": "Mari kita bicarakan tentang HR / Personalia hari ini."
      }
    ]
  },
  {
    "id": "186",
    "kanji": "経理",
    "hiragana": "けいり",
    "romaji": "keiri",
    "meaning": "akuntansi / finance",
    "shortExample": "Claim transport ke Finance.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Urusan duit dan reimbursement.",
    "examples": [
      {
        "jp": "経理をお願いします。",
        "hiragana": "けいりを おねがいします。",
        "id": "Tolong terkait akuntansi / finance."
      },
      {
        "jp": "経理は終わりましたか？",
        "hiragana": "けいりは おわりましたか？",
        "id": "Apakah akuntansi / finance sudah selesai?"
      },
      {
        "jp": "今日の経理について話しましょう。",
        "hiragana": "きょうの けいりについて はなしましょう。",
        "id": "Mari kita bicarakan tentang akuntansi / finance hari ini."
      }
    ]
  },
  {
    "id": "187",
    "kanji": "営業",
    "hiragana": "えいぎょう",
    "romaji": "eigyou",
    "meaning": "sales / pemasaran",
    "shortExample": "Tim sales capai target.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Bagian yang jualan produk kita.",
    "examples": [
      {
        "jp": "営業をお願いします。",
        "hiragana": "えいぎょうを おねがいします。",
        "id": "Tolong terkait sales / pemasaran."
      },
      {
        "jp": "営業は終わりましたか？",
        "hiragana": "えいぎょうは おわりましたか？",
        "id": "Apakah sales / pemasaran sudah selesai?"
      },
      {
        "jp": "今日の営業について話しましょう。",
        "hiragana": "きょうの えいぎょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang sales / pemasaran hari ini."
      }
    ]
  },
  {
    "id": "188",
    "kanji": "契約",
    "hiragana": "けいやく",
    "romaji": "keiyaku",
    "meaning": "kontrak",
    "shortExample": "Tanda tangan kontrak.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Perjanjian kerja / SLA.",
    "examples": [
      {
        "jp": "契約をお願いします。",
        "hiragana": "けいやくを おねがいします。",
        "id": "Tolong terkait kontrak."
      },
      {
        "jp": "契約は終わりましたか？",
        "hiragana": "けいやくは おわりましたか？",
        "id": "Apakah kontrak sudah selesai?"
      },
      {
        "jp": "今日の契約について話しましょう。",
        "hiragana": "きょうの けいやくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kontrak hari ini."
      }
    ]
  },
  {
    "id": "189",
    "kanji": "給料",
    "hiragana": "きゅうりょう",
    "romaji": "kyuuryou",
    "meaning": "gaji",
    "shortExample": "Gajian cair!",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Hal yang ditunggu-tunggu.",
    "examples": [
      {
        "jp": "給料をお願いします。",
        "hiragana": "きゅうりょうを おねがいします。",
        "id": "Tolong terkait gaji."
      },
      {
        "jp": "給料は終わりましたか？",
        "hiragana": "きゅうりょうは おわりましたか？",
        "id": "Apakah gaji sudah selesai?"
      },
      {
        "jp": "今日の給料について話しましょう。",
        "hiragana": "きょうの きゅうりょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang gaji hari ini."
      }
    ]
  },
  {
    "id": "190",
    "kanji": "賞与",
    "hiragana": "しょうよ",
    "romaji": "shouyo",
    "meaning": "bonus",
    "shortExample": "Bonus akhir tahun.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Sering juga disebut 'boonasu'.",
    "examples": [
      {
        "jp": "賞与をお願いします。",
        "hiragana": "しょうよを おねがいします。",
        "id": "Tolong terkait bonus."
      },
      {
        "jp": "賞与は終わりましたか？",
        "hiragana": "しょうよは おわりましたか？",
        "id": "Apakah bonus sudah selesai?"
      },
      {
        "jp": "今日の賞与について話しましょう。",
        "hiragana": "きょうの しょうよについて はなしましょう。",
        "id": "Mari kita bicarakan tentang bonus hari ini."
      }
    ]
  },
  {
    "id": "191",
    "kanji": "採用",
    "hiragana": "さいよう",
    "romaji": "saiyou",
    "meaning": "rekrutmen / diterima kerja",
    "shortExample": "Diterima kerja di Google.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Proses hiring.",
    "examples": [
      {
        "jp": "採用をお願いします。",
        "hiragana": "さいようを おねがいします。",
        "id": "Tolong terkait rekrutmen / diterima kerja."
      },
      {
        "jp": "採用は終わりましたか？",
        "hiragana": "さいようは おわりましたか？",
        "id": "Apakah rekrutmen / diterima kerja sudah selesai?"
      },
      {
        "jp": "今日の採用について話しましょう。",
        "hiragana": "きょうの さいようについて はなしましょう。",
        "id": "Mari kita bicarakan tentang rekrutmen / diterima kerja hari ini."
      }
    ]
  },
  {
    "id": "192",
    "kanji": "退職",
    "hiragana": "たいしょく",
    "romaji": "taishoku",
    "meaning": "resign",
    "shortExample": "Saya mau resign bulan depan.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Berhenti bekerja dari perusahaan.",
    "examples": [
      {
        "jp": "退職をお願いします。",
        "hiragana": "たいしょくを おねがいします。",
        "id": "Tolong terkait resign."
      },
      {
        "jp": "退職は終わりましたか？",
        "hiragana": "たいしょくは おわりましたか？",
        "id": "Apakah resign sudah selesai?"
      },
      {
        "jp": "今日の退職について話しましょう。",
        "hiragana": "きょうの たいしょくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang resign hari ini."
      }
    ]
  },
  {
    "id": "193",
    "kanji": "規則",
    "hiragana": "きそく",
    "romaji": "kisoku",
    "meaning": "peraturan",
    "shortExample": "Patuhi aturan kantor.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Company rules.",
    "examples": [
      {
        "jp": "規則をお願いします。",
        "hiragana": "きそくを おねがいします。",
        "id": "Tolong terkait peraturan."
      },
      {
        "jp": "規則は終わりましたか？",
        "hiragana": "きそくは おわりましたか？",
        "id": "Apakah peraturan sudah selesai?"
      },
      {
        "jp": "今日の規則について話しましょう。",
        "hiragana": "きょうの きそくについて はなしましょう。",
        "id": "Mari kita bicarakan tentang peraturan hari ini."
      }
    ]
  },
  {
    "id": "194",
    "kanji": "研修",
    "hiragana": "けんしゅう",
    "romaji": "kenshuu",
    "meaning": "training / pelatihan",
    "shortExample": "Ikut training AWS.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Program orientasi untuk karyawan baru.",
    "examples": [
      {
        "jp": "研修をお願いします。",
        "hiragana": "けんしゅうを おねがいします。",
        "id": "Tolong terkait training / pelatihan."
      },
      {
        "jp": "研修は終わりましたか？",
        "hiragana": "けんしゅうは おわりましたか？",
        "id": "Apakah training / pelatihan sudah selesai?"
      },
      {
        "jp": "今日の研修について話しましょう。",
        "hiragana": "きょうの けんしゅうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang training / pelatihan hari ini."
      }
    ]
  },
  {
    "id": "195",
    "kanji": "出張",
    "hiragana": "しゅっちょう",
    "romaji": "shucchou",
    "meaning": "perjalanan dinas (business trip)",
    "shortExample": "Dinas ke Tokyo.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Dibiayai oleh perusahaan.",
    "examples": [
      {
        "jp": "出張をお願いします。",
        "hiragana": "しゅっちょうを おねがいします。",
        "id": "Tolong terkait perjalanan dinas (business trip)."
      },
      {
        "jp": "出張は終わりましたか？",
        "hiragana": "しゅっちょうは おわりましたか？",
        "id": "Apakah perjalanan dinas (business trip) sudah selesai?"
      },
      {
        "jp": "今日の出張について話しましょう。",
        "hiragana": "きょうの しゅっちょうについて はなしましょう。",
        "id": "Mari kita bicarakan tentang perjalanan dinas (business trip) hari ini."
      }
    ]
  },
  {
    "id": "196",
    "kanji": "交通費",
    "hiragana": "こうつうひ",
    "romaji": "koutsuuhi",
    "meaning": "biaya transportasi",
    "shortExample": "Reimburse ongkos kereta.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Biasanya ditanggung perusahaan di Jepang.",
    "examples": [
      {
        "jp": "交通費をお願いします。",
        "hiragana": "こうつうひを おねがいします。",
        "id": "Tolong terkait biaya transportasi."
      },
      {
        "jp": "交通費は終わりましたか？",
        "hiragana": "こうつうひは おわりましたか？",
        "id": "Apakah biaya transportasi sudah selesai?"
      },
      {
        "jp": "今日の交通費について話しましょう。",
        "hiragana": "きょうの こうつうひについて はなしましょう。",
        "id": "Mari kita bicarakan tentang biaya transportasi hari ini."
      }
    ]
  },
  {
    "id": "197",
    "kanji": "名刺",
    "hiragana": "めいし",
    "romaji": "meishi",
    "meaning": "kartu nama",
    "shortExample": "Ini kartu nama saya.",
    "category": "Kerja umum",
    "level": "N5",
    "tip": "Identitas wajib.",
    "examples": [
      {
        "jp": "名刺をお願いします。",
        "hiragana": "めいしを おねがいします。",
        "id": "Tolong terkait kartu nama."
      },
      {
        "jp": "名刺は終わりましたか？",
        "hiragana": "めいしは おわりましたか？",
        "id": "Apakah kartu nama sudah selesai?"
      },
      {
        "jp": "今日の名刺について話しましょう。",
        "hiragana": "きょうの めいしについて はなしましょう。",
        "id": "Mari kita bicarakan tentang kartu nama hari ini."
      }
    ]
  },
  {
    "id": "198",
    "kanji": "資料作成",
    "hiragana": "しりょうさくせい",
    "romaji": "shiryousakusei",
    "meaning": "pembuatan dokumen",
    "shortExample": "Bikin materi slide.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Kerjaan PM atau Sales.",
    "examples": [
      {
        "jp": "資料作成をお願いします。",
        "hiragana": "しりょうさくせいを おねがいします。",
        "id": "Tolong terkait pembuatan dokumen."
      },
      {
        "jp": "資料作成は終わりましたか？",
        "hiragana": "しりょうさくせいは おわりましたか？",
        "id": "Apakah pembuatan dokumen sudah selesai?"
      },
      {
        "jp": "今日の資料作成について話しましょう。",
        "hiragana": "きょうの しりょうさくせいについて はなしましょう。",
        "id": "Mari kita bicarakan tentang pembuatan dokumen hari ini."
      }
    ]
  },
  {
    "id": "199",
    "kanji": "備品",
    "hiragana": "びひん",
    "romaji": "bihin",
    "meaning": "perlengkapan kantor",
    "shortExample": "Minta mouse baru dari kantor.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Monitor, laptop, dll inventaris kantor.",
    "examples": [
      {
        "jp": "備品をお願いします。",
        "hiragana": "びひんを おねがいします。",
        "id": "Tolong terkait perlengkapan kantor."
      },
      {
        "jp": "備品は終わりましたか？",
        "hiragana": "びひんは おわりましたか？",
        "id": "Apakah perlengkapan kantor sudah selesai?"
      },
      {
        "jp": "今日の備品について話しましょう。",
        "hiragana": "きょうの びひんについて はなしましょう。",
        "id": "Mari kita bicarakan tentang perlengkapan kantor hari ini."
      }
    ]
  },
  {
    "id": "200",
    "kanji": "社内",
    "hiragana": "しゃない",
    "romaji": "shanai",
    "meaning": "internal perusahaan",
    "shortExample": "Info ini khusus internal.",
    "category": "Kerja umum",
    "level": "N4",
    "tip": "Rahasia perusahaan, jangan disebar.",
    "examples": [
      {
        "jp": "社内をお願いします。",
        "hiragana": "しゃないを おねがいします。",
        "id": "Tolong terkait internal perusahaan."
      },
      {
        "jp": "社内は終わりましたか？",
        "hiragana": "しゃないは おわりましたか？",
        "id": "Apakah internal perusahaan sudah selesai?"
      },
      {
        "jp": "今日の社内について話しましょう。",
        "hiragana": "きょうの しゃないについて はなしましょう。",
        "id": "Mari kita bicarakan tentang internal perusahaan hari ini."
      }
    ]
  }
];
