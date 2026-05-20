# GitHub Pages 배포

## 1. 리포지토리 만들기

https://github.com/new → repository name 입력 → **Public** 선택 →
"Initialize with README" **체크 해제** → Create.

## 2. 파일 push

`index.html`, `data.js`, `README.md` 세 파일을 로컬 폴더에 둔 뒤:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

push 시 password 자리에는 [Personal Access Token](https://github.com/settings/tokens)
(`repo` scope) 사용.

## 3. Pages 활성화

리포지토리 → Settings → Pages → Branch `main`, Folder `/ (root)` → Save.

1–3분 후 `https://USERNAME.github.io/REPO-NAME/` 에서 접속 가능.

## 이후 업데이트

```bash
git add .
git commit -m "..."
git push
```

1–2분 안에 자동 반영.
