function makeN4GrammarEntry({ id, pattern, meanings, example, category = "grammar" }) {
  return { id, pattern, meanings, example, category };
}

// Genki II (3rd edition) - Standard N4 Grammar Patterns
export const n4GrammarData = [
  // Experience
  makeN4GrammarEntry({ id: "n4grammar-001", pattern: "Vたことがある", meanings: ["have done before"], example: "フランスへいったことがあります", category: "experience" }),
  
  // Prohibition & Requests
  makeN4GrammarEntry({ id: "n4grammar-002", pattern: "Vないでください", meanings: ["please don't do"], example: "ここでさけを飲まないでください", category: "requests" }),
  makeN4GrammarEntry({ id: "n4grammar-003", pattern: "Vちゃいけません", meanings: ["shouldn't do"], example: "しゅくだいをしないちゃいけません", category: "obligation" }),
  
  // Obligation & Necessity
  makeN4GrammarEntry({ id: "n4grammar-004", pattern: "Vなければなりません", meanings: ["must do"], example: "まいにちべんきょうしなければなりません", category: "obligation" }),
  makeN4GrammarEntry({ id: "n4grammar-005", pattern: "Vなくてもいいです", meanings: ["don't have to do"], example: "きょうはこなくてもいいです", category: "obligation" }),
  makeN4GrammarEntry({ id: "n4grammar-006", pattern: "～ほうがいいです", meanings: ["it's better to do"], example: "もっとベんきょうしたほうがいいです", category: "advice" }),
  
  // Intentions & Plans
  makeN4GrammarEntry({ id: "n4grammar-007", pattern: "Vようと思う", meanings: ["intend to do"], example: "らいねん日本へりゅうがくしようとおもいます", category: "intentions" }),
  makeN4GrammarEntry({ id: "n4grammar-008", pattern: "V予定です", meanings: ["be scheduled to do"], example: "あしたともだちとあう予定です", category: "plans" }),
  makeN4GrammarEntry({ id: "n4grammar-009", pattern: "Vつもりです", meanings: ["intend to"], example: "すぐに帰るつもりです", category: "intentions" }),
  
  // Completion & Resultant State
  makeN4GrammarEntry({ id: "n4grammar-010", pattern: "Vてしまう", meanings: ["finish doing", "do unintentionally"], example: "さいふをなくしてしまいました", category: "completion" }),
  makeN4GrammarEntry({ id: "n4grammar-011", pattern: "Vてある", meanings: ["have done (result remains)"], example: "ドアが開いてあります", category: "resultant" }),
  
  // Preparation & Advance Action
  makeN4GrammarEntry({ id: "n4grammar-012", pattern: "Vておく", meanings: ["do in advance"], example: "しゅくだいをしておきます", category: "preparation" }),
  makeN4GrammarEntry({ id: "n4grammar-013", pattern: "Vてくる", meanings: ["come doing"], example: "ケーキを買ってきました", category: "motion" }),
  makeN4GrammarEntry({ id: "n4grammar-014", pattern: "Vていく", meanings: ["go doing"], example: "えきへむかっていきます", category: "motion" }),
  
  // Trial & Attempt
  makeN4GrammarEntry({ id: "n4grammar-015", pattern: "Vてみる", meanings: ["try doing"], example: "このくすりをのんでみてください", category: "try" }),
  
  // Simultaneous & Continuous Actions
  makeN4GrammarEntry({ id: "n4grammar-016", pattern: "Vながら", meanings: ["while doing"], example: "おんがくをききながらべんきょうします", category: "simultaneous" }),
  makeN4GrammarEntry({ id: "n4grammar-017", pattern: "Vている", meanings: ["is doing", "have been doing"], example: "いま何をしていますか", category: "continuous" }),
  
  // Time Relations
  makeN4GrammarEntry({ id: "n4grammar-018", pattern: "Vたあとで", meanings: ["after doing"], example: "ごはんをたべたあとでさんぽします", category: "time" }),
  makeN4GrammarEntry({ id: "n4grammar-019", pattern: "Vるまえに", meanings: ["before doing"], example: "ねるまえにはをみがきます", category: "time" }),
  makeN4GrammarEntry({ id: "n4grammar-020", pattern: "Vたとき", meanings: ["at the time when"], example: "子どもだったときよく遊びました", category: "time" }),
  makeN4GrammarEntry({ id: "n4grammar-021", pattern: "V同時に", meanings: ["simultaneously with"], example: "会議が終わるのと同時に帰りました", category: "time" }),
  
  // Examples & Alternatives
  makeN4GrammarEntry({ id: "n4grammar-022", pattern: "VたりVたりする", meanings: ["do things like A and B"], example: "しゅうまつはえいがをみたりほんをよんだりします", category: "examples" }),
  
  // Reported Speech & Hearsay
  makeN4GrammarEntry({ id: "n4grammar-023", pattern: "Vそうです", meanings: ["I heard that"], example: "あしたはあめだそうです", category: "reported" }),
  
  // Appearance & Likelihood
  makeN4GrammarEntry({ id: "n4grammar-024", pattern: "Nのようだ", meanings: ["seems like", "appears as"], example: "かれはつかれているようです", category: "appearance" }),
  makeN4GrammarEntry({ id: "n4grammar-025", pattern: "Vそうにない", meanings: ["doesn't seem like"], example: "雨が降りそうにないです", category: "appearance" }),
  
  // Giving & Receiving
  makeN4GrammarEntry({ id: "n4grammar-026", pattern: "Vてくれる", meanings: ["someone does for me"], example: "ともだちがにもつをもってくれました", category: "giving" }),
  makeN4GrammarEntry({ id: "n4grammar-027", pattern: "Vてもらう", meanings: ["receive favor of someone doing"], example: "せんせいにおしえてもらいました", category: "giving" }),
  makeN4GrammarEntry({ id: "n4grammar-028", pattern: "Vてあげる", meanings: ["do for someone"], example: "いもうとにほんをかしてあげました", category: "giving" }),
  
  // Causative & Passive
  makeN4GrammarEntry({ id: "n4grammar-029", pattern: "Nに～させる", meanings: ["make someone do"], example: "子どもに野菜を食べさせます", category: "causative" }),
  makeN4GrammarEntry({ id: "n4grammar-030", pattern: "Nに～される", meanings: ["be done by"], example: "先生に褒められました", category: "passive" })
];
  makeN4GrammarEntry({ id: "n4grammar-026", pattern: "Vなさい", meanings: ["please do (instruction)"], example: "しずかにしなさい。", category: "commands" }),
  makeN4GrammarEntry({ id: "n4grammar-027", pattern: "Vることができる", meanings: ["can do"], example: "わたしはにほんごをはなすことができます。", category: "ability" }),
  makeN4GrammarEntry({ id: "n4grammar-028", pattern: "Vること", meanings: ["doing as noun"], example: "まいにちうんどうすることはたいせつです。", category: "nominalization" }),
  makeN4GrammarEntry({ id: "n4grammar-029", pattern: "Vるようにする", meanings: ["make an effort to do"], example: "はやくねるようにしています。", category: "habits" }),
  makeN4GrammarEntry({ id: "n4grammar-030", pattern: "Vるようになる", meanings: ["come to be able to do"], example: "にほんごがよめるようになりました。", category: "change" }),
  makeN4GrammarEntry({ id: "n4grammar-031", pattern: "Vたほうがいい", meanings: ["had better do"], example: "はやくびょういんへいったほうがいいです。", category: "advice" }),
  makeN4GrammarEntry({ id: "n4grammar-032", pattern: "Vないほうがいい", meanings: ["had better not do"], example: "むりをしないほうがいいです。", category: "advice" }),
  makeN4GrammarEntry({ id: "n4grammar-033", pattern: "Vるかもしれない", meanings: ["might do"], example: "あしたゆきがふるかもしれません。", category: "possibility" }),
  makeN4GrammarEntry({ id: "n4grammar-034", pattern: "Vるでしょう", meanings: ["probably will"], example: "かれはもうすぐくるでしょう。", category: "probability" }),
  makeN4GrammarEntry({ id: "n4grammar-035", pattern: "Vるなら", meanings: ["if (you) do"], example: "いくなら、わたしもいきます。", category: "conditions" }),
  makeN4GrammarEntry({ id: "n4grammar-036", pattern: "Vたら", meanings: ["if", "when"], example: "じかんがあったら、でかけましょう。", category: "conditions" }),
  makeN4GrammarEntry({ id: "n4grammar-037", pattern: "Vば", meanings: ["if"], example: "はやくいけば、まにあいます。", category: "conditions" }),
  makeN4GrammarEntry({ id: "n4grammar-038", pattern: "NしかVない", meanings: ["only", "nothing but"], example: "みずしかのみません。", category: "limits" }),
  makeN4GrammarEntry({ id: "n4grammar-039", pattern: "Nだけ", meanings: ["only", "just"], example: "きょうはパンだけたべました。", category: "limits" }),
  makeN4GrammarEntry({ id: "n4grammar-040", pattern: "Nでも", meanings: ["even", "or something"], example: "おちゃでものみませんか。", category: "suggestions" }),
  makeN4GrammarEntry({ id: "n4grammar-041", pattern: "Nにする", meanings: ["decide on"], example: "わたしはコーヒーにします。", category: "decisions" }),
  makeN4GrammarEntry({ id: "n4grammar-042", pattern: "Nについて", meanings: ["about", "regarding"], example: "にほんのれきしについてべんきょうします。", category: "topics" }),
  makeN4GrammarEntry({ id: "n4grammar-043", pattern: "Nによって", meanings: ["depending on", "by means of"], example: "ひとによってかんがえかたがちがいます。", category: "variation" }),
  makeN4GrammarEntry({ id: "n4grammar-044", pattern: "Nために", meanings: ["for", "because of"], example: "しごとのためにとうきょうへきました。", category: "purpose" }),
  makeN4GrammarEntry({ id: "n4grammar-045", pattern: "Vるために", meanings: ["in order to do"], example: "にほんごをべんきょうするために、にほんへきました。", category: "purpose" }),
  makeN4GrammarEntry({ id: "n4grammar-046", pattern: "Vるところ", meanings: ["about to do"], example: "いまからでかけるところです。", category: "time" }),
  makeN4GrammarEntry({ id: "n4grammar-047", pattern: "Vているところ", meanings: ["in the middle of doing"], example: "いましごとをしているところです。", category: "time" }),
  makeN4GrammarEntry({ id: "n4grammar-048", pattern: "Vたところ", meanings: ["just did"], example: "いまかえったところです。", category: "time" }),
  makeN4GrammarEntry({ id: "n4grammar-049", pattern: "Vずに", meanings: ["without doing"], example: "あさごはんをたべずにでかけました。", category: "negative" }),
  makeN4GrammarEntry({ id: "n4grammar-050", pattern: "Vることにする", meanings: ["decide to do"], example: "あしたはやくおきることにします。", category: "decisions" })
];
