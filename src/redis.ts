import redis from "redis";

const client: redis.RedisClient = redis.createClient();
client.set('visits', '0');

export default client;
