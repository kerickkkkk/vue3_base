#!/usr/bin/env sh

# 當發生錯誤時中止腳本
set -e

# 獲取當前分支名稱
branch_name=$(git rev-parse --abbrev-ref HEAD)

# 將分支名稱修改為分支名稱_page
branch_name_page="${branch_name}_page"

# console
echo "當前分支名稱是：${branch_name}"
echo "修改後的分支名稱是：${branch_name_page}"

# 部署到 https://<USERNAME>.github.io/<REPO>
npm run build

#切換到 dist 目錄
cd dist

git init
git add -A
git commit -m 'deploy'
git branch -m main "$branch_name"

git push -f https://github.com/kerickkkkk/vue3_base.git "$branch_name:$branch_name_page"


cd -
