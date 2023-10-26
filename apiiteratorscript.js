const urlList = ["https://templates-api.github.io/userdata/day1usersdata.json", "https://templates-api.github.io/userdata/day2usersdata.json", "https://templates-api.github.io/userdata/day3usersdata.json", "https://templates-api.github.io/userdata/day4usersdata.json", "https://templates-api.github.io/userdata/day5usersdata.json", "https://templates-api.github.io/userdata/day6usersdata.json", "https://templates-api.github.io/userdata/day7usersdata.json", "https://templates-api.github.io/userdata/day8usersdata.json", "https://templates-api.github.io/userdata/day9usersdata.json", "https://templates-api.github.io/userdata/day10usersdata.json", "https://templates-api.github.io/userdata/day11usersdata.json", "https://templates-api.github.io/userdata/day12usersdata.json", "https://templates-api.github.io/userdata/day13usersdata.json", "https://templates-api.github.io/userdata/day14usersdata.json", "https://templates-api.github.io/userdata/day15usersdata.json", "https://templates-api.github.io/userdata/day16usersdata.json", "https://templates-api.github.io/userdata/day17usersdata.json", "https://templates-api.github.io/userdata/day18usersdata.json", "https://templates-api.github.io/userdata/day19usersdata.json", "https://templates-api.github.io/userdata/day20usersdata.json", "https://templates-api.github.io/userdata/day21usersdata.json", "https://templates-api.github.io/userdata/day22usersdata.json", "https://templates-api.github.io/userdata/day23usersdata.json", "https://templates-api.github.io/userdata/day24usersdata.json", "https://templates-api.github.io/userdata/day25usersdata.json", "https://templates-api.github.io/userdata/day26usersdata.json", "https://templates-api.github.io/userdata/day27usersdata.json", "https://templates-api.github.io/userdata/day28usersdata.json", "https://templates-api.github.io/userdata/day29usersdata.json", "https://templates-api.github.io/userdata/day30usersdata.json", "https://templates-api.github.io/userdata/day31usersdata.json", "https://templates-api.github.io/userdata/day32usersdata.json", "https://templates-api.github.io/userdata/day33usersdata.json", "https://templates-api.github.io/userdata/day34usersdata.json", "https://templates-api.github.io/userdata/day35usersdata.json", "https://templates-api.github.io/userdata/day36usersdata.json", "https://templates-api.github.io/userdata/day37usersdata.json", "https://templates-api.github.io/userdata/day38usersdata.json", "https://templates-api.github.io/userdata/day39usersdata.json", "https://templates-api.github.io/userdata/day40usersdata.json", "https://templates-api.github.io/userdata/day41usersdata.json", "https://templates-api.github.io/userdata/day42usersdata.json", "https://templates-api.github.io/userdata/day43usersdata.json", "https://templates-api.github.io/userdata/day44usersdata.json", "https://templates-api.github.io/userdata/day45usersdata.json", "https://templates-api.github.io/userdata/day46usersdata.json", "https://templates-api.github.io/userdata/day47usersdata.json", "https://templates-api.github.io/userdata/day48usersdata.json", "https://templates-api.github.io/userdata/day49usersdata.json"];
// Function to fetch the JSON data
async function fetchBlockByIndex(i) {

    return await fetch(urlList[i])
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    });
}

async function* findBlockByIndex(urlIndex) {
    const block = await fetchBlockByIndex(urlIndex);
    let userIndex = 0;
    while (userIndex < block.length) {
        yield block[userIndex];
        userIndex++;
    }
}


// Use the fetchData function with a Promise
async function fetchUser(blockIndex, userIndex) {
    let user;
    await fetchBlockByIndex(blockIndex)
    .then(data => {
        // Display the JSON data in your chosen element
        user = data[userIndex]
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return user;
}
 async function cacheBlock(index) {
  const userCacheList = [];
  const cachedBlockIterator = findBlockByIndex(index);

  for await (const user of cachedBlockIterator) {
    userCacheList.push(user);
  }

  return function toggleHandler(i) {
    if (i >= 0 && i < userCacheList.length) {
      return userCacheList[i];
    } else {
      console.log("BLOCK_ITERATION_FINISHED");
      return "BLOCK_ITERATION_FINISHED";
    }
  };
}