export const blogPosts = {
    title: 'Blog Posts',
    name: 'blogPosts',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },


        {
            title: 'Blog Entry',
            name:'blogEntry',
            type:'array',
            of: [
                {
                    title:'Blog Post',
                    name:'blogPost',
                    type:'object',  
                    fields: [

                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Date',
                            name: 'date',
                            type: 'string',                       
                        
                        },
                        {
                            title: 'Minutes',
                            name: 'minutes',
                            type: 'string',
                        }
                        ,
                        {
                            title: 'Blog Image',
                            name: 'blogImage',
                            type: 'image',
                            
                        },
                        
                        {
                            title: 'Description',
                            name: 'description',
                            type: 'string',
                        },
                        {
                            title:'Button Text',
                            name:'btnText',
                            type:'string'
                        },
                        {
                            title:'ID',
                            name:'id',
                            type:'number',
                        }
                    ]
                }
            ]
        }


    ]
}