"use client"

import { useEffect } from "react"

export default function NewsletterPage() {
  useEffect(() => {
    // ページロード時に最上部にスクロール
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto space-y-16 py-12">
      {/* ヒーローセクション */}
      <section className="space-y-8 text-center py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
          非エンジニアが行く！
          <br />
          生成AI最前線！
        </h1>
        <p className="mx-auto max-w-[800px] text-xl text-gray-600 leading-relaxed">
          ビジネス職向けに、生成AIの活用方法や最新情報をお伝えします。
        </p>
      </section>

      {/* メールマガジン説明セクション */}
      <section className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white rounded-xl border-2 p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">このメールマガジンについて</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              「非エンジニアが行く！生成AI最前線！」は、技術的な知識がなくても生成AIを活用したいビジネスパーソン向けのメールマガジンです。
            </p>
            <p>以下のような内容を、毎週お届けします：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>ビジネスシーンですぐに使える生成AIの活用テクニック</li>
              <li>最新の生成AIツールやサービスの紹介と使い方</li>
              <li>非エンジニアでも理解できる生成AI技術の解説</li>
              <li>生成AIを活用した業務効率化・創造性向上の事例</li>
            </ul>
          </div>
        </div>
      </section>

      {/* フォームセクション */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border-2 p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">メールマガジンに登録する</h2>

          {/* Mailchimp Form */}
          <div className="mx-auto">
            <div id="mc_embed_shell">
              <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html: `
            #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
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
                      <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-LNAME">
                        名字 <span className="asterisk">*</span>
                      </label>
                      <input type="text" name="LNAME" className="required text" id="mce-LNAME" required />
                      <span id="mce-LNAME-HELPERTEXT" className="helper_text">
                        山田
                      </span>
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">
                        名前 <span className="asterisk">*</span>
                      </label>
                      <input type="text" name="FNAME" className="required text" id="mce-FNAME" required />
                      <span id="mce-FNAME-HELPERTEXT" className="helper_text">
                        太郎
                      </span>
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">
                        Email Address <span className="asterisk">*</span>
                      </label>
                      <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                      <span id="mce-EMAIL-HELPERTEXT" className="helper_text">
                        XXXX@XXX.com
                      </span>
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
                          value="Subscribe"
                        />
                        <p style={{ margin: "0px auto" }}>
                          <a href="http://eepurl.com/jg2s62" title="Mailchimp - email marketing made easy and fun">
                            <span
                              style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}
                            >
                              <img
                                className="refferal_badge"
                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                alt="Intuit Mailchimp"
                                style={{
                                  width: "220px",
                                  height: "40px",
                                  display: "flex",
                                  padding: "2px 0px",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              />
                            </span>
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
        </div>
      </section>
    </div>
  )
}
