const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"教练管理",
                        "menuJump":"列表",
                        "tableName":"jiaolian"
                    }
                ],
                "menu":"教练管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"教练预约管理",
                        "menuJump":"列表",
                        "tableName":"jiaolianYuyue"
                    }
                ],
                "menu":"教练预约管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"留言板管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言板管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除",
                            "报表"
                        ],
                        "menu":"学习资料管理",
                        "menuJump":"列表",
                        "tableName":"ziliao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"学习资料留言管理",
                        "menuJump":"列表",
                        "tableName":"ziliaoLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"学习资料收藏管理",
                        "menuJump":"列表",
                        "tableName":"ziliaoCollection"
                    }
                ],
                "menu":"学习资料管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "添加考题",
                            "删除"
                        ],
                        "menu":"试卷管理",
                        "menuJump":"列表",
                        "tableName":"exampaper"
                    }
                ],
                "menu":"试卷管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"试题管理",
                        "menuJump":"列表",
                        "tableName":"examquestion"
                    }
                ],
                "menu":"试题管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"考试记录",
                        "menuJump":"列表",
                        "tableName":"examrecord"
                    },
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"错题本",
                        "menuJump":"列表",
                        "tableName":"examrewrongquestion"
                    }
                ],
                "menu":"考试管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"科目管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKemu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"学习资料类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZiliao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"组卷方式管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZujuan"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
            {
                "backMenu":[
                   {
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"公告信息管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"公告信息管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "审核"
                                ],
                                "menu":"教练预约管理",
                                "menuJump":"列表",
                                "tableName":"jiaolianYuyue"
                            }
                        ],
                        "menu":"教练预约管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                ],
                                "menu":"留言板管理",
                                "menuJump":"列表",
                                "tableName":"liuyan"
                            }
                        ],
                        "menu":"留言板管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"学习资料管理",
                                "menuJump":"列表",
                                "tableName":"ziliao"
                            }
                        ],
                        "menu":"学习资料管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"试卷管理",
                                "menuJump":"列表",
                                "tableName":"exampaper"
                            }
                        ],
                        "menu":"试卷管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"试题管理",
                                "menuJump":"列表",
                                "tableName":"examquestion"
                            }
                        ],
                        "menu":"试题管理"
                    }

                    /*,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据备份",
                                "menuJump":"列表",
                                "tableName":"beifen"
                            },
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据还原",
                                "menuJump":"列表",
                                "tableName":"huanyuan"
                            }
                        ],
                        "menu":"数据库管理"
                    }*/
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"教练",
                "tableName":"jiaolian"
            }
]
    }
}
export default menu;
