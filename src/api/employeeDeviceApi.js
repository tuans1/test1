export const employeeDeviceApi = [
    {
        name: 'tuan',
        ldap:'latuan3@cmcglobal.vn',
        device: [],
        onboardDate: '2022/07/04',
    }, {
        name: 'hai van quang',
        ldap:'hvq1@cmcglobal.vn',
        onboardDate: '2021/23/11',
        device: [
            {
                id: '1',
                code: '252sds',
                description: 'Dell 22 inh',
                status: '1',
                comment: 'hđ bình thường',
                type: 'mh',
                inUse: true
            }, {
                id: '2',
                code: 'as18s',
                description: 'Macbook air 13inh 2018',
                status: '0',
                comment: 'bị lỗi đang đợi sửa',
                type: 'lap',
                inUse: true
            }
        ]
    }, {
        name: 'van dick',
        ldap:'vdick@cmcglobal.vn',
        onboardDate: '2021/27/02',
        device: [
            {
                id: '4',
                code: '252sds',
                description: 'Dell 24 inh',
                status: '1',
                comment: 'hđ bình thường',
                type: 'mh',
                inUse: false
            }
        ],
    }

]