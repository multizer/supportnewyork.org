# Support New York — LLM Website Context

이 문서는 LLM과 개발자가 `supportnewyork.org`의 목적, 화면 구조, 실제 콘텐츠, 데이터 흐름을 저장소 탐색 없이 이해할 수 있도록 정리한 기준 문서다.

- 기준일: 2026-09-21
- 공개 URL: https://supportnewyork.org/
- 기본 언어: 영어 (`en`)
- 사이트 유형: Kenny Lee가 개인적으로 운영하는 무료 이웃 기술 지원 프로젝트
- 법적 성격: 등록된 비영리단체가 아님
- 운영 상태: Sanity의 현재 공지에 따르면 무료 서비스는 임시 중단 상태

## 1. 사이트의 핵심 의미

Support New York는 Kenny Lee가 뉴욕시의 이웃에게 일상적인 기술 문제를 무료로 도와주는 개인 자원봉사 프로젝트다. 주요 지원 범위는 보안 카메라, 비디오 도어벨, Wi-Fi, 스마트폰·컴퓨터 사용, 온라인 양식, 이메일 첨부 등이다. 전기 관련 문의는 자원봉사를 제안한 Star Delta Electric과 협의할 수 있다.

핵심 메시지는 다음과 같다.

> 복잡한 기술 용어를 몰라도 괜찮으며, 작은 질문도 환영한다. 먼저 상황을 설명하면 Kenny가 안전하게 도울 수 있는지 함께 판단한다.

서비스는 보통 일요일에, 사전 협의 후 Manhattan, Queens, Brooklyn에서 제공하는 것으로 설명되어 있다. 다만 현재 게시된 공지가 정적 안내보다 우선하며, 그 공지에는 서비스가 임시 중단되었다고 적혀 있다.

## 2. 사용자와 주요 행동

주요 사용자는 집 안의 기술 문제로 도움이 필요한 뉴욕 지역 주민, 가족·친구·보호자, 그리고 자원봉사를 원하는 사람이다.

사이트의 주된 행동 흐름은 다음과 같다.

1. 첫 화면에서 제공 가능한 도움의 성격을 이해한다.
2. `About Me`, `Before a Visit`에서 Kenny의 배경과 방문 안전 원칙을 확인한다.
3. `Tell Me What’s Going On`에서 연락 방법과 서비스 지역을 확인한다.
4. 전화 음성 메시지 또는 이메일로 이름, 필요한 도움, 대략적인 위치, 회신 수단을 전달한다.
5. 동적 공지에서 현재 운영 상태를 확인한다.

연락처:

- 전화: `917-818-0994`
- 이메일: `kennysam11354@gmail.com`
- 협력 업체: https://www.stardeltaelectric.com/

## 3. 페이지와 라우트

| URL | 역할 | 검색 노출 |
| --- | --- | --- |
| `/` | 모든 공개 콘텐츠가 이어지는 영어 단일 페이지 | 허용 |
| `/en` | `/`로 리다이렉트 | 별도 페이지 아님 |
| `/studio/*` | Sanity Studio 콘텐츠 관리 화면 | robots에서 차단 |
| `/sitemap.xml` | 공개 루트 페이지만 포함 | 허용 |
| `/robots.txt` | `/studio/` 제외 규칙과 sitemap 위치 제공 | 허용 |

공개 페이지의 실제 렌더링 순서:

1. 고정 헤더
2. 상단 고정 서비스 안내
3. Hero
4. Small Questions
5. About
6. Community Support / Star Delta Electric
7. How to Apply
8. Sunday Stories
9. Contact
10. Footer

헤더 메뉴는 페이지 내 앵커로 이동한다.

- `About Me` → `#about`
- `Sunday Stories` → `#stories`
- `Ask Kenny` → `#how-to-apply`

## 4. 화면에 표시되는 전체 정적 콘텐츠

아래 문구는 `src/i18n/dictionaries/en.json`에서 가져와 현재 공개 페이지에 표시된다.

