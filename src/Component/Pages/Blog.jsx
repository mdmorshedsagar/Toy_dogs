import useTitle from "../../hooks/useTitle";


const Blog = () => {
    useTitle('blog')
    return (
        <div className="my-8 mx-6">
            <div className="bg-black text-white p-4 shadow-xl rounded-xl my-4">
                <h1 className="text-3xl font-bold py-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="text-xl">An access token is a credential or a type of token that is used to authenticate and authorize a user's access to protected resources or APIs. It is typically issued by an authentication server or an identity provider after a user successfully authenticates their identity.A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. It is typically issued alongside an access token by an authentication server or an identity provider during the initial authentication process. <br/>Access tokens are short-lived credentials that authenticate and authorize access to specific resources. They are included in API requests made by the client application.
Refresh tokens are long-lived credentials used to obtain new access tokens when the current ones expire. They are securely stored on the client-side and help maintain user authentication without reauthentication.</p>
            </div>
            <div className="bg-black text-white p-4 shadow-xl rounded-xl mb-4">
                <h1 className="text-3xl font-bold py-2">Compare SQL and NoSQL databases?</h1>
                <p className="text-xl">SQL (Structured Query Language) databases and NoSQL (Not only SQL) databases. <br/> SQL databases are based on a relational data model and use structured schemas to define tables, columns, and relationships.They provide strong data consistency, ACID  properties, and support for complex queries.SQL databases are best suited for structured data with well-defined relationships, such as in financial systems or transactional applications. <br/>NoSQL databases are designed to handle unstructured or semi-structured data, offering flexibility and scalability.They use various data models like key-value pairs, documents, columnar, or graph structures, eliminating the need for predefined schemas.NoSQL databases are horizontally scalable, making them suitable for high-volume data and distributed environments.</p>
            </div>
            <div className="bg-black text-white p-4 shadow-xl rounded-xl mb-4">
                <h1 className="text-3xl font-bold py-2">What is express js? What is Nest JS?</h1>
                <p className="text-xl">Express.js is a popular web application framework for Node.js. It provides a minimalist and flexible approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and middleware integration, making it easier to develop server-side applications.<br/>NestJS is a progressive and extensible framework for building efficient and scalable server-side applications with Node.js. It is built on top of Express.js and provides a higher-level architectural structure and additional features to streamline development.</p>
            </div>
            <div className="bg-black text-white p-4 shadow-xl rounded-xl mb-4">
                <h1 className="text-3xl font-bold py-2">What is MongoDB aggregate and how does it work ?</h1>
                <p className="text-xl">MongoDB's aggregate is a powerful method that allows you to perform advanced data processing and analysis operations on MongoDB collections. It enables you to combine multiple stages and apply transformations, filters, grouping, sorting, and more to the documents in a collection. <br/> The aggregate method takes an array of pipeline stages as its input. Each stage represents a specific operation that is applied to the documents in the collection.Examples of stages include $match, $project, $group, $sort, and more.</p>
            </div>
        </div>
    );
};

export default Blog;