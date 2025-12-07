import { Curriculum } from '@/types/curriculum';

export const curriculum: Curriculum = {
  weeks: [
    {
      week: 1,
      title: "FOUNDATION - Window & Terminal",
      goals: [
        "70% thời gian không dùng chuột",
        "10 phím tắt yabai thành muscle memory",
        "Tạo Zellij layout < 30s",
        "Mở bất kỳ app/file bằng Raycast < 3s"
      ],
      metrics: {
        mouseUsage: "30%",
        shortcutsLearned: 35,
        comfortLevel: "5/10"
      },
      days: [
        {
          day: "1-2",
          title: "Setup + yabai + skhd",
          totalHours: 4,
          dailyGoals: [
            "✅ Cài đặt thành công yabai và skhd",
            "✅ Tạo và test config cơ bản",
            "✅ Master 10 phím tắt window management",
            "✅ Thực hành đủ 4 tiếng không dùng chuột"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Cài đặt yabai và skhd",
              "Tạo config cơ bản cho yabai và skhd",
              "Đọc documentation về window management",
              "Test các phím tắt cơ bản"
            ],
            detailedSetup: [
              "Bước 1: Kiểm tra macOS version (yabai yêu cầu macOS 10.15+)",
              "Bước 2: Disable System Integrity Protection (SIP) nếu cần - yabai cần quyền accessibility",
              "Bước 3: Cài đặt qua Homebrew",
              "Bước 4: Grant accessibility permissions trong System Preferences",
              "Bước 5: Start services và test",
              "Bước 6: Tạo config files trong ~/.config/yabai và ~/.config/skhd",
              "Bước 7: Reload configs và verify"
            ],
            concepts: [
              "yabai là window manager - quản lý layout và vị trí windows",
              "skhd là shortcut daemon - xử lý keyboard shortcuts",
              "Window tiling: tự động sắp xếp windows theo layout",
              "Spaces: macOS virtual desktops, có thể switch bằng keyboard",
              "Focus và Move: Focus = chuyển attention, Move = di chuyển window thực sự"
            ],
            troubleshooting: [
              "Nếu yabai không start: Check SIP status với 'csrutil status'",
              "Nếu shortcuts không work: Check skhd service với 'skhd --check-service'",
              "Nếu permission denied: Grant accessibility trong System Preferences > Security",
              "Nếu config không load: Check syntax với 'yabai --check-service' và 'skhd --check-service'",
              "Nếu windows không tile: Check yabai rules và layout mode"
            ],
            configFiles: [
              {
                name: "~/.config/yabai/yabairc",
                description: "yabai configuration - window management rules",
                content: `#!/usr/bin/env sh

# Window management
yabai -m config window_border on
yabai -m config window_border_width 2
yabai -m config active_window_border_color 0xff5C7A8E
yabai -m config normal_window_border_color 0xff3C3C3C

# Layout
yabai -m config layout bsp
yabai -m config auto_balance on
yabai -m config split_ratio 0.5

# Spaces
yabai -m config space_bar on

# Rules
yabai -m rule --add app="^System Settings$" manage=off
yabai -m rule --add app="^Finder$" manage=off`
              },
              {
                name: "~/.config/skhd/skhdrc",
                description: "skhd configuration - keyboard shortcuts",
                content: `# Window focus - hjkl
alt - h : yabai -m window --focus west
alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - l : yabai -m window --focus east

# Window move
shift + alt - h : yabai -m window --swap west
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - l : yabai -m window --swap east

# Window resize
shift + cmd - h : yabai -m window --resize left:-50:0
shift + cmd - j : yabai -m window --resize bottom:0:50
shift + cmd - k : yabai -m window --resize top:0:-50
shift + cmd - l : yabai -m window --resize right:50:0

# Fullscreen
alt - f : yabai -m window --toggle zoom-fullscreen

# Float
alt - t : yabai -m window --toggle float

# Spaces
alt - 1 : yabai -m space --focus 1
alt - 2 : yabai -m space --focus 2
alt - 3 : yabai -m space --focus 3`
              }
            ],
            codeBlocks: [
              `# Cài đặt
brew install koekeishiya/formulae/yabai
brew install koekeishiya/formulae/skhd

# Start services
yabai --start-service
skhd --start-service

# Kiểm tra status
yabai --check-service
skhd --check-service

# Reload configs
yabai --restart-service
skhd --reload

# Stop services (nếu cần)
yabai --stop-service
skhd --stop-service`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice 10 phím tắt quan trọng nhất",
            content: [
              "Warm-up: Mở 4 cửa sổ cơ bản",
              "Practice từng phím tắt riêng lẻ",
              "Combine các phím tắt trong workflow thực tế"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Basic Navigation",
                duration: "30 phút",
                tasks: [
                  "Mở 4 cửa sổ (VSCode, Terminal, Browser, Slack)",
                  "Di chuyển focus giữa các cửa sổ bằng alt + h/j/k/l - lặp lại 50 lần",
                  "Đo thời gian: target < 2 phút cho 50 lần",
                  "Ghi lại số lần nhầm phím"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Window Movement",
                duration: "30 phút",
                tasks: [
                  "Swap vị trí cửa sổ bằng shift + alt + h/j/k/l - lặp lại 30 lần",
                  "Tạo layout: 2 cửa sổ ngang, 2 cửa sổ dọc",
                  "Di chuyển cửa sổ giữa các spaces - 20 lần",
                  "Target: Không cần suy nghĩ về phím tắt"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Advanced Operations",
                duration: "30 phút",
                tasks: [
                  "Toggle fullscreen 20 lần - target < 30s",
                  "Float/unfloat window 15 lần",
                  "Switch spaces bằng alt + 1/2/3 - 30 lần",
                  "Combine: Move window + switch space - 20 lần"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real Workflow",
                duration: "30 phút",
                tasks: [
                  "Setup coding workspace: VSCode (70%) + Terminal (30%)",
                  "Mở browser, switch giữa 3 apps 50 lần",
                  "Tạo và quản lý 5 windows cùng lúc",
                  "Timed challenge: Setup workspace < 10s"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review & Consolidation",
            content: [
              "Review lại tất cả phím tắt đã học",
              "Ghi chú những phím tắt còn chậm",
              "Plan cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 10 phím tắt - target: 100% accuracy",
                  "Ghi lại 3 phím tắt cần practice thêm",
                  "Đọc thêm về yabai advanced features",
                  "Chuẩn bị cho ngày 3-4: Zellij"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "alt + h/j/k/l", description: "Focus window (trái/dưới/trên/phải)" },
            { key: "shift + alt + h/j/k/l", description: "Move window" },
            { key: "alt + f", description: "Fullscreen" },
            { key: "alt + t", description: "Float/unfloat window" },
            { key: "alt + 1/2/3", description: "Switch spaces" }
          ],
          goals: ["Muscle memory cho 10 phím tắt này, không cần suy nghĩ."],
          learningResources: [
            { title: "yabai GitHub", url: "https://github.com/koekeishiya/yabai", description: "Official yabai documentation và examples" },
            { title: "skhd GitHub", url: "https://github.com/koekeishiya/skhd", description: "skhd configuration guide" },
            { title: "Window Management Concepts", description: "Hiểu về tiling window managers và workflow" }
          ],
          bestPractices: [
            "Luôn test config sau khi thay đổi - dùng --check-service",
            "Backup config files trước khi modify",
            "Bắt đầu với config đơn giản, thêm dần features",
            "Practice từng phím tắt riêng lẻ trước khi combine",
            "Ghi chú lại những phím tắt hay dùng nhất"
          ],
          commonMistakes: [
            "Nhầm lẫn giữa Focus (alt+h/j/k/l) và Move (shift+alt+h/j/k/l)",
            "Quên reload config sau khi edit - phải dùng --reload",
            "Không grant accessibility permissions - shortcuts sẽ không work",
            "Config syntax sai - check với --check-service",
            "Cố gắng nhớ tất cả shortcuts cùng lúc - nên học từng nhóm"
          ]
        },
        {
          day: "3-4",
          title: "Zellij - Terminal Multiplexer",
          totalHours: 4,
          dailyGoals: [
            "✅ Cài đặt và config Zellij",
            "✅ Master 10 thao tác cơ bản Zellij",
            "✅ Tạo layout workspace < 30s",
            "✅ Quản lý sessions thành thạo"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Cài đặt Zellij",
              "Đọc documentation về Zellij",
              "Tạo config file cơ bản",
              "Test các phím tắt cơ bản"
            ],
            detailedSetup: [
              "Bước 1: Cài đặt Zellij qua Homebrew hoặc cargo",
              "Bước 2: Chạy zellij lần đầu để tạo default config",
              "Bước 3: Tạo config directory ~/.config/zellij",
              "Bước 4: Tạo config.kdl với keybindings cơ bản",
              "Bước 5: Test các phím tắt: Ctrl+p (pane mode), Ctrl+t (tab mode)",
              "Bước 6: Practice basic navigation giữa panes",
              "Bước 7: Setup default layout cho coding workflow"
            ],
            concepts: [
              "Terminal multiplexer: quản lý nhiều terminal sessions trong 1 window",
              "Pane: một terminal session riêng biệt trong Zellij",
              "Tab: nhóm các panes lại với nhau, có thể switch giữa các tabs",
              "Session: persistent workspace, có thể detach và attach lại",
              "Layout: predefined arrangement của panes (có thể save và load)",
              "Mode: Zellij có nhiều modes - Normal, Pane, Tab, Resize, Move, etc."
            ],
            troubleshooting: [
              "Nếu Ctrl+p không work: Check terminal compatibility, có thể cần config keybindings",
              "Nếu panes không resize: Check resize mode với Ctrl+p r",
              "Nếu session không save: Check permissions trong ~/.config/zellij",
              "Nếu shortcuts conflict: Modify config.kdl để đổi keybindings",
              "Nếu Zellij crash: Check logs trong ~/.local/share/zellij"
            ],
            configFiles: [
              {
                name: "~/.config/zellij/config.kdl",
                description: "Zellij configuration - keybindings và settings",
                content: `// Zellij Configuration
// Keybindings for pane management

// Pane mode (Ctrl+p)
pane {
    bind "n" { New; }
    bind "x" { Close; }
    bind "h" { MoveLeft; }
    bind "j" { MoveDown; }
    bind "k" { MoveUp; }
    bind "l" { MoveRight; }
    bind "H" { ResizeLeft; }
    bind "J" { ResizeDown; }
    bind "K" { ResizeUp; }
    bind "L" { ResizeRight; }
    bind "f" { ToggleFocusFullscreen; }
    bind "z" { ToggleFloatingPanes; }
}

// Tab mode (Ctrl+t)
tab {
    bind "n" { New; }
    bind "x" { Close; }
    bind "h" { GoToPreviousTab; }
    bind "l" { GoToNextTab; }
    bind "1" { GoToTab 1; }
    bind "2" { GoToTab 2; }
    bind "3" { GoToTab 3; }
}

// Normal mode
normal {
    bind "Ctrl p" { SwitchToMode "Pane"; }
    bind "Ctrl t" { SwitchToMode "Tab"; }
    bind "Ctrl o" { SwitchToMode "Session"; }
    bind "Ctrl s" { SwitchToMode "Search"; }
    bind "Ctrl q" { Quit; }
}`
              }
            ],
            codeBlocks: [
              `# Cài đặt
brew install zellij
# Hoặc với cargo
cargo install zellij

# Chạy lần đầu
zellij

# Tạo config
mkdir -p ~/.config/zellij
touch ~/.config/zellij/config.kdl

# List sessions
zellij list-sessions

# Attach to session
zellij attach <session-name>

# Kill session
zellij kill-session <session-name>`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            content: [
              "Practice từng thao tác riêng lẻ",
              "Combine trong workflow thực tế",
              "Speed training"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (40 phút): Setup workspace",
                duration: "40 phút",
                tasks: [
                  "Tạo layout: left pane (editor), right top (server), right bottom (git)",
                  "Lặp lại tạo layout này 15 lần cho đến khi làm được < 30s",
                  "Focus giữa các panes 150 lần - target: < 3s mỗi lần",
                  "Resize panes 50 lần",
                  "Timed challenge: Setup layout < 20s"
                ]
              },
              {
                title: "BÀI TẬP 2 (40 phút): Multi-tab workflow",
                duration: "40 phút",
                tasks: [
                  "Tab 1: Frontend (3 panes: editor, server, git)",
                  "Tab 2: Backend (3 panes: editor, server, logs)",
                  "Tab 3: Database (2 panes: query, results)",
                  "Switch giữa tabs 80 lần - target: < 1s mỗi lần",
                  "Close và recreate tabs 15 lần",
                  "Rename tabs 10 lần"
                ]
              },
              {
                title: "BÀI TẬP 3 (40 phút): Advanced Operations",
                duration: "40 phút",
                tasks: [
                  "Tạo session \"work\" với 3 tabs",
                  "Detach (Ctrl + o, d) và attach lại - 20 lần",
                  "Tạo session \"personal\" với 2 tabs",
                  "Switch giữa sessions - 15 lần",
                  "Practice search mode (Ctrl + s) - tìm text 30 lần",
                  "Copy/paste giữa panes - 20 lần"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review & Integration",
            content: [
              "Review tất cả Zellij shortcuts",
              "Integrate với yabai workflow",
              "Plan cho Raycast"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 10 thao tác Zellij - 100% accuracy",
                  "Setup workspace từ đầu < 30s",
                  "Combine yabai + Zellij: Window management + Terminal",
                  "Chuẩn bị cho Raycast"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "Ctrl + p, n", description: "New pane" },
            { key: "Ctrl + p, x", description: "Close pane" },
            { key: "Ctrl + p, h/j/k/l", description: "Move focus giữa panes" },
            { key: "Ctrl + p, H/J/K/L", description: "Resize pane" },
            { key: "Ctrl + t, n", description: "New tab" },
            { key: "Ctrl + t, x", description: "Close tab" },
            { key: "Ctrl + t, h/l", description: "Switch tabs" },
            { key: "Ctrl + o, w", description: "Session manager" },
            { key: "Ctrl + s", description: "Search mode" },
            { key: "Ctrl + q", description: "Quit" }
          ],
          goals: ["Tạo và quản lý panes/tabs không cần nghĩ."],
          learningResources: [
            { title: "Zellij GitHub", url: "https://github.com/zellij-org/zellij", description: "Official Zellij documentation" },
            { title: "Zellij Book", url: "https://zellij.dev/documentation", description: "Complete Zellij user guide" },
            { title: "Terminal Multiplexer Concepts", description: "Hiểu về tmux, screen, và terminal multiplexing" }
          ],
          bestPractices: [
            "Tạo named sessions cho mỗi project - dễ quản lý và attach lại",
            "Sử dụng layouts để setup workspace nhanh - save time",
            "Practice detach/attach workflow - rất hữu ích khi switch projects",
            "Combine với yabai: Zellij trong terminal window, yabai quản lý window",
            "Customize keybindings cho phù hợp với workflow của bạn"
          ],
          commonMistakes: [
            "Nhầm lẫn giữa Pane mode (Ctrl+p) và Tab mode (Ctrl+t)",
            "Quên detach session trước khi close terminal - mất session",
            "Không name sessions - khó tìm lại sau",
            "Cố gắng nhớ tất cả shortcuts cùng lúc - nên học từng mode",
            "Không practice detach/attach - mất cơ hội sử dụng feature mạnh nhất"
          ]
        },
        {
          day: "5-7",
          title: "Raycast + Practice tổng hợp",
          totalHours: 4,
          dailyGoals: [
            "✅ Setup Raycast hoàn chỉnh",
            "✅ Master 10 Raycast commands",
            "✅ Tạo và sử dụng snippets",
            "✅ Integrate Raycast vào daily workflow"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Download và cài Raycast",
              "Set hotkey: Cmd + Space (thay Spotlight)",
              "Import clipboard history",
              "Enable window management",
              "Explore extensions và plugins",
              "Setup workflows cơ bản"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Raycast",
            content: [
              "Practice từng command riêng lẻ",
              "Speed training với timed challenges",
              "Create custom workflows"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (40 phút): App Management",
                duration: "40 phút",
                tasks: [
                  "Mở 20 apps khác nhau bằng Raycast - lặp lại 5 lần",
                  "Target: Mở app < 2s từ khi nhấn Cmd + Space",
                  "Practice switching giữa 10 apps - 50 lần",
                  "Timed challenge: Mở 10 apps < 20s"
                ]
              },
              {
                title: "BÀI TẬP 2 (40 phút): Clipboard & Files",
                duration: "40 phút",
                tasks: [
                  "Copy 30 items, dùng clipboard history để paste lại - lặp lại 5 lần",
                  "Search và mở 20 files khác nhau - lặp lại 5 lần",
                  "Practice file search với fuzzy matching - 30 lần",
                  "Target: Tìm file < 3s"
                ]
              },
              {
                title: "BÀI TẬP 3 (40 phút): Snippets & Workflows",
                duration: "40 phút",
                tasks: [
                  "Tạo 10 snippets thường dùng (email, phone, code templates, addresses)",
                  "Practice insert snippets - 50 lần",
                  "Tạo 3 custom workflows cho coding",
                  "Test workflows trong real scenarios"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Integration & CHALLENGE TUẦN 1",
            content: [
              "Review tất cả Raycast features",
              "Integrate với yabai + Zellij workflow",
              "CHALLENGE: Làm project nhỏ hoàn toàn không chuột"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 10 commands - 100% accuracy",
                  "Setup complete workflow: Raycast → yabai → Zellij",
                  "Timed challenge: Complete setup < 1 phút"
                ]
              },
              {
                title: "CHALLENGE TUẦN 1: Project Nhỏ Hoàn Toàn Không Chuột",
                tasks: [
                  "Setup (15 phút): Raycast mở VSCode, yabai tạo layout (VSCode 70% trái, Terminal 30% phải), Zellij split terminal (top: git, bottom: server)",
                  "Coding workflow (2h): fzf tìm files (Ctrl+T), Vim motions edit code, Alt+l focus terminal, Git commands, Alt+h focus VSCode, Raycast search docs, Copy/paste bằng clipboard history",
                  "Target: Hoàn thành project nhỏ không dùng chuột",
                  "Timed challenge: Complete project setup và coding < 2.5 giờ"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "Type app name", description: "Open app" },
            { key: "clipboard", description: "Clipboard history" },
            { key: "window", description: "Window management" },
            { key: "kill", description: "Kill process" },
            { key: "calc", description: "Calculator" },
            { key: "define", description: "Dictionary" },
            { key: "emoji", description: "Emoji picker" },
            { key: "file", description: "Search files" },
            { key: "snip", description: "Snippets" },
            { key: "ext", description: "Browse extensions" }
          ]
        }
      ]
    },
    {
      week: 2,
      title: "INTERMEDIATE - Browser & Files",
      goals: [
        "85% thời gian không dùng chuột",
        "Browse web mượt mà không chuột",
        "File management không cần Finder",
        "fzf thành reflex tự nhiên"
      ],
      metrics: {
        mouseUsage: "15%",
        shortcutsLearned: 65,
        comfortLevel: "7/10"
      },
      days: [
        {
          day: "8-9",
          title: "Vimium - Browser Navigation",
          totalHours: 4,
          dailyGoals: [
            "✅ Cài đặt Vimium/Vimari thành công",
            "✅ Master 15 phím tắt Vimium",
            "✅ Browse web 90% không chuột",
            "✅ Speed: Click link < 2s, Switch tab < 1s"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Chrome/Edge: Install Vimium extension",
              "Safari: Install Vimari extension",
              "Đọc Vimium documentation",
              "Test tất cả phím tắt cơ bản",
              "Config Vimium settings",
              "Practice với sample pages"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            content: [
              "Practice từng phím tắt riêng lẻ",
              "Combine trong real browsing scenarios",
              "Speed training với timed challenges"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Basic Navigation",
                duration: "30 phút",
                tasks: [
                  "Mở HackerNews, dùng f click 30 links - target: < 2s mỗi link",
                  "Scroll bằng j/k đọc 15 bài - practice smooth scrolling",
                  "gg/G jump top/bottom - 50 lần",
                  "d/u scroll half page - 40 lần",
                  "Timed challenge: Read 5 articles < 5 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Tab Management",
                duration: "30 phút",
                tasks: [
                  "Mở 15 tabs từ HackerNews",
                  "J/K switch giữa tabs 80 lần - target: < 1s mỗi lần",
                  "x close tabs - 50 lần",
                  "X restore tabs - 20 lần",
                  "t new tab và o open URL - 30 lần",
                  "Timed challenge: Switch 10 tabs < 10s"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Search & Navigate",
                duration: "30 phút",
                tasks: [
                  "Google search 15 từ khóa khác nhau",
                  "Mỗi search: f vào kết quả, đọc, H back - repeat 3 lần",
                  "Practice o mở bookmark 30 lần",
                  "/ search in page - 25 lần",
                  "gi focus input fields - 20 lần",
                  "Timed challenge: Search và đọc 5 results < 3 phút"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Advanced Workflow",
                duration: "30 phút",
                tasks: [
                  "yy copy URLs và paste vào notes - 25 lần",
                  "F open link new tab - 30 lần",
                  "Browse GitHub: Navigate repos, read issues, check PRs",
                  "Browse Stack Overflow: Search, read answers, navigate",
                  "Timed challenge: Complete research task < 10 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Real World Practice",
            content: [
              "Browse docs, articles hoàn toàn không chuột",
              "Code review trên GitHub",
              "Research và đọc news"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 15 phím tắt - 100% accuracy",
                  "Browse 10 websites khác nhau không dùng chuột",
                  "Timed challenge: Complete browsing session < 15 phút",
                  "Ghi lại 3 phím tắt cần practice thêm"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "f", description: "Click links" },
            { key: "F", description: "Open link new tab" },
            { key: "j/k", description: "Scroll down/up" },
            { key: "gg/G", description: "Top/bottom page" },
            { key: "d/u", description: "Scroll half page" },
            { key: "H/L", description: "Back/forward" },
            { key: "x", description: "Close tab" },
            { key: "X", description: "Restore tab" },
            { key: "J/K", description: "Next/previous tab" },
            { key: "t", description: "New tab" },
            { key: "o", description: "Open URL/bookmark" },
            { key: "O", description: "Open in new tab" },
            { key: "yy", description: "Copy URL" },
            { key: "gi", description: "Focus input" },
            { key: "/", description: "Search in page" }
          ],
          goals: ["Browse web 90% không chuột."]
        },
        {
          day: "10-11",
          title: "fzf - Fuzzy Finder",
          totalHours: 4,
          dailyGoals: [
            "✅ Cài đặt và config fzf",
            "✅ Master 5 phím tắt fzf",
            "✅ Tìm file < 3s, command < 2s",
            "✅ Integrate fzf vào daily workflow"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Cài đặt fzf",
              "Đọc fzf documentation",
              "Test keybindings",
              "Config fzf options",
              "Practice basic usage"
            ],
            codeBlocks: [
              `# Cài đặt
brew install fzf
$(brew --prefix)/opt/fzf/install  # Setup keybindings

# Test keybindings
# Ctrl + T: File search
# Ctrl + R: Command history
# Alt + C: Directory navigation`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            content: [
              "Practice từng feature riêng lẻ",
              "Speed training",
              "Real workflow integration"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): File Finding",
                duration: "30 phút",
                tasks: [
                  "Ctrl + T tìm 80 files khác nhau - target: < 3s mỗi file",
                  "Practice typing để filter results - 50 lần",
                  "Paste vào vim/vscode để mở - 40 lần",
                  "Multi-select files với Tab - 20 lần",
                  "Timed challenge: Tìm và mở 10 files < 30s"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Command History",
                duration: "30 phút",
                tasks: [
                  "Ctrl + R tìm 40 commands đã chạy",
                  "Re-run commands - 30 lần",
                  "Edit trước khi run - 25 lần",
                  "Search với keywords - 30 lần",
                  "Timed challenge: Tìm và run 5 commands < 20s"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Directory Navigation",
                duration: "30 phút",
                tasks: [
                  "Alt + C jump giữa 40 directories - target: < 2s mỗi lần",
                  "Combine với ls, cd commands - 30 lần",
                  "Navigate deep folder structures - 20 lần",
                  "Practice với project folders - 25 lần",
                  "Timed challenge: Navigate 10 directories < 20s"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Advanced Usage",
                duration: "30 phút",
                tasks: [
                  "ps aux | fzf tìm processes - 20 lần",
                  "kill -9 <pid> với fzf autocomplete - 15 lần",
                  "git log | fzf tìm commits - 15 lần",
                  "docker ps | fzf manage containers - 10 lần",
                  "Custom fzf commands - tạo 5 aliases"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Integration",
            content: [
              "Integrate fzf vào coding workflow",
              "Replace Finder với fzf",
              "Create custom fzf scripts"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 5 phím tắt - 100% accuracy",
                  "Complete workflow: fzf → vim → git",
                  "Timed challenge: Find file, edit, commit < 1 phút",
                  "Chuẩn bị cho lf"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "Ctrl + T", description: "Find files" },
            { key: "Ctrl + R", description: "Command history" },
            { key: "Alt + C", description: "Change directory" },
            { key: "fzf", description: "Interactive find" },
            { key: "kill <tab>", description: "Kill process với fzf" }
          ]
        },
        {
          day: "12-14",
          title: "lf - File Manager",
          totalHours: 4,
          dailyGoals: [
            "✅ Cài đặt và config lf",
            "✅ Master 15 phím tắt lf",
            "✅ File operations nhanh hơn Finder",
            "✅ Thay Finder hoàn toàn bằng lf"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Cài đặt lf",
              "Tạo config file",
              "Đọc lf documentation",
              "Test các phím tắt cơ bản",
              "Setup preview và icons"
            ],
            codeBlocks: [
              `# Cài đặt
brew install lf

# Tạo config
mkdir -p ~/.config/lf
touch ~/.config/lf/lfrc

# Basic config
set preview true
set hidden true
set drawbox true
set icons true`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            content: [
              "Practice từng operation riêng lẻ",
              "Speed training",
              "Real file management tasks"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Navigation",
                duration: "30 phút",
                tasks: [
                  "Browse toàn bộ home directory bằng j/k/h/l - 100 lần",
                  "Jump giữa 80 folders - target: < 2s mỗi lần",
                  "Practice gg/G để jump nhanh - 50 lần",
                  "Search files bằng / - 50 lần",
                  "n/N next/previous search - 40 lần",
                  "Timed challenge: Navigate 20 folders < 1 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): File Operations",
                duration: "30 phút",
                tasks: [
                  "Tạo 30 files mới (:mkfile) - target: < 5s mỗi file",
                  "Tạo 15 directories mới (:mkdir)",
                  "Copy 30 files từ folder này sang folder khác",
                  "Rename 30 files - target: < 3s mỗi file",
                  "Delete 30 files",
                  "Timed challenge: Create 10 files < 1 phút"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Bulk Operations",
                duration: "30 phút",
                tasks: [
                  "Select 20 files bằng space",
                  "Copy tất cả cùng lúc - 15 lần",
                  "Paste vào folder khác - 15 lần",
                  "Select và delete multiple files - 10 lần",
                  "u unselect all - 20 lần",
                  "Timed challenge: Move 10 files < 30s"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Advanced Operations",
                duration: "30 phút",
                tasks: [
                  "Preview files với Enter - 40 lần",
                  "Open files với :open - 30 lần",
                  "Search và filter - 25 lần",
                  "Navigate deep structures - 20 lần",
                  "Organize project files - real scenario",
                  "Timed challenge: Organize folder < 2 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Real Workflow & CHALLENGE TUẦN 2",
            content: [
              "Thay Finder bằng lf hoàn toàn",
              "Organize projects bằng lf",
              "Move files giữa projects",
              "CHALLENGE: Setup project mới hoàn toàn không chuột"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 15 phím tắt - 100% accuracy",
                  "Complete file management task không dùng Finder",
                  "Timed challenge: Setup project structure < 2 phút"
                ]
              },
              {
                title: "CHALLENGE TUẦN 2: Setup Project Mới Hoàn Toàn Không Chuột",
                tasks: [
                  "lf vào projects folder",
                  ":mkdir new-project",
                  "l vào folder",
                  ":mkfile index.html, :mkfile style.css, :mkfile script.js",
                  "space select all files",
                  "y copy, h lên parent, l vào other project, p paste",
                  "Ctrl+T (fzf) tìm index.html",
                  "VSCode mở file",
                  "alt+l focus terminal",
                  "Ctrl+p, n (Zellij) new pane",
                  "Start dev server",
                  "Cmd+Space (Raycast) mở browser",
                  "f (Vimium) click localhost link",
                  "Target: < 2 phút"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "j/k", description: "Down/up" },
            { key: "h/l", description: "Parent/child directory" },
            { key: "gg/G", description: "Top/bottom" },
            { key: "space", description: "Select files" },
            { key: "u", description: "Unselect all" },
            { key: "y", description: "Copy" },
            { key: "d", description: "Cut" },
            { key: "p", description: "Paste" },
            { key: "<delete>", description: "Delete" },
            { key: "a", description: "Rename" },
            { key: "/", description: "Search" },
            { key: "n/N", description: "Next/previous search" },
            { key: ":", description: "Command mode" },
            { key: "q", description: "Quit" },
            { key: "?", description: "Show help" }
          ],
          goals: ["File management 90% không chuột."]
        }
      ]
    },
    {
      week: 3,
      title: "ADVANCED - Git & Optimization",
      goals: [
        "90-95% không dùng chuột",
        "Git workflow hoàn toàn keyboard",
        "Vim motions thành muscle memory",
        "Workflow được optimize cho project thực tế"
      ],
      metrics: {
        mouseUsage: "5-10%",
        shortcutsLearned: 100,
        comfortLevel: "8/10"
      },
      days: [
        {
          day: "15-17",
          title: "lazygit - Git TUI",
          totalHours: 4,
          dailyGoals: [
            "✅ Cài đặt và config lazygit",
            "✅ Master 20 phím tắt lazygit",
            "✅ Git workflow 100% keyboard",
            "✅ Stage, commit, push không cần GUI"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Cài đặt lazygit",
              "Config lazygit",
              "Đọc lazygit documentation",
              "Test các panels và navigation",
              "Practice basic commands"
            ],
            codeBlocks: [
              `# Cài đặt
brew install lazygit

# Config (optional)
mkdir -p ~/Library/Application\\ Support/lazygit
touch ~/Library/Application\\ Support/lazygit/config.yml

# Chạy lazygit
lazygit`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            content: [
              "Practice từng panel riêng lẻ",
              "Combine trong real git workflow",
              "Speed training"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Basic Workflow",
                duration: "30 phút",
                tasks: [
                  "Tạo test repository",
                  "Edit 15 files",
                  "Stage từng file bằng space - 40 lần - target: < 1s mỗi file",
                  "Stage all bằng a - 30 lần",
                  "Commit với message - 50 commits",
                  "View commit history - navigate 30 commits",
                  "Push - 10 lần",
                  "Timed challenge: Edit, stage, commit, push < 2 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Staging Granularity",
                duration: "30 phút",
                tasks: [
                  "Edit 3 files nhiều chỗ",
                  "Enter vào file → view hunks - 30 lần",
                  "Stage từng hunk riêng - 40 lần - target: < 2s mỗi hunk",
                  "Discard từng hunk riêng - 30 lần",
                  "Stage lines individually - 20 lần",
                  "Commit selective changes - 15 commits",
                  "Timed challenge: Stage selective changes < 1 phút"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Branching Workflow",
                duration: "30 phút",
                tasks: [
                  "Tạo 15 branches mới (n) - target: < 3s mỗi branch",
                  "Checkout giữa branches (space) - 60 lần",
                  "Commit trên mỗi branch - 30 commits",
                  "Merge branches (M) - 10 lần",
                  "Xóa branches (d) - 15 lần",
                  "Rename branches - 10 lần",
                  "Timed challenge: Create branch, commit, merge < 3 phút"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Advanced Operations",
                duration: "30 phút",
                tasks: [
                  "Interactive rebase (e) - 10 lần",
                  "Squash commits (s) - 15 lần",
                  "Reword commits (r) - 20 lần",
                  "Amend commits (A) - 15 lần",
                  "Stash workflow (5) - 20 lần",
                  "Cherry-pick commits - 10 lần",
                  "Timed challenge: Rebase và squash < 5 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Real Git Workflow",
            content: [
              "Practice với real project",
              "Complete git workflow không GUI",
              "Review và optimize"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 20 phím tắt - 100% accuracy",
                  "Complete git workflow: stage → commit → push",
                  "Timed challenge: Full git cycle < 3 phút",
                  "Chuẩn bị cho VSCode Vim"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "1", description: "Status" },
            { key: "2", description: "Files" },
            { key: "3", description: "Local branches" },
            { key: "4", description: "Commits" },
            { key: "5", description: "Stash" },
            { key: "space", description: "Stage/unstage" },
            { key: "a", description: "Stage all" },
            { key: "d", description: "Discard changes" },
            { key: "c", description: "Commit" },
            { key: "P", description: "Push" },
            { key: "p", description: "Pull" },
            { key: "s", description: "Squash" },
            { key: "r", description: "Reword" },
            { key: "e", description: "Edit (rebase)" },
            { key: "d", description: "Drop commit" },
            { key: "A", description: "Amend" },
            { key: "n", description: "New branch" },
            { key: "M", description: "Merge" }
          ],
          goals: ["Git operations 100% không cần GUI/chuột."]
        },
        {
          day: "18-19",
          title: "VSCode Vim - Deep Dive",
          totalHours: 4,
          dailyGoals: [
            "✅ Master 20+ Vim motions nâng cao",
            "✅ Text objects thành muscle memory",
            "✅ Code refactoring hoàn toàn keyboard",
            "✅ Macros và advanced editing"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Cài đặt VSCode Vim extension",
              "Review Vim motions cơ bản",
              "Đọc VSCode Vim extension docs",
              "Test text objects",
              "Practice navigation commands",
              "Setup Vim keybindings và settings"
            ],
            detailedSetup: [
              "Bước 1: Mở VSCode Extensions (Cmd+Shift+X)",
              "Bước 2: Search 'Vim' và install 'Vim' extension by vscodevim",
              "Bước 3: Reload VSCode để activate extension",
              "Bước 4: Verify Vim mode - check status bar có '-- NORMAL --'",
              "Bước 5: Test basic motions: h/j/k/l, w/e/b, gg/G",
              "Bước 6: Configure settings.json cho Vim extension",
              "Bước 7: Disable conflicting VSCode shortcuts",
              "Bước 8: Setup vimrc file cho custom keybindings"
            ],
            concepts: [
              "Vim modes: Normal (command), Insert (typing), Visual (selection), Command-line",
              "VSCode Vim extension: Emulates Vim trong VSCode editor",
              "Vim motions: Commands để navigate và edit text (h/j/k/l, w/e/b, f/F, etc.)",
              "Text objects: Units of text (words, sentences, paragraphs, quotes, brackets)",
              "Operators: Commands thao tác trên text (d=delete, c=change, y=yank, etc.)",
              "Registers: Clipboard của Vim, có nhiều registers khác nhau",
              "Macros: Record và replay sequences of commands",
              "VSCode integration: Vim commands work với VSCode features (IntelliSense, multi-cursor, etc.)"
            ],
            troubleshooting: [
              "Nếu Vim mode không activate: Check extension installed và enabled",
              "Nếu shortcuts conflict: Disable VSCode shortcuts trong keybindings.json",
              "Nếu motions không work: Check vim.useSystemClipboard và vim.useCtrlKeys",
              "Nếu Insert mode stuck: Press Esc nhiều lần hoặc restart VSCode",
              "Nếu extension lag: Disable unnecessary features trong settings",
              "Nếu multi-cursor conflict: Configure vim.handleKeys để allow VSCode shortcuts"
            ],
            configFiles: [
              {
                name: ".vscode/settings.json",
                description: "VSCode settings với Vim configuration",
                content: `{
  // Vim Extension Settings
  "vim.enabled": true,
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.highlightedyank.enable": true,
  "vim.highlightedyank.duration": 200,
  "vim.leader": "<space>",
  "vim.handleKeys": {
    "<C-a>": false,
    "<C-f>": false,
    "<C-h>": false,
    "<C-n>": false,
    "<C-p>": false,
    "<C-t>": false
  },
  
  // Disable conflicting VSCode shortcuts
  "vim.insertModeKeyBindings": [
    {
      "before": ["j", "k"],
      "after": ["<Esc>"]
    }
  ],
  
  // Vim normal mode keybindings
  "vim.normalModeKeyBindings": [
    {
      "before": ["<leader>", "w"],
      "commands": ["workbench.action.files.save"]
    },
    {
      "before": ["<leader>", "q"],
      "commands": ["workbench.action.closeActiveEditor"]
    }
  ],
  
  // Visual mode
  "vim.visualModeKeyBindings": [
    {
      "before": ["<leader>", "y"],
      "commands": ["editor.action.clipboardCopyAction"]
    }
  ]
}`
              },
              {
                name: ".vimrc (optional)",
                description: "Vim configuration file cho custom settings",
                content: `" VSCode Vim Configuration
" This file is read by VSCode Vim extension

" Basic settings
set number
set relativenumber
set ignorecase
set smartcase
set incsearch
set hlsearch

" Key mappings
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>e :e<CR>

" Disable arrow keys (force hjkl)
noremap <Up> <Nop>
noremap <Down> <Nop>
noremap <Left> <Nop>
noremap <Right> <Nop>`
              }
            ],
            codeBlocks: [
              `# Install VSCode Vim Extension
# Method 1: Through VSCode UI
# 1. Open Extensions (Cmd+Shift+X)
# 2. Search "Vim"
# 3. Install "Vim" by vscodevim

# Method 2: Through command line
code --install-extension vscodevim.vim

# Verify installation
# Check status bar for "-- NORMAL --" when in Vim mode

# Test basic commands
# Press 'i' to enter Insert mode
# Press 'Esc' to return to Normal mode
# Use h/j/k/l to navigate`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            content: [
              "Practice từng motion riêng lẻ",
              "Combine motions trong real coding",
              "Speed training"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Text Objects Mastery",
                duration: "30 phút",
                tasks: [
                  "Tạo file với 100 \"strings\", (parens), {braces}, [brackets]",
                  "Practice ci\" - 80 lần - target: < 1s mỗi lần",
                  "Practice ci( - 80 lần",
                  "Practice ci{ - 80 lần",
                  "Practice cit (tags) - 50 lần",
                  "Practice diw/daw - 60 lần",
                  "Practice yi(, yi{ - 50 lần",
                  "Timed challenge: Change 20 strings < 30s"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Advanced Navigation",
                duration: "30 phút",
                tasks: [
                  "Practice f/F/t/T - tìm characters 150 lần - target: < 0.5s",
                  "Practice ; repeat f/t - 100 lần",
                  "Practice */# search word - 80 lần",
                  "Practice % jump brackets - 100 lần",
                  "Practice w/e/b word navigation - 120 lần",
                  "Practice {/} paragraph jump - 60 lần",
                  "Timed challenge: Navigate file 100 lines < 30s"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Editing Operations",
                duration: "30 phút",
                tasks: [
                  "Practice . repeat last change - 80 lần",
                  "Practice >/< indent - 100 lần",
                  "Practice J join lines - 60 lần",
                  "Practice ~ toggle case - 50 lần",
                  "Practice Ctrl+a/x increment/decrement - 40 lần",
                  "Practice gU/gu uppercase/lowercase - 40 lần",
                  "Timed challenge: Format 50 lines < 2 phút"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real Refactoring",
                duration: "30 phút",
                tasks: [
                  "Refactor một file code thực tế (200+ lines)",
                  "Đổi tên 20 variables bằng * + cw",
                  "Indent 10 blocks bằng > / <",
                  "Join/split 30 lines bằng J",
                  "Extract 5 functions bằng visual mode + d + p",
                  "Move 10 code blocks",
                  "Timed challenge: Refactor file < 15 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Macros & Advanced",
            content: [
              "Learn và practice macros",
              "Advanced editing techniques",
              "Real coding scenarios"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Macros",
                tasks: [
                  "Record macro đổi format 100 lines - 5 macros",
                  "Record macro thêm semicolons - 3 macros",
                  "Record macro wrap trong function calls - 3 macros",
                  "Practice @@ repeat last macro - 30 lần",
                  "Practice @{register} play macro - 20 lần",
                  "Timed challenge: Format 50 lines với macro < 1 phút"
                ]
              },
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 20+ motions - 100% accuracy",
                  "Code một feature hoàn chỉnh chỉ dùng Vim motions",
                  "Track số lần dùng chuột (target: 0)",
                  "Chuẩn bị cho optimization"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "ciw", description: "Change inner word" },
            { key: "ci\"", description: "Change inside quotes" },
            { key: "ci(", description: "Change inside parentheses" },
            { key: "ci{", description: "Change inside braces" },
            { key: "cit", description: "Change inside tag" },
            { key: "diw/daw", description: "Delete word" },
            { key: "f{char}", description: "Find character forward" },
            { key: "F{char}", description: "Find character backward" },
            { key: "%", description: "Jump matching bracket" },
            { key: "*/#", description: "Search word under cursor" },
            { key: ".", description: "Repeat last change" },
            { key: ">/<", description: "Indent/Unindent" },
            { key: "J", description: "Join lines" },
            { key: "q{register}", description: "Record macro" },
            { key: "@{register}", description: "Play macro" }
          ],
          goals: ["Vim motions thành bản năng."],
          learningResources: [
            { title: "VSCode Vim Extension", url: "https://marketplace.visualstudio.com/items?itemName=vscodevim.vim", description: "Official VSCode Vim extension page" },
            { title: "VSCode Vim GitHub", url: "https://github.com/VSCodeVim/Vim", description: "Source code và documentation" },
            { title: "Vim Adventures", url: "https://vim-adventures.com/", description: "Game để học Vim motions" },
            { title: "Vim Cheat Sheet", description: "Quick reference cho Vim commands" },
            { title: "Practical Vim", description: "Book về Vim best practices" }
          ],
          bestPractices: [
            "Bắt đầu với basic motions (h/j/k/l, w/e/b) trước khi học advanced",
            "Disable arrow keys để force dùng hjkl - tạo muscle memory",
            "Sử dụng relative line numbers (set relativenumber) để navigate dễ hơn",
            "Practice trong real code, không chỉ practice files",
            "Combine Vim motions với VSCode features (IntelliSense, multi-cursor)",
            "Customize keybindings cho phù hợp với workflow",
            "Sử dụng leader key (<space>) cho custom commands",
            "Learn text objects (ci\", ci(, ci{) - rất powerful"
          ],
          commonMistakes: [
            "Cố gắng nhớ tất cả commands cùng lúc - nên học từng nhóm",
            "Không disable conflicting VSCode shortcuts - gây confusion",
            "Quên Esc để exit Insert mode - stuck trong Insert mode",
            "Không practice đủ - muscle memory cần thời gian",
            "Ignore text objects - miss out on powerful editing",
            "Không customize settings - default settings có thể không optimal",
            "Chỉ dùng motions, không combine với operators (d, c, y)",
            "Không practice macros - miss powerful automation tool"
          ]
        }
      ]
    },
    {
      week: 4,
      title: "MASTERY & CUSTOMIZATION",
      goals: [
        "Mouse usage: < 5%",
        "Phím tắt mastered: 100+",
        "Comfort level: 9/10",
        "Speed: Same or better than before"
      ],
      metrics: {
        mouseUsage: "< 5%",
        shortcutsLearned: 100,
        comfortLevel: "9/10"
      },
      days: [
        {
          day: "20-21",
          title: "Moonlander Keyboard - Master Layout",
          totalHours: 4,
          dailyGoals: [
            "✅ Setup Moonlander keyboard với QMK/ZSA",
            "✅ Customize layout cho coding workflow",
            "✅ Master thumb clusters và layers",
            "✅ Practice lại tất cả skills với Moonlander"
          ],
          morning: {
            title: "Sáng (1.5h): Setup Moonlander",
            content: [
              "Unbox và connect Moonlander",
              "Cài đặt ZSA Configurator hoặc QMK",
              "Hiểu về Moonlander layout và thumb clusters",
              "Setup basic layout cho coding",
              "Test và calibrate keys"
            ],
            detailedSetup: [
              "Bước 1: Unbox Moonlander và connect via USB-C",
              "Bước 2: Download ZSA Configurator từ zsa.io hoặc setup QMK",
              "Bước 3: Flash default firmware lên keyboard",
              "Bước 4: Test tất cả keys và thumb clusters",
              "Bước 5: Calibrate thumb clusters cho comfortable position",
              "Bước 6: Tạo custom layout trong Configurator",
              "Bước 7: Map keys cho coding workflow (hjkl, modifiers, etc.)",
              "Bước 8: Setup layers (Base, Navigation, Numbers, Symbols)",
              "Bước 9: Test layout với typing test",
              "Bước 10: Fine-tune key positions"
            ],
            concepts: [
              "Moonlander layout: Split keyboard với thumb clusters - ergonomic hơn",
              "Thumb clusters: 4 keys mỗi side - dùng cho modifiers và layer switching",
              "Layers: Different keymaps trên cùng physical keys (như Shift nhưng cho toàn bộ keyboard)",
              "QMK firmware: Open-source firmware cho custom keyboards - fully programmable",
              "ZSA Configurator: Web-based tool để configure Moonlander không cần code",
              "Columnar stagger: Keys arranged theo finger columns - natural hơn row stagger",
              "Tenting: Adjustable angle của keyboard halves - reduce wrist strain",
              "Home row: ASDF JKL; - fingers rest position, Moonlander optimize cho home row"
            ],
            troubleshooting: [
              "Nếu keyboard không connect: Check USB-C cable, try different port",
              "Nếu keys không register: Re-flash firmware, check keymap",
              "Nếu thumb clusters uncomfortable: Adjust tenting angle và key positions",
              "Nếu layout không save: Check ZSA account sync, export backup",
              "Nếu typing speed giảm: Normal khi switch keyboard, practice 1-2 tuần",
              "Nếu layers không switch: Check layer keys mapping, test với Configurator"
            ],
            configFiles: [
              {
                name: "Moonlander Layout (ZSA Configurator)",
                description: "Custom layout cho coding workflow",
                content: `// Moonlander Layout Configuration
// Base Layer (Layer 0)
// Left Hand: QWERTY layout với thumb clusters
// Right Hand: QWERTY layout với thumb clusters

// Thumb Clusters Mapping:
// Left Thumb: 
//   - Bottom Left: Space
//   - Bottom Right: Enter
//   - Top Left: Layer 1 (Navigation)
//   - Top Right: Layer 2 (Numbers/Symbols)

// Right Thumb:
//   - Bottom Left: Backspace
//   - Bottom Right: Delete
//   - Top Left: Layer 3 (Function Keys)
//   - Top Right: Layer 1 (Navigation)

// Layer 1 (Navigation):
//   - hjkl → Arrow keys
//   - u/i/o/p → Home/PageUp/PageDown/End
//   - w/e/r → Word navigation
//   - Thumb clusters → Modifiers (Ctrl, Alt, Cmd)

// Layer 2 (Numbers/Symbols):
//   - Top row → Numbers 1-0
//   - Middle row → Symbols (!@#$%^&*())
//   - Bottom row → More symbols

// Layer 3 (Function Keys):
//   - Top row → F1-F12
//   - Custom shortcuts cho coding tools`
              },
              {
                name: "QMK Keymap (keymap.c)",
                description: "QMK keymap file cho advanced customization",
                content: `#include QMK_KEYBOARD_H

// Layer definitions
enum layers {
    _BASE,
    _NAV,
    _NUM,
    _FN
};

// Keymap
const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    // Base layer
    [_BASE] = LAYOUT_moonlander(
        KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,    KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,
        KC_A,    KC_S,    KC_D,    KC_F,    KC_G,    KC_H,    KC_J,    KC_K,    KC_L,    KC_SCLN,
        KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH,
        KC_LCTL, KC_LGUI, KC_LALT, KC_LSFT, MO(_NAV), KC_SPC,  KC_ENT,  MO(_NAV), KC_RSFT, KC_RALT, KC_RGUI, KC_RCTL
    ),
    
    // Navigation layer
    [_NAV] = LAYOUT_moonlander(
        _______, _______, _______, _______, _______, _______, KC_HOME, KC_PGUP, KC_PGDN, KC_END,
        _______, _______, _______, _______, _______, KC_LEFT, KC_DOWN, KC_UP,   KC_RGHT, _______,
        _______, _______, _______, _______, _______, _______, _______, _______, _______, _______,
        _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______
    )
};`
              }
            ],
            codeBlocks: [
              `# Setup Moonlander với ZSA Configurator

# 1. Download ZSA Configurator
# Visit: https://config.zsa.io

# 2. Connect Moonlander và flash firmware
# - Click "Detect Keyboard"
# - Select Moonlander
# - Flash default layout

# 3. Customize layout
# - Click keys để remap
# - Setup layers
# - Configure thumb clusters

# 4. Test layout
# - Use typing test
# - Practice basic movements

# Setup với QMK (Advanced)
git clone https://github.com/qmk/qmk_firmware
cd qmk_firmware
qmk setup
qmk compile -kb moonlander -km default
qmk flash -kb moonlander -km default`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice với Moonlander",
            content: [
              "Practice typing với Moonlander layout",
              "Luyện lại tất cả skills đã học",
              "Adapt workflow cho Moonlander"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Moonlander Basics",
                duration: "30 phút",
                tasks: [
                  "Typing test với Moonlander - target: 40+ WPM",
                  "Practice home row position - 10 phút",
                  "Practice thumb clusters - 50 lần mỗi thumb",
                  "Switch giữa layers - 100 lần",
                  "Timed challenge: Type 100 words < 3 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Window Management với Moonlander",
                duration: "30 phút",
                tasks: [
                  "Setup yabai shortcuts trên Moonlander layers",
                  "Practice window focus (alt+h/j/k/l) - 80 lần",
                  "Practice window move (shift+alt+h/j/k/l) - 60 lần",
                  "Switch spaces với thumb clusters - 50 lần",
                  "Timed challenge: Setup workspace < 10s"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Terminal & Zellij với Moonlander",
                duration: "30 phút",
                tasks: [
                  "Practice Zellij shortcuts với Moonlander layout",
                  "Ctrl+p, n (new pane) - 50 lần",
                  "Ctrl+p, h/j/k/l (navigate) - 100 lần",
                  "Ctrl+t, h/l (switch tabs) - 80 lần",
                  "Detach/attach sessions - 20 lần",
                  "Timed challenge: Setup Zellij layout < 30s"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Vim Motions với Moonlander",
                duration: "30 phút",
                tasks: [
                  "Practice hjkl navigation - 150 lần",
                  "Practice text objects (ci\", ci(, ci{) - 100 lần",
                  "Practice f/F/t/T - 120 lần",
                  "Practice macros với Moonlander - 30 lần",
                  "Code refactoring với Moonlander - real file",
                  "Timed challenge: Navigate 200 lines < 1 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Complete Workflow với Moonlander",
            content: [
              "Practice complete coding workflow",
              "Combine tất cả tools với Moonlander",
              "Optimize layout cho workflow"
            ],
            exercises: [
              {
                title: "REVIEW & INTEGRATION",
                tasks: [
                  "Complete workflow: Raycast → yabai → Zellij → Vim → lazygit",
                  "Practice với Moonlander - tất cả shortcuts",
                  "Timed challenge: Full coding cycle < 5 phút",
                  "Fine-tune Moonlander layout cho comfort",
                  "Document custom keybindings"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "Thumb clusters", description: "Layer switching và modifiers" },
            { key: "Layer 1 + hjkl", description: "Arrow keys (thay vì reach cho arrow keys)" },
            { key: "Layer 2 + top row", description: "Numbers 1-0" },
            { key: "Layer 3 + top row", description: "Function keys F1-F12" },
            { key: "Thumb + hjkl", description: "Navigation với thumb modifiers" }
          ],
          goals: [
            "Master Moonlander layout và thumb clusters",
            "Adapt tất cả skills cho Moonlander",
            "Typing speed: 40+ WPM với Moonlander",
            "Complete workflow không cần reach cho arrow keys/numbers"
          ],
          learningResources: [
            { title: "ZSA Moonlander", url: "https://www.zsa.io/moonlander/", description: "Official Moonlander page" },
            { title: "ZSA Configurator", url: "https://config.zsa.io/", description: "Web-based configurator" },
            { title: "QMK Documentation", url: "https://docs.qmk.fm/", description: "QMK firmware documentation" },
            { title: "Moonlander Layouts", url: "https://github.com/qmk/qmk_firmware/tree/master/keyboards/zsa/moonlander/keymaps", description: "Community layouts" },
            { title: "Ergonomic Typing", description: "Best practices cho split keyboards" }
          ],
          bestPractices: [
            "Start với default layout, customize dần dần",
            "Setup layers cho different contexts (coding, navigation, numbers)",
            "Use thumb clusters cho frequently used keys (Space, Enter, Backspace)",
            "Map hjkl trên navigation layer - không cần reach cho arrow keys",
            "Practice typing test mỗi ngày - muscle memory cần thời gian",
            "Adjust tenting angle cho comfortable - reduce wrist strain",
            "Use columnar stagger advantage - fingers move naturally",
            "Customize cho YOUR hands - không copy layout của người khác"
          ],
          commonMistakes: [
            "Cố gắng customize quá nhiều ngay từ đầu - nên học default trước",
            "Không practice typing test - typing speed sẽ giảm",
            "Ignore thumb clusters - miss out on ergonomic advantage",
            "Không setup layers - phải reach cho numbers/symbols",
            "Không adjust tenting - có thể gây wrist pain",
            "Copy layout của người khác mà không test - mỗi người khác nhau",
            "Không practice đủ - Moonlander cần 1-2 tuần để adapt",
            "Quên backup layout - mất customizations"
          ]
        },
        {
          day: "21",
          title: "Moonlander Practice - Review All Skills",
          totalHours: 4,
          dailyGoals: [
            "✅ Practice lại tất cả window management với Moonlander",
            "✅ Practice lại tất cả terminal/Zellij với Moonlander",
            "✅ Practice lại tất cả Vim motions với Moonlander",
            "✅ Complete coding workflow với Moonlander"
          ],
          morning: {
            title: "Sáng (1.5h): Review Week 1-2 Skills",
            content: [
              "Practice window management (yabai) với Moonlander",
              "Practice terminal multiplexer (Zellij) với Moonlander",
              "Practice browser navigation (Vimium) với Moonlander",
              "Practice file management (fzf, lf) với Moonlander",
              "Focus: Adapt tất cả shortcuts cho Moonlander layout"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Review All Skills với Moonlander",
            content: [
              "Practice Git workflow (lazygit) với Moonlander",
              "Practice Vim motions (VSCode Vim) với Moonlander",
              "Combine tất cả tools trong real workflow"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Review Week 1-2",
                duration: "30 phút",
                tasks: [
                  "Window management: Setup workspace với yabai - 20 lần",
                  "Focus windows (alt+h/j/k/l) - 100 lần với Moonlander",
                  "Zellij: Create layout - 15 lần, Navigate panes - 120 lần",
                  "Vimium: Navigation (f, j/k, J/K) - 100 lần",
                  "fzf/lf: File operations - 80 operations",
                  "Timed challenge: Complete Week 1-2 workflow < 3 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Review Git Workflow",
                duration: "30 phút",
                tasks: [
                  "Stage files (space) - 60 lần",
                  "Commit (c) - 30 lần",
                  "Switch branches (space) - 50 lần",
                  "Interactive rebase - 10 lần",
                  "Stash workflow - 20 lần",
                  "Timed challenge: Complete git cycle < 3 phút"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Review Vim Motions",
                duration: "30 phút",
                tasks: [
                  "Text objects (ci\", ci(, ci{) - 120 lần",
                  "Navigation (f/F, */#, %) - 150 lần",
                  "Editing (d, c, y) - 100 lần",
                  "Macros - 20 lần",
                  "Refactor real file (200+ lines)",
                  "Timed challenge: Refactor file < 15 phút"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Complete Workflow",
                duration: "30 phút",
                tasks: [
                  "Raycast mở project",
                  "yabai setup workspace",
                  "Zellij create layout",
                  "VSCode Vim edit code",
                  "lazygit commit changes",
                  "Timed challenge: Full coding cycle < 5 phút",
                  "Repeat 5 lần để build muscle memory"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Moonlander Optimization",
            content: [
              "Fine-tune Moonlander layout",
              "Document workflow",
              "Plan advanced customization"
            ],
            exercises: [
              {
                title: "OPTIMIZATION",
                tasks: [
                  "Identify keys còn uncomfortable",
                  "Adjust thumb cluster positions",
                  "Optimize layer switching",
                  "Test typing speed - target: 50+ WPM",
                  "Document final layout"
                ]
              }
            ]
          },
          goals: [
            "Master tất cả skills với Moonlander",
            "Typing speed: 50+ WPM",
            "Complete workflow không cần reach cho keys",
            "Moonlander layout optimized cho coding"
          ]
        },
        {
          day: "22",
          title: "skhd Advanced",
          totalHours: 4,
          dailyGoals: [
            "✅ Tạo complex skhd bindings",
            "✅ Setup app-specific shortcuts",
            "✅ Window size presets và multi-monitor",
            "✅ Create custom scripts"
          ],
          morning: {
            title: "Sáng (1.5h): Advanced skhd",
            content: [
              "Tạo complex bindings cho skhd",
              "App-specific bindings (VSCode, Terminal, Browser)",
              "Window size presets và quick layouts",
              "Multi-monitor support"
            ],
            detailedSetup: [
              "Bước 1: Review current skhd config",
              "Bước 2: Add app-specific bindings cho VSCode",
              "Bước 3: Add app-specific bindings cho Terminal",
              "Bước 4: Create window size presets (half, third, two-thirds)",
              "Bước 5: Setup multi-monitor shortcuts",
              "Bước 6: Create quick layout scripts",
              "Bước 7: Test tất cả bindings",
              "Bước 8: Document custom shortcuts"
            ],
            concepts: [
              "App-specific bindings: Different shortcuts cho different apps",
              "Window presets: Quick resize to common sizes",
              "Multi-monitor: Move windows giữa monitors",
              "Shell scripts: Automate complex workflows",
              "Quick layouts: One-command setup cho common scenarios"
            ],
            configFiles: [
              {
                name: "~/.config/skhd/skhdrc (Advanced)",
                description: "Advanced skhd configuration với app-specific bindings",
                content: `# Advanced skhd Configuration

# App-specific bindings
# VSCode
app : code {
    alt - h : yabai -m window --focus west
    alt - j : yabai -m window --focus south
    alt - k : yabai -m window --focus north
    alt - l : yabai -m window --focus east
}

# Terminal
app : iTerm2 {
    alt - h : yabai -m window --focus west
    alt - j : yabai -m window --focus south
    alt - k : yabai -m window --focus north
    alt - l : yabai -m window --focus east
}

# Window size presets
alt - 1 : yabai -m window --ratio abs:0.5    # Half
alt - 2 : yabai -m window --ratio abs:0.33   # Third
alt - 3 : yabai -m window --ratio abs:0.67   # Two-thirds

# Multi-monitor
ctrl + alt - 1 : yabai -m window --display 1
ctrl + alt - 2 : yabai -m window --display 2

# Quick layouts
alt + shift - 1 : ~/scripts/layout-coding.sh
alt + shift - 2 : ~/scripts/layout-meeting.sh`
              }
            ],
            codeBlocks: [
              `# Create custom layout scripts
# ~/scripts/layout-coding.sh
#!/bin/bash
yabai -m space --layout bsp
yabai -m window --grid 1:2:0:0:1:1
yabai -m window --grid 2:2:1:0:1:1`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice & Create Scripts",
            content: [
              "Practice advanced bindings",
              "Create custom scripts",
              "Test và optimize"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (40 phút): Advanced Bindings",
                duration: "40 phút",
                tasks: [
                  "Test app-specific bindings - 50 lần mỗi app",
                  "Practice window presets - 30 lần",
                  "Multi-monitor navigation - 20 lần",
                  "Quick layouts - 15 lần",
                  "Timed challenge: Setup complex workspace < 15s"
                ]
              },
              {
                title: "BÀI TẬP 2 (40 phút): Custom Scripts",
                duration: "40 phút",
                tasks: [
                  "Tạo script layout-coding.sh",
                  "Tạo script layout-meeting.sh",
                  "Tạo script setup-project.sh",
                  "Tạo script cleanup-workspace.sh",
                  "Tạo script quick-switch.sh",
                  "Test tất cả scripts - 10 lần mỗi script"
                ]
              },
              {
                title: "BÀI TẬP 3 (40 phút): Integration",
                duration: "40 phút",
                tasks: [
                  "Combine scripts với Raycast",
                  "Create aliases cho common tasks",
                  "Setup keyboard shortcuts cho scripts",
                  "Document workflow",
                  "Timed challenge: Complete setup < 1 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review & Optimize",
            content: [
              "Review tất cả customizations",
              "Optimize workflow",
              "Document setup"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test tất cả custom bindings",
                  "Review scripts và optimize",
                  "Document final setup",
                  "Chuẩn bị cho real world practice"
                ]
              }
            ]
          },
          goals: [
            "Advanced skhd bindings hoàn chỉnh",
            "Custom scripts cho daily workflow",
            "Optimized setup cho coding"
          ]
        },
        {
          day: "23",
          title: "Zellij Layouts",
          totalHours: 4,
          dailyGoals: [
            "✅ Tạo project-specific Zellij layouts",
            "✅ Layouts cho Frontend, Backend, Full-stack",
            "✅ Save và load layouts nhanh chóng",
            "✅ Integrate layouts vào workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Create Zellij Layouts",
            content: [
              "Hiểu về Zellij layout system",
              "Tạo layout files (.kdl format)",
              "Setup layouts cho different project types",
              "Test và optimize layouts"
            ],
            concepts: [
              "Zellij layouts: Predefined pane arrangements",
              "KDL format: Key-value language cho Zellij configs",
              "Layout inheritance: Base layouts và variations",
              "Command integration: Auto-run commands trong panes"
            ],
            configFiles: [
              {
                name: "~/.config/zellij/layouts/frontend.kdl",
                description: "Frontend development layout",
                content: `// Frontend Development Layout
layout {
    pane split_direction="vertical" {
        pane size="70%" {
            pane // VSCode/Editor
        }
        pane split_direction="horizontal" size="30%" {
            pane {
                command "npm"
                args "run" "dev"
            }
            pane // git/lazygit
        }
    }
}`
              },
              {
                name: "~/.config/zellij/layouts/backend.kdl",
                description: "Backend development layout",
                content: `// Backend Development Layout
layout {
    pane split_direction="vertical" {
        pane size="60%" {
            pane // VSCode/Editor
        }
        pane split_direction="horizontal" size="40%" {
            pane {
                command "npm"
                args "run" "dev"
            }
            pane {
                command "npm"
                args "run" "test"
            }
            pane // git/lazygit
        }
    }
}`
              },
              {
                name: "~/.config/zellij/layouts/fullstack.kdl",
                description: "Full-stack development layout",
                content: `// Full-stack Development Layout
layout {
    pane split_direction="vertical" {
        pane size="50%" {
            pane split_direction="horizontal" {
                pane size="50%" {
                    pane // Frontend code
                }
                pane size="50%" {
                    pane // Backend code
                }
            }
        }
        pane split_direction="horizontal" size="50%" {
            pane {
                command "npm"
                args "run" "dev"
            }
            pane // git/lazygit
        }
    }
}`
              }
            ],
            codeBlocks: [
              `# Load layout trong Zellij
zellij --layout frontend

# Hoặc trong Zellij session
:load-layout frontend

# List available layouts
ls ~/.config/zellij/layouts/`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Layouts",
            content: [
              "Create và test layouts",
              "Practice switching giữa layouts",
              "Optimize layouts cho workflow"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (40 phút): Create Layouts",
                duration: "40 phút",
                tasks: [
                  "Tạo layout cho Frontend dev",
                  "Tạo layout cho Backend dev",
                  "Tạo layout cho Full-stack dev",
                  "Tạo layout cho DevOps tasks",
                  "Tạo layout cho Code review",
                  "Test mỗi layout - 5 lần"
                ]
              },
              {
                title: "BÀI TẬP 2 (40 phút): Practice Switching",
                duration: "40 phút",
                tasks: [
                  "Switch giữa layouts - 30 lần",
                  "Load layout từ command line - 20 lần",
                  "Modify layout realtime - 10 lần",
                  "Save custom layout - 5 lần",
                  "Timed challenge: Switch layout < 5s"
                ]
              },
              {
                title: "BÀI TẬP 3 (40 phút): Integration",
                duration: "40 phút",
                tasks: [
                  "Combine với yabai window management",
                  "Create aliases cho common layouts",
                  "Setup Raycast shortcuts cho layouts",
                  "Document workflow",
                  "Timed challenge: Complete setup < 1 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review tất cả layouts",
              "Optimize cho daily use",
              "Document best practices"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test tất cả layouts",
                  "Identify improvements",
                  "Document final layouts",
                  "Chuẩn bị cho lf Advanced"
                ]
              }
            ]
          },
          goals: [
            "Zellij layouts cho tất cả project types",
            "Quick layout switching",
            "Optimized workflow"
          ]
        },
        {
          day: "24",
          title: "lf Advanced Commands",
          totalHours: 4,
          dailyGoals: [
            "✅ Tạo custom lf commands",
            "✅ Git integration trong lf",
            "✅ fzf integration",
            "✅ 10+ custom commands cho workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Create Custom Commands",
            content: [
              "Hiểu về lf command system",
              "Tạo custom commands",
              "Git integration",
              "fzf integration"
            ],
            concepts: [
              "lf commands: Custom shell commands trong lf",
              "Command mapping: Map keys to commands",
              "Remote commands: Control lf từ external scripts",
              "Git integration: Git operations trong lf"
            ],
            configFiles: [
              {
                name: "~/.config/lf/lfrc (Advanced)",
                description: "Advanced lf configuration với custom commands - Note: Trong file thực tế, dùng ${...} thay vì ${{...}}",
                content: `# Advanced lf Configuration
# Note: Trong file thực tế, dùng cú pháp dollar-brace cho shell commands

# Git operations
cmd git_add %{{
    git add "$f"
    lf -remote "send $id reload"
}}

cmd git_status \${{
    clear
    git status
    read -p "Press enter to continue"
}}

cmd git_commit \${{
    printf "Commit message: "
    read ans
    git commit -m "$ans"
    lf -remote "send $id reload"
}}

# Bulk rename
cmd bulkrename \${{
    vidir
}}

# FZF integration  
cmd fzf_jump \${{
    res="$(find . -maxdepth 3 | fzf --reverse --header='Jump to location')"
    if [ -n "$res" ]; then
        lf -remote "send $id cd "$res""
    fi
}}

# Quick edit
cmd edit_config \${{
    $EDITOR ~/.config/lf/lfrc
    lf -remote "send $id source ~/.config/lf/lfrc"
}}

# Open with default app
cmd open_default \${{
    open "$f"
}}

# Copy path
cmd copy_path \${{
    echo -n "$f" | pbcopy
    echo "Path copied to clipboard"
}}

# Map keys
map ga :git_add
map gs :git_status
map gc :git_commit
map br :bulkrename
map <c-f> :fzf_jump
map <c-e> :edit_config
map o :open_default
map yp :copy_path`
              }
            ],
            codeBlocks: [
              `# Test custom commands trong lf
# Press : để vào command mode
# Type command name (e.g., :git_add)

# Reload config
:source ~/.config/lf/lfrc`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Custom Commands",
            content: [
              "Practice tất cả custom commands",
              "Integrate vào workflow",
              "Create thêm commands nếu cần"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (40 phút): Git Commands",
                duration: "40 phút",
                tasks: [
                  "Practice git_add (ga) - 30 lần",
                  "Practice git_status (gs) - 20 lần",
                  "Practice git_commit (gc) - 15 lần",
                  "Complete git workflow trong lf - 10 lần",
                  "Timed challenge: Git workflow < 1 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (40 phút): Advanced Commands",
                duration: "40 phút",
                tasks: [
                  "Practice fzf_jump (Ctrl+f) - 30 lần",
                  "Practice bulkrename (br) - 10 lần",
                  "Practice copy_path (yp) - 25 lần",
                  "Create 5 custom commands cho workflow của bạn",
                  "Test tất cả commands - 20 lần"
                ]
              },
              {
                title: "BÀI TẬP 3 (40 phút): Integration",
                duration: "40 phút",
                tasks: [
                  "Combine lf commands với git workflow",
                  "Use lf thay Finder hoàn toàn",
                  "Create aliases cho common tasks",
                  "Document custom commands",
                  "Timed challenge: Complete file task < 30s"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review tất cả custom commands",
              "Optimize workflow",
              "Document best practices"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test tất cả 10+ custom commands",
                  "Identify improvements",
                  "Document final setup",
                  "Chuẩn bị cho Real World Practice"
                ]
              }
            ]
          },
          goals: [
            "10+ custom lf commands",
            "Git integration hoàn chỉnh",
            "Workflow optimized"
          ]
        },
        {
          day: "25-28",
          title: "REAL WORLD PRACTICE",
          totalHours: 4,
          dailyGoals: [
            "✅ Code real features không dùng chuột",
            "✅ Track và optimize mouse usage",
            "✅ Complete 8h coding marathon",
            "✅ Master keyboard-only workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Real Projects Practice",
            content: [
              "Code real features cho work/personal projects",
              "Track mouse usage (target: < 5%)",
              "Time các tasks",
              "So sánh với previous workflow",
              "Identify và fix bottlenecks",
              "Daily log tracking"
            ],
            detailedSetup: [
              "Bước 1: Choose real project để work on",
              "Bước 2: Setup tracking cho mouse usage",
              "Bước 3: Time baseline cho common tasks",
              "Bước 4: Code features với keyboard-only",
              "Bước 5: Track metrics (time, mouse clicks, errors)",
              "Bước 6: Identify bottlenecks",
              "Bước 7: Optimize workflow",
              "Bước 8: Compare với previous workflow",
              "Bước 9: Daily log format tracking"
            ],
            configFiles: [
              {
                name: "Daily Log Format",
                description: "Template để track daily progress",
                content: `Date: XX/XX
Project: XXX
Hours coded: X
Mouse clicks: XX (%)
Bottlenecks: 
- XXX
- XXX
Improvements made:
- XXX
- XXX
Next steps:
- XXX`
              }
            ],
            concepts: [
              "Real world practice: Apply skills trong actual work",
              "Metrics tracking: Measure progress và identify issues",
              "Bottleneck identification: Find slow parts của workflow",
              "Workflow optimization: Improve efficiency",
              "Muscle memory: Practice makes perfect"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Daily Practice",
            content: [
              "Continue working on real projects",
              "Practice tất cả skills",
              "Optimize workflow realtime"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Real Project Work",
                tasks: [
                  "Code feature hoàn chỉnh - track time và mouse usage",
                  "Practice git workflow với lazygit - 10 commits",
                  "Refactor code với Vim motions - 200+ lines",
                  "Browse docs với Vimium - 20 pages",
                  "File management với lf - 50 operations",
                  "Target: Mouse usage < 5%, Speed same or better"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review & Prepare Final Challenge",
            content: [
              "Review daily progress",
              "Identify improvements",
              "Prepare cho Final Challenge"
            ],
            exercises: [
              {
                title: "DAILY REVIEW",
                tasks: [
                  "Log metrics: Time, mouse usage, bottlenecks",
                  "Note improvements made",
                  "Plan optimizations cho ngày mai",
                  "Prepare cho Final Challenge"
                ]
              }
            ]
          },
          goals: [
            "Real world mastery",
            "Mouse usage < 5%",
            "Workflow optimized",
            "Ready for Final Challenge"
          ]
        },
        {
          day: "28",
          title: "FINAL CHALLENGE - 8h Coding Marathon",
          totalHours: 8,
          dailyGoals: [
            "✅ Complete 8h coding marathon",
            "✅ Mouse usage < 5%",
            "✅ Build complete feature từ đầu",
            "✅ Maintain flow state"
          ],
          morning: {
            title: "Sáng (4h): Planning & Implementation",
            content: [
              "Planning & research (browser) - dùng Vimium",
              "Setup project structure (lf, terminal)",
              "Implement feature (VSCode + Vim)",
              "Git workflow (lazygit)",
              "Phase 1 (1h): Research requirements, plan architecture, setup project",
              "Phase 2 (3h): Code feature với VSCode Vim, use tất cả Vim motions, git workflow"
            ]
          },
          afternoon: {
            title: "Chiều (4h): Completion & Documentation",
            content: [
              "Complete implementation",
              "Testing & debugging",
              "Code review prep",
              "Documentation"
            ],
            exercises: [
              {
                title: "PHASE 3: Completion (2h)",
                tasks: [
                  "Finish implementation",
                  "Testing comprehensive",
                  "Debug issues",
                  "Optimize code"
                ]
              },
              {
                title: "PHASE 4: Polish (2h)",
                tasks: [
                  "Code review preparation",
                  "Write documentation",
                  "Final git workflow",
                  "Reflection và notes"
                ]
              }
            ]
          },
          goals: [
            "Complete feature từ đầu đến cuối",
            "Mouse usage < 5%",
            "Flow state maintained",
            "Fast như hoặc nhanh hơn previous workflow"
          ],
          bestPractices: [
            "Take breaks mỗi 1-2 giờ",
            "Track mouse usage realtime",
            "Note bottlenecks để optimize sau",
            "Maintain flow state - không rush",
            "Celebrate small wins"
          ]
        }
      ]
    }
  ],
  finalChecklist: [
    "yabai + skhd: Window management hoàn toàn keyboard",
    "Zellij: Multi-pane/tab/session như thở",
    "Raycast: Mở app/file/search < 2s",
    "Vimium: Browse web không nghĩ đến chuột",
    "fzf: Find files/history/dirs tự nhiên",
    "lf: File operations nhanh hơn Finder",
    "lazygit: Git workflow hoàn chỉnh không GUI",
    "VSCode Vim: Code như Vim ninja",
    "Custom scripts: Workflow tối ưu cho bạn",
    "Muscle memory: Không cần suy nghĩ"
  ],
  proTips: {
    ifStuck: [
      "Giảm tốc độ, không vội",
      "Practice 1 tool mỗi lần",
      "OK nếu dùng chuột thi thoảng",
      "Muscle memory cần thời gian"
    ],
    ifTooHard: [
      "Kéo dài timeline (6-8 tuần OK)",
      "Focus vào core tools trước",
      "Skip optional tools",
      "Tìm buddy cùng học"
    ],
    ifTooEasy: [
      "Add advanced tools (WezTerm, custom scripts)",
      "Contribute configs lên GitHub",
      "Teach người khác",
      "Optimize cho extreme speed"
    ]
  }
};