### Header

- Brand: **Support New York**
- Navigation: **About Me**, **Sunday Stories**, **Ask Kenny**

### Hero

- Eyebrow: **Free, friendly tech help in New York City**
- Heading: **Hi, I’m Kenny. What can we figure out together?**
- Body: “If you have a security camera, video doorbell, Wi-Fi connection, or another device around the home that needs setting up or figuring out, feel free to ask. I’ve worked with technology for many years, and when we can find a time that works, I’m happy to come by and take a look with you.”
- Body: “It doesn’t have to be an installation or a technical problem, either. If you’re stuck on a computer, an online form, or something on your phone, small questions are welcome, too.”
- Body: “I offer my time freely because I enjoy helping. Sundays are usually when I have some time, so tell me what’s going on and we’ll see what works for both of us.”
- Link: **A little about me**

### Small Questions Are Always Welcome

- “Sometimes the hardest part is simply not having someone nearby to ask.”
- “Maybe a security camera needs to be connected, a video doorbell isn’t working as expected, or the Wi-Fi doesn’t reach part of your home. Or perhaps you need help filling out an online form, attaching a document to an email, or figuring out something confusing on your phone or computer. You may wonder, ‘Is this too small to ask about?’”
- Emphasis: **It isn’t.**
- “You don’t need to be good with technology or feel embarrassed about asking. Sometimes it just helps to have someone sit with you and work through it.”
- Closing: **Just tell me what you’re trying to do. You don’t have to know the technical words.**

### A Little About Me

- Photo caption: **That’s me—Kenny.**
- “I came to the United States from Korea in my twenties, and I’ve now lived and worked in New York and New Jersey for more than 30 years.”
- “When I stop and think about it, I’ve spent more of my life here than I did in Korea. This really is home to me.”
- “For many years, I ran technology businesses here—first NeoCymax in New York and later multizer.com in New Jersey. I helped people and small businesses with computers, Wi-Fi, security cameras (CCTV), and video doorbells. Those years taught me a lot about solving everyday problems, including the little ones that can be surprisingly frustrating.”
- “Life hasn’t always gone as planned, but I’ve learned something about myself: helping someone with even a small problem can make my day, too.”
- “Call it joy, purpose, or maybe even a little dopamine—but I’ve never forgotten the feeling of seeing someone light up because I was able to help. I enjoy that feeling, and I’d like more of those moments in my life. So when I have the time and energy, this is something I like to do.”
- “If there’s something I can safely help with, I’ll be glad to take a look. If it’s outside my experience, I’ll be honest and try to point you in the right direction.”
- Quote: “If helping someone makes their day a little easier and mine a little happier, that feels like a pretty good way to spend a Sunday.”

### A Thank-You to Star Delta Electric

- Eyebrow: **A little help from good people**
- “I know the team at Star Delta Electric through my project work. When I told them what I wanted to do here, they kindly offered to volunteer their time and electrical expertise, too.”
- “I’m really grateful they offered to lend a hand. It means I have people I can turn to when a neighbor needs help with an electrical problem.”

#### Electrical Questions Are Welcome, Too

- “If you have an electrical problem—a light, outlet, switch, doorbell, or something else you’re not sure about—please feel free to ask.”
- “Tell me what’s happening, even if you’re not sure what’s wrong. If it needs an electrician, I can help connect you with Star Delta and work out with them what help is possible and when.”
- “If a permit, material cost, or work beyond the volunteer scope is required, we’ll explain everything clearly before anything moves forward.”
- External link label: **Visit Star Delta Electric**

### Before a Visit

- “It’s natural to want to know a little about someone before inviting them in. We’ll talk first so you and your family can feel comfortable.”
- “We’ll confirm the request, location, and appointment details before I visit.”
- “I’m happy to show a photo ID when I arrive.”
- “I will never ask for your banking information or ask you to tell me a private password.”
- “A family member, friend, or caregiver is always welcome to be present.”

### Tell Me What’s Going On

