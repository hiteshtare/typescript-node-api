
export async function getTestCard(req: any, res: any, next: any) {
  try {

    const infoCard = {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "speak": "Your Total Meetings Completed values are",
      "version": "1.0",
      "body": [{
        "type": "TextBlock",
        "text": "Total Meetings Completed for Mar 01, 2020 - Mar 31, 2020",
        "wrap": true
      },
      {},
      {
        "type": "ColumnSet",
        "columns": [{
          "type": "Column",
          "width": 100,
          "items": [{
            "type": "TextBlock",
            "text": "0 meetings",
            "wrap": true,
            "spacing": "None"
          }]
        }],
        "separator": true
      },
      {
        "type": "ColumnSet",
        "columns": [{
          "type": "Column",
          "width": "auto",
          "items": [{
            "type": "Image",
            "url": "https://iocontentdev.blob.core.windows.net/kpi-images/thumbs_up.png",
            "selectAction": {
              "type": "Action.Submit",
              "data": {
                "userFeedback": "positive",
                "conId": "6f476370-5c50-11ea-84ce-711e698f4afa|livechat",
                "activityId": "73db9190-5c50-11ea-ba5c-b1dcfde53601"
              }
            },
            "width": "35px",
            "height": "35px"
          }],
          "horizontalAlignment": "Right",
          "minHeight": "30px"
        },
        {
          "type": "Column",
          "width": "auto",
          "items": [{
            "type": "Image",
            "url": "https://iocontentdev.blob.core.windows.net/kpi-images/thumbs_down.png",
            "selectAction": {
              "type": "Action.Submit",
              "data": {
                "userFeedback": "negative",
                "conId": "6f476370-5c50-11ea-84ce-711e698f4afa|livechat",
                "activityId": "73db9190-5c50-11ea-ba5c-b1dcfde53601"
              }
            },
            "width": "35px",
            "height": "35px"
          }],
          "horizontalAlignment": "Right",
          "minHeight": "30px"
        }
        ],
        "horizontalAlignment": "Right"
      }
      ]
    };

    res.status(200).json({
      success: true,
      message: 'KPIInfoCard fetched successfully!',
      payload: infoCard
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err
    });
  }
};
