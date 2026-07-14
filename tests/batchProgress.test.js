console.log("🧪 Testing batch progress helpers...");

async function runBatchProgressTests() {
    currentLang = 'en';
    resetBatchProgress();
    assert(batchProgress.total === 0 && batchProgress.completed === 0, 'Progress should start empty');

    const count = formatBatchProgressCount(2, 5);
    assert(count === '2 / 5', `Expected "2 / 5", got "${count}"`);

    const epoch1 = noteBatchItemQueued();
    const epoch2 = noteBatchItemQueued();
    assert(batchProgress.total === 2, 'Queued items should increase total');
    assert(epoch1 === epoch2, 'Same batch epoch for consecutive queues');

    noteBatchItemFinished(epoch1);
    assert(batchProgress.completed === 1, 'Finished item should increase completed');

    // Stale epoch from a cleared batch must be ignored
    resetBatchProgress();
    noteBatchItemFinished(epoch1);
    assert(batchProgress.total === 0 && batchProgress.completed === 0, 'Stale finish after reset must not mutate counters');

    const freshEpoch = noteBatchItemQueued();
    noteBatchItemFinished(freshEpoch);
    assert(batchProgress.completed === 1 && batchProgress.total === 1, 'Fresh finish should count');

    resetBatchProgress();
    console.log("✅ All batch progress helper tests passed!");
}

await runBatchProgressTests();
