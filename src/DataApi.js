class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.Id] = curr;
      return acc;
    }, {});
  }
  getConversations() {
    const data = this.mapIntoObject(this.rawData.conversationsData);
    console.log(data);
    return data;
  }
}

export default DataApi;
