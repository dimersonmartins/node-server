const Dev = require('../models/Dev');

module. exports = {
   async store(request, response){

        const { user } = request.headers;
        const { devId } = request.params;
       

        const loggedDev = await Dev.findById(devId);
        const targetDev = await Dev.findById(user);

        if(!loggedDev){
            return response.status(400).json({ error: 'Dev not exists' });
        }

        return response.json({ ok:true });
    }
};
