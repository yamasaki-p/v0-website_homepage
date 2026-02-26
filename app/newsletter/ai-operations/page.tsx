"use client"

import { useEffect } from "react"

export default function AIOperationsNewsletterPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById("newsletter-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="container mx-auto space-y-16 py-12 px-4 md:px-6">
      {/* ファーストビュー */}
      <section className="space-y-6 text-center py-14 md:py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50 rounded-3xl px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-snug md:leading-tight">
          AI活用を、
          <br className="md:hidden" />
          現場で動かす。
        </h1>
        <p className="mx-auto max-w-[600px] text-base md:text-lg text-gray-700 leading-relaxed">
          ツールの話だけでなく、プロジェクト推進・人材育成まで。
          <br className="hidden md:block" />
          上流の戦略と現場への埋め込みをつなぐ実践知をお届けします。
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          無料で購読する
        </button>
        <div className="space-y-1.5 pt-1">
          <p className="text-sm md:text-base text-gray-600">無料・月1回前後・いつでも解除可能</p>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">実務で使えるテーマを厳選してお届けします</p>
        </div>
      </section>

      {/* こんなお悩みはありませんか */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          こんなお悩みはありませんか？
        </h2>
        <div className="bg-white rounded-xl border p-6 md:p-8 shadow-sm">
          <ul className="space-y-4 md:space-y-5 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-0.5 text-sm">●</span>
              <span className="text-base md:text-lg leading-relaxed">AIツールは増えているが、自社の業務にどう落とし込めばいいかわからない</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-0.5 text-sm">●</span>
              <span className="text-base md:text-lg leading-relaxed">現場でAI活用を進めたいが、上層部や他部署との合意形成が難しい</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-0.5 text-sm">●</span>
              <span className="text-base md:text-lg leading-relaxed">社員のAIリテラシー向上が必要だが、何から始めればいいか迷う</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-0.5 text-sm">●</span>
              <span className="text-base md:text-lg leading-relaxed">AIニュースは追いかけているが、実務に使える情報が少ない</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-0.5 text-sm">●</span>
              <span className="text-base md:text-lg leading-relaxed">プロジェクトを推進したいが、技術と現場の橋渡しができる人がいない</span>
            </li>
          </ul>
        </div>
      </section>

      {/* このメルマガで得られること */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          このメルマガで得られること
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800">意思決定に使える視点</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              AIの技術動向を、現場の判断材料に変えて解説。「で、うちは何をすべき？」に答えます。
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800">プロジェクト推進のヒント</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              AI導入の進め方、チームの巻き込み方、失敗しやすいポイントなど実践知を共有。
            </p>
          </div>
          <div className="bg-white rounded-xl border p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800">人材育成の考え方</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              社員のAIリテラシーをどう上げるか。研修設計や学習ロードマップの考え方を紹介。
            </p>
          </div>
        </div>
      </section>

      {/* 配信内容の例 */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          配信内容の例
        </h2>
        <div className="bg-slate-50 rounded-xl border p-6 md:p-8">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span className="text-base md:text-lg leading-relaxed">「AI活用プロジェクト」を動かすための社内説得術</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span className="text-base md:text-lg leading-relaxed">非エンジニア向けAI研修で押さえるべき3つのポイント</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span className="text-base md:text-lg leading-relaxed">生成AIツールの選定基準：自社に合うものを見極めるには</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span className="text-base md:text-lg leading-relaxed">PMが知っておくべきAIプロジェクトの落とし穴</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-0.5">▸</span>
              <span className="text-base md:text-lg leading-relaxed">今月の注目AI動向：実務視点で読み解く</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 向いている人 / 向いていない人 */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          このメルマガが向いている人・向いていない人
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
            <h3 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
              <span>✓</span> 向いている人
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <li>• 事業部やチームでAI活用を推進する立場の方</li>
              <li>• PM / PMOとしてAI関連プロジェクトに関わる方</li>
              <li>• 人材育成・研修設計を担当している方</li>
              <li>• 企画・新規事業でAI活用を検討している方</li>
              <li>• 小規模企業の経営者・実務責任者</li>
              <li>• 技術と現場の橋渡しをしたい方</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-600 flex items-center gap-2">
              <span>×</span> 向いていない人
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
              <li>• AIの最新ニュースを網羅的に知りたい方</li>
              <li>• コード解説やエンジニア向け技術情報を求める方</li>
              <li>• 毎日配信のAIニュースレターを探している方</li>
              <li>• 理論や研究動向を深く追いたい方</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 発行者について */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 md:p-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">発行者について</h3>
          <div className="space-y-2">
            <p className="text-base md:text-lg font-bold text-gray-800">
              山崎 亮
              <span className="text-sm font-normal text-gray-500 ml-2">
                AI活用支援 / PMO / 人材育成支援
              </span>
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              支援現場で得た知見をもとに、AI活用・プロジェクト推進・人材育成を「現場で使える形」で整理してお届けしています。
              <br className="hidden md:block" />
              新卒でDeNA入社、その後外資系コンサルティングファームを経て独立。
            </p>
          </div>
        </div>
      </section>

      {/* フォーム直前CTA */}
      <section className="max-w-2xl mx-auto text-center space-y-3">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          AI活用を、「知っている」から「現場で動かせる」へ。
        </p>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          実務で使えるテーマを厳選してお届けします。
        </p>
      </section>

      {/* フォームセクション */}
      <section id="newsletter-form" className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border-2 p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            メールマガジンに登録する
          </h2>

          {/* Mailchimp Form - Mobile Responsive */}
          <div className="mx-auto w-full">
            <div id="mc_embed_shell">
              <link
                href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
                rel="stylesheet"
                type="text/css"
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: `
                    #mc_embed_signup {
                      background: #fff;
                      clear: left;
                      font: 14px Helvetica, Arial, sans-serif;
                      width: 100%;
                      max-width: 100%;
                    }
                    #mc_embed_signup form {
                      padding: 0;
                    }
                    #mc_embed_signup .mc-field-group {
                      width: 100%;
                      padding-bottom: 16px;
                    }
                    #mc_embed_signup .mc-field-group label {
                      font-weight: 600;
                      color: #374151;
                      margin-bottom: 6px;
                      display: block;
                    }
                    #mc_embed_signup .mc-field-group input {
                      width: 100%;
                      max-width: 100%;
                      box-sizing: border-box;
                      padding: 12px;
                      font-size: 16px;
                      border: 1px solid #d1d5db;
                      border-radius: 6px;
                    }
                    #mc_embed_signup .mc-field-group input:focus {
                      outline: none;
                      border-color: #2563eb;
                      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
                    }
                    #mc_embed_signup .mc-field-group input::placeholder {
                      color: #9ca3af;
                    }
                    #mc_embed_signup .asterisk {
                      color: #dc2626;
                    }
                    #mc_embed_signup .button,
                    #mc_embed_signup input[type="submit"],
                    #mc_embed_signup #mc-embedded-subscribe {
                      width: 100%;
                      max-width: 100%;
                      height: auto;
                      min-height: 48px;
                      margin: 8px 0 0 0;
                      padding: 14px 24px;
                      font-size: 16px;
                      font-weight: 600;
                      line-height: 1.4;
                      color: #fff;
                      background-color: #2563eb;
                      border: none;
                      border-radius: 8px;
                      cursor: pointer;
                      transition: background-color 0.2s;
                      box-sizing: border-box;
                    }
                    #mc_embed_signup .button:hover,
                    #mc_embed_signup input[type="submit"]:hover,
                    #mc_embed_signup #mc-embedded-subscribe:hover {
                      background-color: #1d4ed8;
                    }
                    #mc_embed_signup h2 {
                      display: none;
                    }
                    #mc_embed_signup .indicates-required {
                      text-align: left;
                      margin-bottom: 16px;
                      font-size: 13px;
                      color: #6b7280;
                    }
                    #mc_embed_signup .optionalParent {
                      margin-top: 16px;
                    }
                    #mc_embed_signup .optionalParent .clear.foot {
                      text-align: center;
                    }
                    #mc_embed_signup .refferal_badge {
                      max-width: 100%;
                      height: auto;
                    }
                    #mc_embed_signup .optionalParent p {
                      margin-top: 12px;
                    }
                    @media screen and (max-width: 640px) {
                      #mc_embed_signup .mc-field-group {
                        padding-bottom: 12px;
                      }
                      #mc_embed_signup .mc-field-group input {
                        font-size: 16px;
                        padding: 14px;
                      }
                      #mc_embed_signup .button,
                      #mc_embed_signup input[type="submit"],
                      #mc_embed_signup #mc-embedded-subscribe {
                        font-size: 16px;
                        padding: 16px;
                        min-height: 52px;
                      }
                    }
                  `,
                }}
              />
              <div id="mc_embed_signup">
                <form
                  action="https://growthcommit.us6.list-manage.com/subscribe/post?u=2d6d03fc73a4ff4ff1acfe08f&amp;id=f281adc417&amp;f_id=00593ce0f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                >
                  <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div className="indicates-required">
                      <span className="asterisk">*</span> は必須項目です
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-LNAME">
                        姓 <span className="asterisk">*</span>
                      </label>
                      <input type="text" name="LNAME" className="required text" id="mce-LNAME" required placeholder="山田" />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">
                        名 <span className="asterisk">*</span>
                      </label>
                      <input type="text" name="FNAME" className="required text" id="mce-FNAME" required placeholder="太郎" />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">
                        メールアドレス <span className="asterisk">*</span>
                      </label>
                      <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required placeholder="example@email.com" />
                    </div>
                    <div hidden>
                      <input type="hidden" name="tags" value="1999662,1999663" />
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                      <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                      <input type="text" name="b_2d6d03fc73a4ff4ff1acfe08f_f281adc417" tabIndex={-1} />
                    </div>
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button"
                          value="無料で登録する"
                        />
                        <p style={{ marginTop: "12px", textAlign: "center" }}>
                          <a href="http://eepurl.com/jg2s62" title="Mailchimp - email marketing made easy and fun">
                            <img
                              className="refferal_badge"
                              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                              alt="Intuit Mailchimp"
                              style={{
                                width: "160px",
                                height: "28px",
                                display: "inline-block",
                                opacity: 0.7,
                              }}
                            />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <script
                type="text/javascript"
                src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
              ></script>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function($) {
                      window.fnames = new Array();
                      window.ftypes = new Array();
                      fnames[2]='LNAME';
                      ftypes[2]='text';
                      fnames[1]='FNAME';
                      ftypes[1]='text';
                      fnames[0]='EMAIL';
                      ftypes[0]='email';
                      fnames[3]='ADDRESS';
                      ftypes[3]='address';
                      fnames[4]='PHONE';
                      ftypes[4]='phone';
                      fnames[5]='BIRTHDAY';
                      ftypes[5]='birthday';
                      fnames[6]='COMPANY';
                      ftypes[6]='text';
                    }(jQuery));
                    var $mcj = jQuery.noConflict(true);
                  `,
                }}
              ></script>
            </div>
          </div>

          <div className="text-center mt-4 space-y-1">
            <p className="text-sm text-gray-500">無料・月1回前後・いつでも解除可能</p>
            <p className="text-xs text-gray-400">実務で使えるテーマを厳選してお届けします</p>
          </div>
        </div>
      </section>

    </div>
  )
}
