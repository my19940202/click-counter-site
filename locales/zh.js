let data = {
    Dialog: {
        title: '编辑计数器名称',
        save: '保存',
        cancel: '取消'
    },
    ShareDialog: {
        title: '添加分享信息',
        save: '保存',
        cancel: '取消',
        placeholder: {
            user: '请输入用户名',
            title: '请输入分享标题',
            desc: '请输入分享备注'
        },
        label: {
            user: '创建者',
            title: '标题',
            desc: '描述',
            time: '时间',
            operation: '操作'
        },
        success: '分享成功，分享链接：',
    },
    Hero: {
        tooltip: {
            delete: "删除counter",
            reset: "重置counter"
        },
        add: '添加计数器',
        share: '分享',
        download: '下载',
        comingSoon: '分享功能开发中',
        "remind": `您的Click Counter点击计数器会自动存储在浏览器的本地存储中，
        <br/ >✅刷新页面不会丢失数据
        <br/ >❌清除浏览数据或使用隐身/隐私模式将会删除这些数据`
    },
    Feature: {
        description: {
            title: "📝 Click Counter Online 产品介绍",
            "content": `
                Click Counter Online 是一个免费的在线计数工具。它可以用于统计各种数字和得分，如活动人数统计、库存盘点、工业步骤计数、健身计数、
                体育比分统计以及其他多种用途。

                <br/ >
                所有计数数据会自动保存在浏览器的本地存储中，即使刷新页面也不会丢失。<br/ >
                但请注意，清除浏览器缓存会删除所有计数数据，建议定期备份重要数据。
            `
        },
        usage: {
            title: "📖 Click Counter Online 使用说明",
            "content": `
                使用Click Counter Online时，您可以点击➕加号按钮将计数器加1，点击➖减号按钮将计数器减1。
                当数值减到0时，减号按钮会自动禁用以防止出现负数。
                <br/ ><br/ >
                <p>将鼠标悬停在计数器卡片上时，右上角会显示两个功能按钮：</p>
                <ul>
                    <li>🔄 重置按钮：点击可将当前计数器归零</li>
                    <li>🗑️ 删除按钮：点击可永久删除该计数器</li>
                </ul>
                <br/ >
                点击计数器标题区域可以编辑计数器名称，在弹出的对话框中输入新名称后点击保存即可。<br/ >
                页面底部还提供了"添加新计数器"按钮，可以创建多个计数器同时使用。<br/ >
            </ul>
            <br/ >
            页面底部的下载按钮可以将所有计数器的数据导出为CSV文件，方便保存和分享。<br/ >
            您还可以使用键盘快捷键来操作计数器：<br/ >
            <ul>
                <li>➕ 加号键：按键盘上的"+"键</li>
                <li>➖ 减号键：按键盘上的"-"键</li>
            </ul>
            `
        },
        situation: {
            title: "📌 Click Counter Online 使用场景",
            "content": `
                <ul>
                    <li>1️⃣ 人数统计：会议签到、婚礼宾客统计、课堂点名</li>
                    <li>2️⃣ 库存盘点：停车位统计、仓库货物清点、超市商品统计、图书馆书籍管理</li>
                    <li>3️⃣ 工业计数：生产线工序计数、质量检测次数记录、设备运转周期统计</li>
                    <li>4️⃣ 健身计数：俯卧撑计数、跳绳计数、深蹲计数、引体向上计数</li>
                    <li>5️⃣ 体育比分统计：篮球比赛得分、乒乓球比分、羽毛球赛局数统计</li>
                </ul>
            `
        }
    }
}

export default data