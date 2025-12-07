# 🎯 LỘ TRÌNH HỌC CHI TIẾT - CODING KHÔNG CHUỘT

---

## 📅 TUẦN 1: FOUNDATION - Window & Terminal

### **Ngày 1-2: Setup + yabai + skhd**

**Sáng (1-2h):**
```bash
# Cài đặt
brew install koekeishiya/formulae/yabai
brew install koekeishiya/formulae/skhd

# Start services
yabai --start-service
skhd --start-service
```

**Tạo config cơ bản:**
- `~/.config/yabai/yabairc` (copy config tôi đưa ở trên)
- `~/.config/skhd/skhdrc` (copy config tôi đưa ở trên)

**Chiều (2-3h): Practice 10 phím tắt quan trọng nhất**
1. `alt + h/j/k/l` - Focus window (trái/dưới/trên/phải)
2. `shift + alt + h/j/k/l` - Move window
3. `alt + f` - Fullscreen
4. `alt + t` - Float/unfloat window
5. `alt + 1/2/3` - Switch spaces

**BÀI TẬP:**
- Mở 4 cửa sổ (VSCode, Terminal, Browser, Slack)
- Di chuyển focus giữa các cửa sổ bằng `alt + h/j/k/l` - lặp lại 50 lần
- Swap vị trí cửa sổ bằng `shift + alt + h/j/k/l` - lặp lại 30 lần
- Toggle fullscreen 20 lần

**MỤC TIÊU:** Muscle memory cho 10 phím tắt này, không cần suy nghĩ.

---

### **Ngày 3-4: Zellij - Terminal Multiplexer**

**Sáng (1h):**
```bash
# Cài đặt
brew install zellij

# Chạy lần đầu
zellij
```

**10 thao tác cơ bản cần học:**
1. `Ctrl + p, n` - New pane
2. `Ctrl + p, x` - Close pane
3. `Ctrl + p, h/j/k/l` - Move focus giữa panes
4. `Ctrl + p, H/J/K/L` - Resize pane
5. `Ctrl + t, n` - New tab
6. `Ctrl + t, x` - Close tab
7. `Ctrl + t, h/l` - Switch tabs
8. `Ctrl + o, w` - Session manager
9. `Ctrl + s` - Search mode
10. `Ctrl + q` - Quit

**Chiều (2-3h): Practice**

**BÀI TẬP 1 (1h):** Setup workspace
- Tạo layout: left pane (editor), right top (server), right bottom (git)
- Lặp lại tạo layout này 10 lần cho đến khi làm được < 30s
- Focus giữa các panes 100 lần

**BÀI TẬP 2 (1h):** Multi-tab workflow
- Tab 1: Frontend (3 panes)
- Tab 2: Backend (3 panes)  
- Tab 3: Database (2 panes)
- Switch giữa tabs 50 lần
- Close và recreate tabs 10 lần

**BÀI TẬP 3 (30 phút):** Sessions
- Tạo session "work"
- Detach (Ctrl + o, d)
- Attach lại
- Lặp lại 10 lần

**MỤC TIÊU:** Tạo và quản lý panes/tabs không cần nghĩ.

---

### **Ngày 5-7: Raycast + Practice tổng hợp**

**Sáng Ngày 5 (1h):**
```bash
# Download và cài Raycast
# https://raycast.com

# Setup:
# 1. Set hotkey: Cmd + Space (thay Spotlight)
# 2. Import clipboard history
# 3. Enable window management
```

**10 commands cần học:**
1. Type app name → Open app
2. `clipboard` → Clipboard history
3. `window` → Window management
4. `kill` → Kill process
5. `calc` → Calculator
6. `define` → Dictionary
7. `emoji` → Emoji picker
8. `file` → Search files
9. `snip` → Snippets (create sau)
10. `ext` → Browse extensions

**Chiều Ngày 5-6 (4h): Practice Raycast**

