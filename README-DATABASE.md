# Database Setup - Vercel Redis

Ứng dụng sử dụng **Vercel Redis** để lưu trữ progress học tập.

## 🚀 Setup Vercel Redis

### Bước 1: Tạo Redis Database

1. Vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào tab **Storage** → **Marketplace**
4. Chọn **Redis** (hoặc tìm "Redis" trong Marketplace)
5. Click **Create**
6. Chọn plan (Free: 30MB)
7. Click **Create**

### Bước 2: Lấy REDIS_URL

Sau khi tạo Redis database, bạn sẽ có:
- `REDIS_URL` - Connection string duy nhất

### Bước 3: Thêm Environment Variables

#### Trên Vercel:
1. Vào project settings
2. Vào **Environment Variables**
3. `REDIS_URL` sẽ được tự động thêm vào (hoặc copy từ Redis dashboard)

#### Local Development:
1. Copy `.env.example` thành `.env.local`
2. Thêm `REDIS_URL` từ Vercel Redis dashboard

```bash
cp .env.example .env.local
```

Sau đó edit `.env.local` và thêm:
```
REDIS_URL=redis://username:password@host:port
```

**Lưu ý:** `REDIS_URL` sẽ được mask với `**********` trong dashboard, nhưng bạn có thể copy giá trị thực.

### Bước 4: Install Dependencies

```bash
yarn install
# hoặc
npm install
```

Package `ioredis` đã được thêm vào dependencies.

## 📊 Cấu trúc Data

Progress được lưu với key format: `progress:{userId}`

```typescript
{
  userId: "user-123",
  progress: {
    "1-Thứ 2": {
      week: 1,
      day: "Thứ 2",
      completed: true,
      completedTasks: ["task1", "task2"],
      notes: "Đã hoàn thành",
      lastUpdated: "2024-01-01T00:00:00.000Z"
    },
    "1-Thứ 3": { ... }
  },
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

## 🔄 Sync Behavior

- **Local-first**: Progress được lưu vào localStorage trước
- **Auto-sync**: Tự động sync với server mỗi 30 giây
- **Debounced save**: Chờ 2 giây sau khi có thay đổi mới sync
- **Offline support**: Vẫn hoạt động khi offline, sync khi online lại

## 🎯 Free Tier Limits

Vercel Redis Free Tier:
- **30MB** storage
- **Unlimited** commands (reasonable use)
- **Fast** performance

Đủ cho nhiều users tracking progress!

## 🔧 API Endpoints

### GET `/api/progress`
Lấy progress của user

### POST `/api/progress`
Lưu progress của một ngày

### PUT `/api/progress`
Lưu tất cả progress (batch update)

### DELETE `/api/progress`
Xóa progress của user

## 🐛 Troubleshooting

### Error: "Failed to connect to KV"
- Kiểm tra environment variables đã được set chưa
- Kiểm tra KV database đã được tạo trên Vercel chưa
- Kiểm tra network connection

### Progress không sync
- Kiểm tra console logs
- Kiểm tra `syncError` trong hook
- Thử manual sync bằng `syncWithServer(true)`

## 📝 Notes

- User ID được tự động generate và lưu trong localStorage
- Mỗi user có progress riêng biệt
- Progress được merge giữa local và server (server priority)
- Có thể extend để support authentication sau

