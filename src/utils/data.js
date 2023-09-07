export const fileData = [
    {
        id: 1,
        folder: 'Folder 1',
        key: 'folder1'
    },
    {
        id: 2,
        folder: 'Folder 2',
        key: 'folder2',
        children: [
            {
                id: 1,
                folder: 'File 2-1',
                key: 'file2-1'
            },
            {
                id: 2,
                folder: 'File 2-2',
                key: 'file2-2'
            }
        ]
    },
    {
        id: 3,
        folder: 'Folder 3',
        key: 'folder3',
        children: [
            {
                id: 1,
                folder: 'Folder 3-1',
                key: 'folder3-1',
                children: [
                    {
                        id: 1,
                        folder: 'File 3-1-1',
                        key: 'file3-1-1'
                    },
                    {
                        id: 2,
                        folder: 'File 3-1-2',
                        key: 'file3-1-2'
                    }
                ]
            },
            {
                id: 2,
                folder: 'Folder 3-2',
                key: 'folder3-2',
                children: [
                    {
                        id: 1,
                        folder: 'File 3-2-1',
                        key: 'file3-2-1'
                    },
                    {
                        id: 2,
                        folder: 'File 3-2-2',
                        key: 'file3-2-2'
                    }
                ]
            }
        ]
    }
]