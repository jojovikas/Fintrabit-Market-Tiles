const BASE_URL = 'http://api-swastiik.fintrabit.com/api';
const TOKEN = import.meta.env.VITE_FINTRABIT_TOKEN;

export async function postQuery(body: unknown) {
  const res = await fetch(`${BASE_URL}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });
  console.log("vikas kumar")
  console.log(res , "response viks")

  if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
  return res.json();
}