- “You can call and leave me a voicemail, or send an email—whichever feels easier. Just tell me:”
- Step 1: “Your name and what you would like help with”
- Step 2: “Your general location or neighborhood”
- Step 3: “The best phone number or email for reaching you”
- Phone heading: **Call Kenny and Leave a Message**
- Phone: **917-818-0994**
- Email heading: **Prefer email? Write to Kenny**
- Email: **kennysam11354@gmail.com**
- “I work during the week, so I usually can’t answer the phone. If I don’t pick up, please leave your name, phone number, and a little about what you need help with. I’ll check your message and get back to you when I can. There’s no need to explain everything perfectly.”
- “A family member, friend, or neighbor is welcome to contact me on your behalf. You can also get in touch for someone who could use a hand—with their permission.”

#### Where and When I Can Help

- “I can visit Manhattan, Queens, and Brooklyn on Sundays by arrangement. Let me know your neighborhood so we can work out whether and when I can visit.”
- “This fits around my work and everyday life, so I won’t always be available. Feel free to ask, and we’ll see if we can find a time that works for both of us.”

### Stories from My Sunday Visits

현재 화면에는 스토리 카드 대신 다음 빈 상태 문구가 표시된다.

> There aren’t any stories posted here yet. I hope to use this space for small moments from my Sunday visits—the things we figure out together and what I learn along the way.

### Want to join me on a Sunday?

> If you’re a kind, patient person who would like to share some time or a useful skill with a neighbor, feel free to get in touch using the contact information above.

### Footer

- Tagline: **One neighbor helping another.**
- Disclaimer: **This is Kenny’s personal volunteer project and is not a registered nonprofit.**

저작권 연도는 서버의 현재 연도를 사용한다.

## 5. 현재 동적 콘텐츠 스냅샷

스토리는 Sanity의 `published` 관점에서 읽고, 페이지는 최대 60초 간격으로 재검증한다. 상단의 서비스 안내는 정적 문구다.

오른쪽 상단에는 고정 안내가 표시된다: **Hi, it’s Kenny. Visits are on pause for now. I’ll post an update when I’m back. Thanks for stopping by!**

### 저장되어 있지만 화면에서 제외되는 영어 스토리

다음 문서는 쿼리의 명시적 제외 조건 때문에 공개 화면에 표시되지 않는다.

- ID: `275b4027-34ad-4476-8e64-f637059963fd`
- Type: `story`
- Language: `en`
- Title: **Stories from My Sunday Visits**
- Quote: “Every Sunday, I'm not just fixing a device—I'm building a bridge to connection for my neighbors”
- Message: “Community Sundays are about more than just technology. They're about making sure our neighbors don't feel left behind in the digital age”
- Published: `2026-03-11T20:23:19.267Z`

Sanity에는 한국어 스토리와 공지도 각각 1건 저장되어 있지만, 공개 페이지가 `lang = "en"`으로 조회하므로 표시되지 않는다. 현재 스키마의 언어 선택지도 영어만 제공한다.

## 6. 기술 구조와 데이터 흐름

```text
src/app/layout.tsx
├─ 공통 SEO metadata와 JSON-LD
├─ Header (영문 dictionary)
├─ 현재 route의 page
└─ Footer (영문 dictionary)

src/app/page.tsx
├─ en.json 정적 콘텐츠 로드
├─ Sanity에서 language=en인 stories 조회
├─ 조회 실패 시 빈 배열로 계속 렌더링
└─ 각 section component에 dictionary와 CMS 데이터를 전달
```

주요 기술:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Sanity 5 / next-sanity
- Google Fonts: Merriweather(제목), Open Sans(본문)

레이아웃 특성:

- 콘텐츠 최대 폭은 대체로 `max-w-3xl`, 본문은 680px다.
- 흰색 배경, 회색 본문, amber 계열 강조색을 사용한다.
- 헤더는 화면 상단에 고정된다.
- 모바일에서는 햄버거 메뉴로 전환된다.
- 인물 사진은 `/images/kenny-lee-2026.png`다.
- Sanity 이미지는 `cdn.sanity.io`에서 최적화해 표시한다.