**BÀI TẬP:**
- Mở 10 apps khác nhau bằng Raycast - lặp lại 5 lần
- Copy 20 items, dùng clipboard history để paste lại - lặp lại 3 lần
- Search và mở 10 files khác nhau - lặp lại 5 lần
- Tạo 5 snippets thường dùng (email, phone, code templates)

**Ngày 7: PRACTICE TỔNG HỢP TUẦN 1**

**CHALLENGE - Làm project nhỏ hoàn toàn không chuột:**

**Setup (15 phút):**
1. Raycast mở VSCode
2. yabai tạo layout: VSCode 70% trái, Terminal 30% phải
3. Zellij split terminal: top (git), bottom (server)

**Coding workflow (2h):**
1. fzf tìm files (Ctrl + T)
2. Vim motions edit code
3. Alt + l focus sang terminal
4. Git commands trong terminal
5. Alt + h focus về VSCode
6. Raycast search docs
7. Copy/paste bằng clipboard history
8. Repeat...

**MỤC TIÊU TUẦN 1:** 
- ✅ 70% thời gian không dùng chuột
- ✅ 10 phím tắt yabai thành muscle memory
- ✅ Tạo Zellij layout < 30s
- ✅ Mở bất kỳ app/file bằng Raycast < 3s

---

## 📅 TUẦN 2: INTERMEDIATE - Browser & Files

### **Ngày 8-9: Vimium - Browser Navigation**

**Sáng (30 phút):**
- Chrome/Edge: Install Vimium extension
- Safari: Install Vimari extension

**15 phím tắt cần học:**
1. `f` - Click links
2. `F` - Open link new tab
3. `j/k` - Scroll down/up
4. `gg/G` - Top/bottom page
5. `d/u` - Scroll half page
6. `H/L` - Back/forward
7. `x` - Close tab
8. `X` - Restore tab
9. `J/K` - Next/previous tab
10. `t` - New tab
11. `o` - Open URL/bookmark
12. `O` - Open in new tab
13. `yy` - Copy URL
14. `gi` - Focus input
15. `/` - Search in page

**Chiều Ngày 8 (3h): Practice**

**BÀI TẬP 1 (1h):** Navigation
- Mở HackerNews, dùng `f` click 20 links
- Scroll bằng `j/k` đọc 10 bài
- Close tabs bằng `x`, restore bằng `X` - lặp 20 lần

**BÀI TẬP 2 (1h):** Search & Navigate
- Google search 10 từ khóa khác nhau
- Mỗi search: `f` vào kết quả, đọc, `H` back, repeat
- Practice `o` mở bookmark 20 lần

**BÀI TẬP 3 (1h):** Multi-tab workflow
- Mở 10 tabs
- `J/K` switch giữa tabs 50 lần
- `yy` copy URLs và paste vào notes
- Close all bằng `x` repeatedly

**Ngày 9 (4h): Practice Vimium trong real work**
- Browse docs, Stack Overflow, GitHub hoàn toàn không chuột
- Code review trên GitHub bằng Vimium
- Read articles, news không dùng chuột

**MỤC TIÊU:** Browse web 90% không chuột.

---

### **Ngày 10-11: fzf - Fuzzy Finder**

**Sáng (1h):**
```bash
# Cài đặt
brew install fzf
$(brew --prefix)/opt/fzf/install  # Setup keybindings
```

**5 phím tắt cần học:**
1. `Ctrl + T` - Find files
2. `Ctrl + R` - Command history
3. `Alt + C` - Change directory (hoặc Opt + C trên Mac)
4. `fzf` - Interactive find
5. `kill <tab>` - Kill process với fzf

**Chiều (2h): Practice**

**BÀI TẬP 1 (30 phút):** File finding
- `Ctrl + T` tìm 50 files khác nhau
- Paste vào vim/vscode để mở
- Practice typing để filter results

**BÀI TẬP 2 (30 phút):** Command history
- `Ctrl + R` tìm 20 commands đã chạy
- Re-run commands
- Edit trước khi run

**BÀI TẬP 3 (30 phút):** Directory navigation
- `Alt + C` jump giữa 20 directories
- Combine với `ls`, `cd` commands

