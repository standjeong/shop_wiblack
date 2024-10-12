## 🖤WiBlack🤍 소개
> '**WiBlack**'은 Black & White 색상의 의류만 판매하는 컨셉의 쇼핑몰입니다.

- 홈페이지 구조
  - 메인
  - 상품 페이지(Black, White)
  - 상품 상세 페이지
  - 장바구니 페이지
  - 상품 등록 페이지
  <details>
    <summary> <h3> Wireframe & UI design 확인하기 </h3> </summary>
    <div markdown="1">
      <img src='https://github.com/user-attachments/assets/1b8b7dcc-51d7-4f81-952f-25745e513e59' />
      <img src='https://github.com/user-attachments/assets/4aa38f6d-4fb9-4752-b0a7-2a557358f797'/>
    </div>
  </details>
   
  
- 구현 기능
  - 구글 계정을 활용한 로그인 & 로그아웃
  - 상품 업로드
  - 상품 목록 보기
  - 장바구니 담기
  - 장바구니 수량 조정 & 삭제
  - 장바구니 배지(badge)표시
  - 비로그인 사용자도 장바구니 기능 사용가능하게
  - 상품 업로드 페이지는 관리자만 접근할 수 있게
  - 반응형 디자인

  
## 🔨사용 도구
- <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" alt="icon"/>
- <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white" alt="icon"/>
- <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=reactrouter&logoColor=white" alt="icon"/>
- <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="icon"/>
- <img src="https://img.shields.io/badge/Firebase-DD2C00?style=flat&logo=firebase&logoColor=white" alt="icon"/>
- <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=cloudinary&logoColor=white" alt="icon"/>
- <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" alt="icon"/>
  

## 🔧에러 & 어려웠던 점
- 장바구니에 삼품을 담거나 수량을 변경했을 때 firebase의 db에는 업데이트 된 수량이 바로 반영되지만 브라우저의 UI(헤더의 카트에 담긴 수량을 표시하는 배지와 장바구니 페이지)에는 즉각적으로 반영되지 않음. 
    - 원인 : 캐시 문제. 리액트 쿼리에서 데이터를 수정하기 전의 캐시를 가지고 있는 상태라서 업데이트된 내용이 반영되지 않고 이전의 상태로 남아있는 것이었음.
    - 해결방법 : invalidateQueries를 사용하여 쿼리를 무효화하여 캐시를 지우기. + useQuery 대신 useMutation을 사용해서 지정한 키의 해당 쿼리가 변경될 때마다 쿼리를 무효화하도록 변경.
  
- <UploadProduct>컴포넌트에서 첫 렌더링시 input의 value에 할당한 product.title을 읽어오지 못하여 에러
  - 원인 : input이 onChange 될때마다 useState로 product변수에 해당 input의 name을 key로 설정하여 입력된 값을 추가하도록 설정하였는데, product의 초기값이 undefined로 설정 ( `const [product, setProduct] = useState()`) 되어있었기 때문. 즉, 컴포넌트 렌더링 시 undefined.title을 읽어오도록 되면서 속성 접근 자체가 허용되지 않는 undefined에 속성을 접근하려고 해서 에러가 발생한 것.
  - 해결방법 : product의 초기값을 빈 객체로 설정해서 객체의 속성을 읽어오도록 변경하기. 해당하는 속성이 없더라도 에러를 발생시키지 않고 undefined를 반환하므로.
