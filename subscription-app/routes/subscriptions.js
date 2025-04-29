const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');

// CREATE - Show form to create a new subscription
router.get('/new', (req, res) => {
    res.render('subscriptions/new');
});

// CREATE - Handle form submission to create a new subscription
router.post('/', (req, res) => {
    const subscriptionData = {
        plan: req.body.plan, // Plan cannot be changed
        name: req.body.name,
        email: req.body.email,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: req.body.status
    };
    
    Subscription.create(subscriptionData)
        .then(() => res.redirect('/subscriptions'))
        .catch(err => res.status(400).send(err));
});

// READ - Show all subscriptions
router.get('/', (req, res) => {
    Subscription.find()
        .then(subscriptions => res.render('subscriptions/index', { subscriptions }))
        .catch(err => res.status(500).send(err));
});

// SHOW - Show details of a specific subscription
router.get('/:id', (req, res) => {
    Subscription.findById(req.params.id)
        .then(subscription => {
            if (!subscription) return res.status(404).send('Subscription not found');
            res.render('subscriptions/show', { subscription });
        })
        .catch(err => res.status(500).send(err));
});

// EDIT - Show form to edit an existing subscription
router.get('/:id/edit', (req, res) => {
    Subscription.findById(req.params.id)
        .then(subscription => {
            if (!subscription) return res.status(404).send('Subscription not found');
            res.render('subscriptions/edit', { subscription });
        })
        .catch(err => res.status(500).send(err));
});

// EDIT - Handle form submission to update an existing subscription
router.put('/:id', (req, res) => {
    const updatedData = {
        name: req.body.name,
        email: req.body.email,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: req.body.status
    };

    Subscription.findByIdAndUpdate(req.params.id, updatedData, { new: true })
        .then(() => res.redirect('/subscriptions'))
        .catch(err => res.status(400).send(err));
});

// DELETE - Show confirmation for deletion
router.get('/:id/delete', (req, res) => {
    Subscription.findById(req.params.id)
        .then(subscription => {
            if (!subscription) return res.status(404).send('Subscription not found');
            res.render('subscriptions/delete', { subscription });
        })
        .catch(err => res.status(500).send(err));
});

// DELETE - Handle deletion of a subscription
router.delete('/:id', (req, res) => {
    Subscription.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/subscriptions'))
        .catch(err => res.status(500).send(err));
});

module.exports = router;