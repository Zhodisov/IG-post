(async function(){
  const UNFOLLOW_LIMIT = 15000
  const delay = (ms) => new Promise(_ => setTimeout(_, ms))
  const findButton = (txt) => {
    return [...document.querySelectorAll('[role="button"]')]
      .find(el => el.textContent.trim() === txt && !el.disabled);
  };
    const findButton2 = (txt) => [...document.querySelectorAll("button").entries()].map(([pos, btn]) => btn).filter(btn => btn.innerHTML === txt)[0]

  for (let i = 0; i < UNFOLLOW_LIMIT; i++) {
    const $next = findButton2("Following")          
    if (!$next) { continue }
    $next.scrollIntoViewIfNeeded()  
    $next.click()
    await delay(100)
    $confirm = findButton2("Unfollow")    
    if ($confirm) {
      $confirm.click()
    }
    await delay(20 * 1000)
    console.log(`Unfollowed #${i}`)
  }
})()
