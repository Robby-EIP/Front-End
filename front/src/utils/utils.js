import Axios from 'axios';

export const getAPI = async (url) => {
  try {
    let response = await Axios.get(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const postAPI = async (url, data) => {
  try {
    let response = await Axios.post(
      url,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return {success: false};
  }
};

export const getRobots = async () => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/robots`;
    let response = await getAPI(url);
  
    console.log('response', response);
    console.log('response[success]', response['data']['success']);
    if (response['data']['success'] == "true") {
      return response['data']['robots'];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAvailableRobotBlocks = async (robotName) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/blocs?robot=${robotName}`;
    let response = await getAPI(url);
  
    if (response['data']['success'] == "true") {
      return response['data']['blocks'];
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const sendRobotRawCode = async (robotName, code) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/push/rawcode?robot=${robotName}`;
    let response = await postAPI(url, { code: code });
  
    if (response['status'] == '200') {
      console.log('200');
      return true;
    }
    console.log(response['status']);
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const sendRobotBlockCode = async (robotName, blocks, isLoop) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/push/blocs?robot=${robotName}`;
    let body = {
      "setup": blocks,
      "loop": (isLoop === true) ? blocks : "",
    }
    let response = await postAPI(url, body);
    
    if (response['status'] == '200') {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const sendRobotFileCode = async (robotName, file) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/push/file?robot=${robotName}`;
    let response = await Axios.post(
      url,
      file,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        }
      }
    );
  
    if (response['status'] == '200') {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}