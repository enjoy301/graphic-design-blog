# Graphic Design Blog

---

## Roadmap

---

- [x] Database ORM 연결
- [x] Front-End Design
- [x] Markdown Rendering
- [ ] Post CRUD
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
├── Dockerfile.dev            # Dockerfile for development
├── docker-compose.yml        # Docker compose for development
└── src
    ├── index.tsx             # Entry point
    ├── components            # 컴포넌트 디렉토리
    │   └── Root              # 컴포넌트는 Page 단위로 관리
    │   │   └── style.ts      # Styled-components
    │   └── ...
    ├── hooks                 # Custom Hooks
    ├── images                # 이미지
    └── pages                 # Page 단위로 관리
        ├── root.tsx          # Root Page
        └── ...
```

### Back-End

```bash
server
├── nodemon.json                  # Nodemon 설정
└── src
    ├── app.ts                    # Express 설정
    ├── database.ts               # Database 설정
    ├── env.ts                    # 환경변수 쉽게 사용하기
    ├── server.ts                 # Entry point
    ├── config                    # 환경변수 디렉토리
    ├── controllers               # Controller Classes
    │   └── PostController.ts
    ├── dtos                      # Data Transfer Object
    │   └── PostDTO.ts
    ├── entities                  # Entities
    │   └── Post.ts
    ├── middlewares               # Node Middlewares
    ├── repositories              # Repositories
    │   └── PostRepository.ts
    ├── services                  # Buissness Logic
    │   └── PostService.ts
    └── utils                     # Utilities
        └── RoutingConfig.ts
```
