// implement function that parses environment variables with prefix RSS_ and
// prints them to the console in the format RSS_name1=value1; RSS_name2=value2

const prefix = "RSS_";

const parseEnv = () => {
  const keys = Object.keys(process.env);
  const filteredKeys = keys.filter((key) => key.startsWith(prefix));

  filteredKeys.forEach((key) => {
    console.log(`${key}=${process.env[key]}`);
  });
};

parseEnv();
