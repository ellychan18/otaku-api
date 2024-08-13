# Otaku API

Otaku API adalah API yang menyediakan data Anime, Donghua, Manga, Manhwa, dan Manhua bahasa Indonesia.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FandyAhmadAzizi/otaku-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd otaku-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:3000`.

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFandyAhmadAzizi%2Fotaku-api)

## Anime Endpoints

### Ongoing

- **Parameters**:
  - `page` (optional, default: `1`)
  - `order_by` (optional, default: `updated`)

- Example:
```
https://otaku.fandi.us.kg/api/anime/ongoing
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "episode": "...",
            "id": "...",
            "type": [
                "...",
                "..."
            ]
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```

### Finished

- **Parameters**:
  - `page` (optional, default: `1`)
  - `order_by` (optional, default: `updated`)

- Example:
```
https://otaku.fandi.us.kg/api/anime/finished
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "score": "...",
            "id": "...",
            "type": [
                "...",
                "..."
            ]
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```

### Movies

- **Parameters**:
  - `page` (optional, default: `1`)
  - `order_by` (optional, default: `updated`)

- Example:
```
https://otaku.fandi.us.kg/anime/movie
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "score": "...",
            "id": "...",
            "type": [
                "...",
                "..."
            ]
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```

### Search

- **Parameters**:
  - `query` (required)
  - `page` (optional, default: `1`)
  - `order_by` (optional, default: `updated`)

- Example:
```
https://otaku.fandi.us.kg/api/anime/search?query=one%20piece
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "score": "...",
            "id": "...",
            "type": [
                "...",
                "..."
            ]
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```

### Details

- **Parameters**:
  - `anime_code` (required)
  - `id` (required)

- Example:
```
https://otaku.fandi.us.kg/api/anime/50/one-piece
```

- Response:
```
{
    "title": "...",
    "alternativeTitle": "...",
    "image": "...",
    "synopsis": "...",
    "type": "...",
    "totalEpisodes": "...",
    "status": "...",
    "release": "...",
    "season": "...",
    "duration": "...",
    "quality": "...",
    "country": "...",
    "adaptation": "...",
    "genres": [
        "...",
        "..."
    ],
    "eksplisit": "...",
    "demographic": "...",
    "theme": "...",
    "studio": "...",
    "score": "...",
    "enthusiast": "...",
    "ratings": "...",
    "credit": "...",
    "episodeList": [
        {
            "id": "...",
            "episode": "..."
        }
    ]
}
```

### Episode

- **Parameters**:
  - `anime_code` (required)
  - `id` (required)
  - `episode_number` (required)

- Example:
```
https://otaku.fandi.us.kg/api/anime/50/one-piece/episode/1115
```

- Response:
```
{
    "title": "...",
    "id": "...",
    "prevEpisode": "...",
    "nextEpisode": "...",
    "videoList": [
        {
            "url": "...",
            "type": "...",
            "size": "..."
        }
    ]
}
```

## Komik Endpoints

### Manga

- **Parameters**:
  - `page` (optional, default: `1`)
  - `order` (optional, default: `update`)

- Example:
```
https://otaku.fandi.us.kg/api/komik/manga
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "chapter": "...",
            "score": "...",
            "type": "...",
            "id": "..."
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```

### Manhwa

- **Parameters**:
  - `page` (optional, default: `1`)
  - `order` (optional, default: `update`)

- Example:
```
https://otaku.fandi.us.kg/api/komik/manhwa
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "chapter": "...",
            "score": "...",
            "type": "...",
            "id": "..."
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```
 
### Manhua

- **Parameters**:
  - `page` (optional, default: `1`)
  - `order` (optional, default: `update`)

- Example:
```
https://otaku.fandi.us.kg/api/komik/manhua
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "chapter": "...",
            "score": "...",
            "type": "...",
            "id": "..."
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```

### Search

- **Parameters**:
  - `query` (required)
  - `page` (optional, default: `1`)

- Example:
```
https://otaku.fandi.us.kg/api/komik/search?query=one%20piece
```

- Response:
```
{
    "data": [
        {
            "title": "...",
            "image": "...",
            "chapter": "...",
            "score": "...",
            "type": "...",
            "id": "..."
        }
    ],
    "prevPage": false,
    "nextPage": true
}
```

### Details

- **Parameters**:
  - `id` (required)

- Example:
```
https://otaku.fandi.us.kg/api/komik/one-piece
```

- Response:
```
{
    "title": "...",
    "alternativeTitle": "...",
    "image": "...",
    "score": "...",
    "synopsis": "...",
    "status": "...",
    "type": "...",
    "released": "...",
    "author": "...",
    "artist": "...",
    "serialization": "...",
    "postedBy": "...",
    "postedOn": "...",
    "updatedOn": "...",
    "genres": [
        "...",
        "..."
    ],
    "chapterList": [
        {
            "id": "...",
            "chapter": "...",
            "date": "..."
        }
    ]
}
```

### Chapter

- **Parameters**:
  - `id` (required)

- Example:
```
https://otaku.fandi.us.kg/api/komik/chapter/one-piece-chapter-1122
```

- Response:
```
{
    "title": "...",
    "komikId": "...",
    "prevChapter": "...",
    "nextChapter": "...",
    "downloadUrl": "...",
    "images": [
        "...",
        "..."
    ]
}
```

## Sumber

- [Kuramanime](https://kuramanime.boo)
- [Mangakita](https://mangakita.id)