**BÀI TẬP 4 (30 phút):** Process management
- `ps aux | fzf` tìm processes
- `kill -9 <pid>` với fzf autocomplete
- Lặp lại 10 lần

**Ngày 11:** Integrate fzf vào workflow
- Dùng fzf thay vì Finder để tìm files
- Dùng Ctrl + R thay vì gõ lại commands
- Practice 4h coding với fzf

---

### **Ngày 12-14: lf - File Manager**

**Sáng Ngày 12 (1h):**
```bash
# Cài đặt
brew install lf

# Tạo config
mkdir -p ~/.config/lf
touch ~/.config/lf/lfrc
```

**Basic lfrc config:**
```bash
# ~/.config/lf/lfrc
set preview true
set hidden true
set drawbox true
set icons true

# Custom commands
cmd open ${{
    case $(file --mime-type "$f" -bL) in
        text/*|application/json) $EDITOR "$f";;
        *) open "$f" ;;
    esac
}}

cmd mkdir ${{
    printf "Directory Name: "
    read ans
    mkdir $ans
}}

cmd mkfile ${{
    printf "File Name: "
    read ans
    touch $ans
}}
```

**15 phím tắt cần học:**
1. `j/k` - Down/up
2. `h/l` - Parent/child directory
3. `gg/G` - Top/bottom
4. `space` - Select files
5. `u` - Unselect all
6. `y` - Copy
7. `d` - Cut
8. `p` - Paste
9. `<delete>` - Delete
10. `a` - Rename
11. `/` - Search
12. `n/N` - Next/previous search
13. `:` - Command mode
14. `q` - Quit
15. `?` - Show help

**Chiều Ngày 12-13 (6h): Practice**

**BÀI TẬP 1 (2h):** Navigation
- Browse toàn bộ home directory bằng `j/k/h/l`
- Jump giữa 50 folders
- Practice `gg/G` để jump nhanh
- Search files bằng `/` - 30 lần

**BÀI TẬP 2 (2h):** File operations
- Tạo 20 files mới (`:mkfile`)
- Tạo 10 directories mới (`:mkdir`)
- Copy 20 files từ folder này sang folder khác
- Rename 20 files
- Delete 20 files
- Undo delete với `trash` command

**BÀI TẬP 3 (2h):** Bulk operations
- Select 10 files bằng `space`
- Copy tất cả cùng lúc
- Paste vào folder khác
- Select và delete multiple files
- Practice với real project files

**Ngày 14: Real workflow**
- Thay Finder bằng lf hoàn toàn
- Organize projects bằng lf
- Move files giữa các projects

**MỤC TIÊU:** File management 90% không chuột.

---

### **CHALLENGE TUẦN 2 (Chiều Ngày 14):**

**Mission: Setup một project mới hoàn toàn không chuột**

1. `lf` vào projects folder
2. `:mkdir new-project`
3. `l` vào folder
4. `:mkfile index.html`, `:mkfile style.css`, `:mkfile script.js`
5. `space` select all files
6. `y` copy, `h` lên parent, `l` vào other project
7. `p` paste
8. `Ctrl + T` (fzf) tìm index.html
9. VSCode mở file
10. `alt + l` focus terminal
11. `Ctrl + p, n` (Zellij) new pane
12. Start dev server
13. `Cmd + Space` (Raycast) mở browser
14. `f` (Vimium) click localhost link

**Time target: < 2 phút**

**MỤC TIÊU TUẦN 2:**
- ✅ 85% thời gian không dùng chuột
- ✅ Browse web mượt mà không chuột
- ✅ File management không cần Finder
- ✅ fzf thành reflex tự nhiên

---

## 📅 TUẦN 3: ADVANCED - Git & Optimization

### **Ngày 15-17: lazygit - Git TUI**

**Sáng Ngày 15 (1h):**
```bash
# Cài đặt
brew install lazygit

# Config (optional)
mkdir -p ~/Library/Application\ Support/lazygit
touch ~/Library/Application\ Support/lazygit/config.yml
```

