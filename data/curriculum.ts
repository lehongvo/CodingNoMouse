import { Curriculum } from '@/types/curriculum';

// Helper function để tạo weekend day (12h)
function createWeekendDay(day: string, title: string, content: any) {
  return {
    day,
    title,
    totalHours: 12,
    dailyGoals: content.dailyGoals || [],
    morning: {
      title: "Sáng (4h)",
      ...content.morning
    },
    afternoon: {
      title: "Chiều (4h)",
      ...content.afternoon
    },
    evening: {
      title: "Tối (4h)",
      ...content.evening
    },
    ...content
  };
}

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
      finalProject: {
        title: "Personal Productivity Dashboard",
        description: "Xây dựng một dashboard quản lý công việc cá nhân hoàn toàn bằng keyboard, sử dụng tất cả tools đã học trong tuần 1 (yabai, skhd, Zellij, Raycast)",
        requirements: [
          "Setup project với Raycast",
          "Quản lý windows với yabai",
          "Sử dụng Zellij cho terminal sessions",
          "Code hoàn toàn không dùng chuột",
          "Git workflow với keyboard-only"
        ],
        deliverables: [
          "Working dashboard application",
          "Documentation về setup và usage",
          "Git repository với commit history",
          "Screenshots/video demo workflow"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Setup + yabai + skhd",
          totalHours: 4,
          motivationalQuote: "💪 Mỗi bước nhỏ hôm nay là nền tảng cho tương lai của con bạn. Bạn đang làm gương cho con về sự kiên trì và không ngừng học hỏi!",
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
                  "Chuẩn bị cho ngày mai: Zellij"
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
          day: "Thứ 3",
          title: "Zellij - Terminal Multiplexer",
          totalHours: 4,
          motivationalQuote: "🌟 Khi bạn học, bạn không chỉ cải thiện bản thân mà còn truyền cảm hứng cho gia đình. Con bạn sẽ thấy bố mẹ luôn cố gắng!",
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
          day: "Thứ 4",
          title: "Raycast - App Launcher & Productivity",
          totalHours: 4,
          motivationalQuote: "🚀 Mỗi phím tắt bạn học hôm nay sẽ tiết kiệm thời gian cho gia đình mai sau. Đầu tư vào bản thân là đầu tư tốt nhất!",
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
            title: "Tối (30 phút): Integration & Review",
            content: [
              "Review tất cả Raycast features",
              "Integrate với yabai + Zellij workflow",
              "Plan cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại 10 commands - 100% accuracy",
                  "Setup complete workflow: Raycast → yabai → Zellij",
                  "Timed challenge: Complete setup < 1 phút",
                  "Chuẩn bị cho ngày mai"
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
        },
        {
          day: "Thứ 5",
          title: "Practice Tổng Hợp - yabai + Zellij + Raycast",
          totalHours: 4,
          motivationalQuote: "💡 Thành công không đến từ một đêm, mà từ những ngày kiên trì. Hôm nay bạn đang xây dựng tương lai tốt hơn!",
          dailyGoals: [
            "✅ Combine tất cả tools đã học",
            "✅ Complete workflow không dùng chuột",
            "✅ Speed training",
            "✅ Muscle memory cho tất cả shortcuts"
          ],
          morning: {
            title: "Sáng (1.5h): Integration Practice",
            content: [
              "Practice combine yabai + Zellij + Raycast",
              "Setup complete workspace",
              "Speed training"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Complete Workflow",
                tasks: [
                  "Raycast mở VSCode",
                  "yabai tạo layout: VSCode 70% trái, Terminal 30% phải",
                  "Zellij split terminal: top (git), bottom (server)",
                  "Practice workflow này 20 lần",
                  "Target: Setup workspace < 30s"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Real Coding Practice",
            content: [
              "Code với complete workflow",
              "Practice tất cả shortcuts",
              "Timed challenges"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Coding Workflow",
                duration: "1h",
                tasks: [
                  "fzf tìm files (Ctrl+T)",
                  "Vim motions edit code",
                  "Alt+l focus terminal",
                  "Git commands trong terminal",
                  "Alt+h focus VSCode",
                  "Raycast search docs",
                  "Copy/paste bằng clipboard history",
                  "Repeat workflow 10 lần"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Speed Training",
                duration: "1h",
                tasks: [
                  "Timed challenge: Setup workspace < 15s",
                  "Timed challenge: Switch giữa apps 10 lần < 30s",
                  "Timed challenge: Complete coding task < 5 phút",
                  "Track mouse usage - target: < 10 lần"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review tất cả skills tuần 1",
              "Identify improvements",
              "Plan cho tuần 2"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại tất cả shortcuts - 100% accuracy",
                  "Ghi lại bottlenecks",
                  "Plan optimizations",
                  "Chuẩn bị cho tuần 2"
                ]
              }
            ]
          },
          goals: [
            "Complete workflow thành thạo",
            "Mouse usage < 10%",
            "Speed: Setup workspace < 30s"
          ]
        },
        {
          day: "Thứ 6",
          title: "Advanced yabai & Zellij",
          totalHours: 4,
          motivationalQuote: "⚡ Năng lượng bạn bỏ ra hôm nay sẽ tạo ra momentum cho những ngày tiếp theo. Hãy giữ vững!",
          dailyGoals: [
            "✅ Advanced yabai features",
            "✅ Advanced Zellij layouts",
            "✅ Custom configurations",
            "✅ Optimize workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Advanced Config",
            content: [
              "Advanced yabai rules",
              "Custom Zellij layouts",
              "Optimize configurations"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Advanced",
            content: [
              "Practice advanced features",
              "Create custom setups",
              "Optimize workflow"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Advanced Practice",
                tasks: [
                  "Setup complex yabai layouts",
                  "Create custom Zellij layouts",
                  "Practice advanced shortcuts",
                  "Optimize cho daily use"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review advanced features",
              "Document customizations",
              "Prepare for weekend"
            ]
          },
          goals: [
            "Advanced features mastered",
            "Custom setup optimized"
          ]
        },
        createWeekendDay("Thứ 7", "INTENSIVE PRACTICE - Tuần 1", {
          motivationalQuote: "❤️ Gia đình là động lực, nhưng bạn cũng cần thời gian cho bản thân. 12 giờ học cuối tuần này là đầu tư xứng đáng cho tương lai!",
          dailyGoals: [
            "✅ Practice tất cả skills tuần 1",
            "✅ Complete projects không dùng chuột",
            "✅ Speed training intensive",
            "✅ Build muscle memory"
          ],
          morning: {
            title: "Sáng (4h): Intensive Practice",
            content: [
              "Practice yabai - 2h intensive",
              "Practice Zellij - 1h intensive",
              "Practice Raycast - 1h intensive"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): yabai Intensive",
                duration: "2h",
                tasks: [
                  "Window management - 200 operations",
                  "Space switching - 100 lần",
                  "Layout creation - 50 lần",
                  "Timed challenges - 20 lần",
                  "Target: 100% accuracy, < 1s mỗi operation"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Zellij Intensive",
                duration: "1h",
                tasks: [
                  "Pane management - 150 operations",
                  "Tab switching - 100 lần",
                  "Session management - 30 lần",
                  "Layout creation - 20 lần",
                  "Target: Setup layout < 20s"
                ]
              },
              {
                title: "BÀI TẬP 3 (1h): Raycast Intensive",
                duration: "1h",
                tasks: [
                  "App launching - 100 lần",
                  "File search - 80 lần",
                  "Clipboard history - 60 lần",
                  "Snippets - 40 lần",
                  "Target: Mở app < 1.5s"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Complete Projects",
            content: [
              "Build projects hoàn toàn không chuột",
              "Practice complete workflow",
              "Real coding scenarios"
            ],
            exercises: [
              {
                title: "PROJECT 1 (2h): Setup & Code",
                duration: "2h",
                tasks: [
                  "Setup project structure với lf",
                  "Create files với terminal",
                  "Code feature với VSCode",
                  "Git workflow với terminal",
                  "Target: Complete project không dùng chuột"
                ]
              },
              {
                title: "PROJECT 2 (2h): Advanced Workflow",
                duration: "2h",
                tasks: [
                  "Multi-window workflow",
                  "Multi-tab terminal workflow",
                  "Complete coding cycle",
                  "Timed challenge: Full cycle < 10 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Review & Optimization",
            content: [
              "Review toàn bộ tuần 1",
              "Identify improvements",
              "Optimize workflow",
              "Plan tuần 2"
            ],
            exercises: [
              {
                title: "REVIEW & OPTIMIZATION",
                tasks: [
                  "Test lại tất cả skills - 100% accuracy",
                  "Measure mouse usage - target: < 5%",
                  "Identify bottlenecks",
                  "Optimize configurations",
                  "Document improvements",
                  "Plan tuần 2 chi tiết"
                ]
              }
            ]
          },
          goals: [
            "Master tất cả skills tuần 1",
            "Mouse usage < 5%",
            "Complete workflow < 30s",
            "Ready for tuần 2"
          ]
        }),
        createWeekendDay("Chủ nhật", "REVIEW & CHALLENGE - Tuần 1", {
          motivationalQuote: "🎯 Mục tiêu không phải là hoàn hảo, mà là tiến bộ mỗi ngày. Bạn đang làm rất tốt! Tuần 1 sắp hoàn thành!",
          dailyGoals: [
            "✅ Review toàn bộ tuần 1",
            "✅ Complete challenge project",
            "✅ Measure progress",
            "✅ Prepare tuần 2"
          ],
          morning: {
            title: "Sáng (4h): Review & Assessment",
            content: [
              "Review tất cả concepts",
              "Test tất cả shortcuts",
              "Measure progress",
              "Identify weak points"
            ],
            exercises: [
              {
                title: "ASSESSMENT (2h)",
                duration: "2h",
                tasks: [
                  "Test yabai - 100 operations, measure time",
                  "Test Zellij - 100 operations, measure time",
                  "Test Raycast - 100 operations, measure time",
                  "Track mouse usage - count clicks",
                  "Measure typing speed",
                  "Document metrics"
                ]
              },
              {
                title: "REVIEW (2h)",
                duration: "2h",
                tasks: [
                  "Review tất cả configs",
                  "Review tất cả shortcuts",
                  "Review concepts",
                  "Create cheat sheet",
                  "Document workflow"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): CHALLENGE PROJECT",
            content: [
              "Build complete project không dùng chuột",
              "Apply tất cả skills đã học",
              "Timed challenge"
            ],
            exercises: [
              {
                title: "CHALLENGE: Complete Project (4h)",
                duration: "4h",
                tasks: [
                  "Setup project: Raycast → yabai → Zellij",
                  "Create project structure",
                  "Code complete feature",
                  "Git workflow",
                  "Testing và debugging",
                  "Documentation",
                  "Target: Hoàn thành project < 4h, mouse usage < 5%"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Reflection & Planning",
            content: [
              "Reflect on progress",
              "Plan tuần 2",
              "Optimize workflow",
              "Prepare materials"
            ],
            exercises: [
              {
                title: "REFLECTION & PLANNING",
                tasks: [
                  "Write reflection về tuần 1",
                  "Document achievements",
                  "Identify areas for improvement",
                  "Plan tuần 2 chi tiết",
                  "Prepare learning materials",
                  "Set goals cho tuần 2"
                ]
              }
            ]
          },
          goals: [
            "Complete challenge project",
            "Mouse usage < 5%",
            "Ready for tuần 2"
          ]
        })
      ]
    },
    {
      week: 2,
      title: "INTERMEDIATE - Browser & Files",
      goals: [
        "85% thời gian không dùng chuột",
        "Browse web mượt mà không chuột",
        "File management không cần Finder",
      ],
      finalProject: {
        title: "Web Research & File Organization Tool",
        description: "Xây dựng tool để research web và organize files hoàn toàn bằng keyboard, sử dụng Vimium, fzf, và lf",
        requirements: [
          "Browse web research với Vimium",
          "Organize files với lf và fzf",
          "Create automation scripts",
          "Workflow hoàn toàn keyboard-only",
          "Document workflow và shortcuts"
        ],
        deliverables: [
          "Working tool với web research capabilities",
          "File organization system",
          "Automation scripts",
          "Documentation và workflow guide"
        ],
        estimatedHours: 8
      },
      metrics: {
        mouseUsage: "15%",
        shortcutsLearned: 65,
        comfortLevel: "7/10"
      },
      days: [
        {
          day: "Thứ 2",
          title: "Vimium - Browser Navigation",
          totalHours: 4,
          motivationalQuote: "🔥 Bạn đang chứng minh rằng không bao giờ quá muộn để học điều mới. Đây là bài học quý giá cho con bạn!",
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
            ],
            detailedSetup: [
              "Bước 1: Mở Chrome/Edge Extensions (chrome://extensions hoặc edge://extensions)",
              "Bước 2: Search 'Vimium' và install extension",
              "Bước 3: Safari: Install Vimari từ App Store hoặc Safari Extensions",
              "Bước 4: Grant permissions cho extension",
              "Bước 5: Test basic shortcuts (f, j/k, gg/G)",
              "Bước 6: Configure Vimium settings (Options page)",
              "Bước 7: Disable conflicting shortcuts nếu cần",
              "Bước 8: Practice với sample websites"
            ],
            concepts: [
              "Vimium: Browser extension để navigate web bằng keyboard",
              "Link hints: Letters/numbers hiện trên links để click nhanh",
              "Tab management: Switch, close, restore tabs bằng keyboard",
              "Page navigation: Scroll, jump, search trong page",
              "URL navigation: Open URLs, bookmarks, history",
              "Search: Search trong page và navigate results"
            ],
            troubleshooting: [
              "Nếu hints không hiện: Check extension enabled, refresh page",
              "Nếu shortcuts conflict: Disable other extensions hoặc remap keys",
              "Nếu không work trên một số sites: Check site-specific settings",
              "Nếu hints quá nhỏ: Adjust hint size trong settings",
              "Nếu tab switching chậm: Check browser performance"
            ],
            learningResources: [
              { title: "Vimium GitHub", url: "https://github.com/philc/vimium", description: "Official Vimium repository" },
              { title: "Vimium Documentation", url: "https://github.com/philc/vimium#readme", description: "Complete documentation" },
              { title: "Vimium Shortcuts", description: "Cheat sheet cho tất cả shortcuts" }
            ],
            bestPractices: [
              "Start với basic shortcuts (f, j/k, gg/G) trước",
              "Practice trên websites quen thuộc trước",
              "Use hints để click links thay vì reach cho mouse",
              "Combine shortcuts để tạo workflow",
              "Customize settings cho phù hợp với bạn"
            ],
            commonMistakes: [
              "Cố gắng nhớ tất cả shortcuts cùng lúc",
              "Không practice đủ - muscle memory cần thời gian",
              "Ignore hints - miss out on fast navigation",
              "Không customize settings - default có thể không optimal"
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
          day: "Thứ 3",
          title: "fzf - Fuzzy Finder",
          totalHours: 4,
          motivationalQuote: "💎 Thời gian bạn đầu tư vào bản thân hôm nay sẽ mang lại lợi ích cho cả gia đình trong tương lai!",
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
            detailedSetup: [
              "Bước 1: Install fzf via Homebrew: brew install fzf",
              "Bước 2: Run install script: $(brew --prefix)/opt/fzf/install",
              "Bước 3: Add to shell config (.zshrc hoặc .bashrc)",
              "Bước 4: Test keybindings: Ctrl+T, Ctrl+R, Alt+C",
              "Bước 5: Configure fzf options (colors, layout, etc.)",
              "Bước 6: Test với sample files và commands",
              "Bước 7: Create custom fzf aliases nếu cần"
            ],
            concepts: [
              "fzf: Fuzzy finder - tìm files, commands, history bằng fuzzy matching",
              "Fuzzy matching: Tìm kết quả không cần exact match",
              "Keybindings: Ctrl+T (files), Ctrl+R (history), Alt+C (directories)",
              "Integration: fzf có thể integrate với nhiều tools (vim, git, etc.)",
              "Performance: fzf rất nhanh với large datasets"
            ],
            configFiles: [
              {
                name: "~/.zshrc hoặc ~/.bashrc",
                description: "fzf keybindings configuration",
                content: `# fzf keybindings
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# Custom fzf aliases
alias fzf-files='fzf --preview "bat --color=always {}"'
alias fzf-dirs='find . -type d | fzf'`
              }
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
          day: "Thứ 4",
          title: "lf - File Manager",
          totalHours: 4,
          motivationalQuote: "🌱 Mỗi kỹ năng mới bạn học là một hạt giống cho tương lai tốt đẹp hơn. Hãy tiếp tục gieo trồng!",
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
            detailedSetup: [
              "Bước 1: Install lf: brew install lf",
              "Bước 2: Tạo config directory: mkdir -p ~/.config/lf",
              "Bước 3: Tạo config file: touch ~/.config/lf/lfrc",
              "Bước 4: Add basic config (preview, hidden, icons)",
              "Bước 5: Test basic navigation (j/k/h/l)",
              "Bước 6: Test file operations (copy, move, delete)",
              "Bước 7: Setup preview cho different file types",
              "Bước 8: Practice với sample directories"
            ],
            concepts: [
              "lf: Terminal file manager - thay thế Finder",
              "Vim-like navigation: j/k/h/l để navigate",
              "File operations: Copy, move, delete, rename bằng keyboard",
              "Preview: Preview files trong lf",
              "Bulk operations: Select multiple files và operate cùng lúc"
            ],
            configFiles: [
              {
                name: "~/.config/lf/lfrc",
                description: "lf configuration file",
                content: `# lf Configuration
set preview true
set hidden true
set drawbox true
set icons true
set shellopts '-eu'
set ifs '\n'`
              }
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
        },
        {
          day: "Thứ 5",
          title: "Practice Tổng Hợp - Browser & Files",
          totalHours: 4,
          motivationalQuote: "🎁 Bạn đang tặng cho gia đình mình một món quà tuyệt vời - một phiên bản tốt hơn của chính bạn!",
          dailyGoals: [
            "✅ Combine Vimium + fzf + lf",
            "✅ Complete workflow không dùng chuột",
            "✅ Speed training",
            "✅ Muscle memory cho tất cả shortcuts"
          ],
          morning: {
            title: "Sáng (1.5h): Integration Practice",
            content: [
              "Practice combine Vimium + fzf + lf",
              "Setup complete workflow",
              "Speed training"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Complete Workflow",
                tasks: [
                  "Raycast mở browser",
                  "Vimium navigate web",
                  "fzf tìm files",
                  "lf manage files",
                  "Practice workflow này 20 lần",
                  "Target: Complete workflow < 30s"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Real World Practice",
            content: [
              "Practice với real projects",
              "Combine tất cả tools",
              "Timed challenges"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Real Project Work",
                duration: "1h",
                tasks: [
                  "Research trên web (Vimium)",
                  "Find files (fzf)",
                  "Manage files (lf)",
                  "Complete task không dùng chuột",
                  "Track mouse usage (target: < 10%)"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Speed Training",
                duration: "1h",
                tasks: [
                  "Timed challenges cho mỗi tool",
                  "Combine tools trong workflow",
                  "Optimize shortcuts",
                  "Build muscle memory"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review & Prepare",
            content: [
              "Review progress",
              "Identify improvements",
              "Prepare cho tuần 3"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test tất cả shortcuts - 100% accuracy",
                  "Document improvements",
                  "Plan tuần 3",
                  "Set goals cho tuần 3"
                ]
              }
            ]
          },
          goals: [
            "Master Vimium, fzf, lf",
            "Complete workflow không dùng chuột",
            "Ready for tuần 3"
          ]
        },
        {
          day: "Thứ 6",
          title: "Advanced Practice - Browser & Files",
          totalHours: 4,
          motivationalQuote: "🏆 Bạn không chỉ học cho mình, mà còn cho con bạn. Mỗi thành công của bạn là niềm tự hào của con!",
          dailyGoals: [
            "✅ Advanced Vimium features",
            "✅ Advanced fzf usage",
            "✅ Advanced lf commands",
            "✅ Custom scripts và aliases"
          ],
          morning: {
            title: "Sáng (1.5h): Advanced Features",
            content: [
              "Learn advanced Vimium features",
              "Learn advanced fzf usage",
              "Learn advanced lf commands",
              "Create custom scripts"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Advanced",
            content: [
              "Practice advanced features",
              "Create và test custom scripts",
              "Optimize workflow"
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review advanced features",
              "Document custom scripts",
              "Prepare cho weekend"
            ]
          },
          goals: [
            "Advanced features mastered",
            "Custom scripts created",
            "Workflow optimized"
          ]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Browser & Files", {
          dailyGoals: [
            "✅ 12h practice với Vimium, fzf, lf",
            "✅ Complete real projects",
            "✅ Build muscle memory",
            "✅ Optimize workflow"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Deep practice với Vimium",
              "Deep practice với fzf",
              "Deep practice với lf",
              "Combine trong real projects"
            ],
            exercises: [
              {
                title: "PRACTICE SESSION (4h)",
                duration: "4h",
                tasks: [
                  "Practice tất cả shortcuts - 500+ repetitions",
                  "Complete real browsing tasks",
                  "Complete real file management tasks",
                  "Build muscle memory",
                  "Track progress và improvements"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Real project work",
              "Combine tất cả tools",
              "Optimize workflow",
              "Create custom solutions"
            ],
            exercises: [
              {
                title: "REAL PROJECT WORK (4h)",
                duration: "4h",
                tasks: [
                  "Work on real project",
                  "Use Vimium, fzf, lf exclusively",
                  "Track mouse usage (target: < 5%)",
                  "Document workflow improvements",
                  "Create custom scripts nếu cần"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Advanced practice",
              "Customization",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "ADVANCED & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Practice advanced features",
                  "Create custom scripts và aliases",
                  "Document workflow",
                  "Reflect on progress",
                  "Plan improvements"
                ]
              }
            ]
          }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Complete Project", {
          dailyGoals: [
            "✅ Complete project từ đầu đến cuối",
            "✅ Use Vimium, fzf, lf exclusively",
            "✅ Mouse usage < 5%",
            "✅ Document complete workflow"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Project planning",
              "Research và setup",
              "Initial implementation"
            ],
            exercises: [
              {
                title: "PROJECT SETUP & PLANNING (4h)",
                duration: "4h",
                tasks: [
                  "Plan project structure",
                  "Research requirements (Vimium)",
                  "Setup project (lf, fzf)",
                  "Initial implementation",
                  "Git workflow setup"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Implementation",
              "Testing",
              "Debugging"
            ],
            exercises: [
              {
                title: "IMPLEMENTATION (4h)",
                duration: "4h",
                tasks: [
                  "Implement features",
                  "Use Vimium, fzf, lf throughout",
                  "Test và debug",
                  "Git workflow",
                  "Track mouse usage"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Completion",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "COMPLETION & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Complete project",
                  "Write documentation",
                  "Reflect on workflow",
                  "Document improvements",
                  "Prepare cho tuần 3"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 3,
      title: "ADVANCED - Git & Vim",
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
      finalProject: {
        title: "Open Source Contribution Project",
        description: "Contribute vào một open source project, sử dụng lazygit và VSCode Vim để code, commit, và manage branches hoàn toàn bằng keyboard",
        requirements: [
          "Fork và clone một open source project",
          "Create feature branch với lazygit",
          "Code feature với VSCode Vim",
          "Commit và push với lazygit",
          "Create pull request workflow"
        ],
        deliverables: [
          "Working feature contribution",
          "Git history với proper commits",
          "Pull request documentation",
          "Workflow documentation"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
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
            detailedSetup: [
              "Bước 1: Install lazygit: brew install lazygit",
              "Bước 2: Run lazygit để test: lazygit",
              "Bước 3: Navigate các panels (1-5 keys)",
              "Bước 4: Test basic operations (space, c, P)",
              "Bước 5: Configure lazygit settings nếu cần",
              "Bước 6: Practice với test repository",
              "Bước 7: Learn panel navigation",
              "Bước 8: Master basic git workflow"
            ],
            concepts: [
              "lazygit: Terminal UI cho Git operations",
              "Panels: Status, Files, Branches, Commits, Stash",
              "Navigation: Switch panels với 1-5 keys",
              "Staging: Space để stage/unstage files",
              "Commits: c để commit, P để push",
              "Branches: n để new branch, space để checkout",
              "Interactive rebase: e để edit commits"
            ],
            codeBlocks: [
              `# Cài đặt
brew install lazygit

# Chạy lazygit
lazygit

# Basic commands:
# 1 - Status panel
# 2 - Files panel
# 3 - Branches panel
# 4 - Commits panel
# 5 - Stash panel
# space - Stage/unstage
# c - Commit
# P - Push`
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
            { key: "1", description: "Status panel" },
            { key: "2", description: "Files panel" },
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
            { key: "A", description: "Amend" },
            { key: "n", description: "New branch" },
            { key: "M", description: "Merge" }
          ],
          goals: ["Git operations 100% không cần GUI/chuột."]
        },
        {
          day: "Thứ 3",
          title: "VSCode Vim - Deep Dive",
          totalHours: 4,
          motivationalQuote: "🎪 Cuộc sống là một hành trình, và bạn đang đi đúng hướng. Tiếp tục bước đi!",
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
            configFiles: [
              {
                name: ".vscode/settings.json",
                description: "VSCode settings với Vim configuration",
                content: `{
  "vim.enabled": true,
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.highlightedyank.enable": true,
  "vim.leader": "<space>",
  "vim.handleKeys": {
    "<C-a>": false,
    "<C-f>": false
  }
}`
              }
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
                  "Chuẩn bị cho tuần 4"
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
          goals: ["Vim motions thành bản năng."]
        },
        {
          day: "Thứ 4",
          title: "Practice Tổng Hợp - Git + Vim",
          totalHours: 4,
          motivationalQuote: "💼 Kỹ năng bạn học hôm nay sẽ mở ra nhiều cơ hội mới. Đầu tư vào bản thân luôn là đầu tư tốt nhất!",
          dailyGoals: [
            "✅ Combine lazygit + VSCode Vim",
            "✅ Complete coding workflow",
            "✅ Speed training",
            "✅ Muscle memory cho tất cả shortcuts"
          ],
          morning: {
            title: "Sáng (1.5h): Integration Practice",
            content: [
              "Practice combine lazygit + VSCode Vim",
              "Setup complete workflow",
              "Speed training"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Complete Workflow",
                tasks: [
                  "VSCode Vim edit code",
                  "lazygit stage changes",
                  "lazygit commit",
                  "lazygit push",
                  "Practice workflow này 20 lần",
                  "Target: Complete workflow < 2 phút"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Real Coding Practice",
            content: [
              "Code với complete workflow",
              "Practice tất cả shortcuts",
              "Timed challenges"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Coding Workflow",
                duration: "1h",
                tasks: [
                  "Code feature với VSCode Vim",
                  "lazygit stage selective changes",
                  "lazygit commit với message",
                  "lazygit push",
                  "Repeat workflow 10 lần",
                  "Target: Mouse usage < 5%"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Advanced Git + Vim",
                duration: "1h",
                tasks: [
                  "Refactor code với Vim motions",
                  "lazygit interactive rebase",
                  "lazygit squash commits",
                  "Complete advanced workflow",
                  "Timed challenge: Full cycle < 5 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review & Prepare",
            content: [
              "Review progress",
              "Identify improvements",
              "Prepare cho tuần 4"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test tất cả shortcuts - 100% accuracy",
                  "Document improvements",
                  "Plan tuần 4",
                  "Set goals cho tuần 4"
                ]
              }
            ]
          },
          goals: [
            "Master lazygit và VSCode Vim",
            "Complete workflow không dùng chuột",
            "Ready for tuần 4"
          ]
        },
        {
          day: "Thứ 5",
          title: "Advanced Practice - Git & Vim",
          totalHours: 4,
          motivationalQuote: "🌟 Mỗi ngày là một cơ hội mới để trở nên tốt hơn. Hãy tận dụng cơ hội hôm nay!",
          dailyGoals: [
            "✅ Advanced lazygit features",
            "✅ Advanced Vim motions",
            "✅ Custom workflows",
            "✅ Optimization"
          ],
          morning: {
            title: "Sáng (1.5h): Advanced Features",
            content: [
              "Learn advanced lazygit features",
              "Learn advanced Vim motions",
              "Create custom workflows",
              "Optimize shortcuts"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Advanced",
            content: [
              "Practice advanced features",
              "Create và test custom workflows",
              "Optimize performance"
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review advanced features",
              "Document custom workflows",
              "Prepare cho weekend"
            ]
          },
          goals: [
            "Advanced features mastered",
            "Custom workflows created",
            "Performance optimized"
          ]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Git & Vim", {
          dailyGoals: [
            "✅ 12h practice với lazygit và VSCode Vim",
            "✅ Complete real projects",
            "✅ Build muscle memory",
            "✅ Optimize workflow"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Deep practice với lazygit",
              "Deep practice với VSCode Vim",
              "Combine trong real projects"
            ],
            exercises: [
              {
                title: "PRACTICE SESSION (4h)",
                duration: "4h",
                tasks: [
                  "Practice tất cả shortcuts - 500+ repetitions",
                  "Complete real git workflows",
                  "Complete real coding tasks",
                  "Build muscle memory",
                  "Track progress và improvements"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Real project work",
              "Combine tất cả tools",
              "Optimize workflow",
              "Create custom solutions"
            ],
            exercises: [
              {
                title: "REAL PROJECT WORK (4h)",
                duration: "4h",
                tasks: [
                  "Work on real project",
                  "Use lazygit và VSCode Vim exclusively",
                  "Track mouse usage (target: < 5%)",
                  "Document workflow improvements",
                  "Create custom scripts nếu cần"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Advanced practice",
              "Customization",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "ADVANCED & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Practice advanced features",
                  "Create custom workflows",
                  "Document best practices",
                  "Reflect on progress",
                  "Plan improvements"
                ]
              }
            ]
          }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Complete Project", {
          dailyGoals: [
            "✅ Complete project từ đầu đến cuối",
            "✅ Use lazygit và VSCode Vim exclusively",
            "✅ Mouse usage < 5%",
            "✅ Document complete workflow"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Project planning",
              "Research và setup",
              "Initial implementation"
            ],
            exercises: [
              {
                title: "PROJECT SETUP & PLANNING (4h)",
                duration: "4h",
                tasks: [
                  "Plan project structure",
                  "Research requirements",
                  "Setup project",
                  "Initial implementation",
                  "Git workflow setup"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Implementation",
              "Testing",
              "Debugging"
            ],
            exercises: [
              {
                title: "IMPLEMENTATION (4h)",
                duration: "4h",
                tasks: [
                  "Implement features",
                  "Use lazygit và VSCode Vim throughout",
                  "Test và debug",
                  "Git workflow",
                  "Track mouse usage"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Completion",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "COMPLETION & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Complete project",
                  "Write documentation",
                  "Reflect on workflow",
                  "Document improvements",
                  "Prepare cho tuần 4"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 4,
      title: "MASTERY - Moonlander & Review",
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
      finalProject: {
        title: "Moonlander Keyboard Mastery Project",
        description: "Xây dựng một project hoàn chỉnh sử dụng Moonlander keyboard với custom layout, áp dụng tất cả skills đã học trong 4 tuần",
        requirements: [
          "Setup Moonlander với custom layout",
          "Build complete project với Moonlander",
          "Document Moonlander workflow",
          "Create custom keybindings",
          "Complete project không dùng chuột"
        ],
        deliverables: [
          "Working project với Moonlander",
          "Custom Moonlander layout file",
          "Documentation về Moonlander setup",
          "Workflow guide"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Moonlander Keyboard - Setup",
          totalHours: 4,
          motivationalQuote: "🚀 Bạn đang trên con đường trở thành phiên bản tốt nhất của chính mình. Hãy tiếp tục!",
          dailyGoals: [
            "✅ Setup Moonlander keyboard với QMK/ZSA",
            "✅ Customize layout cho coding workflow",
            "✅ Master thumb clusters và layers",
            "✅ Practice typing với Moonlander"
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
              "Bước 2: Download ZSA Configurator từ zsa.io",
              "Bước 3: Flash default firmware",
              "Bước 4: Test tất cả keys và thumb clusters",
              "Bước 5: Calibrate thumb clusters",
              "Bước 6: Tạo custom layout",
              "Bước 7: Map keys cho coding workflow",
              "Bước 8: Setup layers (Base, Navigation, Numbers)"
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
                  "Switch giữa layers - 100 lần"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Window Management",
                duration: "30 phút",
                tasks: [
                  "Setup yabai shortcuts trên Moonlander layers",
                  "Practice window focus - 80 lần",
                  "Practice window move - 60 lần",
                  "Switch spaces với thumb clusters - 50 lần"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Terminal & Zellij",
                duration: "30 phút",
                tasks: [
                  "Practice Zellij shortcuts với Moonlander",
                  "Ctrl+p, n (new pane) - 50 lần",
                  "Ctrl+p, h/j/k/l (navigate) - 100 lần",
                  "Ctrl+t, h/l (switch tabs) - 80 lần"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Vim Motions",
                duration: "30 phút",
                tasks: [
                  "Practice hjkl navigation - 150 lần",
                  "Practice text objects - 100 lần",
                  "Practice f/F/t/T - 120 lần",
                  "Code refactoring với Moonlander"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Complete Workflow",
            content: [
              "Practice complete coding workflow",
              "Combine tất cả tools với Moonlander",
              "Optimize layout cho workflow"
            ],
            exercises: [
              {
                title: "REVIEW & INTEGRATION",
                tasks: [
                  "Complete workflow với Moonlander",
                  "Practice tất cả shortcuts",
                  "Fine-tune Moonlander layout",
                  "Document custom keybindings"
                ]
              }
            ]
          },
          shortcuts: [
            { key: "Thumb clusters", description: "Layer switching và modifiers" },
            { key: "Layer 1 + hjkl", description: "Arrow keys" },
            { key: "Layer 2 + top row", description: "Numbers 1-0" },
            { key: "Layer 3 + top row", description: "Function keys F1-F12" }
          ],
          goals: [
            "Master Moonlander layout",
            "Adapt tất cả skills cho Moonlander",
            "Typing speed: 40+ WPM"
          ]
        },
        {
          day: "Thứ 3",
          title: "Moonlander Practice - Review All Skills",
          totalHours: 4,
          motivationalQuote: "💪 Sức mạnh không đến từ việc không bao giờ ngã, mà từ việc luôn đứng dậy sau mỗi lần ngã!",
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
              "Practice file management (fzf, lf) với Moonlander"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Review All Skills",
            content: [
              "Practice Git workflow (lazygit) với Moonlander",
              "Practice Vim motions (VSCode Vim) với Moonlander",
              "Combine tất cả tools trong real workflow"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Review All Skills",
                tasks: [
                  "Window management: Setup workspace - 20 lần",
                  "Zellij: Create layout - 15 lần",
                  "Vimium: Navigation - 100 lần",
                  "fzf/lf: File operations - 80 operations",
                  "lazygit: Git workflow - 30 commits",
                  "VSCode Vim: Refactor - 200+ lines"
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
            "Complete workflow không cần reach cho keys"
          ]
        },
        {
          day: "Thứ 4",
          title: "Advanced Customization",
          totalHours: 4,
          motivationalQuote: "🎯 Mỗi mục tiêu bạn đạt được hôm nay là một bước tiến gần hơn đến ước mơ của bạn!",
          dailyGoals: [
            "✅ Advanced skhd bindings",
            "✅ Custom Zellij layouts",
            "✅ Advanced lf commands",
            "✅ Custom scripts và aliases"
          ],
          morning: {
            title: "Sáng (1.5h): Advanced skhd",
            content: [
              "Tạo complex bindings cho skhd",
              "App-specific bindings",
              "Window size presets",
              "Multi-monitor support"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Custom Layouts & Commands",
            content: [
              "Create Zellij layouts cho different projects",
              "Create custom lf commands",
              "Create custom scripts",
              "Setup aliases"
            ],
            exercises: [
              {
                title: "BÀI TẬP: Customization",
                tasks: [
                  "Tạo 5 Zellij layouts",
                  "Tạo 10 custom lf commands",
                  "Tạo 5 custom scripts",
                  "Setup 10 aliases",
                  "Test tất cả customizations"
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
                  "Document final setup"
                ]
              }
            ]
          },
          goals: [
            "Advanced customizations hoàn chỉnh",
            "Custom scripts cho daily workflow",
            "Optimized setup cho coding"
          ]
        },
        {
          day: "Thứ 5",
          title: "Real World Practice",
          totalHours: 4,
          motivationalQuote: "❤️ Gia đình bạn tin tưởng vào bạn. Hãy tin tưởng vào chính mình và tiếp tục cố gắng!",
          dailyGoals: [
            "✅ Code real features không dùng chuột",
            "✅ Track và optimize mouse usage",
            "✅ Complete coding tasks",
            "✅ Master keyboard-only workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Real Projects Practice",
            content: [
              "Code real features cho work/personal projects",
              "Track mouse usage (target: < 5%)",
              "Time các tasks",
              "Identify và fix bottlenecks"
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
            title: "Tối (30 phút): Review & Prepare",
            content: [
              "Review daily progress",
              "Identify improvements",
              "Prepare cho weekend"
            ],
            exercises: [
              {
                title: "DAILY REVIEW",
                tasks: [
                  "Log metrics: Time, mouse usage, bottlenecks",
                  "Note improvements made",
                  "Plan optimizations cho ngày mai"
                ]
              }
            ]
          },
          goals: [
            "Real world mastery",
            "Mouse usage < 5%",
            "Workflow optimized"
          ]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Mastery", {
          dailyGoals: [
            "✅ 12h practice với tất cả tools",
            "✅ Complete real projects",
            "✅ Build muscle memory",
            "✅ Optimize workflow"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Deep practice với tất cả tools",
              "Combine trong real projects",
              "Speed training"
            ],
            exercises: [
              {
                title: "PRACTICE SESSION (4h)",
                duration: "4h",
                tasks: [
                  "Practice tất cả shortcuts - 500+ repetitions",
                  "Complete real coding tasks",
                  "Build muscle memory",
                  "Track progress và improvements"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Real project work",
              "Combine tất cả tools",
              "Optimize workflow",
              "Create custom solutions"
            ],
            exercises: [
              {
                title: "REAL PROJECT WORK (4h)",
                duration: "4h",
                tasks: [
                  "Work on real project",
                  "Use tất cả tools exclusively",
                  "Track mouse usage (target: < 5%)",
                  "Document workflow improvements"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Advanced practice",
              "Customization",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "ADVANCED & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Practice advanced features",
                  "Create custom scripts",
                  "Document workflow",
                  "Reflect on progress",
                  "Plan improvements"
                ]
              }
            ]
          }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Complete Project", {
          dailyGoals: [
            "✅ Complete project từ đầu đến cuối",
            "✅ Use tất cả tools exclusively",
            "✅ Mouse usage < 5%",
            "✅ Document complete workflow"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Project planning",
              "Research và setup",
              "Initial implementation"
            ],
            exercises: [
              {
                title: "PROJECT SETUP & PLANNING (4h)",
                duration: "4h",
                tasks: [
                  "Plan project structure",
                  "Research requirements",
                  "Setup project",
                  "Initial implementation",
                  "Git workflow setup"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Implementation",
              "Testing",
              "Debugging"
            ],
            exercises: [
              {
                title: "IMPLEMENTATION (4h)",
                duration: "4h",
                tasks: [
                  "Implement features",
                  "Use tất cả tools throughout",
                  "Test và debug",
                  "Git workflow",
                  "Track mouse usage"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Completion",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "COMPLETION & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Complete project",
                  "Write documentation",
                  "Reflect on workflow",
                  "Document improvements",
                  "Prepare cho tuần 5"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 5,
      title: "ADVANCED MASTERY - Week 5",
      goals: [
        "Mouse usage: < 3%",
        "Phím tắt mastered: 120+",
        "Comfort level: 9.5/10",
        "Speed: Faster than before"
      ],
      metrics: {
        mouseUsage: "< 3%",
        shortcutsLearned: 120,
        comfortLevel: "9.5/10"
      },
      finalProject: {
        title: "Advanced Workflow Automation Project",
        description: "Xây dựng một hệ thống automation hoàn chỉnh, tích hợp tất cả advanced features đã học, optimize workflow cho maximum efficiency",
        requirements: [
          "Create complex automation workflows",
          "Integrate advanced Vim macros",
          "Advanced git workflows",
          "Optimize tất cả operations",
          "Document automation system"
        ],
        deliverables: [
          "Working automation system",
          "Advanced Vim macros library",
          "Git automation scripts",
          "Complete documentation"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Speed Optimization",
          totalHours: 4,
          motivationalQuote: "✨ Bạn đang tạo ra một tương lai tốt đẹp hơn cho chính mình và gia đình. Hãy tự hào về điều đó!",
          dailyGoals: [
            "✅ Optimize tất cả workflows",
            "✅ Reduce keystrokes",
            "✅ Increase typing speed",
            "✅ Eliminate bottlenecks"
          ],
          morning: {
            title: "Sáng (1.5h): Analyze & Optimize",
            content: [
              "Analyze current workflow",
              "Identify bottlenecks",
              "Optimize shortcuts",
              "Reduce keystrokes"
            ],
            detailedSetup: [
              "Bước 1: Record workflow sessions để identify bottlenecks",
              "Bước 2: Measure time cho mỗi common task",
              "Bước 3: Identify slow operations (mouse usage, slow shortcuts)",
              "Bước 4: Create custom shortcuts cho frequent operations",
              "Bước 5: Optimize yabai/skhd bindings",
              "Bước 6: Optimize Zellij layouts",
              "Bước 7: Create aliases và scripts cho repetitive tasks",
              "Bước 8: Test optimized workflow và measure improvements"
            ],
            concepts: [
              "Workflow optimization: Identify và eliminate inefficiencies",
              "Bottleneck analysis: Find slowest parts của workflow",
              "Keystroke reduction: Minimize số lần gõ phím cho common tasks",
              "Shortcut optimization: Create custom shortcuts cho frequent operations",
              "Muscle memory: Practice optimized shortcuts để build muscle memory",
              "Speed measurement: Track time để measure improvements"
            ],
            troubleshooting: [
              "Nếu workflow vẫn chậm: Identify specific bottlenecks",
              "Nếu shortcuts conflict: Review và remap conflicting shortcuts",
              "Nếu muscle memory chưa build: Practice more với optimized shortcuts",
              "Nếu không thấy improvement: Re-analyze workflow và try different optimizations"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Optimized",
            content: [
              "Practice optimized workflows",
              "Speed training",
              "Timed challenges"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Workflow Analysis",
                duration: "30 phút",
                tasks: [
                  "Record 10 common tasks và measure time",
                  "Identify 5 bottlenecks",
                  "Create optimized shortcuts cho each bottleneck",
                  "Test optimized shortcuts - 50 repetitions mỗi shortcut",
                  "Measure improvement - target: 20% faster"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Shortcut Optimization",
                duration: "30 phút",
                tasks: [
                  "Review tất cả shortcuts đang dùng",
                  "Identify shortcuts có thể optimize",
                  "Create 10 new optimized shortcuts",
                  "Practice new shortcuts - 100 repetitions",
                  "Replace old shortcuts với optimized ones"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Speed Training",
                duration: "30 phút",
                tasks: [
                  "Practice optimized workflow - 20 complete cycles",
                  "Timed challenge: Complete task < baseline time",
                  "Practice muscle memory - 200 repetitions",
                  "Measure và track improvements",
                  "Target: 30% faster than baseline"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real World Optimization",
                duration: "30 phút",
                tasks: [
                  "Work on real project với optimized workflow",
                  "Track time cho each task",
                  "Identify remaining bottlenecks",
                  "Create additional optimizations",
                  "Document final optimized workflow"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review optimizations",
              "Measure improvements",
              "Plan next steps"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Compare baseline vs optimized times",
                  "Document improvements achieved",
                  "Identify areas for further optimization",
                  "Plan optimizations cho tuần 6"
                ]
              }
            ]
          },
          goals: ["Workflow optimized, speed increased"],
          learningResources: [
            { title: "Keyboard Shortcut Optimization", description: "Best practices cho optimizing keyboard shortcuts" },
            { title: "Workflow Analysis", description: "Techniques để analyze và optimize workflows" }
          ],
          bestPractices: [
            "Measure baseline trước khi optimize",
            "Focus on frequent operations first",
            "Create shortcuts cho operations bạn làm nhiều nhất",
            "Practice optimized shortcuts để build muscle memory",
            "Track improvements để validate optimizations"
          ],
          commonMistakes: [
            "Optimize quá nhiều cùng lúc - nên optimize từng phần",
            "Không measure baseline - không biết có improvement không",
            "Không practice đủ - optimized shortcuts không thành muscle memory",
            "Ignore bottlenecks - focus vào wrong areas"
          ]
        },
        {
          day: "Thứ 3",
          title: "Advanced Vim Mastery",
          totalHours: 4,
          motivationalQuote: "🔥 Đam mê và kiên trì sẽ đưa bạn đến nơi bạn muốn đến. Hãy giữ lửa!",
          dailyGoals: [
            "✅ Master advanced Vim motions",
            "✅ Complex refactoring",
            "✅ Macros mastery",
            "✅ Vim plugins integration"
          ],
          morning: {
            title: "Sáng (1.5h): Advanced Vim",
            content: [
              "Learn advanced Vim motions",
              "Complex text objects",
              "Advanced macros",
              "Vim plugins"
            ],
            detailedSetup: [
              "Bước 1: Review VSCode Vim extension settings",
              "Bước 2: Install Vim plugins nếu cần (surround, commentary, etc.)",
              "Bước 3: Configure advanced Vim settings",
              "Bước 4: Learn complex text objects (ci\", ci(, ci{, cit, etc.)",
              "Bước 5: Master advanced motions (f/F, t/T, %, */#)",
              "Bước 6: Learn macro recording và playback",
              "Bước 7: Practice với complex refactoring scenarios",
              "Bước 8: Integrate Vim plugins vào workflow"
            ],
            concepts: [
              "Advanced text objects: ci\", ci(, ci{, cit - change inside quotes/parens/braces/tags",
              "Advanced motions: f/F find character, t/T till character, % jump matching bracket",
              "Macros: q{register} record, @{register} play, @@ repeat last macro",
              "Visual mode: v (character), V (line), Ctrl+v (block)",
              "Advanced operators: gU/gu (uppercase/lowercase), >/< (indent), = (auto-indent)",
              "Registers: Named registers (\"a-\"z), numbered registers (\"0-\"9), special registers",
              "Vim plugins: Extend Vim functionality với plugins",
              "VSCode Vim integration: Combine Vim với VSCode features"
            ],
            troubleshooting: [
              "Nếu macros không work: Check register names, ensure proper recording",
              "Nếu text objects không select đúng: Check cursor position và syntax",
              "Nếu plugins conflict: Disable conflicting plugins, check settings",
              "Nếu motions chậm: Practice more để build muscle memory",
              "Nếu VSCode features conflict: Configure vim.handleKeys properly"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Advanced",
            content: [
              "Practice advanced motions",
              "Complex refactoring tasks",
              "Macro automation",
              "Plugin workflows"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Advanced Text Objects",
                duration: "30 phút",
                tasks: [
                  "Practice ci\" - 100 lần với different string types",
                  "Practice ci(, ci{, ci[ - 100 lần mỗi loại",
                  "Practice cit (tags) - 80 lần",
                  "Practice diw, daw, ciw - 120 lần",
                  "Practice ya(, yi{, da\" - 80 lần",
                  "Timed challenge: Change 30 strings < 1 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Advanced Motions",
                duration: "30 phút",
                tasks: [
                  "Practice f/F/t/T - 200 lần với different characters",
                  "Practice ; repeat f/t - 150 lần",
                  "Practice % jump brackets - 150 lần",
                  "Practice */# search word - 120 lần",
                  "Practice {/} paragraph jump - 100 lần",
                  "Timed challenge: Navigate 500 lines < 2 phút"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Macros Mastery",
                duration: "30 phút",
                tasks: [
                  "Record macro format 100 lines - 5 different macros",
                  "Record macro add semicolons - 3 macros",
                  "Record macro wrap functions - 3 macros",
                  "Practice @@ repeat macro - 50 lần",
                  "Practice @{register} play specific macro - 30 lần",
                  "Timed challenge: Format 200 lines với macros < 3 phút"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Complex Refactoring",
                duration: "30 phút",
                tasks: [
                  "Refactor file 500+ lines với advanced motions",
                  "Đổi tên 50 variables bằng * + cw",
                  "Extract 10 functions bằng visual mode",
                  "Move 20 code blocks",
                  "Format và indent 100 blocks",
                  "Timed challenge: Complete refactoring < 20 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review advanced features",
              "Document techniques",
              "Plan practice"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại tất cả advanced motions - 100% accuracy",
                  "Document favorite macros",
                  "Create cheat sheet cho advanced features",
                  "Plan practice cho tuần 6"
                ]
              }
            ]
          },
          goals: ["Advanced Vim mastery achieved"],
          learningResources: [
            { title: "Vim Advanced Motions", description: "Complete guide to advanced Vim motions" },
            { title: "Vim Macros", description: "Master Vim macros for automation" },
            { title: "VSCode Vim Advanced", description: "Advanced VSCode Vim features" }
          ],
          bestPractices: [
            "Start với basic text objects trước khi học advanced",
            "Practice macros trên real code, không chỉ practice files",
            "Combine macros với motions để create powerful automation",
            "Use registers để store và reuse macros",
            "Document macros bạn use frequently"
          ],
          commonMistakes: [
            "Cố gắng nhớ tất cả advanced features cùng lúc",
            "Không practice macros đủ - macros rất powerful nhưng cần practice",
            "Ignore text objects - miss out on efficient editing",
            "Không combine features - advanced Vim là về combining features"
          ]
        },
        {
          day: "Thứ 4",
          title: "Advanced Git Mastery",
          totalHours: 4,
          motivationalQuote: "💎 Mỗi giờ bạn học là một viên ngọc quý trong hành trình phát triển của bạn!",
          dailyGoals: [
            "✅ Master advanced git operations",
            "✅ Complex branching strategies",
            "✅ Advanced rebase workflows",
            "✅ Git automation"
          ],
          morning: {
            title: "Sáng (1.5h): Advanced Git",
            content: [
              "Learn advanced git operations",
              "Complex branching strategies",
              "Advanced rebase workflows",
              "Git hooks và automation"
            ],
            detailedSetup: [
              "Bước 1: Review lazygit advanced features",
              "Bước 2: Learn complex branching strategies (git-flow, GitHub flow)",
              "Bước 3: Master interactive rebase trong lazygit",
              "Bước 4: Learn git hooks (pre-commit, pre-push, etc.)",
              "Bước 5: Setup git aliases cho common operations",
              "Bước 6: Learn git worktree cho multiple working directories",
              "Bước 7: Practice với complex merge scenarios",
              "Bước 8: Create git automation scripts"
            ],
            concepts: [
              "Branching strategies: git-flow, GitHub flow, GitLab flow",
              "Interactive rebase: Edit, reword, squash, drop commits",
              "Git hooks: Pre-commit, pre-push, post-commit hooks",
              "Git worktree: Multiple working directories cho same repo",
              "Cherry-picking: Apply specific commits từ other branches",
              "Git bisect: Find commit that introduced bug",
              "Git reflog: Recover lost commits",
              "Git automation: Scripts và aliases cho repetitive tasks"
            ],
            troubleshooting: [
              "Nếu rebase conflict: Resolve conflicts, continue rebase",
              "Nếu branch strategy confusing: Start với simple strategy",
              "Nếu hooks không run: Check permissions và hook locations",
              "Nếu worktree issues: Check paths và branch names",
              "Nếu lost commits: Use git reflog để recover"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Advanced",
            content: [
              "Practice advanced git workflows",
              "Complex branching scenarios",
              "Advanced rebase operations",
              "Git automation scripts"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Complex Branching",
                duration: "30 phút",
                tasks: [
                  "Create feature branch từ main",
                  "Create hotfix branch từ main",
                  "Merge feature branch vào develop",
                  "Merge develop vào main",
                  "Practice git-flow workflow - 5 complete cycles",
                  "Timed challenge: Complete branching workflow < 5 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Interactive Rebase",
                duration: "30 phút",
                tasks: [
                  "Interactive rebase - edit 10 commits",
                  "Squash 5 commits thành 1 - 10 lần",
                  "Reword commit messages - 20 lần",
                  "Drop unwanted commits - 10 lần",
                  "Reorder commits - 5 lần",
                  "Timed challenge: Clean up 20 commits < 10 phút"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Git Hooks & Automation",
                duration: "30 phút",
                tasks: [
                  "Create pre-commit hook - check linting",
                  "Create pre-push hook - run tests",
                  "Create 10 git aliases cho common operations",
                  "Test hooks và aliases - 20 lần",
                  "Create git automation script",
                  "Timed challenge: Setup hooks và aliases < 15 phút"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Advanced Operations",
                duration: "30 phút",
                tasks: [
                  "Cherry-pick commits từ other branches - 10 lần",
                  "Use git bisect để find bug - 3 scenarios",
                  "Recover lost commits với git reflog - 5 lần",
                  "Use git worktree - create 3 worktrees",
                  "Practice complex merge scenarios - 10 merges",
                  "Timed challenge: Complete advanced workflow < 15 phút"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review advanced git",
              "Document workflows",
              "Plan improvements"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Test lại tất cả advanced git operations",
                  "Document branching strategy",
                  "Document git hooks và aliases",
                  "Plan improvements cho workflow"
                ]
              }
            ]
          },
          goals: ["Advanced git mastery achieved"],
          learningResources: [
            { title: "Git Branching Strategies", description: "Learn different branching strategies" },
            { title: "Git Hooks", description: "Master git hooks for automation" },
            { title: "Advanced Git", description: "Advanced git operations guide" }
          ],
          bestPractices: [
            "Choose branching strategy phù hợp với team",
            "Use interactive rebase để keep history clean",
            "Setup git hooks để enforce code quality",
            "Create aliases cho operations bạn do frequently",
            "Document git workflow cho team"
          ],
          commonMistakes: [
            "Rebase public branches - chỉ rebase local branches",
            "Force push sau rebase - communicate với team",
            "Ignore git hooks - hooks help maintain quality",
            "Complex branching strategy khi không cần - keep it simple"
          ]
        },
        {
          day: "Thứ 5",
          title: "Complete Workflow Mastery",
          totalHours: 4,
          motivationalQuote: "🌱 Bạn đang phát triển không chỉ kỹ năng mà còn cả tính cách. Đây là điều tuyệt vời!",
          dailyGoals: [
            "✅ Master complete workflow",
            "✅ Zero mouse usage",
            "✅ Maximum efficiency",
            "✅ Muscle memory perfection"
          ],
          morning: {
            title: "Sáng (1.5h): Workflow Practice",
            content: [
              "Practice complete workflow",
              "Eliminate all mouse usage",
              "Optimize every step",
              "Build perfect muscle memory"
            ],
            detailedSetup: [
              "Bước 1: Review complete workflow (Raycast → yabai → Zellij → VSCode Vim → lazygit)",
              "Bước 2: Identify any remaining mouse usage",
              "Bước 3: Create shortcuts cho any missing operations",
              "Bước 4: Practice workflow từ đầu đến cuối - 20 lần",
              "Bước 5: Time mỗi step để identify slow parts",
              "Bước 6: Optimize slow parts",
              "Bước 7: Practice optimized workflow - 30 lần",
              "Bước 8: Build muscle memory cho complete workflow"
            ],
            concepts: [
              "Complete workflow: Tất cả operations từ start đến finish",
              "Workflow optimization: Eliminate inefficiencies trong workflow",
              "Muscle memory: Automatic execution không cần suy nghĩ",
              "Zero mouse challenge: Complete workflow không touch mouse",
              "Speed optimization: Minimize time cho mỗi operation",
              "Workflow consistency: Same workflow cho similar tasks"
            ],
            troubleshooting: [
              "Nếu vẫn dùng mouse: Identify operations và create shortcuts",
              "Nếu workflow chậm: Time mỗi step và optimize slowest parts",
              "Nếu muscle memory chưa build: Practice more với consistent workflow",
              "Nếu inconsistent: Document workflow và follow strictly"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Real World Mastery",
            content: [
              "Real project work",
              "Complete workflow execution",
              "Zero mouse challenge",
              "Speed optimization"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Complete Workflow Practice",
                duration: "30 phút",
                tasks: [
                  "Practice complete workflow - 20 complete cycles",
                  "Raycast mở project",
                  "yabai setup workspace",
                  "Zellij create layout",
                  "VSCode Vim edit code",
                  "lazygit commit changes",
                  "Target: Complete cycle < 2 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Zero Mouse Challenge",
                duration: "30 phút",
                tasks: [
                  "Complete coding task không touch mouse",
                  "Track mouse usage (target: 0%)",
                  "Identify any mouse usage và eliminate",
                  "Create shortcuts cho any missing operations",
                  "Repeat challenge - 10 lần",
                  "Target: 100% keyboard-only"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Speed Optimization",
                duration: "30 phút",
                tasks: [
                  "Time baseline workflow",
                  "Optimize slowest operations",
                  "Practice optimized workflow - 30 lần",
                  "Measure improvement",
                  "Target: 30% faster than baseline",
                  "Document optimized workflow"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real Project Work",
                duration: "30 phút",
                tasks: [
                  "Work on real project với complete workflow",
                  "Code feature từ đầu đến cuối",
                  "Use tất cả tools (yabai, Zellij, Vim, lazygit)",
                  "Track time và mouse usage",
                  "Complete feature không dùng mouse",
                  "Target: Efficient và fast"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review mastery level",
              "Document achievements",
              "Plan maintenance"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review complete workflow mastery",
                  "Document achievements và improvements",
                  "Identify areas for further improvement",
                  "Plan maintenance và continued practice"
                ]
              }
            ]
          },
          goals: ["Complete workflow mastery achieved"],
          learningResources: [
            { title: "Workflow Optimization", description: "Best practices cho optimizing workflows" },
            { title: "Keyboard-Only Workflow", description: "Complete keyboard-only workflow guide" }
          ],
          bestPractices: [
            "Practice complete workflow consistently",
            "Eliminate all mouse usage gradually",
            "Optimize workflow based on real usage",
            "Document workflow để maintain consistency",
            "Continue practice để maintain muscle memory"
          ],
          commonMistakes: [
            "Không practice complete workflow - chỉ practice individual tools",
            "Allow mouse usage occasionally - breaks muscle memory",
            "Không optimize workflow - miss efficiency gains",
            "Không document workflow - forget optimized steps"
          ]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 5", {
          dailyGoals: [
            "✅ 12h advanced practice",
            "✅ Master all advanced features",
            "✅ Zero mouse usage",
            "✅ Maximum speed"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Advanced practice session với tất cả tools",
              "Practice optimized workflows",
              "Advanced Vim motions practice",
              "Advanced git operations practice"
            ],
            exercises: [
              {
                title: "PRACTICE SESSION (4h)",
                duration: "4h",
                tasks: [
                  "Practice optimized workflows - 50 complete cycles",
                  "Practice advanced Vim motions - 500+ repetitions",
                  "Practice advanced git operations - 100 operations",
                  "Practice macros - 50 macros",
                  "Build muscle memory cho tất cả advanced features",
                  "Track progress và improvements"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Real project work",
              "Apply tất cả advanced features",
              "Zero mouse challenge",
              "Speed optimization"
            ],
            exercises: [
              {
                title: "REAL PROJECT WORK (4h)",
                duration: "4h",
                tasks: [
                  "Work on real project với advanced features",
                  "Use optimized workflows exclusively",
                  "Apply advanced Vim motions",
                  "Use advanced git operations",
                  "Track mouse usage (target: 0%)",
                  "Document workflow improvements"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Mastery refinement",
              "Advanced customization",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "MASTERY REFINEMENT (4h)",
                duration: "4h",
                tasks: [
                  "Refine advanced techniques",
                  "Create custom solutions",
                  "Document advanced workflows",
                  "Reflect on progress",
                  "Plan improvements cho tuần 6"
                ]
              }
            ]
          }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Week 5", {
          dailyGoals: [
            "✅ Complete advanced project",
            "✅ Zero mouse usage",
            "✅ Maximum efficiency",
            "✅ Mastery demonstration"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Project planning",
              "Research và setup",
              "Initial implementation"
            ],
            exercises: [
              {
                title: "PROJECT SETUP & PLANNING (4h)",
                duration: "4h",
                tasks: [
                  "Plan advanced project structure",
                  "Research requirements và technologies",
                  "Setup project với optimized workflow",
                  "Initial implementation với advanced features",
                  "Git workflow setup với advanced operations"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Implementation",
              "Advanced features",
              "Testing"
            ],
            exercises: [
              {
                title: "IMPLEMENTATION (4h)",
                duration: "4h",
                tasks: [
                  "Implement features với advanced Vim motions",
                  "Use advanced git operations throughout",
                  "Apply optimized workflows",
                  "Test và debug",
                  "Track mouse usage (target: 0%)",
                  "Maintain code quality"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Completion",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "COMPLETION & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Complete project",
                  "Write comprehensive documentation",
                  "Reflect on advanced features used",
                  "Document workflow improvements",
                  "Prepare cho tuần 6"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 6,
      title: "EXPERT LEVEL - Week 6",
      goals: [
        "Mouse usage: < 1%",
        "Phím tắt mastered: 150+",
        "Comfort level: 10/10",
        "Speed: Expert level"
      ],
      metrics: {
        mouseUsage: "< 1%",
        shortcutsLearned: 150,
        comfortLevel: "10/10"
      },
      finalProject: {
        title: "Expert-Level Production Project",
        description: "Xây dựng một production-ready project từ đầu đến cuối, áp dụng tất cả expert-level skills, maintain code quality và workflow perfection",
        requirements: [
          "Build production-ready application",
          "Expert Vim motions throughout",
          "Expert git workflow",
          "Zero mouse usage",
          "Production-quality code"
        ],
        deliverables: [
          "Production-ready application",
          "Complete git history",
          "Code documentation",
          "Deployment guide"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Expert Workflow",
          totalHours: 4,
          motivationalQuote: "🎁 Bạn đang đầu tư vào tài sản quý giá nhất - chính bản thân bạn!",
          dailyGoals: [
            "✅ Expert level workflow",
            "✅ Zero mouse usage",
            "✅ Expert speed",
            "✅ Perfect muscle memory"
          ],
          morning: {
            title: "Sáng (1.5h): Expert Practice",
            content: [
              "Expert level workflow practice",
              "Perfect execution",
              "Zero mouse challenge",
              "Expert speed training"
            ],
            detailedSetup: [
              "Bước 1: Review expert-level workflow requirements",
              "Bước 2: Practice complete workflow với expert speed",
              "Bước 3: Eliminate any remaining inefficiencies",
              "Bước 4: Perfect muscle memory cho tất cả operations",
              "Bước 5: Time workflow để achieve expert speed",
              "Bước 6: Practice consistency - same speed mỗi lần",
              "Bước 7: Challenge yourself với complex scenarios",
              "Bước 8: Document expert workflow"
            ],
            concepts: [
              "Expert workflow: Perfect execution với maximum efficiency",
              "Zero mouse usage: Complete workflow không touch mouse",
              "Expert speed: Fast execution không sacrifice accuracy",
              "Muscle memory: Automatic execution không cần suy nghĩ",
              "Consistency: Same performance mỗi lần",
              "Workflow perfection: Every step optimized và executed perfectly"
            ],
            troubleshooting: [
              "Nếu vẫn có mouse usage: Identify và eliminate completely",
              "Nếu speed chưa expert: Practice more và optimize further",
              "Nếu inconsistent: Practice consistency và build muscle memory",
              "Nếu errors increase: Balance speed với accuracy"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Expert Challenges",
            content: [
              "Expert level challenges",
              "Complex scenarios",
              "Speed challenges",
              "Perfection practice"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Expert Workflow Challenge",
                duration: "30 phút",
                tasks: [
                  "Complete workflow challenge - 30 lần",
                  "Target: < 1.5 phút mỗi cycle",
                  "Zero mouse usage - track và verify",
                  "Perfect execution - no errors",
                  "Consistent speed - same time mỗi lần",
                  "Timed challenge: 10 cycles < 15 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Complex Scenarios",
                duration: "30 phút",
                tasks: [
                  "Handle complex coding scenarios",
                  "Multiple files, branches, và operations",
                  "Maintain expert speed trong complexity",
                  "Zero mouse usage trong complex scenarios",
                  "Practice 10 complex scenarios",
                  "Target: Handle complexity với expert speed"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Speed Perfection",
                duration: "30 phút",
                tasks: [
                  "Practice workflow với expert speed - 50 lần",
                  "Measure và track speed consistency",
                  "Identify và fix any speed variations",
                  "Practice perfection - no errors",
                  "Build perfect muscle memory",
                  "Target: Consistent expert speed"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real World Expert",
                duration: "30 phút",
                tasks: [
                  "Work on real project với expert workflow",
                  "Maintain expert speed throughout",
                  "Zero mouse usage verified",
                  "Handle real-world complexity",
                  "Complete feature với expert efficiency",
                  "Target: Expert performance trong real work"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review expert level",
              "Document achievements",
              "Plan mastery"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review expert workflow performance",
                  "Document expert-level achievements",
                  "Identify areas for mastery level",
                  "Plan mastery practice"
                ]
              }
            ]
          },
          goals: ["Expert level achieved"],
          learningResources: [
            { title: "Expert Workflow", description: "Achieving expert-level workflow performance" }
          ],
          bestPractices: [
            "Practice consistency để achieve expert speed",
            "Eliminate all mouse usage completely",
            "Perfect muscle memory cho tất cả operations",
            "Maintain expert speed trong complexity",
            "Document expert workflow để maintain level"
          ],
          commonMistakes: [
            "Sacrifice accuracy cho speed - balance both",
            "Allow occasional mouse usage - breaks expert level",
            "Không practice consistency - speed varies",
            "Ignore complexity - expert phải handle complexity"
          ]
        },
        {
          day: "Thứ 3",
          title: "Expert Vim",
          totalHours: 4,
          motivationalQuote: "⚡ Năng lượng tích cực bạn tạo ra hôm nay sẽ lan tỏa đến gia đình bạn!",
          dailyGoals: [
            "✅ Expert Vim mastery",
            "✅ Complex automation",
            "✅ Perfect efficiency",
            "✅ Zero errors"
          ],
          morning: {
            title: "Sáng (1.5h): Expert Vim",
            content: [
              "Expert Vim motions mastery",
              "Complex automation với macros",
              "Perfect efficiency",
              "Zero error execution"
            ],
            detailedSetup: [
              "Bước 1: Master tất cả advanced Vim motions",
              "Bước 2: Create complex macros cho automation",
              "Bước 3: Perfect text object usage",
              "Bước 4: Master visual mode operations",
              "Bước 5: Perfect register usage",
              "Bước 6: Integrate Vim plugins effectively",
              "Bước 7: Practice complex refactoring",
              "Bước 8: Achieve zero-error execution"
            ],
            concepts: [
              "Expert Vim: Perfect execution của tất cả Vim features",
              "Complex automation: Macros cho complex operations",
              "Perfect efficiency: Maximum speed với zero errors",
              "Text object mastery: Use text objects instinctively",
              "Macro mastery: Create và use macros effectively",
              "Visual mode expertise: Master all visual mode operations"
            ],
            troubleshooting: [
              "Nếu errors occur: Slow down và focus on accuracy",
              "Nếu macros fail: Check register names và recording",
              "Nếu efficiency drops: Review và optimize motions",
              "Nếu plugins conflict: Configure properly"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Expert Practice",
            content: [
              "Expert Vim practice",
              "Complex automation",
              "Perfect execution",
              "Zero errors"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Expert Motions",
                duration: "30 phút",
                tasks: [
                  "Practice expert motions - 500+ repetitions",
                  "Perfect text object usage - 200 lần",
                  "Master f/F/t/T - 300 lần",
                  "Perfect % jumps - 200 lần",
                  "Zero errors - verify accuracy",
                  "Target: 100% accuracy với expert speed"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Complex Automation",
                duration: "30 phút",
                tasks: [
                  "Create 10 complex macros",
                  "Use macros cho automation - 50 operations",
                  "Combine macros với motions",
                  "Automate repetitive tasks",
                  "Practice macro mastery - 100 repetitions",
                  "Target: Automate 80% of repetitive work"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Perfect Efficiency",
                duration: "30 phút",
                tasks: [
                  "Refactor 1000+ lines với expert efficiency",
                  "Perfect execution - zero errors",
                  "Expert speed - < 30 phút",
                  "Use tất cả advanced features",
                  "Maintain code quality",
                  "Target: Expert efficiency với perfection"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Zero Error Challenge",
                duration: "30 phút",
                tasks: [
                  "Complete coding task với zero errors",
                  "Use expert Vim motions throughout",
                  "Maintain expert speed",
                  "Perfect accuracy - verify",
                  "Handle complex scenarios",
                  "Target: Zero errors với expert speed"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review expert Vim",
              "Document mastery",
              "Plan mastery level"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review expert Vim performance",
                  "Document expert techniques",
                  "Identify mastery areas",
                  "Plan mastery practice"
                ]
              }
            ]
          },
          goals: ["Expert Vim achieved"],
          learningResources: [
            { title: "Expert Vim", description: "Achieving expert-level Vim mastery" }
          ],
          bestPractices: [
            "Practice perfection - zero errors",
            "Master complex automation",
            "Perfect efficiency trong all operations",
            "Build perfect muscle memory",
            "Document expert techniques"
          ],
          commonMistakes: [
            "Sacrifice accuracy cho speed",
            "Không practice automation enough",
            "Ignore error prevention",
            "Không document expert techniques"
          ]
        },
        {
          day: "Thứ 4",
          title: "Expert Git",
          totalHours: 4,
          motivationalQuote: "🏆 Bạn là người hùng trong câu chuyện của chính mình. Hãy tiếp tục viết nên những trang đẹp!",
          dailyGoals: [
            "✅ Expert git mastery",
            "✅ Complex workflows",
            "✅ Perfect automation",
            "✅ Zero mistakes"
          ],
          morning: {
            title: "Sáng (1.5h): Expert Git",
            content: [
              "Expert git operations",
              "Complex workflow mastery",
              "Perfect automation",
              "Zero mistake execution"
            ],
            detailedSetup: [
              "Bước 1: Master tất cả advanced git operations",
              "Bước 2: Perfect complex branching strategies",
              "Bước 3: Master interactive rebase",
              "Bước 4: Perfect git hooks automation",
              "Bước 5: Master git worktree",
              "Bước 6: Perfect cherry-picking và bisect",
              "Bước 7: Create perfect git automation",
              "Bước 8: Achieve zero-mistake execution"
            ],
            concepts: [
              "Expert git: Perfect execution của tất cả git operations",
              "Complex workflows: Handle complex branching và merging",
              "Perfect automation: Git hooks và scripts cho automation",
              "Zero mistakes: Perfect execution không errors",
              "Git mastery: Instinctive use của git features",
              "Workflow perfection: Optimal git workflow cho all scenarios"
            ],
            troubleshooting: [
              "Nếu mistakes occur: Review và learn from mistakes",
              "Nếu workflow complex: Simplify và optimize",
              "Nếu automation fails: Check hooks và scripts",
              "Nếu conflicts: Master conflict resolution"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Expert Practice",
            content: [
              "Expert git practice",
              "Complex workflows",
              "Perfect automation",
              "Zero mistakes"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Expert Operations",
                duration: "30 phút",
                tasks: [
                  "Practice expert git operations - 200 operations",
                  "Perfect branching strategies - 20 scenarios",
                  "Master interactive rebase - 30 rebases",
                  "Perfect automation - 50 automated operations",
                  "Zero mistakes - verify accuracy",
                  "Target: 100% accuracy với expert speed"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Complex Workflows",
                duration: "30 phút",
                tasks: [
                  "Handle complex branching scenarios - 10 scenarios",
                  "Complex merge strategies - 15 merges",
                  "Handle conflicts expertly - 10 conflicts",
                  "Perfect workflow execution",
                  "Maintain git history quality",
                  "Target: Handle complexity với perfection"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Perfect Automation",
                duration: "30 phút",
                tasks: [
                  "Create perfect git hooks - 5 hooks",
                  "Perfect git aliases - 20 aliases",
                  "Automate repetitive operations",
                  "Test automation - 100 operations",
                  "Perfect automation execution",
                  "Target: 90% automation coverage"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Zero Mistake Challenge",
                duration: "30 phút",
                tasks: [
                  "Complete git workflow với zero mistakes",
                  "Handle complex scenarios perfectly",
                  "Maintain perfect git history",
                  "Use automation effectively",
                  "Verify zero mistakes",
                  "Target: Zero mistakes với expert efficiency"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review expert git",
              "Document mastery",
              "Plan mastery level"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review expert git performance",
                  "Document expert workflows",
                  "Identify mastery areas",
                  "Plan mastery practice"
                ]
              }
            ]
          },
          goals: ["Expert git achieved"],
          learningResources: [
            { title: "Expert Git", description: "Achieving expert-level git mastery" }
          ],
          bestPractices: [
            "Perfect execution - zero mistakes",
            "Master complex workflows",
            "Perfect automation",
            "Maintain git history quality",
            "Document expert workflows"
          ],
          commonMistakes: [
            "Allow mistakes - expert means zero mistakes",
            "Không automate enough",
            "Ignore git history quality",
            "Không document workflows"
          ]
        },
        {
          day: "Thứ 5",
          title: "Expert Complete",
          totalHours: 4,
          motivationalQuote: "🌈 Mỗi thử thách bạn vượt qua làm bạn mạnh mẽ hơn. Hãy tiếp tục chiến đấu!",
          dailyGoals: [
            "✅ Expert complete mastery",
            "✅ Zero mouse usage",
            "✅ Expert speed",
            "✅ Perfect workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Expert Complete",
            content: [
              "Expert complete workflow",
              "Perfect integration",
              "Expert speed",
              "Zero mouse usage"
            ],
            detailedSetup: [
              "Bước 1: Integrate tất cả expert skills",
              "Bước 2: Perfect complete workflow",
              "Bước 3: Achieve expert speed trong complete workflow",
              "Bước 4: Eliminate all mouse usage",
              "Bước 5: Perfect muscle memory cho complete workflow",
              "Bước 6: Practice consistency",
              "Bước 7: Handle complexity với expert level",
              "Bước 8: Document expert complete workflow"
            ],
            concepts: [
              "Expert complete: Perfect integration của tất cả skills",
              "Complete workflow: Tất cả tools work together perfectly",
              "Expert speed: Fast execution trong complete workflow",
              "Zero mouse: Complete workflow không touch mouse",
              "Perfect integration: All tools complement each other",
              "Workflow mastery: Perfect execution của complete workflow"
            ],
            troubleshooting: [
              "Nếu integration issues: Review tool interactions",
              "Nếu speed drops: Optimize complete workflow",
              "Nếu mouse usage: Identify và eliminate",
              "Nếu inconsistency: Practice consistency"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Expert Challenges",
            content: [
              "Expert level challenges",
              "Complete workflow challenges",
              "Complex scenarios",
              "Perfection practice"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Expert Complete Workflow",
                duration: "30 phút",
                tasks: [
                  "Practice expert complete workflow - 30 cycles",
                  "Integrate tất cả expert skills",
                  "Maintain expert speed",
                  "Zero mouse usage verified",
                  "Perfect execution",
                  "Target: Expert performance trong complete workflow"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Complex Scenarios",
                duration: "30 phút",
                tasks: [
                  "Handle complex scenarios với expert workflow",
                  "Multiple projects, branches, files",
                  "Maintain expert speed trong complexity",
                  "Zero mouse usage trong complexity",
                  "Perfect execution",
                  "Target: Handle complexity với expert level"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Speed Perfection",
                duration: "30 phút",
                tasks: [
                  "Practice với expert speed - 50 cycles",
                  "Perfect consistency",
                  "Zero errors",
                  "Maintain speed trong all scenarios",
                  "Build perfect muscle memory",
                  "Target: Consistent expert speed"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real World Expert",
                duration: "30 phút",
                tasks: [
                  "Work on real project với expert workflow",
                  "Complete feature với expert efficiency",
                  "Zero mouse usage",
                  "Expert speed maintained",
                  "Perfect execution",
                  "Target: Expert performance trong real work"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review expert complete",
              "Document mastery",
              "Plan mastery level"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review expert complete mastery",
                  "Document expert complete workflow",
                  "Identify mastery level areas",
                  "Plan mastery practice"
                ]
              }
            ]
          },
          goals: ["Expert complete mastery achieved"],
          learningResources: [
            { title: "Expert Complete Workflow", description: "Achieving expert-level complete workflow mastery" }
          ],
          bestPractices: [
            "Integrate tất cả expert skills",
            "Perfect complete workflow",
            "Maintain expert speed",
            "Zero mouse usage always",
            "Document expert complete workflow"
          ],
          commonMistakes: [
            "Không integrate skills properly",
            "Allow mouse usage occasionally",
            "Sacrifice speed cho accuracy",
            "Không document expert workflow"
          ]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 6", {
          dailyGoals: [
            "✅ 12h expert practice",
            "✅ Perfect all skills",
            "✅ Zero mouse usage",
            "✅ Expert speed"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Expert practice session",
              "Perfect all expert skills",
              "Expert workflow practice",
              "Expert Vim và Git practice"
            ],
            exercises: [
              {
                title: "EXPERT PRACTICE (4h)",
                duration: "4h",
                tasks: [
                  "Practice expert workflow - 100 complete cycles",
                  "Practice expert Vim motions - 1000+ repetitions",
                  "Practice expert git operations - 200 operations",
                  "Perfect all expert skills",
                  "Build perfect muscle memory",
                  "Track progress và perfection"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Expert work",
              "Real project với expert level",
              "Expert efficiency",
              "Zero mouse usage"
            ],
            exercises: [
              {
                title: "EXPERT WORK (4h)",
                duration: "4h",
                tasks: [
                  "Work on real project với expert level",
                  "Maintain expert speed throughout",
                  "Zero mouse usage verified",
                  "Perfect execution",
                  "Handle complexity với expert level",
                  "Document expert performance"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Expert refinement",
              "Mastery preparation",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "EXPERT REFINEMENT (4h)",
                duration: "4h",
                tasks: [
                  "Refine expert techniques",
                  "Prepare for mastery level",
                  "Document expert workflows",
                  "Reflect on expert achievements",
                  "Plan mastery practice"
                ]
              }
            ]
          }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Week 6", {
          dailyGoals: [
            "✅ Complete expert project",
            "✅ Zero mouse usage",
            "✅ Expert efficiency",
            "✅ Perfect demonstration"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Expert planning",
              "Project setup",
              "Initial implementation"
            ],
            exercises: [
              {
                title: "EXPERT PLANNING (4h)",
                duration: "4h",
                tasks: [
                  "Plan expert-level project",
                  "Research và setup với expert workflow",
                  "Initial implementation với expert skills",
                  "Git workflow với expert operations",
                  "Setup complete expert environment"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Expert implementation",
              "Expert features",
              "Expert testing"
            ],
            exercises: [
              {
                title: "EXPERT IMPLEMENTATION (4h)",
                duration: "4h",
                tasks: [
                  "Implement với expert Vim motions",
                  "Use expert git operations",
                  "Apply expert workflow",
                  "Maintain expert speed",
                  "Zero mouse usage",
                  "Perfect execution"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Expert completion",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "EXPERT COMPLETION (4h)",
                duration: "4h",
                tasks: [
                  "Complete expert project",
                  "Write expert documentation",
                  "Reflect on expert achievements",
                  "Document expert workflow",
                  "Prepare cho tuần 7"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 7,
      title: "MASTER LEVEL - Week 7",
      goals: [
        "Mouse usage: 0%",
        "Phím tắt mastered: 180+",
        "Comfort level: 10/10",
        "Speed: Master level"
      ],
      metrics: {
        mouseUsage: "0%",
        shortcutsLearned: 180,
        comfortLevel: "10/10"
      },
      finalProject: {
        title: "Master-Level Complex System",
        description: "Xây dựng một hệ thống phức tạp với multiple components, áp dụng master-level skills, perfect execution với zero mouse usage",
        requirements: [
          "Build complex multi-component system",
          "Master Vim motions",
          "Master git workflows",
          "Perfect automation",
          "Zero mouse usage guaranteed"
        ],
        deliverables: [
          "Complex working system",
          "Master-level code quality",
          "Complete automation",
          "Master workflow documentation"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Master Workflow",
          totalHours: 4,
          motivationalQuote: "🎪 Cuộc sống là một buổi biểu diễn, và bạn đang tỏa sáng trên sân khấu của chính mình!",
          dailyGoals: [
            "✅ Master level workflow",
            "✅ Zero mouse usage",
            "✅ Master speed",
            "✅ Perfect execution"
          ],
          morning: {
            title: "Sáng (1.5h): Master Practice",
            content: [
              "Master level workflow practice",
              "Perfect execution mastery",
              "Zero mouse guarantee",
              "Master speed perfection"
            ],
            detailedSetup: [
              "Bước 1: Achieve master-level workflow performance",
              "Bước 2: Perfect execution của tất cả operations",
              "Bước 3: Guarantee zero mouse usage - verified",
              "Bước 4: Achieve master speed - fastest possible",
              "Bước 5: Perfect muscle memory - automatic execution",
              "Bước 6: Master consistency - perfect mỗi lần",
              "Bước 7: Handle any complexity với master level",
              "Bước 8: Document master workflow"
            ],
            concepts: [
              "Master workflow: Perfect execution với maximum efficiency",
              "Zero mouse guarantee: Verified zero mouse usage",
              "Master speed: Fastest possible execution",
              "Perfect execution: Zero errors với maximum speed",
              "Muscle memory mastery: Automatic perfect execution",
              "Workflow mastery: Perfect trong all scenarios"
            ],
            troubleshooting: [
              "Nếu mouse usage detected: Immediate elimination và verification",
              "Nếu speed not master: Further optimization và practice",
              "Nếu execution not perfect: Focus on accuracy first",
              "Nếu inconsistency: Practice consistency until perfect"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Master Challenges",
            content: [
              "Master level challenges",
              "Perfect execution challenges",
              "Master speed challenges",
              "Complexity mastery"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Master Workflow Challenge",
                duration: "30 phút",
                tasks: [
                  "Complete workflow challenge - 50 lần",
                  "Target: < 1 phút mỗi cycle",
                  "Zero mouse usage - verified và guaranteed",
                  "Perfect execution - zero errors",
                  "Master speed - fastest possible",
                  "Timed challenge: 20 cycles < 20 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Perfect Execution",
                duration: "30 phút",
                tasks: [
                  "Practice perfect execution - 100 operations",
                  "Zero errors guaranteed",
                  "Master speed maintained",
                  "Perfect consistency",
                  "Handle complexity perfectly",
                  "Target: Perfect execution trong all scenarios"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Master Speed",
                duration: "30 phút",
                tasks: [
                  "Practice với master speed - 100 cycles",
                  "Fastest possible execution",
                  "Perfect consistency",
                  "Zero errors",
                  "Maintain speed trong complexity",
                  "Target: Master speed với perfection"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real World Master",
                duration: "30 phút",
                tasks: [
                  "Work on real project với master workflow",
                  "Complete feature với master efficiency",
                  "Zero mouse usage guaranteed",
                  "Master speed maintained",
                  "Perfect execution",
                  "Target: Master performance trong real work"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review master level",
              "Document mastery",
              "Plan grand master"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review master workflow performance",
                  "Document master-level achievements",
                  "Identify grand master areas",
                  "Plan grand master practice"
                ]
              }
            ]
          },
          goals: ["Master level achieved"],
          learningResources: [
            { title: "Master Workflow", description: "Achieving master-level workflow mastery" }
          ],
          bestPractices: [
            "Perfect execution always",
            "Guarantee zero mouse usage",
            "Achieve master speed",
            "Maintain perfection trong all scenarios",
            "Document master workflow"
          ],
          commonMistakes: [
            "Allow any mouse usage - breaks master level",
            "Sacrifice perfection cho speed",
            "Không maintain consistency",
            "Ignore complexity - master handles all"
          ]
        },
        {
          day: "Thứ 3",
          title: "Master Vim",
          totalHours: 4,
          motivationalQuote: "💼 Kỹ năng mới bạn học hôm nay sẽ là công cụ mạnh mẽ trong tương lai!",
          dailyGoals: [
            "✅ Master Vim mastery",
            "✅ Perfect automation",
            "✅ Master efficiency",
            "✅ Zero errors"
          ],
          morning: {
            title: "Sáng (1.5h): Master Vim",
            content: [
              "Master Vim motions mastery",
              "Perfect automation mastery",
              "Master efficiency perfection",
              "Zero error guarantee"
            ],
            detailedSetup: [
              "Bước 1: Achieve master Vim motions",
              "Bước 2: Perfect automation với macros",
              "Bước 3: Master efficiency - fastest possible",
              "Bước 4: Guarantee zero errors",
              "Bước 5: Perfect text object mastery",
              "Bước 6: Master visual mode operations",
              "Bước 7: Perfect macro mastery",
              "Bước 8: Document master Vim techniques"
            ],
            concepts: [
              "Master Vim: Perfect execution của tất cả Vim features",
              "Perfect automation: Macros cho all repetitive tasks",
              "Master efficiency: Fastest possible với zero errors",
              "Zero error guarantee: Perfect execution always",
              "Text object mastery: Instinctive perfect usage",
              "Macro mastery: Perfect automation"
            ],
            troubleshooting: [
              "Nếu errors occur: Immediate correction và prevention",
              "Nếu automation fails: Review và perfect macros",
              "Nếu efficiency drops: Optimize và practice",
              "Nếu not perfect: Continue practice until perfect"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Master Practice",
            content: [
              "Master Vim practice",
              "Perfect automation",
              "Master efficiency",
              "Zero errors"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Master Motions",
                duration: "30 phút",
                tasks: [
                  "Practice master motions - 1000+ repetitions",
                  "Perfect text objects - 500 lần",
                  "Master f/F/t/T - 500 lần",
                  "Perfect % jumps - 300 lần",
                  "Zero errors - verify perfection",
                  "Target: Perfect execution với master speed"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Perfect Automation",
                duration: "30 phút",
                tasks: [
                  "Create perfect macros - 20 macros",
                  "Automate all repetitive tasks",
                  "Perfect macro execution - 200 operations",
                  "Combine macros effectively",
                  "Master automation",
                  "Target: 90%+ automation coverage"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Master Efficiency",
                duration: "30 phút",
                tasks: [
                  "Refactor 2000+ lines với master efficiency",
                  "Perfect execution - zero errors",
                  "Master speed - fastest possible",
                  "Use tất cả master features",
                  "Maintain code quality",
                  "Target: Master efficiency với perfection"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Zero Error Mastery",
                duration: "30 phút",
                tasks: [
                  "Complete coding task với zero errors",
                  "Use master Vim motions throughout",
                  "Maintain master speed",
                  "Perfect accuracy - verify",
                  "Handle complexity perfectly",
                  "Target: Zero errors với master speed"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review master Vim",
              "Document mastery",
              "Plan grand master"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review master Vim performance",
                  "Document master techniques",
                  "Identify grand master areas",
                  "Plan grand master practice"
                ]
              }
            ]
          },
          goals: ["Master Vim achieved"],
          learningResources: [
            { title: "Master Vim", description: "Achieving master-level Vim mastery" }
          ],
          bestPractices: [
            "Perfect execution always",
            "Perfect automation",
            "Master efficiency",
            "Zero errors guaranteed",
            "Document master techniques"
          ],
          commonMistakes: [
            "Allow any errors - master means zero errors",
            "Không automate enough",
            "Sacrifice perfection",
            "Không document techniques"
          ]
        },
        {
          day: "Thứ 4",
          title: "Master Git",
          totalHours: 4,
          motivationalQuote: "🌟 Bạn đang tạo ra sự khác biệt. Hãy tự hào về điều đó!",
          dailyGoals: [
            "✅ Master git mastery",
            "✅ Perfect workflows",
            "✅ Master automation",
            "✅ Zero mistakes"
          ],
          morning: {
            title: "Sáng (1.5h): Master Git",
            content: [
              "Master git operations",
              "Perfect workflow mastery",
              "Master automation perfection",
              "Zero mistake guarantee"
            ],
            detailedSetup: [
              "Bước 1: Achieve master git operations",
              "Bước 2: Perfect complex workflows",
              "Bước 3: Master automation - perfect execution",
              "Bước 4: Guarantee zero mistakes",
              "Bước 5: Perfect branching strategies",
              "Bước 6: Master interactive rebase",
              "Bước 7: Perfect git hooks automation",
              "Bước 8: Document master git workflows"
            ],
            concepts: [
              "Master git: Perfect execution của tất cả git operations",
              "Perfect workflows: Optimal workflows cho all scenarios",
              "Master automation: Perfect git automation",
              "Zero mistake guarantee: Perfect execution always",
              "Workflow mastery: Perfect trong all scenarios",
              "Git mastery: Instinctive perfect usage"
            ],
            troubleshooting: [
              "Nếu mistakes occur: Immediate correction và prevention",
              "Nếu workflow not perfect: Review và optimize",
              "Nếu automation fails: Perfect hooks và scripts",
              "Nếu not perfect: Continue practice until perfect"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Master Practice",
            content: [
              "Master git practice",
              "Perfect workflows",
              "Master automation",
              "Zero mistakes"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Master Operations",
                duration: "30 phút",
                tasks: [
                  "Practice master git operations - 300 operations",
                  "Perfect branching strategies - 30 scenarios",
                  "Master interactive rebase - 50 rebases",
                  "Perfect automation - 100 automated operations",
                  "Zero mistakes - verify perfection",
                  "Target: Perfect execution với master speed"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Perfect Workflows",
                duration: "30 phút",
                tasks: [
                  "Perfect complex workflows - 20 scenarios",
                  "Handle all scenarios perfectly",
                  "Maintain perfect git history",
                  "Perfect workflow execution",
                  "Master workflow consistency",
                  "Target: Perfect workflows trong all scenarios"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Master Automation",
                duration: "30 phút",
                tasks: [
                  "Perfect git hooks - 10 hooks",
                  "Perfect git aliases - 30 aliases",
                  "Automate all repetitive operations",
                  "Perfect automation execution - 200 operations",
                  "Master automation",
                  "Target: 95%+ automation coverage"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Zero Mistake Mastery",
                duration: "30 phút",
                tasks: [
                  "Complete git workflow với zero mistakes",
                  "Handle complex scenarios perfectly",
                  "Maintain perfect git history",
                  "Use automation perfectly",
                  "Verify zero mistakes",
                  "Target: Zero mistakes với master efficiency"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review master git",
              "Document mastery",
              "Plan grand master"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review master git performance",
                  "Document master workflows",
                  "Identify grand master areas",
                  "Plan grand master practice"
                ]
              }
            ]
          },
          goals: ["Master git achieved"],
          learningResources: [
            { title: "Master Git", description: "Achieving master-level git mastery" }
          ],
          bestPractices: [
            "Perfect execution always",
            "Perfect workflows",
            "Master automation",
            "Zero mistakes guaranteed",
            "Document master workflows"
          ],
          commonMistakes: [
            "Allow any mistakes - master means zero mistakes",
            "Không automate enough",
            "Ignore git history quality",
            "Không document workflows"
          ]
        },
        {
          day: "Thứ 5",
          title: "Master Complete",
          totalHours: 4,
          motivationalQuote: "🚀 Mỗi ngày là một cơ hội để bay cao hơn. Hãy nắm lấy cơ hội hôm nay!",
          dailyGoals: [
            "✅ Master complete mastery",
            "✅ Zero mouse usage",
            "✅ Master speed",
            "✅ Perfect workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Master Complete",
            content: [
              "Master complete workflow",
              "Perfect integration",
              "Master speed",
              "Zero mouse guarantee"
            ],
            detailedSetup: [
              "Bước 1: Integrate tất cả master skills",
              "Bước 2: Perfect complete workflow",
              "Bước 3: Achieve master speed trong complete workflow",
              "Bước 4: Guarantee zero mouse usage",
              "Bước 5: Perfect muscle memory cho complete workflow",
              "Bước 6: Perfect consistency",
              "Bước 7: Handle any complexity với master level",
              "Bước 8: Document master complete workflow"
            ],
            concepts: [
              "Master complete: Perfect integration của tất cả master skills",
              "Complete workflow: Tất cả tools work together perfectly",
              "Master speed: Fastest possible trong complete workflow",
              "Zero mouse: Complete workflow không touch mouse - guaranteed",
              "Perfect integration: All tools complement perfectly",
              "Workflow mastery: Perfect execution của complete workflow"
            ],
            troubleshooting: [
              "Nếu integration issues: Perfect tool interactions",
              "Nếu speed not master: Further optimization",
              "Nếu mouse usage: Immediate elimination",
              "Nếu not perfect: Continue practice until perfect"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Master Challenges",
            content: [
              "Master level challenges",
              "Complete workflow challenges",
              "Complex scenarios",
              "Perfection practice"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Master Complete Workflow",
                duration: "30 phút",
                tasks: [
                  "Practice master complete workflow - 50 cycles",
                  "Integrate tất cả master skills",
                  "Maintain master speed",
                  "Zero mouse usage guaranteed",
                  "Perfect execution",
                  "Target: Master performance trong complete workflow"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Complex Mastery",
                duration: "30 phút",
                tasks: [
                  "Handle complex scenarios với master workflow",
                  "Any complexity, any scenario",
                  "Maintain master speed trong complexity",
                  "Zero mouse usage trong complexity",
                  "Perfect execution",
                  "Target: Handle any complexity với master level"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Speed Mastery",
                duration: "30 phút",
                tasks: [
                  "Practice với master speed - 100 cycles",
                  "Perfect consistency",
                  "Zero errors",
                  "Maintain speed trong all scenarios",
                  "Build perfect muscle memory",
                  "Target: Consistent master speed"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real World Master",
                duration: "30 phút",
                tasks: [
                  "Work on real project với master workflow",
                  "Complete feature với master efficiency",
                  "Zero mouse usage guaranteed",
                  "Master speed maintained",
                  "Perfect execution",
                  "Target: Master performance trong real work"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review master complete",
              "Document mastery",
              "Plan grand master"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review master complete mastery",
                  "Document master complete workflow",
                  "Identify grand master level areas",
                  "Plan grand master practice"
                ]
              }
            ]
          },
          goals: ["Master complete mastery achieved"],
          learningResources: [
            { title: "Master Complete Workflow", description: "Achieving master-level complete workflow mastery" }
          ],
          bestPractices: [
            "Integrate tất cả master skills perfectly",
            "Perfect complete workflow",
            "Maintain master speed",
            "Zero mouse usage always guaranteed",
            "Document master complete workflow"
          ],
          commonMistakes: [
            "Không integrate skills perfectly",
            "Allow any mouse usage",
            "Sacrifice perfection cho speed",
            "Không document master workflow"
          ]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 7", {
          dailyGoals: [
            "✅ 12h master practice",
            "✅ Perfect all skills",
            "✅ Zero mouse usage",
            "✅ Master speed"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Master practice session",
              "Perfect all master skills",
              "Master workflow practice",
              "Master Vim và Git practice"
            ],
            exercises: [
              {
                title: "MASTER PRACTICE (4h)",
                duration: "4h",
                tasks: [
                  "Practice master workflow - 150 complete cycles",
                  "Practice master Vim motions - 2000+ repetitions",
                  "Practice master git operations - 300 operations",
                  "Perfect all master skills",
                  "Build perfect muscle memory",
                  "Track perfection và mastery"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Master work",
              "Real project với master level",
              "Master efficiency",
              "Zero mouse usage guaranteed"
            ],
            exercises: [
              {
                title: "MASTER WORK (4h)",
                duration: "4h",
                tasks: [
                  "Work on real project với master level",
                  "Maintain master speed throughout",
                  "Zero mouse usage guaranteed và verified",
                  "Perfect execution",
                  "Handle any complexity với master level",
                  "Document master performance"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Master refinement",
              "Grand master preparation",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "MASTER REFINEMENT (4h)",
                duration: "4h",
                tasks: [
                  "Refine master techniques",
                  "Prepare for grand master level",
                  "Document master workflows",
                  "Reflect on master achievements",
                  "Plan grand master practice"
                ]
              }
            ]
          }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Week 7", {
          dailyGoals: [
            "✅ Complete master project",
            "✅ Zero mouse usage",
            "✅ Master efficiency",
            "✅ Perfect demonstration"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Master planning",
              "Project setup",
              "Initial implementation"
            ],
            exercises: [
              {
                title: "MASTER PLANNING (4h)",
                duration: "4h",
                tasks: [
                  "Plan master-level project",
                  "Research và setup với master workflow",
                  "Initial implementation với master skills",
                  "Git workflow với master operations",
                  "Setup complete master environment"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Master implementation",
              "Master features",
              "Master testing"
            ],
            exercises: [
              {
                title: "MASTER IMPLEMENTATION (4h)",
                duration: "4h",
                tasks: [
                  "Implement với master Vim motions",
                  "Use master git operations",
                  "Apply master workflow",
                  "Maintain master speed",
                  "Zero mouse usage guaranteed",
                  "Perfect execution"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Master completion",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "MASTER COMPLETION (4h)",
                duration: "4h",
                tasks: [
                  "Complete master project",
                  "Write master documentation",
                  "Reflect on master achievements",
                  "Document master workflow",
                  "Prepare cho tuần 8"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 8,
      title: "GRAND MASTER - Week 8",
      goals: [
        "Mouse usage: 0%",
        "Phím tắt mastered: 200+",
        "Comfort level: 10/10",
        "Speed: Grand Master level"
      ],
      metrics: {
        mouseUsage: "0%",
        shortcutsLearned: 200,
        comfortLevel: "10/10"
      },
      finalProject: {
        title: "Grand Master Final Challenge Project",
        description: "Final project tổng hợp tất cả skills đã học trong 8 tuần, xây dựng một project hoàn chỉnh với grand master-level execution, perfect workflow, và zero mouse usage",
        requirements: [
          "Build complete production system",
          "Grand Master Vim motions",
          "Grand Master git workflows",
          "Ultimate automation",
          "Zero mouse usage absolute",
          "Perfect code quality"
        ],
        deliverables: [
          "Complete production system",
          "Grand Master workflow documentation",
          "Complete automation system",
          "Final reflection và achievements"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Grand Master Workflow",
          totalHours: 4,
          motivationalQuote: "💪 Bạn mạnh mẽ hơn bạn nghĩ. Hãy tiếp tục chứng minh điều đó!",
          dailyGoals: [
            "✅ Grand Master level workflow",
            "✅ Zero mouse usage",
            "✅ Grand Master speed",
            "✅ Perfect execution"
          ],
          morning: {
            title: "Sáng (1.5h): Grand Master Practice",
            content: [
              "Grand Master level workflow practice",
              "Ultimate perfection",
              "Zero mouse guarantee",
              "Grand Master speed"
            ],
            detailedSetup: [
              "Bước 1: Achieve grand master-level workflow performance",
              "Bước 2: Ultimate perfection của tất cả operations",
              "Bước 3: Guarantee zero mouse usage - absolute",
              "Bước 4: Achieve grand master speed - ultimate",
              "Bước 5: Perfect muscle memory - automatic perfection",
              "Bước 6: Grand master consistency - perfect always",
              "Bước 7: Handle any complexity với grand master level",
              "Bước 8: Document grand master workflow"
            ],
            concepts: [
              "Grand Master workflow: Ultimate perfection với maximum efficiency",
              "Zero mouse absolute: Guaranteed zero mouse usage always",
              "Grand Master speed: Ultimate fastest execution",
              "Perfect execution: Zero errors với ultimate speed",
              "Muscle memory grand master: Automatic perfect execution always",
              "Workflow grand mastery: Perfect trong all scenarios always"
            ],
            troubleshooting: [
              "Nếu mouse usage detected: Immediate absolute elimination",
              "Nếu speed not grand master: Ultimate optimization",
              "Nếu execution not perfect: Focus on ultimate perfection",
              "Nếu inconsistency: Practice until grand master consistency"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Grand Master Challenges",
            content: [
              "Grand Master level challenges",
              "Ultimate perfection challenges",
              "Grand Master speed challenges",
              "Ultimate complexity mastery"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Grand Master Workflow Challenge",
                duration: "30 phút",
                tasks: [
                  "Complete workflow challenge - 100 lần",
                  "Target: < 45s mỗi cycle",
                  "Zero mouse usage - absolute guarantee",
                  "Perfect execution - zero errors always",
                  "Grand Master speed - ultimate fastest",
                  "Timed challenge: 30 cycles < 25 phút"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Ultimate Perfection",
                duration: "30 phút",
                tasks: [
                  "Practice ultimate perfection - 200 operations",
                  "Zero errors absolute guarantee",
                  "Grand Master speed maintained",
                  "Perfect consistency always",
                  "Handle ultimate complexity perfectly",
                  "Target: Ultimate perfection trong all scenarios"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Grand Master Speed",
                duration: "30 phút",
                tasks: [
                  "Practice với grand master speed - 200 cycles",
                  "Ultimate fastest execution",
                  "Perfect consistency always",
                  "Zero errors always",
                  "Maintain speed trong ultimate complexity",
                  "Target: Grand Master speed với ultimate perfection"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real World Grand Master",
                duration: "30 phút",
                tasks: [
                  "Work on real project với grand master workflow",
                  "Complete feature với grand master efficiency",
                  "Zero mouse usage absolute guarantee",
                  "Grand Master speed maintained",
                  "Perfect execution always",
                  "Target: Grand Master performance trong real work"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review grand master level",
              "Document grand mastery",
              "Plan final challenge"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review grand master workflow performance",
                  "Document grand master-level achievements",
                  "Identify final challenge preparation",
                  "Plan final 8h challenge"
                ]
              }
            ]
          },
          goals: ["Grand Master level achieved"],
          learningResources: [
            { title: "Grand Master Workflow", description: "Achieving grand master-level workflow mastery" }
          ],
          bestPractices: [
            "Ultimate perfection always",
            "Absolute zero mouse usage",
            "Grand Master speed",
            "Perfect trong all scenarios always",
            "Document grand master workflow"
          ],
          commonMistakes: [
            "Allow any mouse usage - grand master means absolute zero",
            "Sacrifice perfection cho speed",
            "Không maintain grand master consistency",
            "Ignore ultimate complexity - grand master handles all"
          ]
        },
        {
          day: "Thứ 3",
          title: "Grand Master Vim",
          totalHours: 4,
          motivationalQuote: "✨ Tuần cuối cùng! Bạn đã đi được một chặng đường dài. Hãy hoàn thành thật xuất sắc!",
          dailyGoals: [
            "✅ Grand Master Vim mastery",
            "✅ Perfect automation",
            "✅ Grand Master efficiency",
            "✅ Zero errors"
          ],
          morning: {
            title: "Sáng (1.5h): Grand Master Vim",
            content: [
              "Grand Master Vim motions mastery",
              "Ultimate automation perfection",
              "Grand Master efficiency ultimate",
              "Zero error absolute guarantee"
            ],
            detailedSetup: [
              "Bước 1: Achieve grand master Vim motions",
              "Bước 2: Ultimate automation với macros",
              "Bước 3: Grand Master efficiency - ultimate fastest",
              "Bước 4: Absolute zero error guarantee",
              "Bước 5: Ultimate text object mastery",
              "Bước 6: Grand Master visual mode operations",
              "Bước 7: Ultimate macro mastery",
              "Bước 8: Document grand master Vim techniques"
            ],
            concepts: [
              "Grand Master Vim: Ultimate perfection của tất cả Vim features",
              "Ultimate automation: Macros cho all tasks perfectly",
              "Grand Master efficiency: Ultimate fastest với zero errors",
              "Zero error absolute: Perfect execution always guaranteed",
              "Text object grand mastery: Instinctive perfect usage always",
              "Macro grand mastery: Ultimate perfect automation"
            ],
            troubleshooting: [
              "Nếu errors occur: Immediate absolute correction",
              "Nếu automation fails: Ultimate macro perfection",
              "Nếu efficiency drops: Ultimate optimization",
              "Nếu not perfect: Continue until grand master perfection"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Grand Master Practice",
            content: [
              "Grand Master Vim practice",
              "Ultimate automation",
              "Grand Master efficiency",
              "Zero errors absolute"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Grand Master Motions",
                duration: "30 phút",
                tasks: [
                  "Practice grand master motions - 2000+ repetitions",
                  "Ultimate text objects - 1000 lần",
                  "Grand Master f/F/t/T - 1000 lần",
                  "Ultimate % jumps - 500 lần",
                  "Zero errors absolute - verify perfection",
                  "Target: Ultimate perfection với grand master speed"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Ultimate Automation",
                duration: "30 phút",
                tasks: [
                  "Create ultimate macros - 30 macros",
                  "Automate all tasks perfectly",
                  "Ultimate macro execution - 500 operations",
                  "Combine macros perfectly",
                  "Grand Master automation",
                  "Target: 100% automation coverage"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Grand Master Efficiency",
                duration: "30 phút",
                tasks: [
                  "Refactor 3000+ lines với grand master efficiency",
                  "Perfect execution - zero errors absolute",
                  "Grand Master speed - ultimate fastest",
                  "Use tất cả grand master features",
                  "Maintain code quality",
                  "Target: Grand Master efficiency với ultimate perfection"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Zero Error Grand Mastery",
                duration: "30 phút",
                tasks: [
                  "Complete coding task với zero errors absolute",
                  "Use grand master Vim motions throughout",
                  "Maintain grand master speed",
                  "Perfect accuracy absolute - verify",
                  "Handle ultimate complexity perfectly",
                  "Target: Zero errors absolute với grand master speed"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review grand master Vim",
              "Document grand mastery",
              "Plan final challenge"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review grand master Vim performance",
                  "Document grand master techniques",
                  "Identify final challenge preparation",
                  "Plan final 8h challenge"
                ]
              }
            ]
          },
          goals: ["Grand Master Vim achieved"],
          learningResources: [
            { title: "Grand Master Vim", description: "Achieving grand master-level Vim mastery" }
          ],
          bestPractices: [
            "Ultimate perfection always",
            "Ultimate automation",
            "Grand Master efficiency",
            "Zero errors absolute guaranteed",
            "Document grand master techniques"
          ],
          commonMistakes: [
            "Allow any errors - grand master means absolute zero",
            "Không automate enough - automate everything",
            "Sacrifice perfection",
            "Không document grand master techniques"
          ]
        },
        {
          day: "Thứ 4",
          title: "Grand Master Git",
          totalHours: 4,
          motivationalQuote: "🎯 Bạn sắp hoàn thành 8 tuần học tập. Gia đình bạn sẽ tự hào về bạn!",
          dailyGoals: [
            "✅ Grand Master git mastery",
            "✅ Perfect workflows",
            "✅ Grand Master automation",
            "✅ Zero mistakes"
          ],
          morning: {
            title: "Sáng (1.5h): Grand Master Git",
            content: [
              "Grand Master git operations",
              "Ultimate workflow perfection",
              "Grand Master automation ultimate",
              "Zero mistake absolute guarantee"
            ],
            detailedSetup: [
              "Bước 1: Achieve grand master git operations",
              "Bước 2: Ultimate perfect workflows",
              "Bước 3: Grand Master automation - ultimate perfection",
              "Bước 4: Absolute zero mistake guarantee",
              "Bước 5: Ultimate branching strategies",
              "Bước 6: Grand Master interactive rebase",
              "Bước 7: Ultimate git hooks automation",
              "Bước 8: Document grand master git workflows"
            ],
            concepts: [
              "Grand Master git: Ultimate perfection của tất cả git operations",
              "Ultimate workflows: Perfect workflows cho all scenarios always",
              "Grand Master automation: Ultimate perfect git automation",
              "Zero mistake absolute: Perfect execution always guaranteed",
              "Workflow grand mastery: Perfect trong all scenarios always",
              "Git grand mastery: Instinctive perfect usage always"
            ],
            troubleshooting: [
              "Nếu mistakes occur: Immediate absolute correction",
              "Nếu workflow not perfect: Ultimate optimization",
              "Nếu automation fails: Ultimate hooks và scripts perfection",
              "Nếu not perfect: Continue until grand master perfection"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Grand Master Practice",
            content: [
              "Grand Master git practice",
              "Ultimate workflows",
              "Grand Master automation",
              "Zero mistakes absolute"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Grand Master Operations",
                duration: "30 phút",
                tasks: [
                  "Practice grand master git operations - 500 operations",
                  "Ultimate branching strategies - 50 scenarios",
                  "Grand Master interactive rebase - 100 rebases",
                  "Ultimate automation - 200 automated operations",
                  "Zero mistakes absolute - verify perfection",
                  "Target: Ultimate perfection với grand master speed"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Ultimate Workflows",
                duration: "30 phút",
                tasks: [
                  "Perfect ultimate workflows - 30 scenarios",
                  "Handle all scenarios perfectly always",
                  "Maintain perfect git history always",
                  "Ultimate workflow execution",
                  "Grand Master workflow consistency",
                  "Target: Ultimate workflows trong all scenarios"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Grand Master Automation",
                duration: "30 phút",
                tasks: [
                  "Ultimate git hooks - 15 hooks",
                  "Ultimate git aliases - 50 aliases",
                  "Automate all operations perfectly",
                  "Ultimate automation execution - 500 operations",
                  "Grand Master automation",
                  "Target: 100% automation coverage"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Zero Mistake Grand Mastery",
                duration: "30 phút",
                tasks: [
                  "Complete git workflow với zero mistakes absolute",
                  "Handle ultimate scenarios perfectly",
                  "Maintain perfect git history always",
                  "Use automation perfectly",
                  "Verify zero mistakes absolute",
                  "Target: Zero mistakes absolute với grand master efficiency"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review grand master git",
              "Document grand mastery",
              "Plan final challenge"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review grand master git performance",
                  "Document grand master workflows",
                  "Identify final challenge preparation",
                  "Plan final 8h challenge"
                ]
              }
            ]
          },
          goals: ["Grand Master git achieved"],
          learningResources: [
            { title: "Grand Master Git", description: "Achieving grand master-level git mastery" }
          ],
          bestPractices: [
            "Ultimate perfection always",
            "Ultimate workflows",
            "Grand Master automation",
            "Zero mistakes absolute guaranteed",
            "Document grand master workflows"
          ],
          commonMistakes: [
            "Allow any mistakes - grand master means absolute zero",
            "Không automate enough - automate everything",
            "Ignore git history quality",
            "Không document grand master workflows"
          ]
        },
        {
          day: "Thứ 5",
          title: "Grand Master Complete",
          totalHours: 4,
          motivationalQuote: "🏆 Bạn đã gần đến đích! Hãy tiếp tục và hoàn thành thật xuất sắc!",
          dailyGoals: [
            "✅ Grand Master complete mastery",
            "✅ Zero mouse usage",
            "✅ Grand Master speed",
            "✅ Perfect workflow"
          ],
          morning: {
            title: "Sáng (1.5h): Grand Master Complete",
            content: [
              "Grand Master complete workflow",
              "Ultimate integration",
              "Grand Master speed",
              "Zero mouse absolute"
            ],
            detailedSetup: [
              "Bước 1: Integrate tất cả grand master skills",
              "Bước 2: Ultimate perfect complete workflow",
              "Bước 3: Achieve grand master speed trong complete workflow",
              "Bước 4: Absolute zero mouse usage guarantee",
              "Bước 5: Ultimate muscle memory cho complete workflow",
              "Bước 6: Grand master consistency always",
              "Bước 7: Handle ultimate complexity với grand master level",
              "Bước 8: Document grand master complete workflow"
            ],
            concepts: [
              "Grand Master complete: Ultimate perfect integration của tất cả skills",
              "Complete workflow: Tất cả tools work together perfectly always",
              "Grand Master speed: Ultimate fastest trong complete workflow",
              "Zero mouse absolute: Complete workflow không touch mouse - absolute",
              "Ultimate integration: All tools complement perfectly always",
              "Workflow grand mastery: Perfect execution của complete workflow always"
            ],
            troubleshooting: [
              "Nếu integration issues: Ultimate perfect tool interactions",
              "Nếu speed not grand master: Ultimate optimization",
              "Nếu mouse usage: Immediate absolute elimination",
              "Nếu not perfect: Continue until grand master perfection"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Grand Master Challenges",
            content: [
              "Grand Master level challenges",
              "Complete workflow challenges",
              "Ultimate scenarios",
              "Perfection practice"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (30 phút): Grand Master Complete Workflow",
                duration: "30 phút",
                tasks: [
                  "Practice grand master complete workflow - 100 cycles",
                  "Integrate tất cả grand master skills",
                  "Maintain grand master speed",
                  "Zero mouse usage absolute guarantee",
                  "Perfect execution always",
                  "Target: Grand Master performance trong complete workflow"
                ]
              },
              {
                title: "BÀI TẬP 2 (30 phút): Ultimate Scenarios",
                duration: "30 phút",
                tasks: [
                  "Handle ultimate scenarios với grand master workflow",
                  "Any complexity, any scenario, any challenge",
                  "Maintain grand master speed trong ultimate complexity",
                  "Zero mouse usage trong ultimate scenarios",
                  "Perfect execution always",
                  "Target: Handle ultimate scenarios với grand master level"
                ]
              },
              {
                title: "BÀI TẬP 3 (30 phút): Speed Grand Mastery",
                duration: "30 phút",
                tasks: [
                  "Practice với grand master speed - 200 cycles",
                  "Ultimate consistency always",
                  "Zero errors always",
                  "Maintain speed trong ultimate scenarios",
                  "Build ultimate muscle memory",
                  "Target: Consistent grand master speed always"
                ]
              },
              {
                title: "BÀI TẬP 4 (30 phút): Real World Grand Master",
                duration: "30 phút",
                tasks: [
                  "Work on real project với grand master workflow",
                  "Complete feature với grand master efficiency",
                  "Zero mouse usage absolute guarantee",
                  "Grand Master speed maintained",
                  "Perfect execution always",
                  "Target: Grand Master performance trong real work"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review grand master complete",
              "Document grand mastery",
              "Plan final challenge"
            ],
            exercises: [
              {
                title: "REVIEW",
                tasks: [
                  "Review grand master complete mastery",
                  "Document grand master complete workflow",
                  "Final challenge preparation",
                  "Plan final 8h coding marathon"
                ]
              }
            ]
          },
          goals: ["Grand Master complete mastery achieved"],
          learningResources: [
            { title: "Grand Master Complete Workflow", description: "Achieving grand master-level complete workflow mastery" }
          ],
          bestPractices: [
            "Integrate tất cả grand master skills perfectly always",
            "Ultimate perfect complete workflow",
            "Maintain grand master speed",
            "Zero mouse usage absolute always guaranteed",
            "Document grand master complete workflow"
          ],
          commonMistakes: [
            "Không integrate skills perfectly",
            "Allow any mouse usage",
            "Sacrifice perfection cho speed",
            "Không document grand master workflow"
          ]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 8", {
          dailyGoals: [
            "✅ 12h Grand Master practice",
            "✅ Perfect all skills",
            "✅ Zero mouse usage",
            "✅ Grand Master speed"
          ],
          morning: {
            title: "Sáng (4h)",
            content: [
              "Grand Master practice session",
              "Perfect all grand master skills",
              "Grand Master workflow practice",
              "Grand Master Vim và Git practice"
            ],
            exercises: [
              {
                title: "GRAND MASTER PRACTICE (4h)",
                duration: "4h",
                tasks: [
                  "Practice grand master workflow - 200 complete cycles",
                  "Practice grand master Vim motions - 3000+ repetitions",
                  "Practice grand master git operations - 400 operations",
                  "Perfect all grand master skills",
                  "Build ultimate muscle memory",
                  "Track perfection và grand mastery"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h)",
            content: [
              "Grand Master work",
              "Real project với grand master level",
              "Grand Master efficiency",
              "Zero mouse usage absolute"
            ],
            exercises: [
              {
                title: "GRAND MASTER WORK (4h)",
                duration: "4h",
                tasks: [
                  "Work on real project với grand master level",
                  "Maintain grand master speed throughout",
                  "Zero mouse usage absolute guarantee và verified",
                  "Perfect execution always",
                  "Handle ultimate complexity với grand master level",
                  "Document grand master performance"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h)",
            content: [
              "Grand Master refinement",
              "Final challenge preparation",
              "Documentation",
              "Reflection"
            ],
            exercises: [
              {
                title: "GRAND MASTER REFINEMENT (4h)",
                duration: "4h",
                tasks: [
                  "Refine grand master techniques",
                  "Prepare for final 8h challenge",
                  "Document grand master workflows",
                  "Reflect on grand master achievements",
                  "Plan final challenge strategy"
                ]
              }
            ]
          }
        }),
        createWeekendDay("Chủ nhật", "FINAL CHALLENGE - 8h Coding Marathon", {
          dailyGoals: [
            "✅ Complete 8h coding marathon",
            "✅ Mouse usage 0%",
            "✅ Build complete feature từ đầu",
            "✅ Maintain flow state"
          ],
          morning: {
            title: "Sáng (4h): Planning & Implementation",
            content: [
              "Planning & research",
              "Setup project structure",
              "Implement feature",
              "Git workflow"
            ],
            exercises: [
              {
                title: "PHASE 1-2: Planning & Implementation (4h)",
                duration: "4h",
                tasks: [
                  "Research requirements, plan architecture, setup project",
                  "Code feature với tất cả tools, use tất cả shortcuts",
                  "Git workflow throughout"
                ]
              }
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
                title: "PHASE 3-4: Completion & Polish (4h)",
                duration: "4h",
                tasks: [
                  "Finish implementation, testing comprehensive",
                  "Code review preparation, write documentation",
                  "Final git workflow, reflection và notes"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Celebration & Reflection",
            content: [
              "Celebrate achievement",
              "Final reflection",
              "Document mastery",
              "Plan future improvements"
            ],
            exercises: [
              {
                title: "CELEBRATION & REFLECTION (4h)",
                duration: "4h",
                tasks: [
                  "Celebrate 8 weeks of mastery",
                  "Reflect on journey",
                  "Document achievements",
                  "Plan future improvements",
                  "Share knowledge với others"
                ]
              }
            ]
          },
          goals: [
            "Complete feature từ đầu đến cuối",
            "Mouse usage 0%",
            "Flow state maintained",
            "Fast như hoặc nhanh hơn previous workflow"
          ]
        })
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

