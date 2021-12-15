export const getAPI = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const postAPI = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const getRobots = async () => {
  const url = `${process.env.REACT_APP_API_URL}/robots`;
  let response = await getAPI(url);

  if (response['success'] == true) {
    return response['robots'];
  }
  return [];
};

export const getAvailableRobotBlocks = async (robotName) => {
  const url = `${process.env.REACT_APP_API_URL}/blocs?robot=${robotName}`;
  let response = await getAPI(url);

  if (response['success'] == true) {
    return response['blocks'];
  }
  return [];
};

export const sendRobotRawCode = async (robotName, code) => {
  const url = `${process.env.REACT_APP_API_URL}/push/rawcode?robot=${robotName}`;
  let response = await postAPI(url, { code: code });

  if (response['status'] == '200') {
    return true;
  }
  return false;
};

export const sendRobotBlockCode = async (robotName, isLoop, blocks) => {
  const url = `${process.env.REACT_APP_API_URL}/push/blocs?robot=${robotName}`;
  let body = {
    "setup": blocks,
    "loop": (isLoop == true) ? blocks : "",
  }
  let response = await postAPI(url, body);

  if (response['status'] == '200') {
    return true;
  }
  return false;
}

export const sendRobotFileCode = async (robotName, file) => {
  const url = `${process.env.REACT_APP_API_URL}/push/file?robot=${robotName}`;
  let response = await postAPI(url, { file: file });

  if (response['status'] == '200') {
    return true;
  }
  return false;
}