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
      days: [
        {
          day: "Thứ 2",
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
        "fzf thành reflex tự nhiên"
      ],
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
      days: [
        {
          day: "Thứ 2",
          title: "Moonlander Keyboard - Setup",
          totalHours: 4,
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
      days: [
        {
          day: "Thứ 2",
          title: "Speed Optimization",
          totalHours: 4,
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
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Advanced",
            content: [
              "Practice advanced motions",
              "Complex refactoring tasks",
              "Macro automation",
              "Plugin workflows"
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review advanced features",
              "Document techniques",
              "Plan practice"
            ]
          },
          goals: ["Advanced Vim mastery achieved"]
        },
        {
          day: "Thứ 4",
          title: "Advanced Git Mastery",
          totalHours: 4,
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
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Advanced",
            content: [
              "Practice advanced git workflows",
              "Complex branching scenarios",
              "Advanced rebase operations",
              "Git automation scripts"
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review advanced git",
              "Document workflows",
              "Plan improvements"
            ]
          },
          goals: ["Advanced git mastery achieved"]
        },
        {
          day: "Thứ 5",
          title: "Complete Workflow Mastery",
          totalHours: 4,
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
            ]
          },
          afternoon: {
            title: "Chiều (2h): Real World Mastery",
            content: [
              "Real project work",
              "Complete workflow execution",
              "Zero mouse challenge",
              "Speed optimization"
            ]
          },
          evening: {
            title: "Tối (30 phút): Review",
            content: [
              "Review mastery level",
              "Document achievements",
              "Plan maintenance"
            ]
          },
          goals: ["Complete workflow mastery achieved"]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 5", {
          dailyGoals: [
            "✅ 12h advanced practice",
            "✅ Master all advanced features",
            "✅ Zero mouse usage",
            "✅ Maximum speed"
          ],
          morning: { title: "Sáng (4h)", content: ["Advanced practice session"] },
          afternoon: { title: "Chiều (4h)", content: ["Real project work"] },
          evening: { title: "Tối (4h)", content: ["Mastery refinement"] }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Week 5", {
          dailyGoals: [
            "✅ Complete advanced project",
            "✅ Zero mouse usage",
            "✅ Maximum efficiency",
            "✅ Mastery demonstration"
          ],
          morning: { title: "Sáng (4h)", content: ["Project planning"] },
          afternoon: { title: "Chiều (4h)", content: ["Implementation"] },
          evening: { title: "Tối (4h)", content: ["Completion & reflection"] }
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
      days: [
        {
          day: "Thứ 2",
          title: "Expert Workflow",
          totalHours: 4,
          dailyGoals: [
            "✅ Expert level workflow",
            "✅ Zero mouse usage",
            "✅ Expert speed",
            "✅ Perfect muscle memory"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Expert practice"] },
          afternoon: { title: "Chiều (2h)", content: ["Expert challenges"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Expert level achieved"]
        },
        {
          day: "Thứ 3",
          title: "Expert Vim",
          totalHours: 4,
          dailyGoals: [
            "✅ Expert Vim mastery",
            "✅ Complex automation",
            "✅ Perfect efficiency",
            "✅ Zero errors"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Expert Vim"] },
          afternoon: { title: "Chiều (2h)", content: ["Expert practice"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Expert Vim achieved"]
        },
        {
          day: "Thứ 4",
          title: "Expert Git",
          totalHours: 4,
          dailyGoals: [
            "✅ Expert git mastery",
            "✅ Complex workflows",
            "✅ Perfect automation",
            "✅ Zero mistakes"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Expert git"] },
          afternoon: { title: "Chiều (2h)", content: ["Expert practice"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Expert git achieved"]
        },
        {
          day: "Thứ 5",
          title: "Expert Complete",
          totalHours: 4,
          dailyGoals: [
            "✅ Expert complete mastery",
            "✅ Zero mouse usage",
            "✅ Expert speed",
            "✅ Perfect workflow"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Expert complete"] },
          afternoon: { title: "Chiều (2h)", content: ["Expert challenges"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Expert complete mastery achieved"]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 6", {
          dailyGoals: [
            "✅ 12h expert practice",
            "✅ Perfect all skills",
            "✅ Zero mouse usage",
            "✅ Expert speed"
          ],
          morning: { title: "Sáng (4h)", content: ["Expert practice"] },
          afternoon: { title: "Chiều (4h)", content: ["Expert work"] },
          evening: { title: "Tối (4h)", content: ["Expert refinement"] }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Week 6", {
          dailyGoals: [
            "✅ Complete expert project",
            "✅ Zero mouse usage",
            "✅ Expert efficiency",
            "✅ Perfect demonstration"
          ],
          morning: { title: "Sáng (4h)", content: ["Expert planning"] },
          afternoon: { title: "Chiều (4h)", content: ["Expert implementation"] },
          evening: { title: "Tối (4h)", content: ["Expert completion"] }
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
      days: [
        {
          day: "Thứ 2",
          title: "Master Workflow",
          totalHours: 4,
          dailyGoals: [
            "✅ Master level workflow",
            "✅ Zero mouse usage",
            "✅ Master speed",
            "✅ Perfect execution"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Master practice"] },
          afternoon: { title: "Chiều (2h)", content: ["Master challenges"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Master level achieved"]
        },
        {
          day: "Thứ 3",
          title: "Master Vim",
          totalHours: 4,
          dailyGoals: [
            "✅ Master Vim mastery",
            "✅ Perfect automation",
            "✅ Master efficiency",
            "✅ Zero errors"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Master Vim"] },
          afternoon: { title: "Chiều (2h)", content: ["Master practice"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Master Vim achieved"]
        },
        {
          day: "Thứ 4",
          title: "Master Git",
          totalHours: 4,
          dailyGoals: [
            "✅ Master git mastery",
            "✅ Perfect workflows",
            "✅ Master automation",
            "✅ Zero mistakes"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Master git"] },
          afternoon: { title: "Chiều (2h)", content: ["Master practice"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Master git achieved"]
        },
        {
          day: "Thứ 5",
          title: "Master Complete",
          totalHours: 4,
          dailyGoals: [
            "✅ Master complete mastery",
            "✅ Zero mouse usage",
            "✅ Master speed",
            "✅ Perfect workflow"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Master complete"] },
          afternoon: { title: "Chiều (2h)", content: ["Master challenges"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Master complete mastery achieved"]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 7", {
          dailyGoals: [
            "✅ 12h master practice",
            "✅ Perfect all skills",
            "✅ Zero mouse usage",
            "✅ Master speed"
          ],
          morning: { title: "Sáng (4h)", content: ["Master practice"] },
          afternoon: { title: "Chiều (4h)", content: ["Master work"] },
          evening: { title: "Tối (4h)", content: ["Master refinement"] }
        }),
        createWeekendDay("Chủ nhật", "Weekend Challenge - Week 7", {
          dailyGoals: [
            "✅ Complete master project",
            "✅ Zero mouse usage",
            "✅ Master efficiency",
            "✅ Perfect demonstration"
          ],
          morning: { title: "Sáng (4h)", content: ["Master planning"] },
          afternoon: { title: "Chiều (4h)", content: ["Master implementation"] },
          evening: { title: "Tối (4h)", content: ["Master completion"] }
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
      days: [
        {
          day: "Thứ 2",
          title: "Grand Master Workflow",
          totalHours: 4,
          dailyGoals: [
            "✅ Grand Master level workflow",
            "✅ Zero mouse usage",
            "✅ Grand Master speed",
            "✅ Perfect execution"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Grand Master practice"] },
          afternoon: { title: "Chiều (2h)", content: ["Grand Master challenges"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Grand Master level achieved"]
        },
        {
          day: "Thứ 3",
          title: "Grand Master Vim",
          totalHours: 4,
          dailyGoals: [
            "✅ Grand Master Vim mastery",
            "✅ Perfect automation",
            "✅ Grand Master efficiency",
            "✅ Zero errors"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Grand Master Vim"] },
          afternoon: { title: "Chiều (2h)", content: ["Grand Master practice"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Grand Master Vim achieved"]
        },
        {
          day: "Thứ 4",
          title: "Grand Master Git",
          totalHours: 4,
          dailyGoals: [
            "✅ Grand Master git mastery",
            "✅ Perfect workflows",
            "✅ Grand Master automation",
            "✅ Zero mistakes"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Grand Master git"] },
          afternoon: { title: "Chiều (2h)", content: ["Grand Master practice"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Grand Master git achieved"]
        },
        {
          day: "Thứ 5",
          title: "Grand Master Complete",
          totalHours: 4,
          dailyGoals: [
            "✅ Grand Master complete mastery",
            "✅ Zero mouse usage",
            "✅ Grand Master speed",
            "✅ Perfect workflow"
          ],
          morning: { title: "Sáng (1.5h)", content: ["Grand Master complete"] },
          afternoon: { title: "Chiều (2h)", content: ["Grand Master challenges"] },
          evening: { title: "Tối (30 phút)", content: ["Review"] },
          goals: ["Grand Master complete mastery achieved"]
        },
        createWeekendDay("Thứ 7", "Weekend Practice - Week 8", {
          dailyGoals: [
            "✅ 12h Grand Master practice",
            "✅ Perfect all skills",
            "✅ Zero mouse usage",
            "✅ Grand Master speed"
          ],
          morning: { title: "Sáng (4h)", content: ["Grand Master practice"] },
          afternoon: { title: "Chiều (4h)", content: ["Grand Master work"] },
          evening: { title: "Tối (4h)", content: ["Grand Master refinement"] }
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

