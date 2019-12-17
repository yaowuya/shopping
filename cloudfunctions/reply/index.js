// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'text',
      text: {
        content: '您好,很高兴为您服务。\n 请按住输入框，粘贴购买链接，点击发送。\n然后再点击京东链接即可！！！'
      }
    });
  // if (event.Content == '1' || event.Content == '购买') {
  //   await cloud.openapi.customerServiceMessage.send({
  //     touser: wxContext.OPENID,
  //     msgtype: 'link',
  //     link: {
  //       title: '商品',
  //       description: '商品描述',
  //       url: 'https://u.jd.com/aSB8c5'
  //     }
  //   });
  // } else {
  //   await cloud.openapi.customerServiceMessage.send({
  //     touser: wxContext.OPENID,
  //     msgtype: 'text',
  //     text: {
  //       content: '您好,很高兴为您服务。回复1:购买课程'
  //     }
  //   });
  // }

  return 'success';
}