## 7. CMS 콘텐츠 모델

### `story`

| 필드 | 타입 | 의미 |
| --- | --- | --- |
| `title` | string | 카드 제목 |
| `quote` | string | 강조 인용문 |
| `message` | text | 본문 |
| `image` | image | 대표 이미지, hotspot 사용 |
| `language` | string | 현재 Studio 선택지는 `en`만 제공 |
| `publishedAt` | datetime | 내림차순 정렬 기준 |

공개 조회 조건은 `_type == "story" && language == "en"`이다. 특정 초기 홍보용 문서는 ID와 제목이 모두 일치할 때 제외된다.

### `notice`

| 필드 | 타입 | 의미 |
| --- | --- | --- |
| `title` | string | 공지 제목 |
| `content` | text | 줄바꿈을 보존하는 본문 |
| `language` | string | 현재 Studio 선택지는 `en`만 제공 |
| `isUrgent` | boolean | 긴급 공지의 amber 스타일 및 아이콘 결정 |
| `publishedAt` | datetime | 내림차순 정렬 기준 |

`notice` 유형은 Studio에 남아 있지만, 현재 공개 홈페이지에서는 조회하거나 렌더링하지 않는다.

## 8. SEO와 검색 엔진 표현

- Title: `Support New York | A Personal Volunteer Project`
- Description: `Kenny’s small personal project offering occasional, hands-on help with everyday technology in Manhattan, Queens, and Brooklyn.`
- Canonical: `/`
- Open Graph type: `website`
- Schema.org graph: `WebSite`, `Person(Kenny Lee)`
- 이미지 검색과 소셜 이미지 미리보기는 의도적으로 제한되어 있다.
- HTML의 `lang`은 `en`이다.

## 9. LLM이 답변할 때 지켜야 할 해석 원칙

1. 이 프로젝트를 등록된 비영리단체, 정부기관, 기업 또는 상시 운영되는 공식 서비스라고 설명하지 않는다.
2. 현재 운영 여부를 묻는 경우 정적 소개보다 최신 Sanity 공지를 우선한다. 이 문서의 기준일에는 서비스가 임시 중단 상태다.
3. 무료 지원이나 방문이 보장된다고 표현하지 않는다. 시간, 안전성, 범위, 위치를 먼저 협의해야 한다.
4. 전기 작업은 Kenny 개인이 모두 수행한다고 단정하지 않는다. 필요한 경우 Star Delta Electric과 가능 범위를 협의한다.
5. Kenny는 은행 정보나 개인 비밀번호를 요구하지 않는다고 명시되어 있다.
6. 서비스 지역은 Manhattan, Queens, Brooklyn이며, 일요일 사전 협의 방식이다.
7. 사용자가 기술 용어를 알 필요는 없고 가족·친구·이웃이 당사자 동의를 받아 대신 연락할 수 있다.

## 10. 소스 맵

| 관심사 | 기준 파일 |
| --- | --- |
| 페이지 조립과 CMS 조회 | `src/app/page.tsx` |
| 공통 레이아웃과 SEO | `src/app/layout.tsx` |
| 전체 정적 문구 | `src/i18n/dictionaries/en.json` |
| 화면 섹션 | `src/components/sections/*.tsx` |
| 내비게이션 | `src/components/Header.tsx` |
| 공통 하단 | `src/components/Footer.tsx` |
| CMS 쿼리 | `src/sanity/lib/queries.ts` |
| CMS 스키마 | `src/sanity/schemaTypes/*.ts` |
| 스타일 | `src/app/globals.css` |
| 공개 LLM 요약 | `public/llms.txt` |

정적 문구나 페이지 순서가 바뀌면 이 문서와 `public/llms.txt`를 함께 갱신해야 한다. 동적 콘텐츠 섹션은 스냅샷이므로 최신 Sanity 데이터와 다를 수 있다.
