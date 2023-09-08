export async function handleHttpRequest(request, context) {
    const res = await fetch('https://test-origin.edgio.net', {
      edgio: {
        origin: 'origin',
      },
      caching: {
        max_age: '60s',
      }
    })
  
    let html = await res.text()
  
    html = html.replace('</body>', '<marquee>I was injected by Edge Functions!!!</marquee></body>')
  
    context.respondWith(new Response(html, res))
  }