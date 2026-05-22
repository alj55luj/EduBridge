/**
 * @swagger
 * tags:
 *   name: Lists
 *   description: List management and retrieval
 */

/**
 * @swagger
 * /lists:
 *   post:
 *     summary: Create a list
 *     description: MANAGER,ADMIN,USER can create list.
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createList'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/List'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all lists
 *     description: MANAGER,ADMIN,USER can retrieve all lists.
 *     tags: [Lists]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: what fields do you want to show (ex. name,price)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of lists
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: key-words you want to search about it
 *       - in: query
 *         name: agg
 *         schema:
 *           type: string
 *         description: group data by any field  (ex. {group=[brand],max=price,min= price,sum=price,avg=price})
 *       - in: query
 *         name: aggDate
 *         schema:
 *           type: string
 *         description: group data by date fields   (ex. {group=[createdAt],date=month,max=price,min=price,avg=price,year=2022})
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name,-price)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/List'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /lists/{id}:
 *   get:
 *     summary: Get a list
 *     description: MANAGER,ADMIN,USER can use this router.
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: List id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/List'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a list
 *     description: MANAGER,ADMIN,USER can use this router.
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: List id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateList'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/List'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  list.
 *     description: MANAGER,ADMIN,USER can use this router.
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: List id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

exports.List = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    item: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  properties item
          teacher: { type: 'string' },

          subject: { type: 'string' },
        },
      },
    },
    notes: { type: 'array', items: { type: 'string' } },
    description: { type: 'string' },
    level: { type: 'string' },
    class: { type: 'string', enum: ['Bacaloria', ''] },
    academyList: { type: 'string' },
    academicYear: { type: 'string' },
  },
  example: {
    _id: '5ebac534954b54139806c112',
    // property example
    item: [
      {
        // property example item
        teacherIds: ['673c40cd59e293827f79e398', '673c40cd59e293827f79e399'],

        subject: 'math',
      },
    ],

    notes: ['notes'],

    description: 'description',

    level: 'A+',

    class: 'Bacaloria',

    academyListId: '673c40cd59e293827f79e398',

    academicYear: '2020',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
exports.createList = {
  type: 'object',
  properties: {
    // create property
    item: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  create  properties item
          teacher: { type: 'string' },

          subject: { type: 'string' },
        },
      },
    },
    notes: { type: 'array', items: { type: 'string' } },
    description: { type: 'string' },
    level: { type: 'string' },
    class: { type: 'string', enum: ['Bacaloria', ''] },
    academyList: { type: 'string' },
    academicYear: { type: 'string' },
  },
  example: {
    // create property example
    item: [
      {
        // create property example item
        teacherIds: ['673c40cd59e293827f79e398', '673c40cd59e293827f79e399'],

        subject: 'math',
      },
    ],

    notes: ['notes'],

    description: 'description',

    level: 'A+',

    class: 'Bacaloria',

    academyListId: '673c40cd59e293827f79e398',

    academicYear: '2020',
  },
  required: [
    // required property

    'item.subject',

    'academyList',
    'academicYear',
  ],
};
exports.updateList = {
  type: 'object',
  properties: {
    // update property
    item: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  update properties item
          teacher: { type: 'string' },

          subject: { type: 'string' },
        },
      },
    },
    notes: { type: 'array', items: { type: 'string' } },
    description: { type: 'string' },
    level: { type: 'string' },
    class: { type: 'string', enum: ['Bacaloria', ''] },
    academyList: { type: 'string' },
    academicYear: { type: 'string' },
  },
  example: {
    // update property example
    item: [
      {
        // update property example item
        teacherIds: ['673c40cd59e293827f79e398', '673c40cd59e293827f79e399'],

        subject: 'math',
      },
    ],

    notes: ['notes'],

    description: 'description',

    level: 'A+',

    class: 'Bacaloria',

    academyListId: '673c40cd59e293827f79e398',

    academicYear: '2020',
  },
};
