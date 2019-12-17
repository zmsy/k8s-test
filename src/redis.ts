import redis from "redis";

const client: redis.RedisClient = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', '0');

export default client;
