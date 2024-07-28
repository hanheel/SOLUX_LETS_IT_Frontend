import apiClient from "./apiClient";

//포트폴리오 리스트업 (조회)
export const getMyPortfolios = async (prjId, userId) => {
  try {
    const response = await apiClient.get(`/portfolios/${prjId}/list/${userId}`);
    return response.data; // 서버에서 받은 데이터를 반환합니다.
  } catch (error) {
    console.error("Error fetching project list:", error);
    throw error; // 에러를 다시 throw하여 호출자에게 전달합니다.
  }
};
//포트폴리오 상세 조회
export const getMyDetailPortfolios = async (prtId) => {
  try {
    const response = await apiClient.get(`/portfolios/${prtId}`);
  } catch (error) {
    console.lerror("Error fetching project detail list:", error);
    throw error;
  }
};
// 포트폴리오 작성
export const postPortfolios = async (prjId) => {
  try {
    const response = await apiClient.get(`portfolios/${prjId}/write`);
    return response.data; // 서버에서 받은 데이터를 반환합니다.
  } catch (error) {
    console.error("Error fetching post portfolio:", error);
    throw error; // 에러를 다시 throw하여 호출자에게 전달합니다.
  }
};

// AI 포트폴리오 조회
export const getMyAIPortfolios = async (userId) => {
  try {
    const response = await apiClient.get(`/project/${userId}/ongoinglist`);
    return response.data; // 서버에서 받은 데이터를 반환합니다.
  } catch (error) {
    console.error("Error fetching AI portfolio :", error);
    throw error; // 에러를 다시 throw하여 호출자에게 전달합니다.
  }
};