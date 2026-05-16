function makeSentenceEntry({ id, japanese, englishAnswers, category, clozePrompt, clozeAnswers }) {
  return { id, japanese, englishAnswers, category, clozePrompt, clozeAnswers };
}

export const n5SentencesData = [
  makeSentenceEntry({ id: "sentence-001", japanese: "わたしはがくせいです。", englishAnswers: ["I am a student."], category: "self", clozePrompt: "わたし___がくせいです。", clozeAnswers: ["は"] }),
  makeSentenceEntry({ id: "sentence-002", japanese: "あしたがっこうにいきます。", englishAnswers: ["I will go to school tomorrow."], category: "daily", clozePrompt: "あしたがっこう___いきます。", clozeAnswers: ["に"] }),
  makeSentenceEntry({ id: "sentence-003", japanese: "まいあさコーヒーをのみます。", englishAnswers: ["I drink coffee every morning."], category: "daily", clozePrompt: "まいあさコーヒー___のみます。", clozeAnswers: ["を"] }),
  makeSentenceEntry({ id: "sentence-004", japanese: "これはわたしのほんです。", englishAnswers: ["This is my book."], category: "objects", clozePrompt: "これはわたし___ほんです。", clozeAnswers: ["の"] }),
  makeSentenceEntry({ id: "sentence-005", japanese: "ともだちとえいがをみました。", englishAnswers: ["I watched a movie with a friend."], category: "past", clozePrompt: "ともだち___えいがをみました。", clozeAnswers: ["と"] }),
  makeSentenceEntry({ id: "sentence-006", japanese: "へやにねこがいます。", englishAnswers: ["There is a cat in the room."], category: "existence", clozePrompt: "へや___ねこがいます。", clozeAnswers: ["に"] }),
  makeSentenceEntry({ id: "sentence-007", japanese: "つくえのうえにほんがあります。", englishAnswers: ["There is a book on the desk."], category: "existence", clozePrompt: "つくえのうえ___ほんがあります。", clozeAnswers: ["に"] }),
  makeSentenceEntry({ id: "sentence-008", japanese: "しゅうまつににほんごをべんきょうします。", englishAnswers: ["I study Japanese on weekends."], category: "study", clozePrompt: "しゅうまつににほんご___べんきょうします。", clozeAnswers: ["を"] }),
  makeSentenceEntry({ id: "sentence-009", japanese: "このみせはやすいです。", englishAnswers: ["This shop is cheap."], category: "adjectives", clozePrompt: "このみせ___やすいです。", clozeAnswers: ["は"] }),
  makeSentenceEntry({ id: "sentence-010", japanese: "きのうはあめでした。", englishAnswers: ["It was rainy yesterday."], category: "past", clozePrompt: "きのう___あめでした。", clozeAnswers: ["は"] }),
  makeSentenceEntry({ id: "sentence-011", japanese: "わたしのちちはせんせいです。", englishAnswers: ["My father is a teacher."], category: "family", clozePrompt: "わたし___ちちはせんせいです。", clozeAnswers: ["の"] }),
  makeSentenceEntry({ id: "sentence-012", japanese: "にちようびはうちでやすみます。", englishAnswers: ["I rest at home on Sunday."], category: "daily", clozePrompt: "にちようびはうち___やすみます。", clozeAnswers: ["で"] }),
  makeSentenceEntry({ id: "sentence-013", japanese: "にほんごはおもしろいです。", englishAnswers: ["Japanese is interesting."], category: "study", clozePrompt: "にほんご___おもしろいです。", clozeAnswers: ["は"] }),
  makeSentenceEntry({ id: "sentence-014", japanese: "このほんをよんでください。", englishAnswers: ["Please read this book."], category: "requests", clozePrompt: "このほんをよんで___。", clozeAnswers: ["ください"] }),
  makeSentenceEntry({ id: "sentence-015", japanese: "ここでしゃしんをとってもいいです。", englishAnswers: ["You may take pictures here."], category: "permission", clozePrompt: "ここでしゃしんをとって___です。", clozeAnswers: ["もいい"] }),
  makeSentenceEntry({ id: "sentence-016", japanese: "ここでたばこをすってはいけません。", englishAnswers: ["You must not smoke here."], category: "rules", clozePrompt: "ここでたばこをすって___。", clozeAnswers: ["はいけません"] }),
  makeSentenceEntry({ id: "sentence-017", japanese: "いっしょにひるごはんをたべましょう。", englishAnswers: ["Let's eat lunch together."], category: "invitations", clozePrompt: "いっしょにひるごはんをたべ___。", clozeAnswers: ["ましょう"] }),
  makeSentenceEntry({ id: "sentence-018", japanese: "もうしゅくだいをしました。", englishAnswers: ["I already did my homework."], category: "time", clozePrompt: "___しゅくだいをしました。", clozeAnswers: ["もう"] }),
  makeSentenceEntry({ id: "sentence-019", japanese: "まだばんごはんをたべていません。", englishAnswers: ["I have not eaten dinner yet."], category: "time", clozePrompt: "___ばんごはんをたべていません。", clozeAnswers: ["まだ"] }),
  makeSentenceEntry({ id: "sentence-020", japanese: "きょうはほんをよんだりおんがくをきいたりします。", englishAnswers: ["Today I do things like read books and listen to music."], category: "habits", clozePrompt: "きょうはほんをよんだりおんがくをきいたり___。", clozeAnswers: ["します"] })
];
