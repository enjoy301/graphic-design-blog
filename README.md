# Graphic Design Blog

---

## Installation

---

### 1. Clone the repository

```bash
git clone https://github.com/enjoy301/graphic-design-blog.git
```

### 2. .env 파일 생성

/server/src/config/.env.sample 파일을 참고하여 .env 파일 생성

### 3. Docker, Docker Compose 설치

[docker docs - Get Docker](https://docs.docker.com/get-docker/)

### 4. Docker Compose 실행

```bash
docker-compose up -d
```

## Roadmap

---

- [x] Database ORM 연결
- [x] Front-End Design
- [x] Markdown Rendering
- [x] Post CRUD
- [ ] 이미지 업로드
- [ ] 댓글
- [ ] Admin Page

## Tech Stack

---

### Front-End

- React
- TypeScript
- Styled-components
- React-Router
- React Query

### Back-End

- Node.js
- TypeScript
- Express
- TypeORM
- TypeDI
- MySQL

## Directory

---

### Front-End

```bash
client
├── Dockerfile.dev                   # Dockerfile for development
├── docker-compose.yml               # Docker compose for development
└── src
    ├── index.tsx                    # Entry point
    ├── components                   # 컴포넌트 디렉토리
    │   └── Root                     # 컴포넌트는 Page 단위로 관리
    │   │   └── style.ts             # Styled-components
    │   └── ...
    ├── hooks                        # Custom Hooks
    ├── images                       # 이미지
    └── pages                        # Page 단위로 관리
        ├── root.tsx                 # Root Page
        └── ...
```

### Back-End

```bash
server
├── nodemon.json                     # Nodemon 설정
└── src
    ├── app.ts                       # Express 설정
    ├── database.ts                  # Database 설정
    ├── env.ts                       # 환경변수 쉽게 사용하기
    ├── server.ts                    # Entry point
    ├── config                       # 환경변수 디렉토리
    ├── controllers                  # Controller Classes
    │   └── PostController.ts
    ├── dtos                         # Data Transfer Object
    │   └── PostDTO.ts
    ├── entities                     # Entities
    │   └── Post.ts
    ├── middlewares                  # Node Middlewares
    ├── repositories                 # Repositories
    │   └── PostRepository.ts
    ├── services                     # Buissness Logic
    │   └── PostService.ts
    └── utils                        # Utilities
        └── RoutingConfig.ts
```

## 궁금한 점

---

- server와 client 부분 Dockerfile이 중복되는 부분이 많은데, 이 부분을 어떻게 해결할 수 있을까요?

- server와 client 부분을 각각 Dockerfile을 만들어서 빌드하고, docker-compose를 통해 두 컨테이너를 연결하는 방식으로 구현했는데, 이 방식이 맞는지 궁금합니다.

- Dockerfile npm install 부분 시간이 오래 걸리는데, 이 부분을 어떻게 해결할 수 있을까요?

- Backend에서 오류를 확인했을 때 200으로 응답을 보내고 에러 메시지를 body에 담아서 보내는 방식이 맞는지, 400으로 응답을 보내는 방식이 맞는지 궁금합니다.

- Frontend에서 반응형을 구현할 때, 다른 css가 적용되는 부분의 기준이 있는지 궁금합니다
  ex) min-height 2000px 이상일 땐 빨간색, 아닐땐 파란색에서 "2000px" 같은 것.