**Basic config:**
```yaml
# ~/Library/Application Support/lazygit/config.yml
gui:
  theme:
    activeBorderColor:
      - green
      - bold
    inactiveBorderColor:
      - white
  showFileTree: true
  showRandomTip: false

keybinding:
  universal:
    quit: 'q'
    return: '<esc>'
```

**20 phím tắt cần học:**

**Panel navigation:**
1. `1` - Status
2. `2` - Files  
3. `3` - Local branches
4. `4` - Commits
5. `5` - Stash

**Files panel:**
6. `space` - Stage/unstage
7. `a` - Stage all
8. `d` - Discard changes
9. `c` - Commit
10. `P` - Push
11. `p` - Pull

**Commits panel:**
12. `s` - Squash
13. `r` - Reword
14. `e` - Edit (rebase)
15. `d` - Drop commit
16. `A` - Amend

**Branches:**
17. `n` - New branch
18. `space` - Checkout
19. `d` - Delete branch
20. `M` - Merge

**Chiều Ngày 15-16 (6h): Practice**

**BÀI TẬP 1 (2h):** Basic workflow
- Tạo test repository
- Edit 10 files
- Stage từng file bằng `space` - lặp 20 lần
- Stage all bằng `a` - lặp 20 lần
- Commit với message - 30 commits
- View commit history
- Push

**BÀI TẬP 2 (2h):** Staging granularity
- Edit 1 file nhiều chỗ
- `Enter` vào file → view hunks
- Stage từng hunk riêng - 20 lần
- Discard từng hunk riêng - 20 lần
- Commit selective changes

**BÀI TẬP 3 (2h):** Branching workflow
- Tạo 10 branches mới (`n`)
- Checkout giữa branches (`space`)
- Commit trên mỗi branch
- Merge branches (`M`)
- Xóa branches (`d`)
- Lặp lại workflow này 5 lần

**Ngày 17: Advanced Git operations**

**BÀI TẬP 1 (2h):** Interactive rebase
- Tạo 10 commits liên tiếp
- `e` để edit rebase
- Squash 3 commits thành 1
- Reword commit messages
- Drop commits
- Reorder commits
- Lặp lại 5 lần

**BÀI TẬP 2 (1h):** Stash workflow
- Edit code
- `5` vào Stash panel
- Stash changes
- Checkout branch khác
- Pop stash
- Lặp lại 10 lần

**BÀI TẬP 3 (1h):** Cherry-pick & Reflog
- Cherry-pick commits giữa branches
- Use reflog để recover lost commits
- Practice undo operations

**MỤC TIÊU:** Git operations 100% không cần GUI/chuột.

---

### **Ngày 18-19: VSCode Vim - Deep Dive**

**Ôn tập và nâng cao Vim motions trong VSCode**

**20 motions/commands nâng cao:**

**Text objects:**
1. `ciw` - Change inner word
2. `ci"` - Change inside quotes
3. `ci(` - Change inside parentheses
4. `ci{` - Change inside braces
5. `cit` - Change inside tag
6. `diw/daw` - Delete word
7. `yi(` - Yank inside parentheses

**Advanced navigation:**
8. `f{char}` - Find character forward
9. `F{char}` - Find character backward
10. `t{char}` - Till character
11. `;` - Repeat f/t
12. `%` - Jump matching bracket
13. `*/#` - Search word under cursor

**Editing:**
14. `.` - Repeat last change
15. `>` - Indent
16. `<` - Unindent
17. `J` - Join lines
18. `~` - Toggle case
19. `Ctrl + a/x` - Increment/decrement number

**Macros:**
20. `q{register}` - Record macro
21. `@{register}` - Play macro

**BÀI TẬP Ngày 18 (4h):**

**Exercise 1 (1h):** Text objects mastery
- Tạo file với nhiều `"strings"`, `(parens)`, `{braces}`
- Practice `ci"`, `ci(`, `ci{` - 50 lần mỗi loại
- Practice `di` và `yi` variants

