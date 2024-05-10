import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";


export default function NewsreaderPage() {
  return (
    <>
     
      <div className="flex w-full flex-col gap-[45px] bg-white-A700 pt-[17px]">
  
     
        <div className="flex flex-col items-center">
        
          <Text as="p" className="ml-[349px] mt-[57px] self-start !text-indigo-900 md:ml-0">
            <span className="text-indigo-900">उत्तर प्रदेश /&nbsp;</span>
            <span className="text-indigo-900">सोनभद्र</span>
            <span className="text-indigo-900">/&nbsp;</span>
            <span className="text-red-A700">सलमान खान केस: CID करेगी आरोपी के सुसाइड की जांच...</span>
          </Text>

          {/* main news section */}
          <div className="mx-auto mt-[17px] w-full max-w-[1379px] md:p-5">
            <div className="flex items-start md:flex-col">
              <Img
                src="images/img_rectangle_69.png"
                alt="featured image"
                className="h-[887px] w-[21%] object-cover md:w-full"
              />
              <div className="ml-9 mt-3.5 flex flex-1 flex-col items-start md:ml-0 md:self-stretch">
                <Text size="4xl" as="p" className="w-full capitalize leading-[52px]">
                  सलमान खान केस: CID करेगी आरोपी के सुसाइड की जांच, दरी से फंदा बनाकर लॉकअप के बाथरूम में लगाई थी फांसी
                </Text>
                <Text size="lg" as="p" className="w-[96%] capitalize leading-[35px] !text-gray-600 md:w-full">
                  20 साल से अजेय असदुद्दीन को भाजपा की माधवी लता दे रहीं कड़ी चुनौती...धार्मिक स्थल की ओर तीर चलाने का
                  इशारा वोटरों के बीच चर्चा में     ओवैसी ने प्रचार में बीफ शॉप के पक्ष में लगवाए नारे।
                </Text>
                <Img
                  src="images/img_rectangle_7.png"
                  alt="secondary image"
                  className="mt-[7px] h-[343px] w-full object-cover md:h-auto"
                />


                <div className="flex flex-col gap-[38px] self-stretch">
                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex flex-col gap-[30px]">
                        <div className="flex items-center justify-between gap-5 sm:flex-col">
                          <div className="flex flex-wrap items-center">
                            <Img src="images/img_location.png" alt="location icon" className="h-[33px] object-cover" />
                            <Text size="md" as="p" className="self-start !font-medium lowercase">
                              नई दिल्ली{" "}
                            </Text>
                            <Text size="md" as="p" className="ml-[29px] self-end !font-medium lowercase !text-gray-600">
                              Wed, 01 May 2024 04:35 PM
                            </Text>
                          </div>
                          <div className="flex gap-2">
                            <Img
                              src="images/img_whatsapp.png"
                              alt="whatsapp icon"
                              className="h-[28px] w-[28px] object-cover"
                            />
                            <Img
                              src="images/img_facebook.png"
                              alt="facebook icon"
                              className="h-[28px] w-[28px] object-cover"
                            />
                            <Img
                              src="images/img_twitterx.png"
                              alt="twitter icon"
                              className="h-[28px] w-[28px] object-cover"
                            />
                          </div>
                        </div>
                        <Text size="md" as="p" className="lowercase leading-[34px]">
                          चार बार के सांसद और ऑल इंडिया मजलिस-ए-इत्तेहादुल मुस्लमीन (एआईएमआईएम) के अध्यक्ष असदुद्दीन
                          ओवैसी हैदराबाद लोकसभा का चुनाव कभी लड़े नहीं, बस जीते ही हैं। जीत का अंतर भी लाखों में...। कोई
                          पार्टी उनके सामने इतना दमदार उम्मीदवार ही नहीं उतार पाई कि उन्हें चुनाव लड़ना पड़ता। तभी, वह
                          20 साल से अजेय हैं। उनके पिता भी 20 साल तक यूं ही जीतते आए थे। हालांकि, इस बार का मामला अलग
                          है। उनका सीधा मुकाबला भाजपा की डॉ. माधवी लता से है। वह राजनीति में नई हैं, लेकिन वाकपटुता में
                          निपुण। तभी, पांचवीं बार जीतने के लिए ओवैसी को डटकर  चुनाव लड़ना पड़ रहा है।
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle_62.png"
                      alt="thumbnail image"
                      className="mt-[19px] h-[231px] object-cover"
                    />
                    <Text size="md" as="p" className="mt-[38px] lowercase leading-[34px]">
                      हैदराबादियों का ओवैसी परिवार की तीन पीढ़ियों से सियासी रिश्ता है। मौजूदा सांसद ओवैसी के दादा
                      अब्दुल वाहिद ओवैसी ने 1957 में हैदराबाद नगर निगम से सियासत शुरू की थी। उन्होंने बिखरी पड़ी मजलिस
                      और कौम को एक सूत्र में पिरोया। ओवैसी के पिता सुल्तान सलाहुद्दीन ओवैसी 1980 से 1999 तक लगातार छह
                      बार सांसद चुने गए। ओवैसी की सियासी राह हमेशा फूलों से ही भरी रही। 
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[30px]">
                    <Img src="images/img_rectangle_70.png" alt="analysis image" className="h-[343px] object-cover" />
                    <Text size="md" as="p" className="lowercase leading-[34px]">
                      वरिष्ठ पत्रकार राजेंद्र बताते हैं कि ओवैसी के पिता को 1996 में भाजपा के वेंकैया नायडू और 1999 में
                      बी.बाल रेड्डी से तगड़ी चुनौती मिली थी। फिर, फासला बढ़ता गया। 2008 में हैदराबाद सीट का परिसीमन हुआ
                      और ग्रामीण अंचल के तंदूर, विकाराबाद और चेवल्ला विधानसभा क्षेत्र कट गए। इससे हैदराबाद सीट पुराने
                      शहर तक सिमट गई। यहां से उन्हें हरा पाना बेहद कठिन है। 
                    </Text>
                  </div>
                </div>
                <Text size="3xl" as="p" className="ml-[5px] mt-10 lowercase !text-red-A700 md:ml-0">
                  सम्बंधित खबर
                </Text>

                {/* related news section */}
                <div className="ml-1.5 mt-3.5 flex gap-[26px] self-stretch md:ml-0 md:flex-col">
                  {[...Array(3)].map((d, index) => (
                    <div key={"relatedNewsList" + index} className="flex w-full flex-col gap-[9px]">
                      <Img
                        src="images/img_rectangle_68.png"
                        alt="related news image"
                        className="h-[127px] object-cover"
                      />
                      <Text size="xs" as="p" className="capitalize leading-[25px]">
                        सलमान खान केस: CID करेगी आरोपी के सुसाइड की जांच, दरी से फंदा बनाकर लॉकअप के बाथरूम में लगाई थी
                        फांसी
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              {/* additional reading section */}
              <div className="ml-2.5 mt-[17px] flex w-[26%] flex-col gap-[31px] md:ml-0 md:w-full">
                <Img src="images/img_rectangle_15.png" alt="sidebar image top" className="h-[250px] object-cover" />
                <Img src="images/img_rectangle_16.png" alt="sidebar image bottom" className="h-[355px] object-cover" />
                <div className="flex flex-col items-center rounded-[5px] bg-white-A700 pb-[21px] shadow-sm sm:pb-5">
                  <div className="flex w-[88%] flex-col gap-[19px] md:w-full md:p-5">
                    <div className="flex items-center gap-1.5">
                      <Heading size="s" as="h1" className="capitalize !text-red-A700">
                        यह भी पढ़े
                      </Heading>
                      <div className="mb-4 h-[5px] flex-1 self-end bg-red-A700" />
                    </div>
                    <div className="grid grid-cols-1 justify-center gap-px">
                      <div className="flex w-full">
                        <div className="flex w-full flex-col gap-3.5">
                          <div className="flex items-center gap-2.5">
                            <Img
                              src="images/img_rectangle_18.png"
                              alt="news item image"
                              className="h-[90px] w-[90px] rounded-[3px] object-cover"
                            />
                            <Text size="s" as="p" className="w-[69%] capitalize leading-[121%]">
                              चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी
                              रैली
                            </Text>
                          </div>
                          <div className="h-px bg-black-900_3f" />
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2.5">
                        <Img
                          src="images/img_rectangle_18.png"
                          alt="additional news image"
                          className="h-[90px] w-[90px] rounded-[3px] object-cover"
                        />
                        <Text size="s" as="p" className="w-[69%] capitalize leading-[121%]">
                          चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी रैली
                        </Text>
                      </div>
                      <div className="flex w-full flex-col gap-[13px]">
                        <div className="h-px bg-black-900_3f" />
                        <div className="flex items-center gap-2.5">
                          <Img
                            src="images/img_rectangle_18.png"
                            alt="image"
                            className="h-[90px] w-[90px] rounded-[3px] object-cover"
                          />
                          <Text size="s" as="p" className="w-[69%] capitalize leading-[121%]">
                            चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी
                            रैली
                          </Text>
                        </div>
                        <div className="h-px bg-black-900_3f" />
                      </div>
                      <div className="flex w-full flex-col gap-3.5">
                        <div className="flex items-center gap-2.5">
                          <Img
                            src="images/img_rectangle_18.png"
                            alt="image"
                            className="h-[90px] w-[90px] rounded-[3px] object-cover"
                          />
                          <Text size="s" as="p" className="w-[69%] capitalize leading-[121%]">
                            चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी
                            रैली
                          </Text>
                        </div>
                        <div className="h-px bg-black-900_3f" />
                      </div>
                      <div className="flex w-full items-center gap-2.5">
                        <Img
                          src="images/img_rectangle_18.png"
                          alt="image"
                          className="h-[90px] w-[90px] rounded-[3px] object-cover"
                        />
                        <Text size="s" as="p" className="w-[69%] capitalize leading-[121%]">
                          चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी रैली
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
