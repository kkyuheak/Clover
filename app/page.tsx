"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import style from "./page.module.css";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

export default function HomePage() {
  return (
    <div className={style.wrapper}>
      <div className={style.img_wrapper}>
        {/* Swiper 라이브러리 적용 */}
        <Swiper
          modules={[EffectFade, Autoplay]}
          autoplay={{ delay: 2000 }}
          effect="fade"
          loop={true}
          speed={2000}
        >
          <SwiperSlide>
            <div className={style.img_banner_1}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.img_banner_2}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.img_banner_3}></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={style.login_wrapper}>
        <div className={style.login_box}>
          <div className={style.logo}>C l o v e r</div>
          <form className={style.login_form}>
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              className={style.login_input}
              required
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className={style.login_input}
              required
            />
            <input
              type="submit"
              value="로그인"
              className={style.login_btn}
              disabled
            />
          </form>
          <div className={style.login_sns}>
            <p>또는</p>
            <div className={style.login_icon}>
              <img src="/img/google-logo.png" alt="google_icon" />
              <img src="/img/google-logo.png" alt="google_icon" />
              <img src="/img/google-logo.png" alt="google_icon" />
            </div>
          </div>
        </div>

        <div className={style.sign_up}>
          <p>계정이 없으신가요?</p>
          <Link href={"/signup"}>가입하기</Link>
        </div>
      </div>
    </div>
  );
}