**Exercise 2 (1h):** Navigation
- Practice `f/F/t/T` - tìm characters 100 lần
- Practice `*/#` search - 50 lần
- Practice `%` jump brackets - 50 lần

**Exercise 3 (2h):** Real refactoring
- Refactor một file code thực tế
- Đổi tên variables bằng `*` + `cw`
- Indent blocks bằng `>` / `<`
- Join/split lines bằng `J`
- Extract functions bằng visual mode + `d` + `p`

**BÀI TẬP Ngày 19 (4h):**

**Exercise 1 (2h):** Macros
- Record macro đổi format 100 lines
- Record macro thêm semicolons
- Record macro wrap trong function calls
- Practice `@@` repeat last macro

**Exercise 2 (2h):** Combined workflow
- Code một feature hoàn chỉnh chỉ dùng Vim motions
- KHÔNG được dùng chuột hoặc arrow keys
- Track số lần dùng chuột (target: 0)

**MỤC TIÊU:** Vim motions thành bản năng.

---

### **Ngày 20-21: OPTIMIZATION & WORKFLOW REFINEMENT**

**Review toàn bộ workflow, tìm bottlenecks**

**Ngày 20: Measurement & Analysis**

**Sáng (2h): Track metrics**
- Record video coding session 1h
- Đếm số lần dùng chuột
- Note những tình huống BẮT BUỘC dùng chuột
- Note những tình huống chậm, chưa smooth

**Chiều (2h): Optimize configs**
- Adjust skhd bindings cho comfortable hơn
- Add custom commands trong lf
- Tạo aliases trong shell
- Setup lazygit custom commands
- Tạo Zellij layouts cho các projects

**Ngày 21: Practice Optimized Workflow**

**BÀI TẬP TỔNG HỢP (8h coding marathon):**

Build một project nhỏ (todo app, calculator, etc.) với rules:
- ❌ KHÔNG được chạm chuột
- ✅ Track time cho mỗi task
- ✅ Note những chỗ còn chậm
- ✅ Refine workflow realtime

**MỤC TIÊU TUẦN 3:**
- ✅ 90-95% không dùng chuột
- ✅ Git workflow hoàn toàn keyboard
- ✅ Vim motions thành muscle memory
- ✅ Workflow được optimize cho project thực tế

---

## 📅 TUẦN 4: MASTERY & CUSTOMIZATION

### **Ngày 22-24: Advanced Customization**

**Ngày 22: skhd Advanced**

**Tạo complex bindings:**
```bash
# App-specific bindings
cmd + shift - return : open -a "Visual Studio Code"
cmd + shift - b : open -a "Google Chrome"
cmd + shift - t : open -a "iTerm"

# Window size presets
alt - 1 : yabai -m window --ratio abs:0.5  # Half
alt - 2 : yabai -m window --ratio abs:0.33 # Third
alt - 3 : yabai -m window --ratio abs:0.67 # Two-thirds

# Multi-monitor
ctrl + alt - 1 : yabai -m window --display 1
ctrl + alt - 2 : yabai -m window --display 2

# Quick layouts
alt + shift - 1 : ~/scripts/layout-coding.sh
alt + shift - 2 : ~/scripts/layout-meeting.sh
```

**BÀI TẬP:** Tạo 5 custom scripts cho workflows của bạn.

---

**Ngày 23: Zellij Layouts**

**Tạo project-specific layouts:**

```kdl
// ~/.config/zellij/layouts/frontend.kdl
layout {
    pane split_direction="vertical" {
        pane size="70%" {
            pane // VSCode
        }
        pane split_direction="horizontal" size="30%" {
            pane {
                command "npm"
                args "run" "dev"
            }
            pane // git/lazygit
        }
    }
}
```

**BÀI TẬP:** Tạo layouts cho:
- Frontend dev
- Backend dev
- Full-stack dev
- DevOps tasks
- Code review

---

**Ngày 24: lf Advanced Commands**

