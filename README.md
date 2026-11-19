# Seungho Chae — Portfolio

## 파일 구성
- `data.js` — **모든 내용은 여기서만 수정** (프로필, 논문, 경력, 프로젝트, 수상 등)
- `index.html` / `main.js` / `style.css` — 레이아웃·렌더링·디자인 (보통 건드릴 필요 없음)
- `assets/` — 프로필 사진, CV PDF 등

## 미리보기
`index.html`을 브라우저로 더블클릭해서 열면 됩니다 (서버 불필요).

## 자주 하는 수정
- **논문 추가**: `PUBLICATIONS` 배열 맨 위에 블록 하나 복사 → 수정. 채택되면 `status: "accepted"`로 변경, `links.paper`에 URL 입력
- **프로젝트 추가/수정**: `PROJECTS` 에서 `description`(한두 줄)과 `links`(GitHub, Demo 등) 입력. 값이 있는 링크만 버튼으로 표시
- **사진 추가**: `assets/profile.jpg`로 저장 후 `PROFILE.photo = "assets/profile.jpg"`
- **CV 버튼**: `assets/cv.pdf` 저장 후 `PROFILE.contact.cv = "assets/cv.pdf"`
- **GitHub / Scholar**: `PROFILE.contact`에 URL 입력하면 버튼 자동 생성
- 어떤 배열이든 비우면(`[]`) 해당 섹션과 메뉴가 자동으로 숨겨짐

## 배포 (GitHub Pages)
1. GitHub에 `<username>.github.io` 저장소 생성
2. 이 폴더 내용 전체를 push
3. `https://<username>.github.io` 에서 확인
