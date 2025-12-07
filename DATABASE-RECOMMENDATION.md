# 🗄️ Database Recommendation

Dựa trên hình ảnh Vercel Dashboard, đây là các options và recommendation:

## 🎯 **RECOMMENDED: Upstash Redis** ⭐

**Tại sao chọn Upstash:**
- ✅ **Serverless Redis** - Perfect cho progress tracking
- ✅ **Free tier tốt**: 10K commands/day, 256MB storage
- ✅ **Dễ setup** qua Vercel Marketplace
- ✅ **Tương tự Vercel KV** nhưng có nhiều features hơn
- ✅ **Global replication** - Fast worldwide
- ✅ **REST API** - Dễ integrate

**Setup:**
1. Vào Vercel Dashboard → Storage → Marketplace
2. Chọn **Upstash**
3. Click **Create**
4. Chọn **Redis** option
5. Copy credentials

## 📊 So sánh các options:

### 1. **Upstash Redis** ⭐ (RECOMMENDED)
- Type: Serverless Redis
- Free tier: 10K commands/day, 256MB
- Best for: Progress tracking, caching
- Setup: Qua Marketplace

### 2. **Neon** (Postgres)
- Type: Serverless Postgres
- Free tier: 0.5GB storage
- Best for: Complex queries, relationships
- Setup: Qua Marketplace

### 3. **Supabase** (Postgres)
- Type: Postgres backend
- Free tier: 500MB database
- Best for: Full-featured backend
- Setup: Qua Marketplace

### 4. **Redis** (Serverless Redis)
- Type: Serverless Redis
- Free tier: Limited
- Best for: Simple Redis needs
- Setup: Qua Marketplace

## 🔧 Migration từ Vercel KV sang Upstash

Nếu chọn Upstash, chỉ cần update:

1. **Install package:**
```bash
yarn add @upstash/redis
```

2. **Update `lib/kv.ts`:**
```typescript
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Thay `kv.get` → `redis.get`
// Thay `kv.set` → `redis.set`
// Thay `kv.del` → `redis.del`
```

3. **Environment variables:**
```
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

## 💡 Recommendation

**Chọn Upstash Redis** vì:
- Perfect cho use case progress tracking
- Free tier đủ dùng
- Dễ migrate từ Vercel KV
- Có nhiều features hơn (queues, vector, search)