**Custom lf commands:**
```bash
# ~/.config/lf/lfrc

# Git operations
cmd git_add %{{
    git add "$f"
    lf -remote "send $id reload"
}}

cmd git_status ${{
    clear
    git status
    read -p "Press enter to continue"
}}

# Bulk rename
cmd bulkrename ${{
    vidir
}}

# FZF integration
cmd fzf_jump ${{
    res="$(find . -maxdepth 3 | fzf --reverse --header='Jump to location')"
    lf -remote "send $id cd \"$res\""
}}

# Quick edit
cmd edit_config ${{
    $EDITOR ~/.config/lf/lfrc
    lf -remote "send $id source ~/.config/lf/lfrc"
}}

# Map keys
map ga :git_add
map gs :git_status
map br :bulkrename
map <c-f> :fzf_jump
map <c-e> :edit_config
```

**BÀI TẬP:** Thêm 10 custom commands phù hợp workflow của bạn.

---

### **Ngày 25-28: REAL WORLD PRACTICE**

**Ngày 25-27: Work on Real Projects**

**Rules:**
- Code real features cho work/personal projects
- Track mouse usage (target: < 5%)
- Time các tasks
- So sánh với previous workflow

**Daily log format:**
```
Date: XX/XX
Project: XXX
Hours coded: X
Mouse clicks: XX (%)
Bottlenecks: 
- XXX
- XXX
Improvements made:
- XXX
- XXX
```

---

**Ngày 28: FINAL CHALLENGE**

**The Ultimate Test: 8h Coding Marathon**

**Mission:**
Build a complete feature từ đầu đến cuối:
1. ✅ Planning & research (browser)
2. ✅ Setup project structure (lf, terminal)
3. ✅ Implement feature (VSCode + Vim)
4. ✅ Git workflow (lazygit)
5. ✅ Testing & debugging
6. ✅ Code review prep
7. ✅ Documentation

**Success criteria:**
- Mouse usage: < 5%
- Không feeling frustrated
- Flow state maintained
- Fast như hoặc nhanh hơn previous workflow

---

## 📊 PROGRESS TRACKING

### **Weekly Metrics:**

**Tuần 1:**
- Mouse usage: 30%
- Phím tắt learned: 35
- Comfort level: 5/10

**Tuần 2:**
- Mouse usage: 15%
- Phím tắt learned: 65
- Comfort level: 7/10

**Tuần 3:**
- Mouse usage: 5-10%
- Phím tắt learned: 100+
- Comfort level: 8/10

**Tuần 4:**
- Mouse usage: < 5%
- Phím tắt mastered: 100+
- Comfort level: 9/10
- Speed: Same or better than before

---

## 🎯 FINAL CHECKLIST

Sau 4 tuần, bạn nên:

✅ **yabai + skhd:** Window management hoàn toàn keyboard
✅ **Zellij:** Multi-pane/tab/session như thở
✅ **Raycast:** Mở app/file/search < 2s
✅ **Vimium:** Browse web không nghĩ đến chuột
✅ **fzf:** Find files/history/dirs tự nhiên
✅ **lf:** File operations nhanh hơn Finder
✅ **lazygit:** Git workflow hoàn chỉnh không GUI
✅ **VSCode Vim:** Code như Vim ninja
✅ **Custom scripts:** Workflow tối ưu cho bạn
✅ **Muscle memory:** Không cần suy nghĩ

---

## 💡 PRO TIPS

**Nếu stuck:**
1. Giảm tốc độ, không vội
2. Practice 1 tool mỗi lần
3. OK nếu dùng chuột thi thoảng
4. Muscle memory cần thời gian

**Nếu quá khó:**
1. Kéo dài timeline (6-8 tuần OK)
2. Focus vào core tools trước
3. Skip optional tools
4. Tìm buddy cùng học

**Nếu quá dễ:**
1. Add advanced tools (WezTerm, custom scripts)
2. Contribute configs lên GitHub
3. Teach người khác
4. Optimize cho extreme speed

---

Bạn sẵn sàng bắt đầu **Ngày 1** chưa? Tôi có thể tạo config files chi tiết cho bạn copy paste ngay! 🚀