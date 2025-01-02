export const blogPageSchema = {
    title: 'Blog Page',
    name: 'blogPage',
    type: 'document',
    fields: [{

title:'Page Sections',
name:'sections',
type:'array',    
of: [
    
    {type: 'blogPosts'},
],




    }]}